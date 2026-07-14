import { create } from "zustand";

import { Settings } from "../types/settings";

const defaultSettings: Settings = {

    username: "Utilisateur",

    theme: "dark",

    language: "fr",

    accentColor: "#6366F1",

    animations: true,

    notifications: true,

    compactMode: false

};

interface SettingsStore {

    settings: Settings;

    update: (data: Partial<Settings>) => void;

}

export const useSettingsStore = create<SettingsStore>((set) => ({

    settings: defaultSettings,

    update: (data) =>

        set((state) => ({

            settings: {

                ...state.settings,

                ...data

            }

        }))

}));