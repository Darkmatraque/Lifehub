import React, { useState, useEffect } from 'react';
import { Goal } from '../types/goal';
import { GoalCard } from '../components/goals/GoalCard';
import styles from './Page.module.css';

export function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('goals');
    if (saved) setGoals(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  const handleDelete = (id: string) => {
    setGoals(goals.filter(g => g.id !== id));
  };

  const completedCount = goals.filter(g => g.progress >= g.target).length;
  const totalCount = goals.length;

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>?? Objectifs</h1>

      <div className={styles.statsCard}>
        <div className={styles.stat}>
          <span className={styles.label}>Total d'objectifs</span>
          <span className={styles.value}>{totalCount}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.label}>Complétés</span>
          <span className={styles.value} style={{ color: '#10b981' }}>{completedCount}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.label}>En cours</span>
          <span className={styles.value} style={{ color: '#6366f1' }}>{totalCount - completedCount}</span>
        </div>
      </div>

      <div className={styles.grid}>
        {goals.length > 0 ? (
          goals
            .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
            .map(goal => (
              <GoalCard
                key={goal.id}
                goal={goal}
                onDelete={handleDelete}
                onEdit={() => {}}
                onUpdateProgress={() => {}}
              />
            ))
        ) : (
          <p className={styles.empty}>Aucun objectif créé</p>
        )}
      </div>
    </div>
  );
}
