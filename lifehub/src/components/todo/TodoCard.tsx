import Button from "../common/Button";

import { Todo } from "../../types/todo";

import { useTodoStore } from "../../store/todoStore";

interface Props {

    todo: Todo;

}

export default function TodoCard({ todo }: Props) {

    const toggleTodo = useTodoStore((state) => state.toggleTodo);

    const deleteTodo = useTodoStore((state) => state.deleteTodo);

    return (

        <div className="todo-card">

            <div>

                <h3>

                    {todo.completed ? "✅" : "⬜"} {todo.title}

                </h3>

                <p>

                    {todo.category}

                </p>

            </div>

            <div className="todo-actions">

                <Button
                    variant="secondary"
                    onClick={() => toggleTodo(todo.id)}
                >

                    {todo.completed ? "Annuler" : "Terminer"}

                </Button>

                <Button
                    variant="danger"
                    onClick={() => deleteTodo(todo.id)}
                >

                    Supprimer

                </Button>

            </div>

        </div>

    );

}
