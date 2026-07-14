import { useState } from 'react';
import styles from './TodoForm.module.css';

interface FormData {
  title: string;
  description: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  category: string;
}

interface TodoFormProps {
  onSubmit: (formData: FormData) => void;
  onCancel: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium',
    category: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title.trim()) {
      onSubmit(formData);
      setFormData({
        title: '',
        description: '',
        dueDate: '',
        priority: 'medium',
        category: '',
      });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="title">Titre *</label>
        <input
          id="title"
          type="text"
          placeholder="Titre de la tâche"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="Description de la tâche"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={3}
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="dueDate">Date limite</label>
          <input
            id="dueDate"
            type="date"
            value={formData.dueDate}
            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="priority">Priorité</label>
          <select
            id="priority"
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: e.target.value as 'low' | 'medium' | 'high' })}
          >
            <option value="low">Basse</option>
            <option value="medium">Moyenne</option>
            <option value="high">Haute</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="category">Catégorie</label>
          <input
            id="category"
            type="text"
            placeholder="Catégorie"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          />
        </div>
      </div>

      <div className={styles.formActions}>
        <button type="submit" className={styles.submitBtn}>
          Ajouter
        </button>
        <button type="button" className={styles.cancelBtn} onClick={onCancel}>
          Annuler
        </button>
      </div>
    </form>
  );
};

export default TodoForm;