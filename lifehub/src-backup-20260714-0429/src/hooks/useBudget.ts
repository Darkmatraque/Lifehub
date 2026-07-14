import { useState, useCallback } from 'react';
import { Budget, BudgetCategory, Transaction } from '../types/budget';
import { useLocalStorage } from './useLocalStorage';

export function useBudget() {
  const [budgets, setBudgets] = useLocalStorage<Budget[]>('lifehub_budgets', []);
  const currentMonth = new Date().toISOString().slice(0, 7);

  const getCurrentBudget = useCallback(() => {
    let budget = budgets.find(b => b.month === currentMonth);
    if (!budget) {
      budget = {
        id: Date.now().toString(),
        month: currentMonth,
        categories: [],
        transactions: [],
        totalIncome: 0,
        totalExpenses: 0,
      };
      setBudgets([...budgets, budget]);
    }
    return budget;
  }, [budgets, setBudgets, currentMonth]);

  const addTransaction = useCallback((transaction: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = { ...transaction, id: Date.now().toString() };
    const budget = getCurrentBudget();
    const updatedBudget = {
      ...budget,
      transactions: [...budget.transactions, newTransaction],
      totalIncome: transaction.type === 'income' ? budget.totalIncome + transaction.amount : budget.totalIncome,
      totalExpenses: transaction.type === 'expense' ? budget.totalExpenses + transaction.amount : budget.totalExpenses,
    };
    setBudgets(budgets.map(b => b.id === budget.id ? updatedBudget : b));
  }, [budgets, setBudgets, getCurrentBudget]);

  return {
    currentBudget: getCurrentBudget(),
    addTransaction,
    budgets,
  };
}
