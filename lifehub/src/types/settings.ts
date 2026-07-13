export type ThemeMode =
    | "dark"
    | "light"
    | "ocean"
    | "forest"
    | "cyber";

export interface Settings {

    username: string;

    theme: ThemeMode;

    language: string;

    accentColor: string;

    animations: boolean;

    notifications: boolean;

    compactMode: boolean;

}