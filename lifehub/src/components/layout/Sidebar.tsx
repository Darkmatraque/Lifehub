import { useAppStore } from "../../store/appStore";
import Navigation from "./Navigation";
import { X } from "lucide-react";
import "./Sidebar.css";

export default function Sidebar() {
  const { sidebarOpen, toggleSidebar } = useAppStore();

  return (
    <>
      {/* Overlay pour mobile */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar} />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="sidebar-header">
          <h1 className="logo">LifeHub</h1>
          <button
            className="sidebar-close"
            onClick={toggleSidebar}
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="sidebar-content">
          <Navigation />
        </div>

        {/* Footer */}
        <div className="sidebar-footer">
          <p className="version">v1.0.0</p>
        </div>
      </aside>
    </>
  );
}