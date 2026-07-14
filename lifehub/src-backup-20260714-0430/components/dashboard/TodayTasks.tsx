import Card from "../common/Card";

import { useTodoStore } from "../../store/todoStore";

export default function TodayTasks() {

    const todos = useTodoStore((state) => state.todos);

    const pending = todos.filter(todo => !todo.completed);

    return (

        <Card title="📋 Tâches du jour">

            {

                pending.length === 0

                    ? (

                        <p>

                            🎉 Rien à faire aujourd'hui !

                        </p>

                    )

                    : (

                        <ul className="today-task-list">

                            {

                                pending.slice(0,5).map(todo => (

                                    <li key={todo.id}>

                                        ⬜ {todo.title}

                                    </li>

                                ))

                            }

                        </ul>

                    )

            }

        </Card>

    );

}
