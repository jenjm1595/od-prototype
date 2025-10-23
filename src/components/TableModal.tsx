import { useState, useEffect } from "react";

interface Table {
  id: string;
  name: string;
  devName: string;
  parent: string | null;
  relationship: string | null;
  isGroup?: boolean;
  keyValueFieldType?: string;
}

interface TableModalProps {
  isOpen: boolean;
  mode: 'create' | 'edit';
  tables: Record<string, Table>;
  editTable?: Table | null;
  onClose: () => void;
  onSave: (tableData: any) => void;
}

export function TableModal({
  isOpen,
  mode,
  tables,
  editTable,
  onClose,
  onSave,
}: TableModalProps) {
  const [tableName, setTableName] = useState("");
  const [devName, setDevName] = useState("");
  const [devNameManual, setDevNameManual] = useState(false);
  const [parent, setParent] = useState("");
  const [relationship, setRelationship] = useState("");
  const [keyValueFieldType, setKeyValueFieldType] = useState("values_only");

  useEffect(() => {
    if (isOpen) {
      if (mode === 'edit' && editTable) {
        setTableName(editTable.name);
        setDevName(editTable.devName);
        setParent(editTable.parent || "");
        setRelationship(editTable.relationship || "");
        setKeyValueFieldType(editTable.keyValueFieldType || "values_only");
      } else {
        setTableName("");
        setDevName("");
        setDevNameManual(false);
        setParent("");
        setRelationship("");
        setKeyValueFieldType("values_only");
      }
    }
  }, [isOpen, mode, editTable]);

  const handleTableNameChange = (value: string) => {
    setTableName(value);
    if (!devNameManual) {
      const generated = value.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
      setDevName(generated);
    }
  };

  const handleDevNameChange = (value: string) => {
    setDevName(value);
    setDevNameManual(true);
  };

  const handleSubmit = () => {
    if (!tableName || !devName) {
      alert('Please fill in all required fields');
      return;
    }

    // For non-root tables (when parent is selected and not empty), require relationship
    if (mode === 'create' && parent && parent !== 'key_value' && !relationship) {
      alert('Please select a relationship type');
      return;
    }

    const tableData = {
      name: tableName,
      devName,
      parent: parent || null,
      relationship: parent === 'key_value' ? 'one_to_many' : (relationship || null),
      keyValueFieldType: parent === 'key_value' ? keyValueFieldType : undefined,
    };

    onSave(tableData);
  };

  if (!isOpen) return null;

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
          <h3 className="flex-1">{mode === 'edit' ? 'Edit table' : 'Create new table'}</h3>
        </div>

        {/* Content */}
        <div className="bg-white p-4 space-y-4 flex-1 overflow-y-auto">
          <div>
            <label className="block mb-2">
              Table name <span className="text-destructive">*required</span>
            </label>
            <input
              type="text"
              value={tableName}
              onChange={(e) => handleTableNameChange(e.target.value)}
              placeholder="e.g., Shipment"
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
              placeholder="e.g., shipment"
              className="w-full p-3 border border-border rounded-md bg-input-background"
            />
            <p className="text-muted-foreground text-[12px] mt-1">
              Lowercase, no spaces, used in API calls
            </p>
          </div>

          <div>
            <label className="block mb-2">
              Parent table
            </label>
            <select
              value={parent}
              onChange={(e) => setParent(e.target.value)}
              disabled={mode === 'edit'}
              className="w-full p-3 border border-border rounded-md bg-input-background disabled:bg-muted disabled:text-muted-foreground"
            >
              <option value="">None (create root table)</option>
              {Object.values(tables)
                .filter((table) => {
                  // Don't allow selecting key-value child tables as parents (they can't have children)
                  const isKeyValueChild = table.parent === 'key_value';
                  return !isKeyValueChild;
                })
                .sort((a, b) => {
                  // Root tables (parent === null) and key-value group at the top
                  const aIsRoot = a.parent === null;
                  const bIsRoot = b.parent === null;
                  
                  if (aIsRoot && !bIsRoot) return -1;
                  if (!aIsRoot && bIsRoot) return 1;
                  
                  // Within each group, sort alphabetically
                  return a.name.localeCompare(b.name);
                })
                .map((table) => (
                  <option key={table.id} value={table.id}>
                    {table.name}
                  </option>
                ))}
            </select>
            <p className="text-muted-foreground text-[12px] mt-1">
              {!parent || parent === '' 
                ? 'Root tables automatically include a required foreign key field' 
                : parent === 'key_value' 
                  ? 'Key-value tables are for static reference data'
                  : 'This table will be a child of the selected parent'}
            </p>
          </div>

          {parent && parent !== 'key_value' && (
            <div>
              <label className="block mb-2">
                Relationship type <span className="text-destructive">*required</span>
              </label>
              <select
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                disabled={mode === 'edit'}
                className="w-full p-3 border border-border rounded-md bg-input-background disabled:bg-muted disabled:text-muted-foreground"
              >
                <option value="">Select relationship type...</option>
                <option value="one_to_many">One-to-many (Parent can have multiple children)</option>
                <option value="many_to_many">Many-to-many (Both can have multiple)</option>
              </select>
            </div>
          )}

          {parent === 'key_value' && (
            <div>
              <label className="block mb-2">Fields</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="keyValueFieldType"
                    value="values_only"
                    checked={keyValueFieldType === "values_only"}
                    onChange={(e) => setKeyValueFieldType(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span>Values only</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="keyValueFieldType"
                    value="values_and_identifiers"
                    checked={keyValueFieldType === "values_and_identifiers"}
                    onChange={(e) => setKeyValueFieldType(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span>Values and identifiers</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="keyValueFieldType"
                    value="values_hierarchical_identifiers"
                    checked={keyValueFieldType === "values_hierarchical_identifiers"}
                    onChange={(e) => setKeyValueFieldType(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span>Values heirarchal identifiers</span>
                </label>
              </div>
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
            {mode === 'edit' ? 'Save changes' : 'Create table'}
          </button>
        </div>
      </div>
    </div>
  );
}
