import { useState } from "react";
import { useAppStore, Task } from "../store/appStore";
import { Plus, Trash2, Check, X } from "lucide-react";
import "./TodoPage.css";

export default function TodoPage() {
  const { tasks, addTask, deleteTask, completeTask, updateTask } = useAppStore();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "medium" as "low" | "medium" | "high",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    addTask({
      title: formData.title,
      description: formData.description,
      dueDate: formData.dueDate,
      priority: formData.priority,
      completed: false,
    });

    setFormData({
      title: "",
      description: "",
      dueDate: "",
      priority: "medium",
    });
    setShowForm(false);
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="todo-container">
      {/* Header */}
      <div className="todo-header">
        <div className="todo-stats">
          <h2>Mes Tâches</h2>
          <p className="stats-text">
            {completedCount} / {totalCount} complétées
          </p>
        </div>
        <button className="btn-add-task" onClick={() => setShowForm(!showForm)}>
          <Plus size={20} /> Nouvelle tâche
        </button>
      </div>

      {/* Add Task Form */}
      {showForm && (
        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Titre de la tâche"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
            autoFocus
          />
          <textarea
            placeholder="Description (optionnel)"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            rows={3}
          />
          <div className="form-row">
            <input
              type="date"
              value={formData.dueDate}
              onChange={(e) =>
                setFormData({ ...formData, dueDate: e.target.value })
              }
            />
            <select
              value={formData.priority}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  priority: e.target.value as "low" | "medium" | "high",
                })
              }
            >
              <option value="low">Basse priorité</option>
              <option value="medium">Priorité moyenne</option>
              <option value="high">Haute priorité</option>
            </select>
          </div>
          <div className="form-buttons">
            <button type="submit" className="btn-submit">
              Créer
            </button>
            <button
              type="button"
              className="btn-cancel"
              onClick={() => setShowForm(false)}
            >
              Annuler
            </button>
          </div>
        </form>
      )}

      {/* Tasks List */}
      <div className="todo-list">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <p>Aucune tâche pour le moment</p>
            <button
              className="btn-add-task"
              onClick={() => setShowForm(true)}
            >
              <Plus size={20} /> Créer la première
            </button>
          </div>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className={`todo-item ${task.completed ? "completed" : ""} priority-${task.priority}`}
            >
              <button
                className="task-checkbox"
                onClick={() => completeTask(task.id)}
                title="Marquer comme complétée"
              >
                {task.completed && <Check size={20} />}
              </button>

              <div className="task-content">
                <h3>{task.title}</h3>
                {task.description && <p>{task.description}</p>}
                <div className="task-meta">
                  {task.dueDate && (
                    <span className="task-date">
                      📅 {new Date(task.dueDate).toLocaleDateString("fr-FR")}
                    </span>
                  )}
                  <span className={`task-priority priority-${task.priority}`}>
                    {task.priority === "low" && "🟢 Basse"}
                    {task.priority === "medium" && "🟡 Moyenne"}
                    {task.priority === "high" && "🔴 Haute"}
                  </span>
                </div>
              </div>

              <button
                className="btn-delete"
                onClick={() => deleteTask(task.id)}
                title="Supprimer"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}