import { useAppStore } from "../../store/appStore";

const pages = [
    { id: "dashboard", label: "🏠 Dashboard" },
    { id: "todo", label: "✅ To-do" },
    { id: "notes", label: "📝 Notes" },
    { id: "calendar", label: "📅 Calendrier" },
    { id: "budget", label: "💰 Budget" },
    { id: "goals", label: "🎯 Objectifs" },
    { id: "journal", label: "📖 Journal" },
    { id: "settings", label: "⚙️ Paramètres" }
];

export default function Sidebar() {
    const currentPage = useAppStore((state) => state.currentPage);
    const setCurrentPage = useAppStore((state) => state.setCurrentPage);

    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                LifeHub
            </div>

            <nav className="sidebar-nav">
                {pages.map((page) => (
                    <button
                        key={page.id}
                        className={
                            currentPage === page.id
                                ? "sidebar-button active"
                                : "sidebar-button"
                        }
                        onClick={() => setCurrentPage(page.id as any)}
                    >
                        {page.label}
                    </button>
                ))}
            </nav>
        </aside>
    );
}