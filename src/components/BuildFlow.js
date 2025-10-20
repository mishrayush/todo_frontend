// components/BuildFlow.js
export default function BuildFlow() {
    return (
        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-600">
            <div className="p-2 bg-yellow-100 rounded-lg shadow-sm">🛠️ Build Time</div>
            <span>➡️</span>
            <div className="p-2 bg-green-100 rounded-lg shadow-sm">📦 Static HTML Generated</div>
            <span>➡️</span>
            <div className="p-2 bg-blue-100 rounded-lg shadow-sm">🌐 User Sees Cached Page</div>
        </div>
    );
}
