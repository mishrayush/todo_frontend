import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navigation from "@/components/Navigation";
import AppCards from "@/components/AppCards";

export default function Dashboard() {
    const router = useRouter();
    const [user, setUser] = useState(null);

    // Example applications (you can later fetch this from your backend)
    const [apps] = useState([
        {
            id: 1,
            name: "Learning App",
            description: "Track and manage your courses and progress.",
            icon: "🎓",
            link: "/learning",
            color: "bg-blue-500",
        },
        {
            id: 2,
            name: "Todo App",
            description: "Stay productive with daily task management.",
            icon: "📝",
            link: "/todos",
            color: "bg-green-500",
        },
        {
            id: 3,
            name: "Redux Flow(Redux tool kit)",
            description: "How data flow in redux",
            icon: "🧠",
            link: "/redux-visual",
            color: "bg-purple-500",
        },
        {
            id: 4,
            name: "Static Site Generation(SSG)",
            description: "SSG — generated at build time, and served instantly to all users without hitting any API at runtime.",
            icon: "🧠",
            link: "/ssg",
            color: "bg-blue-500",
        },
        {
            id: 5,
            name: "Incremental Static Regeneration(IRS)",
            description: "SSG but automatically re-generated in the background after a set time (revalidate) when new requests come in.",
            icon: "🧠",
            link: "/irs",
            color: "bg-orange-500",
        },
    ]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userData = localStorage.getItem("user");

        if (!token || !userData) {
            router.push("/login");
        } else {
            setUser(JSON.parse(userData));
        }
    }, []);

    if (!user) return null;

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navigation />

            <main className="flex-1 p-6 space-y-8">
                <h1 className="text-2xl font-semibold text-gray-800">
                    Welcome, <span className="text-blue-600">{user.username}</span> 👋
                </h1>

                {/* Applications Section */}
                <section>
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">
                        Your Applications
                    </h2>
                    <AppCards apps={apps} />
                </section>
            </main>
        </div>
    );
}
