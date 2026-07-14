import { create } from "zustand";

export type AppPage =
  | "dashboard"
  | "todo"
  | "notes"
  | "calendar"
  | "budget"
  | "goals"
  | "journal"
  | "settings";

interface AppStore {
  currentPage: AppPage;
  sidebarOpen: boolean;
  loading: boolean;

  setCurrentPage: (page: AppPage) => void;
  toggleSidebar: () => void;
  setLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  currentPage: "dashboard",
  sidebarOpen: true,
  loading: false,

  setCurrentPage: (page) => set({ currentPage: page }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setLoading: (loading) => set({ loading }),
}));