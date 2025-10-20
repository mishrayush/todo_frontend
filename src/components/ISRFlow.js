// components/ISRFlow.js
export default function ISRFlow() {
    return (
        <div className="flex flex-col items-center gap-3 mt-4 text-xs text-gray-700">
            <div className="flex items-center gap-3">
                <div className="bg-yellow-100 px-3 py-2 rounded-md shadow-sm font-medium">
                    🏗️ Build Time
                </div>
                <span>➡️</span>
                <div className="bg-purple-100 px-3 py-2 rounded-md shadow-sm font-medium">
                    🧱 Static HTML Created
                </div>
            </div>

            <div className="flex items-center gap-3">
                <span>⏳</span>
                <div className="bg-blue-100 px-3 py-2 rounded-md shadow-sm font-medium">
                    🌐 Served to Users
                </div>
                <span>➡️</span>
                <div className="bg-green-100 px-3 py-2 rounded-md shadow-sm font-medium">
                    ♻️ Revalidate After 10s
                </div>
            </div>

            <p className="text-gray-500 text-[11px] mt-2 italic">
                (A background regeneration happens only when a user visits after the interval)
            </p>
        </div>
    );
}
