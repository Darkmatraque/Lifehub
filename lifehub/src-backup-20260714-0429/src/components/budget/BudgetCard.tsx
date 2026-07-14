import React from 'react';
import { Budget } from '../../types/budget';
import styles from './BudgetCard.module.css';

interface BudgetCardProps {
  budget: Budget;
  onDelete: (id: string) => void;
  onEdit: (budget: Budget) => void;
}

export function BudgetCard({ budget, onDelete, onEdit }: BudgetCardProps) {
  const percentage = (budget.spent / budget.limit) * 100;
  const remaining = budget.limit - budget.spent;
  
  const getStatusColor = () => {
    if (percentage >= 100) return '#ef4444';
    if (percentage >= 80) return '#f59e0b';
    return '#10b981';
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{budget.category}</h3>
        <span className={styles.currency}>{budget.currency}</span>
      </div>
      
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{
              width: \\%\,
              backgroundColor: getStatusColor(),
            }}
          />
        </div>
        <span className={styles.percentage}>\ / \</span>
      </div>

      <div className={styles.info}>
        <div className={styles.stat}>
          <span className={styles.label}>Restant</span>
          <span className={styles.value} style={{ color: getStatusColor() }}>
            \
          </span>
        </div>
        <div className={styles.stat}>
          <span className={styles.label}>Progression</span>
          <span className={styles.value}>{percentage.toFixed(0)}%</span>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.editBtn} onClick={() => onEdit(budget)}>? Modifier</button>
        <button className={styles.deleteBtn} onClick={() => onDelete(budget.id)}>?? Supprimer</button>
      </div>
    </div>
  );
}
