import Card from "../common/Card";

import welcomeMessages from "../../data/welcome";

export default function DailyQuote() {

    const quote =
        welcomeMessages[
            new Date().getDate() % welcomeMessages.length
        ];

    return (

        <Card title="💡 Citation du jour">

            <p className="quote">

                "{quote}"

            </p>

        </Card>

    );

}
