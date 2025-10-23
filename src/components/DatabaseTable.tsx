import { Database } from "lucide-react";

interface Field {
  name: string;
  type: string;
  isPrimaryKey?: boolean;
  isForeignKey?: boolean;
  isNullable?: boolean;
}

interface DatabaseTableProps {
  name: string;
  fields: Field[];
}

export function DatabaseTable({ name, fields }: DatabaseTableProps) {
  return (
    <div className="bg-card border-2 border-border rounded-md overflow-hidden shadow-[var(--elevation-sm)] min-w-[280px]">
      {/* Table Header */}
      <div className="bg-primary px-4 py-3 flex items-center gap-2">
        <Database className="w-4 h-4 text-primary-foreground" />
        <h3 className="text-primary-foreground">{name}</h3>
      </div>
      
      {/* Table Fields */}
      <div className="divide-y divide-border">
        {fields.map((field, index) => (
          <div
            key={index}
            className="px-4 py-2 flex items-center justify-between gap-4 hover:bg-muted transition-colors"
          >
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <span className="text-foreground truncate">{field.name}</span>
              {field.isPrimaryKey && (
                <span className="bg-chart-1 text-primary-foreground px-2 py-0.5 rounded text-[10px] uppercase tracking-wide">
                  PK
                </span>
              )}
              {field.isForeignKey && (
                <span className="bg-chart-3 text-primary-foreground px-2 py-0.5 rounded text-[10px] uppercase tracking-wide">
                  FK
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-[12px]">{field.type}</span>
              {field.isNullable && (
                <span className="text-muted-foreground text-[10px] italic">null</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
