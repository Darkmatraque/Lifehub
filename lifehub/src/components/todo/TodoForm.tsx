import { FormEvent, useState } from "react";

import Button from "../common/Button";
import Input from "../common/Input";

import { useTodoStore } from "../../store/todoStore";
import { generateId } from "../../utils/helpers";

export default function TodoForm() {

    const addTodo = useTodoStore((state) => state.addTodo);

    const [title, setTitle] = useState("");

    function handleSubmit(e: FormEvent) {

        e.preventDefault();

        if (!title.trim()) return;

        const now = new Date().toISOString();

        addTodo({

            id: generateId(),

            title,

            description: "",

            category: "Personnel",

            priority: "medium",

            status: "todo",

            dueDate: null,

            completed: false,

            createdAt: now,

            updatedAt: now

        });

        setTitle("");

    }

    return (

        <form className="todo-form" onSubmit={handleSubmit}>

            <Input
                placeholder="Ajouter une nouvelle tâche..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <Button type="submit">

                Ajouter

            </Button>

        </form>

    );

}
