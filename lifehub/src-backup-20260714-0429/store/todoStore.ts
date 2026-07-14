import { create } from "zustand";

import { Todo } from "../types/todo";

interface TodoStore {

    todos: Todo[];

    addTodo: (todo: Todo) => void;

    deleteTodo: (id: string) => void;

    toggleTodo: (id: string) => void;

}

export const useTodoStore = create<TodoStore>((set) => ({

    todos: [],

    addTodo: (todo) =>

        set((state) => ({

            todos: [...state.todos, todo]

        })),

    deleteTodo: (id) =>

        set((state) => ({

            todos: state.todos.filter((todo) => todo.id !== id)

        })),

    toggleTodo: (id) =>

        set((state) => ({

            todos: state.todos.map((todo) =>

                todo.id === id

                    ? {

                          ...todo,

                          completed: !todo.completed,

                          status: !todo.completed ? "done" : "todo",

                          updatedAt: new Date().toISOString()

                      }

                    : todo
            )

        }))

}));