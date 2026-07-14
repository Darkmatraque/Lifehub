import Card from "../common/Card";

export default function DashboardHero() {

    const hour = new Date().getHours();

    let greeting = "Bonsoir";

    if (hour < 12) greeting = "Bonjour";

    else if (hour < 18) greeting = "Bon après-midi";

    return (

        <Card>

            <div className="hero-content">

                <div>

                    <h1>

                        {greeting} 👋

                    </h1>

                    <p>

                        Bienvenue sur LifeHub.

                        Organise ta journée.

                    </p>

                </div>

            </div>

        </Card>

    );

}
