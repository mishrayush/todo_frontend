// pages/ssg-demo.js
import BuildFlow from "../../components/BuildFlow";

export async function getStaticProps() {
    // Simulate data fetched at build time
    const data = {
        message: "This page was built at build time!",
        buildTime: new Date().toLocaleString(),
    };

    return {
        props: {
            data,
        },
    };
}

export default function SSGDemo({ data }) {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px] text-center">
                <h1 className="text-2xl font-bold mb-4">⚡ Static Site Generation (SSG)</h1>

                <p className="text-sm text-gray-600 mb-4">
                    This page was pre-rendered at <strong>build time</strong>.
                </p>

                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <p className="font-mono text-sm">
                        <strong>Build Time:</strong>
                        <br />
                        <span className="text-blue-600">{data.buildTime}</span>
                    </p>
                </div>

                <BuildFlow />

                <div className="text-left bg-blue-50 p-4 rounded-lg text-sm mt-6">
                    <p>🧠 <strong>How SSG Works:</strong></p>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                        <li>Next.js runs <code>getStaticProps()</code> during build.</li>
                        <li>HTML is generated and stored on the server/CDN.</li>
                        <li>Users instantly get a static HTML page.</li>
                        <li>To update data → Rebuild or redeploy the app.</li>
                    </ul>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                    ⏳ Refreshing won't change time — rebuild to update.
                </p>
            </div>
        </main>
    );
}
