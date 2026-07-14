export function formatDate(date: Date): string {

    return date.toLocaleDateString("fr-FR", {

        weekday: "long",

        day: "numeric",

        month: "long",

        year: "numeric"

    });

}

export function formatTime(date: Date): string {

    return date.toLocaleTimeString("fr-FR", {

        hour: "2-digit",

        minute: "2-digit"

    });

}

export function getTodayISO(): string {

    return new Date().toISOString();

}