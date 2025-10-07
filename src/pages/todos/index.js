import Navigation from "@/components/Navigation";
import TodoList from "@/components/TodoList";

export default function TodosPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navigation />
            <main className="flex-1 p-6">
                <TodoList />
            </main>
        </div>
    );
}
