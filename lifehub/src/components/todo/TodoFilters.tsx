import Input from "../common/Input";

interface Props {

    search: string;

    onSearchChange: (value: string) => void;

}

export default function TodoFilters({

    search,

    onSearchChange

}: Props) {

    return (

        <div className="todo-filters">

            <Input
                placeholder="Rechercher une tâche..."
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
            />

        </div>

    );

}
