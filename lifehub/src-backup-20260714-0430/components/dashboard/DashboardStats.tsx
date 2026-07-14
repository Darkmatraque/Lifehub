import StatCard from "../common/StatCard";

import { useTodoStore } from "../../store/todoStore";

export default function DashboardStats() {

    const todos = useTodoStore(state => state.todos);

    const completed = todos.filter(t => t.completed).length;

    return (

        <div className="dashboard-grid">

            <StatCard

                emoji="✅"

                title="Tâches"

                value={todos.length}

                description="Total"

            />

            <StatCard

                emoji="🎉"

                title="Terminées"

                value={completed}

                description="Bravo !"

            />

            <StatCard

                emoji="⏳"

                title="En attente"

                value={todos.length - completed}

                description="À faire"

            />

            <StatCard

                emoji="📈"

                title="Progression"

                value={

                    todos.length

                        ? `${Math.round(

                            completed / todos.length * 100

                        )}%`

                        : "0%"

                }

                description="Aujourd'hui"

            />

        </div>

    );

}
