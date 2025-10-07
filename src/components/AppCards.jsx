import { useRouter } from "next/router";

export default function AppCards({ apps }) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {apps.map((app) => (
        <div
          key={app.id}
          className="cursor-pointer transition-transform transform hover:scale-105"
          onClick={() => router.push(app.link)}
        >
          <div
            className={`rounded-xl shadow-lg p-6 text-white flex flex-col justify-between h-40 ${app.color}`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{app.name}</h3>
              <span className="text-3xl">{app.icon}</span>
            </div>
            <p className="text-sm mt-3 opacity-90">{app.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
