import { useAppStore } from "../../store/appStore";
import {
  LayoutDashboard,
  CheckSquare,
  StickyNote,
  Calendar,
  Wallet,
  Target,
  BookOpen,
  Settings,
} from "lucide-react";
import "./Navigation.css";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "todo", label: "À faire", icon: CheckSquare },
  { id: "notes", label: "Notes", icon: StickyNote },
  { id: "calendar", label: "Calendrier", icon: Calendar },
  { id: "budget", label: "Budget", icon: Wallet },
  { id: "goals", label: "Objectifs", icon: Target },
  { id: "journal", label: "Journal", icon: BookOpen },
  { id: "settings", label: "Paramètres", icon: Settings },
];

export default function Navigation() {
  const { currentPage, setCurrentPage } = useAppStore();

  return (
    <nav className="navigation">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentPage === item.id;

        return (
          <button
            key={item.id}
            className={`nav-item ${isActive ? "active" : ""}`}
            onClick={() => setCurrentPage(item.id as any)}
            aria-current={isActive ? "page" : undefined}
            title={item.label}
          >
            <Icon size={20} />
            <span className="nav-label">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}