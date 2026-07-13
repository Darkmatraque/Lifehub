import PageContainer from "../components/layout/PageContainer";

import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";

export default function Todo() {

    return (

        <PageContainer>

            <h1>

                ✅ Gestionnaire de tâches

            </h1>

            <p>

                Organise facilement toutes tes tâches.

            </p>

            <TodoForm />

            <TodoList />

        </PageContainer>

    );

}
