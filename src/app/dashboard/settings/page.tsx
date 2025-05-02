"use client"

import type React from "react"

import { useState } from "react"

export default function SettingsPage() {
    const [settings, setSettings] = useState({
        siteName: "My Portfolio & Blog",
        siteDescription: "A showcase of my work and thoughts",
        email: "admin@example.com",
        socialLinks: {
            twitter: "https://twitter.com/username",
            github: "https://github.com/username",
            linkedin: "https://linkedin.com/in/username",
        },
        appearance: "light",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setSettings((prev) => ({ ...prev, [name]: value }))
    }

    const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setSettings((prev) => ({
            ...prev,
            socialLinks: {
                ...prev.socialLinks,
                [name]: value,
            },
        }))
    }

    const handleAppearanceChange = (value: string) => {
        setSettings((prev) => ({ ...prev, appearance: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Settings saved:", settings)
        // Save settings logic here
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Settings</h1>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6 border-b">
                    <h2 className="text-lg font-semibold">General Settings</h2>
                    <p className="text-sm text-gray-500">Configure your site settings</p>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            <label htmlFor="siteName" className="block text-sm font-medium text-gray-700 mb-1">
                                Site Name
                            </label>
                            <input
                                type="text"
                                id="siteName"
                                name="siteName"
                                value={settings.siteName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>

                        <div>
                            <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700 mb-1">
                                Site Description
                            </label>
                            <textarea
                                id="siteDescription"
                                name="siteDescription"
                                value={settings.siteDescription}
                                onChange={handleChange}
                                rows={3}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Admin Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={settings.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>

                        <div className="border-t pt-6">
                            <h3 className="text-md font-medium mb-3">Social Links</h3>

                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label htmlFor="twitter" className="block text-sm font-medium text-gray-700 mb-1">
                                        Twitter
                                    </label>
                                    <input
                                        type="url"
                                        id="twitter"
                                        name="twitter"
                                        value={settings.socialLinks.twitter}
                                        onChange={handleSocialChange}
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="github" className="block text-sm font-medium text-gray-700 mb-1">
                                        GitHub
                                    </label>
                                    <input
                                        type="url"
                                        id="github"
                                        name="github"
                                        value={settings.socialLinks.github}
                                        onChange={handleSocialChange}
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                                        LinkedIn
                                    </label>
                                    <input
                                        type="url"
                                        id="linkedin"
                                        name="linkedin"
                                        value={settings.socialLinks.linkedin}
                                        onChange={handleSocialChange}
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="border-t pt-6">
                            <h3 className="text-md font-medium mb-3">Appearance</h3>

                            <div className="flex space-x-4">
                                <div
                                    className={`border rounded-md p-4 cursor-pointer ${
                                        settings.appearance === "light" ? "ring-2 ring-black" : ""
                                    }`}
                                    onClick={() => handleAppearanceChange("light")}
                                >
                                    <div className="h-20 bg-white border mb-2"></div>
                                    <div className="text-center text-sm font-medium">Light</div>
                                </div>

                                <div
                                    className={`border rounded-md p-4 cursor-pointer ${
                                        settings.appearance === "dark" ? "ring-2 ring-black" : ""
                                    }`}
                                    onClick={() => handleAppearanceChange("dark")}
                                >
                                    <div className="h-20 bg-gray-800 border mb-2"></div>
                                    <div className="text-center text-sm font-medium">Dark</div>
                                </div>

                                <div
                                    className={`border rounded-md p-4 cursor-pointer ${
                                        settings.appearance === "system" ? "ring-2 ring-black" : ""
                                    }`}
                                    onClick={() => handleAppearanceChange("system")}
                                >
                                    <div className="h-20 bg-gradient-to-r from-white to-gray-800 border mb-2"></div>
                                    <div className="text-center text-sm font-medium">System</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
                            >
                                Save Settings
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
