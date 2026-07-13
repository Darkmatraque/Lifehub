import TodoCard from "./TodoCard";

import { useTodoStore } from "../../store/todoStore";

export default function TodoList() {

    const todos = useTodoStore((state) => state.todos);

    if (todos.length === 0) {

        return (

            <p>

                Aucune tâche.

            </p>

        );

    }

    return (

        <div className="todo-list">

            {todos.map((todo) => (

                <TodoCard

                    key={todo.id}

                    todo={todo}

                />

            ))}

        </div>

    );

}
