import { useAppStore } from "../store/appStore";
import "../styles/settings.css";

export default function SettingsPage() {
  const { toggleSidebar } = useAppStore();

  return (
    <div className="settings-container">
      <h1>Paramètres</h1>

      <div className="settings-section">
        <h2>Interface</h2>
        <div className="setting-item">
          <label>Activer/Désactiver la barre latérale</label>
          <button onClick={toggleSidebar}>Basculer Sidebar</button>
        </div>
      </div>

      <div className="settings-section">
        <h2>À propos</h2>
        <p>Dashboard Personal v1.0</p>
        <p>© 2026 - Tous droits réservés</p>
      </div>
    </div>
  );
}