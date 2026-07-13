import PageContainer from "../components/layout/PageContainer";

import welcomeMessages from "../data/welcome";

export default function Dashboard() {

    const randomMessage =
        welcomeMessages[
            Math.floor(Math.random() * welcomeMessages.length)
        ];

    return (

        <PageContainer>

            <section className="hero">

                <div>

                    <h1>

                        LifeHub

                    </h1>

                    <p>

                        {randomMessage}

                    </p>

                </div>

            </section>

            <section className="dashboard-grid">

                <div className="dashboard-card">

                    <h3>

                        ✅ Tâches

                    </h3>

                    <h2>

                        0

                    </h2>

                    <p>

                        Aucune tâche aujourd'hui.

                    </p>

                </div>

                <div className="dashboard-card">

                    <h3>

                        📝 Notes

                    </h3>

                    <h2>

                        0

                    </h2>

                    <p>

                        Aucune note enregistrée.

                    </p>

                </div>

                <div className="dashboard-card">

                    <h3>

                        🎯 Objectifs

                    </h3>

                    <h2>

                        0%

                    </h2>

                    <p>

                        Commence un nouvel objectif.

                    </p>

                </div>

                <div className="dashboard-card">

                    <h3>

                        💰 Budget

                    </h3>

                    <h2>

                        0 €

                    </h2>

                    <p>

                        Aucun mouvement enregistré.

                    </p>

                </div>

            </section>

        </PageContainer>

    );

}