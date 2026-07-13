export type TodoPriority = "low" | "medium" | "high";

export type TodoStatus = "todo" | "in-progress" | "done";

export interface Todo {

    id: string;

    title: string;

    description: string;

    category: string;

    priority: TodoPriority;

    status: TodoStatus;

    dueDate: string | null;

    completed: boolean;

    createdAt: string;

    updatedAt: string;

}