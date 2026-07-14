export interface JournalEntry {
  id: string;
  date: string;
  title: string;
  content: string;
  mood: 'excellent' | 'good' | 'neutral' | 'bad' | 'terrible';
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface JournalStats {
  totalEntries: number;
  thisMonth: number;
  thisWeek: number;
  averageMood: string;
}
