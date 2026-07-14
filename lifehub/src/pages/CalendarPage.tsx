import { useState } from "react";
import { useAppStore } from "../store/appStore";
import "../styles/calendar.css";

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
}

export default function CalendarPage() {
  const { events, addEvent, deleteEvent, updateEvent } = useAppStore();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    time: "09:00",
    description: "",
  });

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (day: number) => {
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const dayStr = String(day).padStart(2, "0");
    return `${currentDate.getFullYear()}-${month}-${dayStr}`;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDateClick = (day: number) => {
    setSelectedDate(formatDate(day));
    setShowForm(true);
    setFormData({ title: "", time: "09:00", description: "" });
    setEditingId(null);
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    if (editingId) {
      updateEvent(editingId, {
        title: formData.title,
        time: formData.time,
        description: formData.description,
        date: selectedDate,
      });
      setEditingId(null);
    } else {
      addEvent({
        title: formData.title,
        date: selectedDate,
        time: formData.time,
        description: formData.description,
      });
    }

    setFormData({ title: "", time: "09:00", description: "" });
    setShowForm(false);
  };

  const handleEditEvent = (event: CalendarEvent) => {
    setFormData({
      title: event.title,
      time: event.time,
      description: event.description,
    });
    setEditingId(event.id);
    setSelectedDate(event.date);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ title: "", time: "09:00", description: "" });
  };

  const getDaysArray = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const getEventsForDate = (date: string) => {
    return events.filter((event) => event.date === date);
  };

  const days = getDaysArray();
  const monthName = currentDate.toLocaleString("fr-FR", { month: "long", year: "numeric" });

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h1>📅 Calendrier</h1>
      </div>

      <div className="calendar-main">
        {/* Calendrier */}
        <div className="calendar-widget">
          <div className="calendar-navigation">
            <button onClick={handlePrevMonth}>← Précédent</button>
            <h2>{monthName}</h2>
            <button onClick={handleNextMonth}>Suivant →</button>
          </div>

          <div className="calendar-weekdays">
            <div className="weekday">Lun</div>
            <div className="weekday">Mar</div>
            <div className="weekday">Mer</div>
            <div className="weekday">Jeu</div>
            <div className="weekday">Ven</div>
            <div className="weekday">Sam</div>
            <div className="weekday">Dim</div>
          </div>

          <div className="calendar-days">
            {days.map((day, index) => {
              const dateStr = day ? formatDate(day) : "";
              const dayEvents = day ? getEventsForDate(dateStr) : [];
              const isToday =
                day &&
                day === new Date().getDate() &&
                currentDate.getMonth() === new Date().getMonth() &&
                currentDate.getFullYear() === new Date().getFullYear();

              return (
                <div
                  key={index}
                  className={`calendar-day ${day ? "" : "empty"} ${isToday ? "today" : ""}`}
                  onClick={() => day && handleDateClick(day)}
                >
                  {day && (
                    <>
                      <div className="day-number">{day}</div>
                      <div className="day-events">
                        {dayEvents.slice(0, 2).map((event) => (
                          <div key={event.id} className="day-event-dot" title={event.title}>
                            •
                          </div>
                        ))}
                        {dayEvents.length > 2 && <span className="more-events">+{dayEvents.length - 2}</span>}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Events List */}
        <div className="events-sidebar">
          <h3>📌 Événements</h3>

          {showForm && (
            <form className="event-form" onSubmit={handleAddEvent}>
              <h4>{editingId ? "Modifier l'événement" : "Ajouter un événement"}</h4>
              <p className="form-date">{selectedDate}</p>

              <input
                type="text"
                placeholder="Titre de l'événement"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />

              <input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              />

              <textarea
                placeholder="Description (optionnel)"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
              />

              <div className="form-buttons">
                <button type="submit" className="btn-submit">
                  {editingId ? "Modifier" : "Ajouter"}
                </button>
                <button type="button" className="btn-cancel" onClick={handleCancel}>
                  Annuler
                </button>
              </div>
            </form>
          )}

          <div className="events-list">
            {events.length === 0 ? (
              <p className="empty-message">Aucun événement</p>
            ) : (
              events.map((event) => (
                <div key={event.id} className="event-item">
                  <div className="event-info">
                    <h4>{event.title}</h4>
                    <p className="event-date">
                      {new Date(event.date).toLocaleDateString("fr-FR")}
                    </p>
                    <p className="event-time">🕐 {event.time}</p>
                    {event.description && <p className="event-desc">{event.description}</p>}
                  </div>
                  <div className="event-actions">
                    <button
                      className="btn-edit"
                      onClick={() => handleEditEvent(event)}
                      title="Modifier"
                    >
                      ✏️
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => deleteEvent(event.id)}
                      title="Supprimer"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}