export function save<T>(key: string, value: T): void {

    try {

        localStorage.setItem(key, JSON.stringify(value));

    } catch (error) {

        console.error("Erreur lors de la sauvegarde :", error);

    }

}

export function load<T>(key: string, defaultValue: T): T {

    try {

        const data = localStorage.getItem(key);

        if (!data) {

            return defaultValue;

        }

        return JSON.parse(data) as T;

    } catch {

        return defaultValue;

    }

}

export function remove(key: string): void {

    localStorage.removeItem(key);

}

export function clear(): void {

    localStorage.clear();

}