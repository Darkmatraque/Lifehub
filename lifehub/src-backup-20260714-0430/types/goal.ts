export interface Goal {
  id: string;
  title: string;
  description: string;
  category: 'Career' | 'Health' | 'Finance' | 'Personal' | 'Education';
  targetDate: string;
  progress: number;
  status: 'active' | 'completed' | 'paused';
  milestones: Milestone[];
  createdAt: string;
  updatedAt: string;
}

export interface Milestone {
  id: string;
  title: string;
  completed: boolean;
  completedAt?: string;
}
