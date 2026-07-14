import Card from "../common/Card";
import Button from "../common/Button";

export default function QuickActions() {

    return (

        <Card title="⚡ Actions rapides">

            <div className="quick-actions">

                <Button>

                    ➕ Nouvelle tâche

                </Button>

                <Button variant="secondary">

                    📝 Nouvelle note

                </Button>

            </div>

        </Card>

    );

}
