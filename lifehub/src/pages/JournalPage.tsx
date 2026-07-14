import { useState } from "react";
import { useAppStore } from "../store/appStore";
import "../styles/journal.css";

export default function JournalPage() {
  const { entries, addEntry, deleteEntry } = useAppStore();
  const [showForm, setShowForm] = useState(false);

  const handleAddEntry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    addEntry({
      title: String(formData.get("title")),
      content: String(formData.get("content")),
      mood: String(formData.get("mood")) as "happy" | "neutral" | "sad",
      date: new Date().toISOString().split("T")[0],
    });

    e.currentTarget.reset();
    setShowForm(false);
  };

  return (
    <div className="journal-container">
      <h1>Journal</h1>

      <button
        className="new-entry-btn"
        onClick={() => setShowForm(!showForm)}
      >
        + Nouvelle entrée
      </button>

      {showForm && (
        <form onSubmit={handleAddEntry} className="journal-form">
          <input type="text" name="title" placeholder="Titre" required />
          <textarea
            name="content"
            placeholder="Contenu..."
            required
          ></textarea>
          <select name="mood" required>
            <option>Humeur</option>
            <option value="happy">😊 Heureux</option>
            <option value="neutral">😐 Neutre</option>
            <option value="sad">😢 Triste</option>
          </select>
          <button type="submit">Enregistrer</button>
        </form>
      )}

      <div className="entries-list">
        {entries.map((entry) => (
          <div key={entry.id} className="entry-card">
            <div className="entry-header">
              <h3>{entry.title}</h3>
              <span className="mood">{entry.mood === "happy" ? "😊" : entry.mood === "neutral" ? "😐" : "😢"}</span>
            </div>
            <p>{entry.content}</p>
            <small>{new Date(entry.date).toLocaleDateString()}</small>
            <button onClick={() => deleteEntry(entry.id)}>Supprimer</button>
          </div>
        ))}
      </div>
    </div>
  );
}