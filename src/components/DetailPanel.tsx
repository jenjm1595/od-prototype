import { FileUp, Trash2, Edit, Plus, RotateCcw, Upload } from "lucide-react";
import { FieldCard } from "./FieldCard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useCallback, useState } from "react";
import * as XLSX from "xlsx";

interface Field {
  id: string;
  name: string;
  devName: string;
  type: string;
  required: boolean;
  hasData: boolean;
  isActive?: boolean;
  default?: string;
  options?: string[];
  expression?: string;
  isPrimaryKey?: boolean;
  isForeignKey?: boolean;
  isSystemGenerated?: boolean;
}

interface Table {
  id: string;
  name: string;
  devName: string;
  parent: string | null;
  relationship: string | null;
  fields: Field[];
  children: string[];
  hasData: boolean;
  isActive?: boolean;
  isGroup?: boolean;
  keyValueFieldType?: string;
  uploadedData?: any[][];
}

interface DetailPanelProps {
  table: Table | null;
  tables: Record<string, Table>;
  onClose: () => void;
  onEditTable: (tableId: string) => void;
  onPopulateTable: (tableId: string) => void;
  onDeleteTable: (tableId: string, tableName: string, hasData: boolean) => void;
  onReactivateTable: (tableId: string) => void;
  onCreateField: () => void;
  onEditField: (fieldId: string, tableId: string) => void;
  onDeleteField: (fieldId: string, fieldName: string, hasData: boolean, isSystemGenerated?: boolean) => void;
  onReorderFields: (tableId: string, reorderedFields: Field[]) => void;
  onUploadData: (tableId: string, data: any[][]) => void;
  onDeleteRow: (tableId: string, rowIndex: number) => void;
}

