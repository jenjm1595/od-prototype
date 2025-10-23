import { 
  Database, 
  ListChecks, 
  CheckSquare, 
  Briefcase, 
  Shield, 
  Workflow, 
  Grid3x3, 
  FileUp,
  List, 
  Mail, 
  FileText, 
  Clock,
  ChevronDown
} from "lucide-react";

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

export function Sidebar({ activeItem, onItemClick }: SidebarProps) {
  const items = [
    { id: "data_providers", label: "Data providers", icon: Database },
    { id: "checks", label: "Checks", icon: ListChecks },
    { id: "tasks", label: "Tasks", icon: CheckSquare },
    { id: "assessments", label: "Assessments", icon: Briefcase },
    { id: "risk_management", label: "Risk management", icon: Shield },
    { id: "workflows", label: "Workflows", icon: Workflow },
    { id: "schema", label: "Schema", icon: Grid3x3 },
    { id: "data_imports", label: "Data imports", icon: FileUp },
    { id: "decision_reasons", label: "Decision reasons", icon: List },
    { id: "communications", label: "Communications", icon: Mail, hasSubmenu: true },
    { id: "forms", label: "Forms", icon: FileText, hasSubmenu: true },
    { id: "version_history", label: "Version history", icon: Clock },
  ];

  return (
    <div className="w-[295px] bg-card border-r border-border overflow-y-auto py-2">
      <div className="flex flex-col">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={`w-full flex items-center gap-2 px-8 py-2 ${
                activeItem === item.id
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-muted"
              }`}
            >
              <Icon className="w-5 h-5" />
              <p className="flex-1 text-left">{item.label}</p>
              {item.hasSubmenu && (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
