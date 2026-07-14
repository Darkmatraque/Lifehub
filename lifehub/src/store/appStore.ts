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
  duration: number; // en minutes
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
  progress: number; // 0-100
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
// STORE STATE
// ============================================

interface AppState {
  // UI State
  currentPage: string;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  setCurrentPage: (page: string) => void;

  // Tasks
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
      // UI
      currentPage: "dashboard",
      sidebarOpen: true,
      toggleSidebar: () =>
        set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      setCurrentPage: (page: string) => set({ currentPage: page }),

      // Tasks
      tasks: [],
      addTask: (task) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              ...task,
              id: Date.now().toString(),
              createdAt: new Date().toISOString(),
            },
          ],
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      updateTask: (id, updates) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, ...updates } : task
          ),
        })),
      completeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),

      // Notes
      notes: [],
      addNote: (note) =>
        set((state) => ({
          notes: [
            ...state.notes,
            {
              ...note,
              id: Date.now().toString(),
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
          ],
        })),
      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        })),
      updateNote: (id, updates) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id
              ? { ...note, ...updates, updatedAt: new Date().toISOString() }
              : note
          ),
        })),

      // Events
      events: [],
      addEvent: (event) =>
        set((state) => ({
          events: [
            ...state.events,
            {
              ...event,
              id: Date.now().toString(),
              createdAt: new Date().toISOString(),
            },
          ],
        })),
      deleteEvent: (id) =>
        set((state) => ({
          events: state.events.filter((event) => event.id !== id),
        })),
      updateEvent: (id, updates) =>
        set((state) => ({
          events: state.events.map((event) =>
            event.id === id ? { ...event, ...updates } : event
          ),
        })),

      // Budget
      budgetItems: [],
      addBudgetItem: (item) =>
        set((state) => ({
          budgetItems: [
            ...state.budgetItems,
            {
              ...item,
              id: Date.now().toString(),
              createdAt: new Date().toISOString(),
            },
          ],
        })),
      deleteBudgetItem: (id) =>
        set((state) => ({
          budgetItems: state.budgetItems.filter((item) => item.id !== id),
        })),
      updateBudgetItem: (id, updates) =>
        set((state) => ({
          budgetItems: state.budgetItems.map((item) =>
            item.id === id ? { ...item, ...updates } : item
          ),
        })),

      // Goals
      goals: [],
      addGoal: (goal) =>
        set((state) => ({
          goals: [
            ...state.goals,
            {
              ...goal,
              id: Date.now().toString(),
              createdAt: new Date().toISOString(),
            },
          ],
        })),
      deleteGoal: (id) =>
        set((state) => ({
          goals: state.goals.filter((goal) => goal.id !== id),
        })),
      updateGoal: (id, updates) =>
        set((state) => ({
          goals: state.goals.map((goal) =>
            goal.id === id ? { ...goal, ...updates } : goal
          ),
        })),

      // Journal
      entries: [],
      addEntry: (entry) =>
        set((state) => ({
          entries: [
            ...state.entries,
            {
              ...entry,
              id: Date.now().toString(),
              createdAt: new Date().toISOString(),
            },
          ],
        })),
      deleteEntry: (id) =>
        set((state) => ({
          entries: state.entries.filter((entry) => entry.id !== id),
        })),
      updateEntry: (id, updates) =>
        set((state) => ({
          entries: state.entries.map((entry) =>
            entry.id === id ? { ...entry, ...updates } : entry
          ),
        })),
    }),
    {
      name: "app-store",
    }
  )
);