// Key-Value File Upload Component
function KeyValueFileUpload({ 
  tableName,
  tableId,
  keyValueFieldType, 
  uploadedData,
  onUploadData,
  onDeleteRow
}: { 
  tableName: string;
  tableId: string;
  keyValueFieldType?: string;
  uploadedData?: any[][];
  onUploadData: (data: any[][]) => void;
  onDeleteRow: (tableId: string, rowIndex: number) => void;
}) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [hoveredRowIndex, setHoveredRowIndex] = useState<number | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const parseFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 }) as any[][];
        
        // Filter out empty rows
        const filteredData = jsonData.filter(row => row.some(cell => cell !== undefined && cell !== null && cell !== ''));
        
        onUploadData(filteredData);
      } catch (error) {
        console.error("Error parsing file:", error);
      }
    };
    reader.readAsBinaryString(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      parseFile(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      parseFile(file);
    }
  };

  const showHeaders = keyValueFieldType === "values_and_identifiers" || keyValueFieldType === "values_hierarchical_identifiers";

  return (
    <div>
      {/* Table Headers */}
      {showHeaders && !uploadedData && (
        <div className="max-w-2xl">
          <div className="border border-border rounded-t-[3px] overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-muted border-b border-border">
                  <th className="px-4 py-2 text-left text-muted-foreground border-r border-border">
                    ID
                  </th>
                  <th className="px-4 py-2 text-left text-muted-foreground">
                    Label
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      )}
      
      {/* Upload Area - only show if no data uploaded */}
      {!uploadedData && (
        <div className="max-w-2xl">
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`border-2 border-dashed ${showHeaders ? 'rounded-b-[3px] rounded-t-none border-t-0' : 'rounded-[3px]'} py-16 px-8 text-center transition-colors ${
              dragActive ? "border-primary bg-primary/5" : "border-border bg-white"
            }`}
          >
            <div className="flex flex-col items-center gap-3">
              <Upload className="w-8 h-8 text-primary" />
              {selectedFile ? (
                <p className="text-foreground">{selectedFile.name}</p>
              ) : (
                <p className="text-primary">Drag and drop your file here</p>
              )}
            </div>
          </div>
          
          {/* Hidden file input */}
          <input
            type="file"
            id="key-value-file-upload"
            onChange={handleFileChange}
            className="hidden"
            accept=".xls,.xlsx,.csv"
          />
          
          {/* Or browse button */}
          {!selectedFile && (
            <div className="mt-4 text-center">
              <span className="text-muted-foreground">or </span>
              <label
                htmlFor="key-value-file-upload"
                className="text-primary cursor-pointer hover:underline"
              >
                browse files
              </label>
            </div>
          )}
        </div>
      )}

      {/* Display uploaded data in table format */}
      {uploadedData && uploadedData.length > 0 && (
        <div className="max-w-2xl">
          <div className="border border-border rounded-[3px] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* Only show header row if NOT values_only */}
                {keyValueFieldType !== "values_only" && (
                  <thead>
                    <tr className="bg-muted border-b border-border">
                      <th className="px-4 py-2 text-left text-muted-foreground border-r border-border">
                        ID
                      </th>
                      <th className="px-4 py-2 text-left text-muted-foreground">
                        Label
                      </th>
                      <th className="px-4 py-2 w-12"></th>
                    </tr>
                  </thead>
                )}
                <tbody>
                  {/* For values_only, show all rows including first row. Otherwise skip first row (headers) */}
                  {(keyValueFieldType === "values_only" ? uploadedData : uploadedData.slice(1)).map((row, displayRowIndex) => {
                    // Calculate the actual index in the uploadedData array
                    const actualIndex = keyValueFieldType === "values_only" ? displayRowIndex : displayRowIndex + 1;
                    
                    return (
                      <tr 
                        key={displayRowIndex} 
                        className="border-b border-border last:border-b-0 hover:bg-muted/50 group"
                        onMouseEnter={() => setHoveredRowIndex(displayRowIndex)}
                        onMouseLeave={() => setHoveredRowIndex(null)}
                      >
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-4 py-2">
                            <p className="text-foreground">{cell !== undefined && cell !== null ? String(cell) : ''}</p>
                          </td>
                        ))}
                        <td className="px-4 py-2 w-12">
                          <button
                            onClick={() => onDeleteRow(tableId, actualIndex)}
                            className={`p-1 hover:bg-muted rounded transition-opacity ${
                              hoveredRowIndex === displayRowIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                            aria-label="Delete row"
                          >
                            <Trash2 className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function DetailPanel({
  table,
  tables,
  onClose,
  onEditTable,
  onPopulateTable,
  onDeleteTable,
  onReactivateTable,
  onCreateField,
  onEditField,
  onDeleteField,
  onReorderFields,
  onUploadData,
  onDeleteRow,
}: DetailPanelProps) {
  if (!table || table.isGroup) return null;

  const moveField = useCallback((dragIndex: number, hoverIndex: number) => {
    const reorderedFields = [...table.fields];
    const [draggedField] = reorderedFields.splice(dragIndex, 1);
    reorderedFields.splice(hoverIndex, 0, draggedField);
    onReorderFields(table.id, reorderedFields);
  }, [table.fields, table.id, onReorderFields]);

  return (
    <div className="flex-1 bg-card overflow-y-auto">
      {/* Header Section */}
      <div className="bg-card border-b border-border">
        <div className="px-6 py-6">
          <div className="flex items-start gap-2 w-full">
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h3 className="text-foreground">{table.name}</h3>
                {table.isActive === false && (
                  <div className="bg-tag-red-background rounded-[14px] px-2 py-0">
                    <p className="text-tag-red-foreground">Deactivated</p>
                  </div>
                )}
              </div>
              <span className="text-muted-foreground text-left" style={{ fontSize: 'var(--text-xxs)', fontWeight: 'var(--font-weight-normal)', lineHeight: '1.5' }}>
                {table.parent ? (
                  <>
                    Child of {tables[table.parent]?.name}
                    {table.relationship && (
                      <>
                        <span className="text-[#d5d7dd]"> | </span>
                        <span className="text-muted-foreground">
                          {table.relationship === 'one_to_many' ? 'One-to-many' : 'Many-to-many'}
                        </span>
                      </>
                    )}
                  </>
                ) : (
                  "Root table"
                )}
              </span>
            </div>
            {table.isActive === false ? (
              <button
                onClick={() => onReactivateTable(table.id)}
                className="bg-primary border border-primary rounded-[3px] px-3 py-2 hover:opacity-90 flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5 text-primary-foreground" />
                <p className="text-primary-foreground">Reactivate table</p>
              </button>
            ) : (
              <div className="flex gap-2">
                {/* Show upload button for all tables */}
                <button
                  onClick={() => onPopulateTable(table.id)}
                  className="bg-card border border-border rounded-[3px] p-[9px] hover:bg-muted"
                >
                  <FileUp className="w-5 h-5 text-muted-foreground" />
                </button>
                <button
                  onClick={() => onEditTable(table.id)}
                  className="bg-card border border-border rounded-[3px] p-[9px] hover:bg-muted"
                >
                  <Edit className="w-5 h-5 text-sidebar-accent" />
                </button>
                <button
                  onClick={() => onDeleteTable(table.id, table.name, table.hasData)}
                  className="bg-card border border-border rounded-[3px] p-[9px] hover:bg-muted"
                >
                  <Trash2 className="w-5 h-5 text-sidebar-accent" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom Fields Section or File Upload for Key-Value Tables */}
      <div className="px-6 py-6">
        {table.parent === 'key_value' ? (
          <KeyValueFileUpload 
            tableName={table.name}
            tableId={table.id}
            keyValueFieldType={table.keyValueFieldType}
            uploadedData={table.uploadedData}
            onUploadData={(data) => onUploadData(table.id, data)}
            onDeleteRow={onDeleteRow}
          />
        ) : (
          <>
            <div className="flex items-center justify-between gap-4 mb-6">
              <h3 className="text-foreground">Custom fields</h3>
              <button
                onClick={onCreateField}
                className="bg-card border border-border rounded-[3px] px-[9px] py-[5px] hover:bg-muted flex items-center gap-1"
              >
                <Plus className="w-5 h-5 text-muted-foreground" />
                <p className="text-foreground">Create a custom field</p>
              </button>
            </div>

            {table.fields && table.fields.length > 0 ? (
              <DndProvider backend={HTML5Backend}>
                <div className="flex flex-col gap-6">
                  {table.fields.map((field, index) => (
                    <FieldCard
                      key={field.id}
                      field={field}
                      index={index}
                      moveField={moveField}
                      onEdit={() => onEditField(field.id, table.id)}
                      onDelete={() => onDeleteField(field.id, field.name, field.hasData, field.isSystemGenerated)}
                    />
                  ))}
                </div>
              </DndProvider>
            ) : (
              <div className="p-6 text-center border border-dashed border-border rounded-md text-muted-foreground">
                No fields added yet
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
