import { useAppStore } from "../store/appStore";
import "../styles/budget.css";

export default function BudgetPage() {
  const { budgetItems, addBudgetItem, deleteBudgetItem } = useAppStore();

  const handleAddBudgetItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    addBudgetItem({
      name: String(formData.get("name")),
      amount: Number(formData.get("amount")),
      category: String(formData.get("category")),
      date: String(formData.get("date")),
      type: String(formData.get("type")) as "income" | "expense",
    });

    e.currentTarget.reset();
  };

  const totalIncome = budgetItems
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalExpense = budgetItems
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="budget-container">
      <h1>Budget</h1>

      <div className="budget-summary">
        <div className="summary-card income">
          <h3>Revenus</h3>
          <p className="amount">${totalIncome.toFixed(2)}</p>
        </div>
        <div className="summary-card expense">
          <h3>Dépenses</h3>
          <p className="amount">${totalExpense.toFixed(2)}</p>
        </div>
        <div className="summary-card balance">
          <h3>Solde</h3>
          <p className="amount">${balance.toFixed(2)}</p>
        </div>
      </div>

      <form onSubmit={handleAddBudgetItem} className="budget-form">
        <input type="text" name="name" placeholder="Nom" required />
        <input type="number" name="amount" placeholder="Montant" required />
        <input type="date" name="date" required />
        <select name="category" required>
          <option>Catégorie</option>
          <option>Alimentation</option>
          <option>Transport</option>
          <option>Loisirs</option>
          <option>Logement</option>
        </select>
        <select name="type" required>
          <option>Type</option>
          <option value="income">Revenu</option>
          <option value="expense">Dépense</option>
        </select>
        <button type="submit">Ajouter</button>
      </form>

      <div className="budget-list">
        {budgetItems.map((item) => (
          <div key={item.id} className="budget-item">
            <div className="budget-info">
              <h4>{item.name}</h4>
              <p>{item.category}</p>
            </div>
            <div className="budget-amount">
              <span className={item.type}>${item.amount.toFixed(2)}</span>
            </div>
            <button onClick={() => deleteBudgetItem(item.id)}>✕</button>
          </div>
        ))}
      </div>
    </div>
  );
}