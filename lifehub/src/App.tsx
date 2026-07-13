import "./styles/global.css";
import "./styles/layout.css";
import "./styles/pages.css";

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

import Dashboard from "./pages/Dashboard";

export default function App() {

    return (

        <div className="layout">

            <Sidebar />

            <div className="content">

                <Header />

                <Dashboard />

            </div>

        </div>

    );

}
