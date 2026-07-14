import { useState, useCallback } from 'react';
import { Note } from '../types/note';
import { useLocalStorage } from './useLocalStorage';

export function useNotes() {
  const [notes, setNotes] = useLocalStorage<Note[]>('lifehub_notes', []);
  const [searchQuery, setSearchQuery] = useState('');

  const addNote = useCallback((note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newNote: Note = {
      ...note,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
    return newNote;
  }, [notes, setNotes]);

  const updateNote = useCallback((id: string, updates: Partial<Note>) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, ...updates, updatedAt: new Date().toISOString() } : note
    ));
  }, [notes, setNotes]);

  const deleteNote = useCallback((id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  }, [notes, setNotes]);

  const togglePin = useCallback((id: string) => {
    updateNote(id, { isPinned: !notes.find(n => n.id === id)?.isPinned });
  }, [notes, updateNote]);

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return {
    notes: filteredNotes.sort((a, b) => (b.isPinned ? 1 : 0) - (a.isPinned ? 1 : 0)),
    addNote,
    updateNote,
    deleteNote,
    togglePin,
    setSearchQuery,
  };
}
