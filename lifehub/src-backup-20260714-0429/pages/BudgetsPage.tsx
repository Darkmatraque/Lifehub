import React, { useState, useEffect } from 'react';
import { Budget } from '../types/budget';
import { BudgetCard } from '../components/budget/BudgetCard';
import styles from './Page.module.css';

export function BudgetsPage() {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0);
  const totalLimit = budgets.reduce((sum, b) => sum + b.limit, 0);

  useEffect(() => {
    const saved = localStorage.getItem('budgets');
    if (saved) setBudgets(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('budgets', JSON.stringify(budgets));
  }, [budgets]);

  const handleDelete = (id: string) => {
    setBudgets(budgets.filter(b => b.id !== id));
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>?? Budgets</h1>

      <div className={styles.statsCard}>
        <div className={styles.stat}>
          <span className={styles.label}>Total dépensé</span>
          <span className={styles.value}>\</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.label}>Limite totale</span>
          <span className={styles.value}>\</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.label}>Restant</span>
          <span className={styles.value} style={{ color: totalSpent > totalLimit ? '#ef4444' : '#10b981' }}>
            \
          </span>
        </div>
      </div>

      <div className={styles.grid}>
        {budgets.length > 0 ? (
          budgets.map(budget => (
            <BudgetCard
              key={budget.id}
              budget={budget}
              onDelete={handleDelete}
              onEdit={() => {}}
            />
          ))
        ) : (
          <p className={styles.empty}>Aucun budget créé</p>
        )}
      </div>
    </div>
  );
}
