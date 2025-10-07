"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const API = "http://localhost:5000/api/users/login";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) router.push("/dashboard");
    }, [router]);

    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password
        };
        if (email && password) {
            axios
                .post(API, data)
                .then((res) => {
                    const { token, user } = res.data;
                    localStorage.setItem("token", token);
                    localStorage.setItem("user", JSON.stringify(user));
                    router.push("/dashboard");
                })
                .catch(console.error('error-->'))
                .finally(() => setLoading(false));


        } else {
            alert("Please enter valid credentials!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-sky-300"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-sky-300"
                    />
                    <button
                        type="submit"
                        className="w-full bg-sky-600 text-white py-2 rounded-md hover:bg-sky-700 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-sm text-slate-500 mt-4">
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-sky-600 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
