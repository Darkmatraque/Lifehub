import React from 'react';
import { Todo } from '../../types/todo';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (todo: Todo) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const priorityColors = {
    low: '#10b981',
    medium: '#f59e0b',
    high: '#ef4444',
  };

  return (
    <div className={\ \}>
      <input
        type=\"checkbox\"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className={styles.checkbox}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{todo.title}</h3>
        <p className={styles.description}>{todo.description}</p>
        <div className={styles.meta}>
          <span className={styles.category}>{todo.category}</span>
          <span className={styles.priority} style={{ backgroundColor: priorityColors[todo.priority] }}>
            {todo.priority}
          </span>
          <span className={styles.dueDate}>{new Date(todo.dueDate).toLocaleDateString()}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.editBtn} onClick={() => onEdit(todo)}>?</button>
        <button className={styles.deleteBtn} onClick={() => onDelete(todo.id)}>??</button>
      </div>
    </div>
  );
}
