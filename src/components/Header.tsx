import { Search } from "lucide-react";

interface HeaderProps {
  activeTab: "views" | "reports" | "users" | "configuration";
  onTabChange: (tab: "views" | "reports" | "users" | "configuration") => void;
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <div className="bg-header-background text-header-foreground h-16 px-8 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <h2 className="text-header-foreground tracking-[2px]">MOODY'S</h2>
        <nav>
          <ul className="flex gap-8 list-none">
            <li>
              <button 
                onClick={() => onTabChange("views")}
                className={`no-underline py-5 block border-b-[3px] ${
                  activeTab === "views" 
                    ? "text-header-foreground border-header-foreground" 
                    : "text-header-foreground/70 border-transparent hover:text-header-foreground"
                } bg-transparent cursor-pointer`}
              >
                Views
              </button>
            </li>
            <li>
              <button 
                onClick={() => onTabChange("reports")}
                className={`no-underline py-5 block border-b-[3px] ${
                  activeTab === "reports" 
                    ? "text-header-foreground border-header-foreground" 
                    : "text-header-foreground/70 border-transparent hover:text-header-foreground"
                } bg-transparent cursor-pointer`}
              >
                Reports
              </button>
            </li>
            <li>
              <button 
                onClick={() => onTabChange("users")}
                className={`no-underline py-5 block border-b-[3px] ${
                  activeTab === "users" 
                    ? "text-header-foreground border-header-foreground" 
                    : "text-header-foreground/70 border-transparent hover:text-header-foreground"
                } bg-transparent cursor-pointer`}
              >
                Users
              </button>
            </li>
            <li>
              <button 
                onClick={() => onTabChange("configuration")}
                className={`no-underline py-5 block border-b-[3px] ${
                  activeTab === "configuration" 
                    ? "text-header-foreground border-header-foreground" 
                    : "text-header-foreground/70 border-transparent hover:text-header-foreground"
                } bg-transparent cursor-pointer`}
              >
                Configuration
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for an entity..."
            className="bg-header-foreground/10 border border-header-foreground/20 rounded-[24px] px-5 py-2 text-header-foreground placeholder:text-header-foreground/60 w-[300px]"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-header-foreground/60" />
        </div>
        <span>EN</span>
      </div>
    </div>
  );
}
