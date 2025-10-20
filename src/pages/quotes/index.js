import Navigation from "@/components/Navigation";
import { useEffect, useState } from "react";

export default function QuotesPage() {
    const [quotes, setQuotes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    // Fetch quotes from our API
    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                const res = await fetch("/api/quote");
                const data = await res.json();
                setQuotes(data);
            } catch (error) {
                console.error("Error fetching quotes:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchQuotes();
    }, []);

    const nextQuote = () => {
        setCurrentIndex((prev) => (prev + 1) % quotes.length);
    };

    const randomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentIndex(randomIndex);
    };

    if (loading)
        return (
            <div className="h-screen flex justify-center items-center text-lg font-semibold">
                🔄 Loading Quotes...
            </div>
        );

    const { quote, author } = quotes[currentIndex] || {};

    return (
        <>
            <Navigation />
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
                <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-xl w-full text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">
                        🌟 Inspirational Quotes
                    </h1>

                    <p className="text-lg italic text-gray-700 mb-4">
                        “{quote || "No quote found"}”
                    </p>

                    <p className="text-sm text-gray-500 mb-8">— {author || "Unknown"}</p>

                    <div className="flex justify-center gap-4">
                        <button
                            onClick={nextQuote}
                            className="bg-indigo-500 text-white px-5 py-2 rounded-lg hover:bg-indigo-600 transition"
                        >
                            Next ➡️
                        </button>
                        <button
                            onClick={randomQuote}
                            className="bg-purple-500 text-white px-5 py-2 rounded-lg hover:bg-purple-600 transition"
                        >
                            🎲 Random
                        </button>
                    </div>

                    <p className="text-xs text-gray-400 mt-6">
                        Showing {currentIndex + 1} / {quotes.length}
                    </p>
                </div>
            </div>
        </>

    );
}
