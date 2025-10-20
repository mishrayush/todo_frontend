// components/ApiDemo.js
import Navigation from "@/components/Navigation";
import { useState } from "react";

const API_URL = 'https://todo-backend-ashy-alpha.vercel.app/api/todo/list'
export default function ApiDemo() {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    // 1️⃣ Using Promise .then()
    const fetchWithPromise = () => {
        const token = localStorage.getItem("token");
        console.time()
        setLoading(true);
        fetch(API_URL, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },)
            .then((res) => res.json())
            .then((data) => {
                setResult(data);
                setLoading(false);
            })
            .catch((err) => {
                setResult({ error: err.message });
                setLoading(false);
            });
        console.timeEnd()
    };

    // 2️⃣ Using Async/Await
    const fetchWithAsyncAwait = async () => {
        const token = localStorage.getItem("token");
        console.time()
        setLoading(true);
        try {
            const res = await fetch(API_URL, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await res.json();
            setResult(data);
        } catch (err) {
            setResult({ error: err.message });
        } finally {
            setLoading(false);
        }
        console.timeEnd()
    };

    // 3️⃣ Using Callback
    const fetchWithCallback = (callback) => {
        const token = localStorage.getItem("token");
        console.time()
        setLoading(true);
        fetch(API_URL, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => callback(null, data))
            .catch((err) => callback(err, null));
        console.timeEnd()
    };

    const handleCallback = () => {
        fetchWithCallback((err, data) => {
            if (err) setResult({ error: err.message });
            else setResult(data);
            setLoading(false);
        });
    };

    return (
        <div className="p-10 space-y-6 font-sans">
            <Navigation />
            <h2 className="text-2xl font-bold">API Call Demo</h2>

            <div className="flex gap-4">
                <button
                    onClick={fetchWithPromise}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Fetch with Promise
                </button>
                <button
                    onClick={fetchWithAsyncAwait}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Fetch with Async/Await
                </button>
                <button
                    onClick={handleCallback}
                    className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                >
                    Fetch with Callback
                </button>
            </div>

            <div className="mt-6 p-4 border rounded bg-gray-50 min-h-[80px]">
                {loading ? (
                    <p>Loading...</p>
                ) : result ? (
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                ) : (
                    <p>No data fetched yet.</p>
                )}
            </div>
        </div>
    );
}
