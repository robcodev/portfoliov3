"use client"

import { useState } from "react"
import Link from "next/link"

export default function PortfolioPage() {
    const [portfolioItems, setPortfolioItems] = useState([
        { id: 1, title: "Project One", category: "Web Design", status: "Published", date: "2023-05-01" },
        { id: 2, title: "Project Two", category: "Mobile App", status: "Published", date: "2023-04-15" },
        { id: 3, title: "Project Three", category: "Branding", status: "Draft", date: "2023-03-22" },
        { id: 4, title: "Project Four", category: "Web Design", status: "Published", date: "2023-02-10" },
        { id: 5, title: "Project Five", category: "UI/UX", status: "Draft", date: "2023-01-05" },
    ])

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Portfolio Management</h1>
                <Link
                    href="/dashboard/portfolio/new"
                    className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
                >
                    Add New Project
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-4 border-b">
                    <div className="flex items-center justify-between">
                        <div className="w-1/3">
                            <input
                                type="text"
                                placeholder="Search projects..."
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div className="flex space-x-2">
                            <select className="px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black">
                                <option value="">All Categories</option>
                                <option value="web-design">Web Design</option>
                                <option value="mobile-app">Mobile App</option>
                                <option value="branding">Branding</option>
                                <option value="ui-ux">UI/UX</option>
                            </select>
                            <select className="px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black">
                                <option value="">All Status</option>
                                <option value="published">Published</option>
                                <option value="draft">Draft</option>
                            </select>
                        </div>
                    </div>
                </div>

                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {portfolioItems.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{item.title}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">{item.category}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                  <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          item.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                  >
                    {item.status}
                  </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {new Date(item.date).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-black hover:text-gray-700 mr-3">Edit</button>
                                <button className="text-red-600 hover:text-red-800">Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <div className="px-6 py-4 border-t">
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">Showing 1 to 5 of 5 entries</div>
                        <div className="flex space-x-2">
                            <button className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>
                                Previous
                            </button>
                            <button className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800">1</button>
                            <button className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
