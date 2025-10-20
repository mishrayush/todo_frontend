"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API = "http://localhost:5000/api/todo";

export default function Dashboard() {
    const router = useRouter();
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);

    // Redirect to login if not authenticated
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) router.push("/login");
    }, [router]);


    const getTodoList = () => {
        const token = localStorage.getItem("token");
        axios
            .get(API + '/list', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => setTodos(res.data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }
    // Load todos
    useEffect(() => {
        setLoading(true);
        getTodoList()
    }, []);

    // Add todo
    const addTodo = async () => {
        const token = localStorage.getItem("token");
        if (!text.trim()) return;
        try {
            const res = await axios.post(`${API}/add`, { title: text.trim() }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // setTodos((prev) => [res.data, ...prev]);
            getTodoList()
            setText("");
        } catch (err) {
            console.error(err);
        }
    };

    // Toggle completed
    const toggleTodo = async (id, completed) => {
        const token = localStorage.getItem("token");
        try {
            const res = await axios.put(`${API}/update/${id}`, { completed: !completed }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setTodos(todos.map((t) => (t._id === id ? res.data : t)));
        } catch (err) {
            console.error(err);
        }
    };

    // Delete todo
    const deleteTodo = async (id) => {
        const token = localStorage.getItem("token");
        try {
            await axios.delete(`${API}/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setTodos(todos.filter((t) => t._id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/login");
    };

    console.log('3012 todos', todos)

    return (
        <div className="min-h-screen bg-slate-50 flex items-start justify-center p-6">
            <div className="w-full max-w-2xl">
                <header className="mb-6 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-semibold text-slate-800">Todo App</h1>
                        <p className="text-sm text-slate-500">Manage your daily tasks easily.</p>
                    </div>
                    {/* <button
                        onClick={handleLogout}
                        className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Logout
                    </button> */}
                </header>

                <main className="bg-white shadow-md rounded-lg p-6">
                    {/* Input */}
                    <div className="flex gap-3 items-center mb-6">
                        <input
                            type="text"
                            placeholder="Add a new todo"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && addTodo()}
                            className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300"
                        />
                        <button
                            onClick={addTodo}
                            className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700"
                        >
                            Add
                        </button>
                    </div>

                    {/* Todos list */}
                    <section>
                        {loading ? (
                            <div className="text-center py-8 text-slate-500">Loading...</div>
                        ) : todos.length === 0 ? (
                            <div className="text-center py-8 text-slate-400">
                                No todos yet — add one above ✨
                            </div>
                        ) : (
                            <ul className="space-y-3">
                                {todos.map((t) => (
                                    <li
                                        key={t._id}
                                        className="flex items-center justify-between gap-3 p-3 border border-slate-100 rounded-lg hover:shadow-sm"
                                    >
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => toggleTodo(t._id, t.completed)}
                                                className={`w-6 h-6 flex items-center justify-center rounded-md border ${t.completed
                                                    ? "bg-sky-600 border-sky-600 text-white"
                                                    : "border-slate-300"
                                                    }`}
                                            >
                                                {t.completed ? "✓" : ""}
                                            </button>
                                            <span
                                                onClick={() => toggleTodo(t._id, t.completed)}
                                                className={`cursor-pointer select-none ${t.completed
                                                    ? "line-through text-slate-400"
                                                    : "text-slate-800"
                                                    }`}
                                            >
                                                {t.title}
                                            </span>
                                        </div>

                                        <button
                                            onClick={() => deleteTodo(t._id)}
                                            className="text-sm text-red-600 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                </main>
            </div>
        </div>
    );
}
