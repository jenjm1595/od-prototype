import { useState } from "react";
import { Plus, ChevronDown, ChevronRight, Folder } from "lucide-react";
import TableView from "../imports/TableView";
import TableChart from "../imports/TableChart";
import TableRows from "../imports/TableRows";

interface Table {
  id: string;
  name: string;
  devName: string;
  parent: string | null;
  relationship: string | null;
  fields: any[];
  children: string[];
  hasData: boolean;
  isGroup?: boolean;
  isActive?: boolean;
}

interface TableNavigationPanelProps {
  tables: Record<string, Table>;
  selectedTable: string | null;
  onSelectTable: (tableId: string) => void;
  onCreateTable: () => void;
}

export function TableNavigationPanel({
  tables,
  selectedTable,
  onSelectTable,
  onCreateTable,
}: TableNavigationPanelProps) {
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    company: true,
    individual: true,
    key_value: true,
    business_unit: true,
    product: true,
    purchase: true,
    invoice: true,
    configuration: false,
    metadata: false,
    low_risk_countries: false,
    address: false,
    employment: false,
  });

  const toggleNode = (tableId: string) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [tableId]: !prev[tableId],
    }));
  };

  // Helper function to check if a table is a descendant of another table
  const isDescendantOf = (tableId: string, ancestorId: string): boolean => {
    const table = tables[tableId];
    if (!table || !table.parent) return false;
    if (table.parent === ancestorId) return true;
    return isDescendantOf(table.parent, ancestorId);
  };

  const renderTableNode = (tableId: string, level: number = 0) => {
    const table = tables[tableId];
    if (!table) return null;

    const hasChildren = table.children && table.children.length > 0;
    const isExpanded = expandedNodes[tableId];
    const isSelected = selectedTable === tableId;
    const isGroup = table.isGroup === true;
    const isKeyValueTable = table.parent === 'key_value';
    const isChildOfSelected = selectedTable ? isDescendantOf(tableId, selectedTable) : false;

    return (
      <li key={tableId}>
        <button
          onClick={() => {
            if (!isGroup) {
              onSelectTable(tableId);
            } else if (hasChildren) {
              toggleNode(tableId);
            }
          }}
          className={`w-full flex items-center gap-[7px] py-2.5 px-[10.5px] text-left ${
            isGroup 
              ? "cursor-default" 
              : isSelected 
                ? "bg-sidebar-primary" 
                : isChildOfSelected
                  ? "bg-muted/40"
                  : "hover:bg-muted"
          } ${table.isActive === false ? "opacity-60" : ""}`}
          style={{ paddingLeft: `${10.5 + level * 21}px` }}
        >
          <span
            onClick={(e) => {
              e.stopPropagation();
              if (hasChildren) toggleNode(tableId);
            }}
            className="w-[14px] h-[14px] flex items-center justify-center flex-shrink-0 cursor-pointer"
          >
            {hasChildren && (
              isExpanded ? (
                <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
              )
            )}
          </span>
          
          {/* Icon for table hierarchy */}
          {isGroup && tableId === 'key_value' ? (
            // Special icon for Key-value tables group
            <div className="w-4 h-4 flex-shrink-0 text-muted-foreground">
              <TableRows />
            </div>
          ) : !isGroup && !isKeyValueTable ? (
            // Show icons for non-key-value tables only
            level === 0 ? (
              <Folder className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
            ) : (
              <div className="w-3.5 h-3.5 flex-shrink-0 text-muted-foreground">
                <TableChart />
              </div>
            )
          ) : null}
          
          <p className="flex-1 truncate text-foreground">{table.name}</p>
        </button>
        {hasChildren && isExpanded && (
          <ul className="list-none">
            {table.children.map((childId) => renderTableNode(childId, level + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className="w-[300px] border-r border-border bg-card flex flex-col">
      {/* Header with Tables label and Create Button */}
      <div className="border-b border-border">
        <div className="px-8 py-8 flex items-center justify-between gap-3">
          <h4 className="text-foreground">Tables</h4>
          <button
            onClick={onCreateTable}
            className="bg-card border border-border rounded-[3px] px-[9px] py-[5px] hover:bg-muted flex items-center gap-1"
          >
            <Plus className="w-5 h-5 text-muted-foreground" />
            <p className="text-foreground">Create a new table</p>
          </button>
        </div>
      </div>

      {/* Nested Table List */}
      <div className="flex-1 overflow-y-auto">
        <ul className="list-none">
          {Object.keys(tables)
            .filter(tableId => tables[tableId].parent === null)
            .map(tableId => renderTableNode(tableId))}
        </ul>
      </div>
    </div>
  );
}
