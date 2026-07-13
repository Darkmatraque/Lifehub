export function generateId(): string {

    return crypto.randomUUID();

}

export function capitalize(text: string): string {

    if (!text.length) {

        return "";

    }

    return text.charAt(0).toUpperCase() + text.slice(1);

}

export function truncate(text: string, length: number): string {

    if (text.length <= length) {

        return text;

    }

    return text.substring(0, length) + "...";

}