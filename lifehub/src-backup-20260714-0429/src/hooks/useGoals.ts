import { useCallback } from 'react';
import { Goal } from '../types/goal';
import { useLocalStorage } from './useLocalStorage';

export function useGoals() {
  const [goals, setGoals] = useLocalStorage<Goal[]>('lifehub_goals', []);

  const addGoal = useCallback((goal: Omit<Goal, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newGoal: Goal = {
      ...goal,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setGoals([...goals, newGoal]);
    return newGoal;
  }, [goals, setGoals]);

  const updateGoal = useCallback((id: string, updates: Partial<Goal>) => {
    setGoals(goals.map(goal =>
      goal.id === id ? { ...goal, ...updates, updatedAt: new Date().toISOString() } : goal
    ));
  }, [goals, setGoals]);

  const deleteGoal = useCallback((id: string) => {
    setGoals(goals.filter(goal => goal.id !== id));
  }, [goals, setGoals]);

  return {
    goals,
    addGoal,
    updateGoal,
    deleteGoal,
  };
}
