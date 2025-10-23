import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Table {
  id: string;
  name: string;
  devName: string;
  parent: string | null;
  relationship: string | null;
  fields: any[];
  children: string[];
  hasData: boolean;
}

interface TreeViewProps {
  tables: Record<string, Table>;
  selectedTable: string | null;
  onSelectTable: (tableId: string) => void;
}

export function TreeView({ tables, selectedTable, onSelectTable }: TreeViewProps) {
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    entity: true,
    business_unit: true,
    product: true,
    purchase: true,
    invoice: true,
  });

  const toggleNode = (tableId: string) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [tableId]: !prev[tableId],
    }));
  };

  const renderTableNode = (tableId: string, level: number = 0) => {
    const table = tables[tableId];
    if (!table) return null;

    const hasChildren = table.children && table.children.length > 0;
    const isExpanded = expandedNodes[tableId];
    const isSelected = selectedTable === tableId;

    return (
      <li key={tableId} className="mb-1">
        <div
          className={`flex items-center gap-2 px-3 py-2.5 rounded-md cursor-pointer ${
            isSelected ? "bg-sidebar-primary" : "hover:bg-muted"
          }`}
          onClick={() => onSelectTable(tableId)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (hasChildren) toggleNode(tableId);
            }}
            className="w-4 h-4 flex items-center justify-center text-muted-foreground flex-shrink-0"
          >
            {hasChildren && (
              isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
            )}
          </button>
          <span className="flex-1">{table.name}</span>
          <span className="bg-muted px-2 py-0.5 rounded-[10px] text-muted-foreground text-[12px]">
            {table.fields?.length || 0} fields
          </span>
        </div>
        {hasChildren && isExpanded && (
          <ul className="ml-8 list-none">
            {table.children.map((childId) => renderTableNode(childId, level + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <ul className="list-none">
      {renderTableNode('entity')}
    </ul>
  );
}
