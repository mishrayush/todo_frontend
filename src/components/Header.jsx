import React from "react";
import { useRouter } from "next/router";

export default function Header({ user }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-white shadow">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-8 h-8"
        />
        <h1 className="text-xl font-semibold text-gray-800">My Dashboard</h1>
      </div>

      {/* Right Buttons */}
      <div className="flex items-center gap-4">
        <button
          className="bg-gray-100 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200"
          onClick={() => alert(`Profile: ${user?.email || "Unknown"}`)}
        >
          Profile
        </button>
        <button
          className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
}
