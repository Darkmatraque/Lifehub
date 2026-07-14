import { useState, useCallback } from 'react';
import { Todo, TodoFilter } from '../types/todo';
import { useLocalStorage } from './useLocalStorage';

export function useTodo() {
  const [todos, setTodos] = useLocalStorage<Todo[]>('lifehub_todos', []);
  const [filter, setFilter] = useState<TodoFilter>({});

  const addTodo = useCallback((todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newTodo: Todo = {
      ...todo,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setTodos([...todos, newTodo]);
    return newTodo;
  }, [todos, setTodos]);

  const updateTodo = useCallback((id: string, updates: Partial<Todo>) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, ...updates, updatedAt: new Date().toISOString() } : todo
    ));
  }, [todos, setTodos]);

  const deleteTodo = useCallback((id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }, [todos, setTodos]);

  const toggleTodo = useCallback((id: string) => {
    updateTodo(id, { completed: !todos.find(t => t.id === id)?.completed });
  }, [todos, updateTodo]);

  const filteredTodos = todos.filter(todo => {
    if (filter.category && todo.category !== filter.category) return false;
    if (filter.priority && todo.priority !== filter.priority) return false;
    if (filter.completed !== undefined && todo.completed !== filter.completed) return false;
    return true;
  });

  return {
    todos: filteredTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
    setFilter,
  };
}
