import { useMemo, useState } from "react";

import TodoCard from "./TodoCard";
import TodoFilters from "./TodoFilters";

import { useTodoStore } from "../../store/todoStore";

export default function TodoList() {

    const todos = useTodoStore((state) => state.todos);

    const [search, setSearch] = useState("");

    const filteredTodos = useMemo(() => {

        return todos.filter((todo) =>

            todo.title
                .toLowerCase()
                .includes(search.toLowerCase())

        );

    }, [todos, search]);

    return (

        <>

            <TodoFilters

                search={search}

                onSearchChange={setSearch}

            />

            {filteredTodos.length === 0 ? (

                <p>

                    Aucune tâche trouvée.

                </p>

            ) : (

                <div className="todo-list">

                    {filteredTodos.map((todo) => (

                        <TodoCard

                            key={todo.id}

                            todo={todo}

                        />

                    ))}

                </div>

            )}

        </>

    );

}
