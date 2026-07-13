export interface Theme {

    id: string;

    name: string;

    background: string;

    surface: string;

    primary: string;

    success: string;

    warning: string;

    danger: string;

    text: string;

    secondaryText: string;

}

const themes: Theme[] = [

    {
        id: "dark",
        name: "Dark",

        background: "#0F172A",

        surface: "#1E293B",

        primary: "#6366F1",

        success: "#22C55E",

        warning: "#F59E0B",

        danger: "#EF4444",

        text: "#F8FAFC",

        secondaryText: "#94A3B8"
    },

    {
        id: "light",
        name: "Light",

        background: "#F8FAFC",

        surface: "#FFFFFF",

        primary: "#4F46E5",

        success: "#16A34A",

        warning: "#D97706",

        danger: "#DC2626",

        text: "#111827",

        secondaryText: "#6B7280"
    },

    {
        id: "ocean",
        name: "Ocean",

        background: "#082032",

        surface: "#1B3C59",

        primary: "#00A8E8",

        success: "#2DD4BF",

        warning: "#FBBF24",

        danger: "#F87171",

        text: "#F8FAFC",

        secondaryText: "#CBD5E1"
    },

    {
        id: "forest",
        name: "Forest",

        background: "#112A1E",

        surface: "#1F4D36",

        primary: "#22C55E",

        success: "#4ADE80",

        warning: "#FACC15",

        danger: "#F87171",

        text: "#F9FAFB",

        secondaryText: "#D1D5DB"
    },

    {
        id: "cyber",
        name: "Cyber",

        background: "#09090B",

        surface: "#18181B",

        primary: "#A855F7",

        success: "#22C55E",

        warning: "#F59E0B",

        danger: "#EF4444",

        text: "#FAFAFA",

        secondaryText: "#A1A1AA"
    }

];

export default themes;