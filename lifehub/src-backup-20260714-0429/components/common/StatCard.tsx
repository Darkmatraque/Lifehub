interface Props {

    title: string;

    value: string | number;

    description: string;

    emoji: string;

}

export default function StatCard({

    title,

    value,

    description,

    emoji

}: Props) {

    return (

        <div className="stat-card">

            <div className="stat-top">

                <span className="emoji">

                    {emoji}

                </span>

                <h3>{title}</h3>

            </div>

            <h2>{value}</h2>

            <p>{description}</p>

        </div>

    );

}
