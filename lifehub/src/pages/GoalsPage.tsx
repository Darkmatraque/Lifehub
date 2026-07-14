import { useAppStore } from "../store/appStore";
import "../styles/goals.css";

export default function GoalsPage() {
  const { goals, addGoal, deleteGoal, updateGoal } = useAppStore();

  const handleAddGoal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    addGoal({
      title: String(formData.get("title")),
      description: String(formData.get("description")),
      targetDate: String(formData.get("targetDate")),
      progress: 0,
      category: String(formData.get("category")),
    });

    e.currentTarget.reset();
  };

  const handleUpdateProgress = (id: string, progress: number) => {
    updateGoal(id, { progress: Math.min(100, Math.max(0, progress)) });
  };

  return (
    <div className="goals-container">
      <h1>Objectifs</h1>

      <form onSubmit={handleAddGoal} className="goals-form">
        <input type="text" name="title" placeholder="Titre" required />
        <textarea
          name="description"
          placeholder="Description"
          required
        ></textarea>
        <input type="date" name="targetDate" required />
        <select name="category" required>
          <option>Catégorie</option>
          <option>Personnel</option>
          <option>Professionnel</option>
          <option>Santé</option>
          <option>Finance</option>
        </select>
        <button type="submit">Ajouter Objectif</button>
      </form>

      <div className="goals-list">
        {goals.map((goal) => (
          <div key={goal.id} className="goal-card">
            <div className="goal-header">
              <h3>{goal.title}</h3>
              <button onClick={() => deleteGoal(goal.id)}>✕</button>
            </div>
            <p>{goal.description}</p>
            <div className="progress-container">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
              <span>{goal.progress}%</span>
            </div>
            <div className="progress-controls">
              <button onClick={() => handleUpdateProgress(goal.id, goal.progress - 10)}>
                -10%
              </button>
              <button onClick={() => handleUpdateProgress(goal.id, goal.progress + 10)}>
                +10%
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}