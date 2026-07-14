import React from 'react';
import { Goal } from '../../types/goal';
import styles from './GoalCard.module.css';

interface GoalCardProps {
  goal: Goal;
  onDelete: (id: string) => void;
  onEdit: (goal: Goal) => void;
  onUpdateProgress: (id: string, progress: number) => void;
}

export function GoalCard({ goal, onDelete, onEdit, onUpdateProgress }: GoalCardProps) {
  const percentage = (goal.progress / goal.target) * 100;
  const isCompleted = goal.progress >= goal.target;

  return (
    <div className={\ \\}>
      <div className={styles.header}>
        <h3 className={styles.title}>{goal.title}</h3>
        <span className={styles.category}>{goal.category}</span>
      </div>

      <p className={styles.description}>{goal.description}</p>

      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: \\%\ }}
          />
        </div>
        <span className={styles.percentage}>{percentage.toFixed(0)}%</span>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.label}>Progression</span>
          <span className={styles.value}>{goal.progress} / {goal.target}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.label}>Deadline</span>
          <span className={styles.value}>{new Date(goal.deadline).toLocaleDateString()}</span>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.editBtn} onClick={() => onEdit(goal)}>? Modifier</button>
        <button className={styles.deleteBtn} onClick={() => onDelete(goal.id)}>?? Supprimer</button>
      </div>
    </div>
  );
}
