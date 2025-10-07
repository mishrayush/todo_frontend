"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const API = "http://localhost:5000/api/users/register";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSignup = (e) => {
        e.preventDefault();
        const data = {
            username: name,
            email: email,
            password: password
        };

        setLoading(true);
        if (email && password) {
            axios
                .post(API, data)
                .then((res) => router.push("/login"))
                .catch(console.error('error-->'))
                .finally(() => setLoading(false));


        } else {
            console.error("Please fill all fields");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

                <form onSubmit={handleSignup} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-sky-300"
                    />
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
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-sm text-slate-500 mt-4">
                    Already have an account?{" "}
                    <Link href="/login" className="text-sky-600 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
