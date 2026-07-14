import { useState } from "react";
import { useAppStore } from "../store/appStore";
import "../styles/notes.css";

const COLORS = ["#FFE5E5", "#E5F3FF", "#E5FFE5", "#FFFFE5", "#F0E5FF", "#FFE5F5"];

export default function NotesPage() {
  const { notes, addNote, deleteNote, updateNote } = useAppStore();
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    color: COLORS[0],
  });

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) return;

    if (editingId) {
      updateNote(editingId, {
        title: formData.title,
        content: formData.content,
        color: formData.color,
      });
      setEditingId(null);
    } else {
      addNote({
        title: formData.title,
        content: formData.content,
        color: formData.color,
      });
    }

    setFormData({ title: "", content: "", color: COLORS[0] });
    setShowForm(false);
  };

  const handleEditNote = (note: any) => {
    setFormData({
      title: note.title,
      content: note.content,
      color: note.color,
    });
    setEditingId(note.id);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ title: "", content: "", color: COLORS[0] });
  };

  return (
    <div className="notes-container">
      <div className="notes-header">
        <h1>📝 Notes</h1>
        {!showForm && (
          <button className="btn-add-note" onClick={() => setShowForm(true)}>
            + Nouvelle Note
          </button>
        )}
      </div>

      {showForm && (
        <div className="note-form">
          <h2>{editingId ? "Modifier la note" : "Créer une note"}</h2>
          <form onSubmit={handleAddNote}>
            <input
              type="text"
              placeholder="Titre de la note"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="input-title"
            />

            <textarea
              placeholder="Contenu de la note..."
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="input-content"
              rows={6}
            />

            <div className="color-picker">
              <label>Couleur:</label>
              <div className="color-options">
                {COLORS.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className={`color-btn ${formData.color === color ? "active" : ""}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setFormData({ ...formData, color })}
                  />
                ))}
              </div>
            </div>

            <div className="form-buttons">
              <button type="submit" className="btn-save">
                {editingId ? "Mettre à jour" : "Créer"}
              </button>
              <button type="button" className="btn-cancel" onClick={handleCancel}>
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}

      {notes.length === 0 ? (
        <div className="empty-state">
          <p>Aucune note pour le moment. Créez-en une! 📝</p>
        </div>
      ) : (
        <div className="notes-grid">
          {notes.map((note) => (
            <div key={note.id} className="note-card" style={{ backgroundColor: note.color }}>
              <div className="note-header">
                <h3>{note.title}</h3>
                <div className="note-actions">
                  <button
                    className="btn-edit"
                    onClick={() => handleEditNote(note)}
                    title="Modifier"
                  >
                    ✏️
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => deleteNote(note.id)}
                    title="Supprimer"
                  >
                    🗑️
                  </button>
                </div>
              </div>
              <p className="note-content">{note.content}</p>
              <small className="note-date">
                {new Date(note.createdAt).toLocaleDateString("fr-FR")}
              </small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}