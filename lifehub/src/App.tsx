import "./styles/global.css";
import "./styles/layout.css";
import "./styles/pages.css";
import "./styles/components.css";

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

import Dashboard from "./pages/Dashboard";
import Todo from "./pages/Todo";
import Notes from "./pages/Notes";
import Calendar from "./pages/Calendar";
import Budget from "./pages/Budget";
import Goals from "./pages/Goals";
import Journal from "./pages/Journal";
import Settings from "./pages/Settings";

import { useAppStore } from "./store/appStore";

export default function App() {
  const page = useAppStore(state => state.currentPage);

  function renderPage() {
    switch(page){
      case "dashboard":
        return <Dashboard />;
      case "todo":
        return <Todo />;
      case "notes":
        return <Notes />;
      case "calendar":
        return <Calendar />;
      case "budget":
        return <Budget />;
      case "goals":
        return <Goals />;
      case "journal":
        return <Journal />;
      case "settings":
        return <Settings />;
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