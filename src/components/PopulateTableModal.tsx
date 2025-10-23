import { useState } from "react";
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

interface PopulateTableModalProps {
  isOpen: boolean;
  tableName: string;
  tableId: string | null;
  tables: Record<string, Table>;
  onClose: () => void;
  onSubmit: (data: { parsedData: any[][] | null; fileHasHeader: boolean }) => void;
  onOpenWizard?: (file: File) => void;
}

export function PopulateTableModal({
  isOpen,
  tableName,
  tableId,
  tables,
  onClose,
  onSubmit,
  onOpenWizard,
}: PopulateTableModalProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileHasHeader, setFileHasHeader] = useState(true);

  // Check if current table is a key-value table
  const isKeyValueTable = tableId ? tables[tableId]?.isKeyValue || tables[tableId]?.isGroup : false;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const parseFile = (file: File): Promise<any[][]> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = e.target?.result;
          
          // Check if it's a text file
          if (file.name.endsWith('.txt')) {
            const text = data as string;
            const rows = text.split('\n').map(row => row.split('\t'));
            const filteredData = rows.filter(row => row.some(cell => cell.trim() !== ''));
            resolve(filteredData);
          } else {
            // Excel file
            const workbook = XLSX.read(data, { type: 'binary' });
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 }) as any[][];
            const filteredData = jsonData.filter(row => row.some(cell => cell !== undefined && cell !== null && cell !== ''));
            resolve(filteredData);
          }
        } catch (error) {
          console.error("Error parsing file:", error);
          reject(error);
        }
      };
      
      if (file.name.endsWith('.txt')) {
        reader.readAsText(file);
      } else {
        reader.readAsBinaryString(file);
      }
    });
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;
    
    // For non-key-value tables, open the import wizard
    if (!isKeyValueTable && onOpenWizard) {
      onOpenWizard(selectedFile);
      onClose();
      // Reset form
      setSelectedFile(null);
      setFileHasHeader(true);
      return;
    }
    
    // For key-value tables, use the existing flow
    try {
      const parsedData = await parseFile(selectedFile);
      onSubmit({ parsedData, fileHasHeader });
      // Reset form
      setSelectedFile(null);
      setFileHasHeader(true);
    } catch (error) {
      console.error("Failed to parse file:", error);
    }
  };

  const handleDownloadTemplate = () => {
    if (!tableId) return;
    
    // Build hierarchy from root to current table
    const tableHierarchy: string[] = [];
    let currentTableId: string | null = tableId;
    
    // First, build the path from selected table to root
    while (currentTableId) {
      const currentTable = tables[currentTableId];
      if (!currentTable) break;
      tableHierarchy.unshift(currentTableId); // Add to beginning
      currentTableId = currentTable.parent;
    }
    
    const allFields: Field[] = [];
    const fieldNames = new Set<string>(); // Track unique field names
    
    // Now traverse from root to selected table
    tableHierarchy.forEach((tId, index) => {
      const currentTable = tables[tId];
      if (!currentTable) return;
      
      const isSelectedTable = index === tableHierarchy.length - 1;
      
      // Add fields from current table
      currentTable.fields.forEach(field => {
        // Skip if already added (avoid duplicates)
        if (fieldNames.has(field.name)) return;
        
        // Include Company ID always, but exclude other PK/FK fields
        const isCompanyId = field.name === "Company ID";
        const isPkOrFk = field.isPrimaryKey || field.isForeignKey;
        
        // For parent tables: only include required fields or Company ID
        // For selected table: include all non-PK/FK fields (or Company ID)
        const shouldInclude = isCompanyId || 
          (!isPkOrFk && (isSelectedTable || field.required));
        
        if (shouldInclude) {
          allFields.push(field);
          fieldNames.add(field.name);
        }
      });
    });
    
    // Sort fields: Company ID first, then the rest in the order they were collected
    const sortedFields = allFields.sort((a, b) => {
      if (a.name === "Company ID") return -1;
      if (b.name === "Company ID") return 1;
      return 0;
    });
    
    // Create header row with field names
    const headers = sortedFields.map(field => field.name);
    
    // Create workbook and worksheet
    const worksheet = XLSX.utils.aoa_to_sheet([headers]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, tableName);
    
    // Generate Excel file and trigger download
    XLSX.writeFile(workbook, `${tableName}_template.xlsx`);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-[3px] w-[540px] max-h-[90vh] flex flex-col shadow-[0px_4px_4px_0px_rgba(0,0,0,0.01),0px_4px_6px_-1px_rgba(0,0,0,0.12)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="bg-[#f4f5f6] rounded-tl-[3px] rounded-tr-[3px] px-4 py-3 flex items-start justify-between gap-2">
          <h3 className="flex-1">Upload now</h3>
        </div>

        {/* Content */}
        <div className="bg-white p-6 space-y-6 flex-1 overflow-y-auto">
          {/* Download template button */}
          <div>
            <button
              onClick={handleDownloadTemplate}
              className="text-primary hover:underline text-left"
            >
              Download excel template
            </button>
          </div>

          {/* Instructions */}
          <div>
            <p className="text-foreground">Upload your file (.xls, .xlsx or .txt).</p>
          </div>

          {/* File input with Browse button */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={selectedFile?.name || ""}
              readOnly
              placeholder=""
              className="flex-1 px-3 py-2 border border-border rounded-[3px] bg-input-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <label className="bg-primary text-primary-foreground border border-primary rounded-[3px] px-4 py-2 hover:opacity-90 cursor-pointer transition-opacity whitespace-nowrap">
              Browse
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                accept=".xls,.xlsx,.txt"
              />
            </label>
          </div>

          {/* File has header checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="fileHasHeader"
              checked={fileHasHeader}
              onChange={(e) => setFileHasHeader(e.target.checked)}
              className="w-4 h-4 cursor-pointer accent-primary"
            />
            <label htmlFor="fileHasHeader" className="cursor-pointer select-none text-foreground">
              File has header
            </label>
          </div>
        </div>

        {/* Footer bar */}
        <div className="bg-[#f4f5f6] rounded-bl-[3px] rounded-br-[3px] px-4 py-2 flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-white border border-border rounded-[3px] px-[9px] py-[5px] hover:bg-muted"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selectedFile}
            className="bg-primary text-primary-foreground border border-primary rounded-[3px] px-2 py-1 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
