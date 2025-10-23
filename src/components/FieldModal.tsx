import { useState, useEffect, useRef } from "react";
import { GripVertical, Trash2, Plus, Upload } from "lucide-react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import * as XLSX from "xlsx";

interface DraggableValueListRowProps {
  option: string;
  index: number;
  moveOption: (fromIndex: number, toIndex: number) => void;
  updateOption: (index: number, value: string) => void;
  deleteOption: (index: number) => void;
}

function DraggableValueListRow({ option, index, moveOption, updateOption, deleteOption }: DraggableValueListRowProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: 'VALUE_LIST_OPTION',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'VALUE_LIST_OPTION',
    hover: (item: { index: number }, monitor) => {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      moveOption(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="grid grid-cols-[40px_1fr_40px] gap-2 px-3 py-2 border-b border-border last:border-b-0 items-center hover:bg-muted/50"
    >
      {/* Drag Handle */}
      <div className="flex items-center justify-center cursor-move text-muted-foreground">
        <GripVertical className="w-4 h-4" />
      </div>

      {/* Label Input */}
      <input
        type="text"
        value={option}
        onChange={(e) => updateOption(index, e.target.value)}
        className="w-full px-3 py-1 border border-border rounded-sm bg-input-background"
        placeholder="Enter value"
      />

      {/* Delete Button */}
      <button
        type="button"
        onClick={() => deleteOption(index)}
        className="flex items-center justify-center text-muted-foreground hover:text-destructive"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}

interface Field {
  id: string;
  name: string;
  devName: string;
  type: string;
  required: boolean;
  hasData: boolean;
  default?: string;
  options?: string[];
  expression?: string;
  isSystemGenerated?: boolean;
}

interface Table {
  id: string;
  name: string;
  fields: Field[];
}

interface FieldModalProps {
  isOpen: boolean;
  mode: 'create' | 'edit';
  tables: Record<string, Table>;
  selectedTableId?: string;
  editField?: { field: Field; tableId: string } | null;
  onClose: () => void;
  onSave: (fieldData: any, tableId: string) => void;
}

export function FieldModal({
  isOpen,
  mode,
  tables,
  selectedTableId,
  editField,
  onClose,
  onSave,
}: FieldModalProps) {
  const [fieldName, setFieldName] = useState("");
  const [devName, setDevName] = useState("");
  const [devNameManual, setDevNameManual] = useState(false);
  const [fieldType, setFieldType] = useState("");
  const [defaultValue, setDefaultValue] = useState("");
  const [required, setRequired] = useState(false);
  const [currencyType, setCurrencyType] = useState("");
  const [decimalPlaces, setDecimalPlaces] = useState("0");
  const [foreignKeyReference, setForeignKeyReference] = useState("");
  const [primaryKeyType, setPrimaryKeyType] = useState("user_uploaded");
  const [valueListOptions, setValueListOptions] = useState<string[]>(['', '']);
  const [valueListSource, setValueListSource] = useState<"manual" | "key_value">("manual");
  const [linkedKeyValueTable, setLinkedKeyValueTable] = useState("");

  // Get primary key fields from other tables
  const getPrimaryKeyOptions = () => {
    const options: { value: string; label: string; tableId: string }[] = [];
    
    Object.entries(tables).forEach(([tableId, table]) => {
      // Skip the current table
      if (tableId === selectedTableId) return;
      
      // Find primary key fields in this table
      const primaryKeyFields = table.fields.filter(
        (field) => (field as any).isPrimaryKey || field.type === 'primary_key'
      );
      
      primaryKeyFields.forEach((field) => {
        options.push({
          value: `${tableId}.${field.id}`,
          label: `${table.name} - ${field.name}`,
          tableId: tableId,
        });
      });
    });
    
    return options;
  };

  // Get key-value tables
  const getKeyValueTables = () => {
    const keyValueTables: { id: string; name: string }[] = [];
    
    Object.entries(tables).forEach(([tableId, table]) => {
      // Check if table is marked as key-value table
      if ((table as any).isKeyValue) {
        keyValueTables.push({
          id: tableId,
          name: table.name,
        });
      }
    });
    
    return keyValueTables;
  };

  useEffect(() => {
    if (isOpen) {
      if (mode === 'edit' && editField) {
        setFieldName(editField.field.name);
        setDevName(editField.field.devName);
        setFieldType(editField.field.type);
        setDefaultValue(editField.field.default || "");
        setRequired(editField.field.required);
        setCurrencyType((editField.field as any).currencyType || "");
        setDecimalPlaces((editField.field as any).decimalPlaces || "0");
        setForeignKeyReference((editField.field as any).foreignKeyReference || "");
        setPrimaryKeyType((editField.field as any).primaryKeyType || (editField.field.isSystemGenerated ? "system_generated" : "user_uploaded"));
        setValueListOptions((editField.field as any).options || ['', '']);
        setValueListSource((editField.field as any).valueListSource || "manual");
        setLinkedKeyValueTable((editField.field as any).linkedKeyValueTable || "");
      } else {
        setFieldName("");
        setDevName("");
        setDevNameManual(false);
        setFieldType("");
        setDefaultValue("");
        setRequired(false);
        setCurrencyType("");
        setDecimalPlaces("0");
        setForeignKeyReference("");
        setPrimaryKeyType("user_uploaded");
        setValueListOptions(['', '']);
        setValueListSource("manual");
        setLinkedKeyValueTable("");
      }
    }
  }, [isOpen, mode, editField, selectedTableId]);

  const handleFieldNameChange = (value: string) => {
    setFieldName(value);
    if (!devNameManual) {
      const generated = value.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
      setDevName(generated);
    }
  };

  const handleDevNameChange = (value: string) => {
    setDevName(value);
    setDevNameManual(true);
  };

  const moveValueListOption = (fromIndex: number, toIndex: number) => {
    const newOptions = [...valueListOptions];
    const [removed] = newOptions.splice(fromIndex, 1);
    newOptions.splice(toIndex, 0, removed);
    setValueListOptions(newOptions);
  };

  const handleSubmit = () => {
    if (!fieldName || !devName || !fieldType) {
      alert('Please fill in all required fields');
      return;
    }

    const targetTableId = mode === 'edit' && editField ? editField.tableId : selectedTableId;
    if (!targetTableId) {
      alert('No table selected');
      return;
    }

    const fieldData = {
      id: editField?.field.id || devName,
      name: fieldName,
      devName: editField?.field.devName || devName,
      type: editField?.field.type || fieldType,
      required: editField?.field.isSystemGenerated ? true : required,
      hasData: editField?.field.hasData || false,
      ...(defaultValue && { default: defaultValue }),
      ...(fieldType === 'primary_key' && { isPrimaryKey: true }),
      ...(fieldType === 'primary_key' && { primaryKeyType }),
      ...(fieldType === 'primary_key' && primaryKeyType === 'system_generated' && { isSystemGenerated: true }),
      ...(fieldType === 'foreign_key' && { isForeignKey: true }),
      ...(fieldType === 'foreign_key' && foreignKeyReference && { foreignKeyReference }),
      ...(fieldType === 'currency' && currencyType && { currencyType }),
      ...(fieldType === 'number' && { decimalPlaces }),
      ...(fieldType === 'value_list' && { valueListSource }),
      ...(fieldType === 'value_list' && valueListSource === 'manual' && valueListOptions.length > 0 && { options: valueListOptions }),
      ...(fieldType === 'value_list' && valueListSource === 'key_value' && linkedKeyValueTable && { linkedKeyValueTable }),
      ...(editField?.field.isSystemGenerated && { isSystemGenerated: true }),
    };

    onSave(fieldData, targetTableId);
  };

  if (!isOpen) return null;

  const isSystemGenerated = mode === 'edit' && editField?.field.isSystemGenerated;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-[3px] w-[600px] max-h-[90vh] flex flex-col shadow-[0px_4px_4px_0px_rgba(0,0,0,0.01),0px_4px_6px_-1px_rgba(0,0,0,0.12)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="bg-[#f4f5f6] rounded-tl-[3px] rounded-tr-[3px] px-4 py-3 flex items-start justify-between gap-2">
          <h3 className="flex-1">{mode === 'edit' ? 'Edit custom field' : 'Create a new custom field'}</h3>
        </div>

        {/* Content */}
        <div className="bg-white p-4 space-y-4 flex-1 overflow-y-auto">
          <div>
            <label className="block mb-2">
              Field name <span className="text-destructive">*required</span>
            </label>
            <input
              type="text"
              value={fieldName}
              onChange={(e) => handleFieldNameChange(e.target.value)}
              placeholder="e.g., Annual Revenue"
              className="w-full p-3 border border-border rounded-md bg-input-background"
            />
          </div>

          <div>
            <label className="block mb-2">
              Developer name <span className="text-destructive">*required</span>
            </label>
            <input
              type="text"
              value={devName}
              onChange={(e) => handleDevNameChange(e.target.value)}
              placeholder="e.g., annual_revenue"
              disabled={isSystemGenerated}
              className="w-full p-3 border border-border rounded-md bg-input-background disabled:bg-muted disabled:text-muted-foreground"
            />
            <p className="text-muted-foreground text-[12px] mt-1">
              Lowercase, no spaces, used in API calls
            </p>
          </div>

          <div>
            <label className="block mb-2">
              Field type <span className="text-destructive">*required</span>
            </label>
            <select
              value={fieldType}
              onChange={(e) => setFieldType(e.target.value)}
              disabled={isSystemGenerated}
              className="w-full p-3 border border-border rounded-md bg-input-background disabled:bg-muted disabled:text-muted-foreground"
            >
              <option value="">Select a type...</option>
              <option value="number">Number</option>
              <option value="percentage">Percentage</option>
              <option value="currency">Currency</option>
              <option value="identifier">Identifier</option>
              <option value="phone_number">Phone number</option>
              <option value="date">Date</option>
              <option value="text">Text</option>
              <option value="multi_line_text">Text (multi-line)</option>
              <option value="email">Email address</option>
              <option value="url">URL</option>
              <option value="value_list">Value list</option>
              <option value="foreign_key">Foreign Key</option>
              <option value="primary_key">Primary key</option>
            </select>
          </div>

          {fieldType === 'primary_key' && (
            <div>
              <label className="block mb-2">
                Primary key type
              </label>
              <select
                value={primaryKeyType}
                onChange={(e) => setPrimaryKeyType(e.target.value)}
                className="w-full p-3 border border-border rounded-md bg-input-background"
              >
                <option value="user_uploaded">User uploaded</option>
                <option value="system_generated">System generated</option>
              </select>
            </div>
          )}

          {fieldType === 'number' && (
            <div>
              <label className="block mb-2">
                Decimal places
              </label>
              <select
                value={decimalPlaces}
                onChange={(e) => setDecimalPlaces(e.target.value)}
                className="w-full p-3 border border-border rounded-md bg-input-background"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
          )}

          {fieldType === 'currency' && (
            <div>
              <label className="block mb-2">
                Currency type
              </label>
              <select
                value={currencyType}
                onChange={(e) => setCurrencyType(e.target.value)}
                className="w-full p-3 border border-border rounded-md bg-input-background"
              >
                <option value="">Select a currency...</option>
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CHF">CHF - Swiss Franc</option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="MXN">MXN - Mexican Peso</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="ZAR">ZAR - South African Rand</option>
                <option value="KRW">KRW - South Korean Won</option>
                <option value="SGD">SGD - Singapore Dollar</option>
                <option value="NZD">NZD - New Zealand Dollar</option>
                <option value="SEK">SEK - Swedish Krona</option>
                <option value="NOK">NOK - Norwegian Krone</option>
                <option value="DKK">DKK - Danish Krone</option>
                <option value="PLN">PLN - Polish Zloty</option>
                <option value="THB">THB - Thai Baht</option>
              </select>
            </div>
          )}

          {fieldType === 'foreign_key' && (
            <div>
              <label className="block mb-2">
                Foreign key reference
              </label>
              <select
                value={foreignKeyReference}
                onChange={(e) => setForeignKeyReference(e.target.value)}
                className="w-full p-3 border border-border rounded-md bg-input-background"
              >
                <option value="">Select a reference...</option>
                <optgroup label="Standard References">
                  <option value="orbis_id">Orbis ID</option>
                  <option value="bvd_id">BvD ID</option>
                  <option value="vat">VAT</option>
                  <option value="eu_vat">EU VAT</option>
                  <option value="tin">TIN</option>
                  <option value="national_number">National number</option>
                </optgroup>
                {getPrimaryKeyOptions().length > 0 && (
                  <optgroup label="Custom Primary Keys">
                    {getPrimaryKeyOptions().map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </optgroup>
                )}
              </select>
            </div>
          )}

          {fieldType === 'value_list' && (
            <>
              <div>
                <label className="block mb-2">
                  Value source
                </label>
                <RadioGroup
                  value={valueListSource}
                  onValueChange={(value: "manual" | "key_value") => setValueListSource(value)}
                  className="flex flex-row gap-6"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="manual" id="manual" className="border-2" />
                    <label htmlFor="manual" className="cursor-pointer">
                      Enter values here
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="key_value" id="key_value" className="border-2" />
                    <label htmlFor="key_value" className="cursor-pointer">
                      Link to key-value table
                    </label>
                  </div>
                </RadioGroup>
              </div>

              {valueListSource === "manual" && (
                <div>
                  <label className="block mb-2">
                    Value list ({valueListOptions.length})
                  </label>
                  <DndProvider backend={HTML5Backend}>
                    <div className="border border-border rounded-md overflow-hidden">
                    {/* Table Body */}
                    <div className="bg-white">
                      {valueListOptions.map((option, index) => (
                        <DraggableValueListRow
                          key={index}
                          option={option}
                          index={index}
                          moveOption={moveValueListOption}
                          updateOption={(idx, value) => {
                            const newOptions = [...valueListOptions];
                            newOptions[idx] = value;
                            setValueListOptions(newOptions);
                          }}
                          deleteOption={(idx) => {
                            const newOptions = valueListOptions.filter((_, i) => i !== idx);
                            setValueListOptions(newOptions);
                          }}
                        />
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="bg-white border-t border-border px-3 py-2 flex gap-2 justify-between">
                      <div className="flex gap-2">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => setValueListOptions([...valueListOptions, ''])}
                        >
                          <Plus className="w-4 h-4" />
                          Add value
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                          // Create a hidden file input
                          const input = document.createElement('input');
                          input.type = 'file';
                          input.accept = '.csv,.txt,.xlsx,.xls';
                          input.onchange = (e) => {
                            const file = (e.target as HTMLInputElement).files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onload = (event) => {
                                const data = event.target?.result;
                                
                                // Check if it's an Excel file
                                if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
                                  try {
                                    // Parse Excel file
                                    const workbook = XLSX.read(data, { type: 'array' });
                                    const firstSheetName = workbook.SheetNames[0];
                                    const worksheet = workbook.Sheets[firstSheetName];
                                    
                                    // Convert to array of arrays
                                    const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as any[][];
                                    
                                    // Extract all values from the first column, filtering out empty cells
                                    const values = sheetData
                                      .map(row => row[0])
                                      .filter(val => val !== undefined && val !== null && String(val).trim() !== '')
                                      .map(val => String(val).trim());
                                    
                                    // Fill empty slots first, then append remaining
                                    const newOptions = [...valueListOptions];
                                    let valueIndex = 0;
                                    
                                    // Fill in empty slots
                                    for (let i = 0; i < newOptions.length && valueIndex < values.length; i++) {
                                      if (!newOptions[i] || newOptions[i].trim() === '') {
                                        newOptions[i] = values[valueIndex];
                                        valueIndex++;
                                      }
                                    }
                                    
                                    // Append any remaining values
                                    while (valueIndex < values.length) {
                                      newOptions.push(values[valueIndex]);
                                      valueIndex++;
                                    }
                                    
                                    setValueListOptions(newOptions);
                                  } catch (error) {
                                    console.error('Error parsing Excel file:', error);
                                    alert('Error parsing Excel file. Please make sure the file is a valid Excel spreadsheet.');
                                  }
                                } else {
                                  // Handle CSV/TXT files
                                  const text = event.target?.result as string;
                                  const values = text.split(/[\r\n]+/).filter(v => v.trim());
                                  
                                  // Fill empty slots first, then append remaining
                                  const newOptions = [...valueListOptions];
                                  let valueIndex = 0;
                                  
                                  // Fill in empty slots
                                  for (let i = 0; i < newOptions.length && valueIndex < values.length; i++) {
                                    if (!newOptions[i] || newOptions[i].trim() === '') {
                                      newOptions[i] = values[valueIndex];
                                      valueIndex++;
                                    }
                                  }
                                  
                                  // Append any remaining values
                                  while (valueIndex < values.length) {
                                    newOptions.push(values[valueIndex]);
                                    valueIndex++;
                                  }
                                  
                                  setValueListOptions(newOptions);
                                }
                              };
                              
                              // Read as binary for Excel, as text for CSV/TXT
                              if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
                                reader.readAsArrayBuffer(file);
                              } else {
                                reader.readAsText(file);
                              }
                            }
                          };
                          input.click();
                        }}
                      >
                        <Upload className="w-4 h-4" />
                        Upload value list
                      </Button>
                      </div>
                    </div>
                  </div>
                </DndProvider>
              </div>
              )}

              {valueListSource === "key_value" && (
                <div>
                  <label className="block mb-2">
                    Key-value table
                  </label>
                  <select
                    value={linkedKeyValueTable}
                    onChange={(e) => setLinkedKeyValueTable(e.target.value)}
                    className="w-full p-3 border border-border rounded-md bg-input-background"
                  >
                    <option value="">Select a key-value table...</option>
                    {getKeyValueTables().map((table) => (
                      <option key={table.id} value={table.id}>
                        {table.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </>
          )}

          {!(fieldType === 'primary_key' && primaryKeyType === 'system_generated') && (
            <div>
              <label className="block mb-2">Default value</label>
              <input
                type="text"
                value={defaultValue}
                onChange={(e) => setDefaultValue(e.target.value)}
                placeholder="Optional"
                disabled={isSystemGenerated}
                className="w-full p-3 border border-border rounded-md bg-input-background disabled:bg-muted disabled:text-muted-foreground"
              />
              {isSystemGenerated && (
                <p className="text-muted-foreground text-[12px] mt-1">
                  System generated
                </p>
              )}
            </div>
          )}

          {!isSystemGenerated && !(fieldType === 'primary_key' && primaryKeyType === 'system_generated') && (
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="required"
                checked={required}
                onChange={(e) => setRequired(e.target.checked)}
              />
              <label htmlFor="required" className="cursor-pointer">Required field</label>
            </div>
          )}
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
            className="bg-primary text-primary-foreground border border-primary rounded-[3px] px-2 py-1 hover:opacity-90"
          >
            {mode === 'edit' ? 'Save changes' : 'Create field'}
          </button>
        </div>
      </div>
    </div>
  );
}
