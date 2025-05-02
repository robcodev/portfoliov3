"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import EditorJs from "../../../../../components/editorJs";

export default function NewPortfolioItem() {
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        status: "draft",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would integrate with Editor.js and handle the submission
        console.log("Form submitted:", formData)
        // Redirect or show success message
    }

    return (
        <section>
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Add New Portfolio Item</h1>
                <Link
                    href="/dashboard/portfolio"
                    className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                    Cancel
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6">
                        <div className={'flex'}>
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                                    Project Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                                    Category
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                >
                                    <option value="">Select a category</option>
                                    <option value="Web Design">Web Design</option>
                                    <option value="Mobile App">Mobile App</option>
                                    <option value="Branding">Branding</option>
                                    <option value="UI/UX">UI/UX</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                Short Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={2}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>

                            <div
                                className="border">
                                <EditorJs/>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">This is where your Editor.js component would be
                                integrated</p>
                        </div>

                        <div>
                            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                                Status
                            </label>
                            <div className="flex space-x-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="status"
                                        value="draft"
                                        checked={formData.status === "draft"}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-black focus:ring-black border-gray-300"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">Save as Draft</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="status"
                                        value="published"
                                        checked={formData.status === "published"}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-black focus:ring-black border-gray-300"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">Publish Now</span>
                                </label>
                            </div>
                        </div>

                        <div className="flex items-center justify-end space-x-3 pt-4">
                            <button
                                type="button"
                                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                            >
                                Preview
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
                                Save Project
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
