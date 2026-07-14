import { create } from "zustand";
import { persist } from "zustand/middleware";

// ============================================
// TYPES - Définition des structures de données
// ============================================

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate: string;
  priority: "low" | "medium" | "high";
  createdAt: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: number;
  createdAt: string;
}

export interface BudgetItem {
  id: string;
  name: string;
  amount: number;
  category: string;
  date: string;
  type: "income" | "expense";
  createdAt: string;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  targetDate: string;
  progress: number;
  category: string;
  createdAt: string;
}

export interface JournalEntry {
  id: string;
  title: string;
  content: string;
  mood: "happy" | "neutral" | "sad";
  date: string;
  createdAt: string;
}

// ============================================
// APP STATE INTERFACE
// ============================================

export type AppPage =
  | "dashboard"
  | "todo"
  | "notes"
  | "calendar"
  | "budget"
  | "goals"
  | "journal"
  | "settings";

interface AppState {
  // UI State
  currentPage: AppPage;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  setCurrentPage: (page: AppPage) => void;

  // Tasks (Todo)
  tasks: Task[];
  addTask: (task: Omit<Task, "id" | "createdAt">) => void;
  deleteTask: (id: string) => void;
  updateTask: (id: string, task: Partial<Task>) => void;
  completeTask: (id: string) => void;

  // Notes
  notes: Note[];
  addNote: (note: Omit<Note, "id" | "createdAt" | "updatedAt">) => void;
  deleteNote: (id: string) => void;
  updateNote: (id: string, note: Partial<Note>) => void;

  // Calendar Events
  events: CalendarEvent[];
  addEvent: (event: Omit<CalendarEvent, "id" | "createdAt">) => void;
  deleteEvent: (id: string) => void;
  updateEvent: (id: string, event: Partial<CalendarEvent>) => void;

  // Budget
  budgetItems: BudgetItem[];
  addBudgetItem: (item: Omit<BudgetItem, "id" | "createdAt">) => void;
  deleteBudgetItem: (id: string) => void;
  updateBudgetItem: (id: string, item: Partial<BudgetItem>) => void;

  // Goals
  goals: Goal[];
  addGoal: (goal: Omit<Goal, "id" | "createdAt">) => void;
  deleteGoal: (id: string) => void;
  updateGoal: (id: string, goal: Partial<Goal>) => void;

  // Journal
  entries: JournalEntry[];
  addEntry: (entry: Omit<JournalEntry, "id" | "createdAt">) => void;
  deleteEntry: (id: string) => void;
  updateEntry: (id: string, entry: Partial<JournalEntry>) => void;
}

// ============================================
// STORE CREATION
// ============================================

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // ============================================
      // UI STATE ACTIONS
      // ============================================
      currentPage: "dashboard",
      sidebarOpen: true,

      toggleSidebar: () =>
        set((state) => ({
          sidebarOpen: !state.sidebarOpen,
        })),

      setCurrentPage: (page: AppPage) =>
        set({
          currentPage: page,
        }),

      // ============================================
      // TASKS (TODO) ACTIONS
      // ============================================
      tasks: [],

      addTask: (task) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              ...task,
              id: `task-${Date.now()}-${Math.random()}`,
              createdAt: new Date().toISOString(),
            },
          ],
        })),

      deleteTask: (id: string) =>
        set((state) => ({
          tasks: state.tasks.filter((t) => t.id !== id),
        })),

      updateTask: (id: string, updates: Partial<Task>) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === id ? { ...t, ...updates } : t
          ),
        })),

      completeTask: (id: string) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
          ),
        })),

      // ============================================
      // NOTES ACTIONS
      // ============================================
      notes: [],

      addNote: (note) =>
        set((state) => ({
          notes: [
            ...state.notes,
            {
              ...note,
              id: `note-${Date.now()}-${Math.random()}`,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
          ],
        })),

      deleteNote: (id: string) =>
        set((state) => ({
          notes: state.notes.filter((n) => n.id !== id),
        })),

      updateNote: (id: string, updates: Partial<Note>) =>
        set((state) => ({
          notes: state.notes.map((n) =>
            n.id === id
              ? { ...n, ...updates, updatedAt: new Date().toISOString() }
              : n
          ),
        })),

      // ============================================
      // CALENDAR EVENTS ACTIONS
      // ============================================
      events: [],

      addEvent: (event) =>
        set((state) => ({
          events: [
            ...state.events,
            {
              ...event,
              id: `event-${Date.now()}-${Math.random()}`,
              createdAt: new Date().toISOString(),
            },
          ],
        })),

      deleteEvent: (id: string) =>
        set((state) => ({
          events: state.events.filter((e) => e.id !== id),
        })),

      updateEvent: (id: string, updates: Partial<CalendarEvent>) =>
        set((state) => ({
          events: state.events.map((e) =>
            e.id === id ? { ...e, ...updates } : e
          ),
        })),

      // ============================================
      // BUDGET ACTIONS
      // ============================================
      budgetItems: [],

      addBudgetItem: (item) =>
        set((state) => ({
          budgetItems: [
            ...state.budgetItems,
            {
              ...item,
              id: `budget-${Date.now()}-${Math.random()}`,
              createdAt: new Date().toISOString(),
            },
          ],
        })),

      deleteBudgetItem: (id: string) =>
        set((state) => ({
          budgetItems: state.budgetItems.filter((b) => b.id !== id),
        })),

      updateBudgetItem: (id: string, updates: Partial<BudgetItem>) =>
        set((state) => ({
          budgetItems: state.budgetItems.map((b) =>
            b.id === id ? { ...b, ...updates } : b
          ),
        })),

      // ============================================
      // GOALS ACTIONS
      // ============================================
      goals: [],

      addGoal: (goal) =>
        set((state) => ({
          goals: [
            ...state.goals,
            {
              ...goal,
              id: `goal-${Date.now()}-${Math.random()}`,
              createdAt: new Date().toISOString(),
            },
          ],
        })),

      deleteGoal: (id: string) =>
        set((state) => ({
          goals: state.goals.filter((g) => g.id !== id),
        })),

      updateGoal: (id: string, updates: Partial<Goal>) =>
        set((state) => ({
          goals: state.goals.map((g) =>
            g.id === id ? { ...g, ...updates } : g
          ),
        })),

      // ============================================
      // JOURNAL ACTIONS
      // ============================================
      entries: [],

      addEntry: (entry) =>
        set((state) => ({
          entries: [
            ...state.entries,
            {
              ...entry,
              id: `entry-${Date.now()}-${Math.random()}`,
              createdAt: new Date().toISOString(),
            },
          ],
        })),

      deleteEntry: (id: string) =>
        set((state) => ({
          entries: state.entries.filter((e) => e.id !== id),
        })),

      updateEntry: (id: string, updates: Partial<JournalEntry>) =>
        set((state) => ({
          entries: state.entries.map((e) =>
            e.id === id ? { ...e, ...updates } : e
          ),
        })),
    }),
    {
      name: "app-store",
      version: 1,
    }
  )
);