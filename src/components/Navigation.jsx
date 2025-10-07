import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  const navItems = [
     { name: "Dashboard", path: "/dashboard" },
    { name: "Todos", path: "/todos" },
    // { name: "Profile", path: "/profile" },
    // { name: "Settings", path: "/settings" },
  ];


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
<nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
  {/* Logo */}
  <div
    className="flex items-center gap-2 cursor-pointer"
    onClick={() => router.push("/dashboard")}
  >
    <img
      src="/generated-image.png" // 🖼️ Place your logo in the /public folder
      alt="My Learning App"
      className="h-8 w-8 object-contain"
    />
    <span className="text-lg font-semibold text-blue-600 hidden sm:inline">
      Apps
    </span>
  </div>

  {/* Navigation Items */}
  <div className="flex gap-6">
    {navItems.map((item) => (
      <button
        key={item.name}
        onClick={() => router.push(item.path)}
        className={`text-gray-700 hover:text-blue-600 transition ${
          router.pathname === item.path ? "font-semibold text-blue-600" : ""
        }`}
      >
        {item.name}
      </button>
    ))}
    
  <button
          className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
          onClick={handleLogout}
        >
          Logout
        </button>
  </div>
</nav>
  );
}
