import { useState } from "react";
import { useAppStore } from "../../store/appStore";
import { Search, Bell, Settings, Plus, Menu, X } from "lucide-react";
import "./Header.css";

const pageNames: Record<string, string> = {
  dashboard: "Dashboard",
  todo: "À faire",
  notes: "Notes",
  calendar: "Calendrier",
  budget: "Budget",
  goals: "Objectifs",
  journal: "Journal",
  settings: "Paramètres",
};

export default function Header() {
  const { currentPage, toggleSidebar, sidebarOpen } = useAppStore();
  const [searchActive, setSearchActive] = useState(false);

  return (
    <header className="header">
      {/* Menu toggle */}
      <button 
        className="header-menu-toggle" 
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Page title */}
      <div className="header-left">
        <h1 className="page-title">
          {pageNames[currentPage] || "Dashboard"}
        </h1>
      </div>

      {/* Search bar */}
      <div className={`header-center ${searchActive ? "active" : ""}`}>
        <div className="search-bar">
          <Search size={18} />
          <input
            type="text"
            placeholder="Rechercher..."
            onFocus={() => setSearchActive(true)}
            onBlur={() => setSearchActive(false)}
            aria-label="Rechercher"
          />
          <kbd>Ctrl K</kbd>
        </div>
      </div>

      {/* Action buttons */}
      <div className="header-right">
        <button className="icon-button" aria-label="Nouvelle tâche" title="Nouvelle tâche">
          <Plus size={20} />
        </button>
        <button className="icon-button" aria-label="Notifications" title="Notifications">
          <Bell size={20} />
          <span className="badge">3</span>
        </button>
        <button className="icon-button" aria-label="Paramètres" title="Paramètres">
          <Settings size={20} />
        </button>
      </div>
    </header>
  );
}