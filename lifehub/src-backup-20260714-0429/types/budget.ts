export interface BudgetCategory {
  id: string;
  name: string;
  limit: number;
  spent: number;
  color: string;
  icon: string;
}

export interface Transaction {
  id: string;
  categoryId: string;
  amount: number;
  description: string;
  date: string;
  type: 'income' | 'expense';
}

export interface Budget {
  id: string;
  month: string;
  categories: BudgetCategory[];
  transactions: Transaction[];
  totalIncome: number;
  totalExpenses: number;
}
