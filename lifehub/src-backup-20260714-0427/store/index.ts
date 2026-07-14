import { create } from 'zustand'

interface Task {
  id: string
  title: string
  completed: boolean
}

interface Store {
  tasks: Task[]
  addTask: (title: string) => void
  removeTask: (id: string) => void
  toggleTask: (id: string) => void
}

export const useStore = create<Store>((set) => ({
  tasks: [],
  
  addTask: (title: string) => set((state) => ({
    tasks: [...state.tasks, {
      id: Date.now().toString(),
      title,
      completed: false
    }]
  })),
  
  removeTask: (id: string) => set((state) => ({
    tasks: state.tasks.filter(t => t.id !== id)
  })),
  
  toggleTask: (id: string) => set((state) => ({
    tasks: state.tasks.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    )
  }))
}))