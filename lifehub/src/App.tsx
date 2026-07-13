import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

import Dashboard from "./pages/Dashboard";

import "./styles/layout.css";

export default function App() {

    return (

        <div className="layout">

            <Sidebar />

            <main className="content">

                <Header />

                <Dashboard />

            </main>

        </div>

    );

}