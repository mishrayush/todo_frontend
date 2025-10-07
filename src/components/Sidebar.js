import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar() {
    const router = useRouter();

    const menuItems = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Todos", path: "/dashboard#todos" },
        { name: "Settings", path: "/dashboard#settings" },
    ];

    return (
        <aside className="w-64 bg-gray-800 text-white h-screen p-5 space-y-4">
            <nav>
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`block px-4 py-2 rounded-md hover:bg-gray-700 ${router.asPath === item.path ? "bg-gray-700" : ""
                            }`}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
