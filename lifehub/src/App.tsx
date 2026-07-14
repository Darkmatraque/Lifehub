import "./styles/global.css";
import "./styles/layout.css";
import "./styles/pages.css";
import "./styles/components.css";

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

import Dashboard from "./pages/Dashboard";
import TodoPage from "./pages/TodoPage";
import NotesPage from "./pages/NotesPage";
import CalendarPage from "./pages/CalendarPage";
import BudgetPage from "./pages/BudgetPage";
import GoalsPage from "./pages/GoalsPage";
import JournalPage from "./pages/JournalPage";
import SettingsPage from "./pages/SettingsPage";

import { useAppStore } from "./store/appStore";

export default function App() {
  const currentPage = useAppStore((state) => state.currentPage);

  function renderPage() {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "todo":
        return <TodoPage />;
      case "notes":
        return <NotesPage />;
      case "calendar":
        return <CalendarPage />;
      case "budget":
        return <BudgetPage />;
      case "goals":
        return <GoalsPage />;
      case "journal":
        return <JournalPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <Dashboard />;
    }
  }

  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Header />
        {renderPage()}
      </div>
    </div>
  );
}