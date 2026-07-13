import { create } from "zustand";

import { Note } from "../types/note";

interface NotesStore {

    notes: Note[];

    addNote: (note: Note) => void;

    deleteNote: (id: string) => void;

    updateNote: (note: Note) => void;

}

export const useNotesStore = create<NotesStore>((set) => ({

    notes: [],

    addNote: (note) =>

        set((state) => ({

            notes: [...state.notes, note]

        })),

    deleteNote: (id) =>

        set((state) => ({

            notes: state.notes.filter((note) => note.id !== id)

        })),

    updateNote: (note) =>

        set((state) => ({

            notes: state.notes.map((n) =>

                n.id === note.id ? note : n
            )

        }))

}));