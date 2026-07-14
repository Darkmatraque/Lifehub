import React, { useState, useEffect } from 'react';
import { Note } from '../types/note';
import { NoteCard } from '../components/note/NoteCard';
import { NoteSearch } from '../components/note/NoteSearch';
import styles from './Page.module.css';

export function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [colorFilter, setColorFilter] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('notes');
    if (saved) setNotes(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || note.category === categoryFilter;
    const matchesColor = !colorFilter || note.color === colorFilter;
    return matchesSearch && matchesCategory && matchesColor;
  });

  const handleDelete = (id: string) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  const handleTogglePin = (id: string) => {
    setNotes(notes.map(n => 
      n.id === id ? { ...n, isPinned: !n.isPinned } : n
    ));
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>?? Mes Notes</h1>
      
      <NoteSearch
        onSearch={setSearchTerm}
        onCategoryFilter={setCategoryFilter}
        onColorFilter={setColorFilter}
      />

      <div className={styles.grid}>
        {filteredNotes.length > 0 ? (
          filteredNotes.map(note => (
            <NoteCard
              key={note.id}
              note={note}
              onDelete={handleDelete}
              onEdit={() => {}}
              onTogglePin={handleTogglePin}
            />
          ))
        ) : (
          <p className={styles.empty}>Aucune note trouvée</p>
        )}
      </div>
    </div>
  );
}
