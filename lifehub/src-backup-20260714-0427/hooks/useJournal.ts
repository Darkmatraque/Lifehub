import { useCallback } from 'react';
import { JournalEntry } from '../types/journal';
import { useLocalStorage } from './useLocalStorage';

export function useJournal() {
  const [entries, setEntries] = useLocalStorage<JournalEntry[]>('lifehub_journal', []);

  const addEntry = useCallback((entry: Omit<JournalEntry, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newEntry: JournalEntry = {
      ...entry,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setEntries([...entries, newEntry]);
    return newEntry;
  }, [entries, setEntries]);

  const updateEntry = useCallback((id: string, updates: Partial<JournalEntry>) => {
    setEntries(entries.map(entry =>
      entry.id === id ? { ...entry, ...updates, updatedAt: new Date().toISOString() } : entry
    ));
  }, [entries, setEntries]);

  const deleteEntry = useCallback((id: string) => {
    setEntries(entries.filter(entry => entry.id !== id));
  }, [entries, setEntries]);

  return {
    entries,
    addEntry,
    updateEntry,
    deleteEntry,
  };
}
