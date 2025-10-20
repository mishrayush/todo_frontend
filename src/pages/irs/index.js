// pages/isr-demo.js
import ISRFlow from "../../components/ISRFlow";

export async function getStaticProps() {
    // Simulate fetching fresh data each build/regeneration
    const data = {
        title: "⏱️ Incremental Static Regeneration (ISR)",
        message:
            "This page is statically generated, but can automatically update every few seconds without a full rebuild.",
        generatedAt: new Date().toLocaleString(),
    };

    return {
        props: { data },
        revalidate: 10, // ✅ Page regenerates every 10 seconds in the background
    };
}

export default function ISRDemo({ data }) {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-green-50 text-gray-800 p-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
                <h1 className="text-2xl font-bold mb-2 text-green-700">{data.title}</h1>
                <p className="text-gray-600 text-sm mb-4">{data.message}</p>

                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                    <p className="font-mono text-sm text-gray-700">
                        <strong>🕒 Last Generated At:</strong>
                        <br />
                        <span className="text-green-600">{data.generatedAt}</span>
                    </p>
                </div>

                <div className="bg-green-100 border border-green-300 rounded-lg py-2 px-4 mb-6">
                    <p className="text-green-800 text-sm font-semibold">
                        ♻️ This page uses <span className="underline">Incremental Static Regeneration (ISR)</span>
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                        (Rebuilds every 10 seconds when a user visits)
                    </p>
                </div>

                <ISRFlow />

                <div className="text-left text-sm mt-6 bg-green-50 p-4 rounded-lg">
                    <p className="font-semibold text-green-700">💡 How ISR Works:</p>
                    <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
                        <li>Next.js pre-renders this page at build time (SSG).</li>
                        <li>After <code>revalidate</code> seconds, the next request triggers a regeneration.</li>
                        <li>The old static page is served until regeneration completes.</li>
                        <li>The new static file replaces the old one seamlessly.</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
