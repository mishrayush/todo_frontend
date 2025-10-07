export default function TodoItem({ todo, toggleComplete, deleteTodo }) {
    return (
        <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded shadow mb-2">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                    className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <span className={`ml-3 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800 dark:text-gray-100'}`}>
                    {todo.text}
                </span>
            </div>
            <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 font-bold"
            >
                ✕
            </button>
        </div>
    );
}
