import { useSettingsStore } from "../../store/settingsStore";

export default function Header() {

    const username = useSettingsStore(
        (state) => state.settings.username
    );

    const now = new Date();

    return (

        <header className="header">

            <div>

                <h2>

                    Bonjour {username} 👋

                </h2>

                <p>

                    {now.toLocaleDateString("fr-FR", {

                        weekday: "long",

                        day: "numeric",

                        month: "long",

                        year: "numeric"

                    })}

                </p>

            </div>

        </header>

    );

}