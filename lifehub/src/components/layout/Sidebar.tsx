import { useAppStore } from "../../store/appStore";
import Navigation from "./Navigation";
import { X } from "lucide-react";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const { sidebarOpen, toggleSidebar } = useAppStore();

  return (
    <>
      {/* Overlay pour mobile */}
      {sidebarOpen && (
        <div className={styles.sidebarOverlay} onClick={toggleSidebar} />
      )}

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
        {/* Header */}
        <div className={styles.sidebarHeader}>
          <h1 className={styles.logo}>LifeHub</h1>
          <button
            className={styles.sidebarClose}
            onClick={toggleSidebar}
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className={styles.sidebarContent}>
          <Navigation />
        </div>

        {/* Footer */}
        <div className={styles.sidebarFooter}>
          <p className={styles.version}>v1.0.0</p>
        </div>
      </aside>
    </>
  );
}