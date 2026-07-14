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
  const { currentPage, toggleSidebar, sidebarOpen, setCurrentPage } = useAppStore();
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
        </div>
      </div>

      {/* Right buttons */}
      <div className="header-right">
        {/* New task button */}
        <button 
          className="header-btn header-btn-primary"
          onClick={() => setCurrentPage("todo")}
          title="Nouvelle tâche"
        >
          <Plus size={20} />
        </button>

        {/* Notifications */}
        <button 
          className="header-btn"
          onClick={() => console.log("Notifications")}
          title="Notifications"
        >
          <Bell size={20} />
        </button>

        {/* Settings */}
        <button 
          className="header-btn"
          onClick={() => setCurrentPage("settings")}
          title="Paramètres"
        >
          <Settings size={20} />
        </button>
      </div>
    </header>
  );
}