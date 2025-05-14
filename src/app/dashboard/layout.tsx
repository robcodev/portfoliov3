"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export default function Layout({children} : { children: React.ReactNode}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const pathname = usePathname()

    // Mock authentication check - replace with your actual auth logic
    useEffect(() => {
        // Simulate auth check
        const checkAuth = async () => {
            // Replace with your actual authentication logic
            const isAdmin = true // Mock admin check
            setIsAuthenticated(isAdmin)
        }
        checkAuth()
    }, [])

    if (!isAuthenticated) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6 text-center">Admin Access Required</h1>
                    <p className="text-gray-600 mb-4 text-center">
                        You need to be authenticated as an admin to access this dashboard.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/login" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    const navItems = [
        { name: "Dashboard", path: "/dashboard", icon: "◼" },
        { name: "Portfolio", path: "/dashboard/portfolio", icon: "◆" },
        { name: "Blog", path: "/dashboard/blog", icon: "◉" },
    ]

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div
                className={`${isSidebarOpen ? "w-64" : "w-20"} bg-white shadow-md transition-all duration-300 overflow-hidden`}
            >
                <div className="p-4 border-b">
                    <div className="flex items-center justify-between">
                        {isSidebarOpen && <h1 className="text-xl font-bold">Admin</h1>}
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-md hover:bg-gray-100">
                            {isSidebarOpen ? "◀" : "▶"}
                        </button>
                    </div>
                </div>
                <nav className="mt-6">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    className={`flex items-center p-4 ${
                                        pathname === item.path ? "bg-gray-100 text-black" : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                >
                                    <span className="mr-4">{item.icon}</span>
                                    {isSidebarOpen && <span>{item.name}</span>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {/* Main content */}
            <div className="flex-1 overflow-auto">
                <header className="bg-white shadow-sm">
                    <div className="flex items-center justify-between p-4">
                        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
                        <div className="flex items-center space-x-4">
                            <button className="p-2 rounded-full hover:bg-gray-100">⚙</button>
                            <button className="p-2 rounded-full hover:bg-gray-100">🔔</button>
                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">A</div>
                        </div>
                    </div>
                </header>
                <main className="p-6">{children}</main>
            </div>
        </div>
    )
}
