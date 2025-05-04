"use client"

import React, {useEffect, useRef} from "react"

import SimpleImage from '../../../../../editorJsTools/simpleImage'
import Header from '@editorjs/header'

import {useState} from "react"
import Link from "next/link"
import EditorJS from "@editorjs/editorjs";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";

export default function NewBlogPost() {

    const editorjs = useRef<HTMLDivElement | null>(null);
    const ref = useRef<EditorJS | null>(null);

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        status: "draft",
        tags: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setFormData((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would integrate with Editor.js and handle the submission
        console.log("Form submitted:", formData)
        // Redirect or show success message
    }

    const handleSave = ()=>{
        ref.current?.save().then(async (outputData) => {
            console.log(outputData);

            await fetch('/api/blog/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: formData.title,
                    category: formData.category,
                    description: formData.description,
                    content: outputData,
                    status: formData.status,
                    //tags: formData.tags.split(','),
                })
            })

        })
    }

    useEffect(() => {
        if (!ref.current && editorjs.current) {
            ref.current = new EditorJS({
                holder: editorjs.current,
                autofocus: true,
                tools: {
                    header: {
                        class: Header,
                        inlineToolbar: true,
                    },
                    list: {
                        class: List,
                        inlineToolbar: true,
                    },
                    paragraph: {
                        class: Paragraph,
                        inlineToolbar: true,
                    },
                    image: {
                        class: SimpleImage,
                        inlineToolbar: true,
                    }
                }
            })
        }
        return () => {
            if (ref.current && typeof ref.current?.destroy === 'function') {
                ref.current?.destroy()
                ref.current = null
            }
        }
    }, [])

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Add New Blog Post</h1>
                <Link
                    href="/dashboard/blog"
                    className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                    Cancel
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                                Post Title
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
                                <option value="Development">Development</option>
                                <option value="Design">Design</option>
                                <option value="Opinion">Opinion</option>
                                <option value="Tutorial">Tutorial</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={3}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                                required
                            />
                            <p className="mt-1 text-sm text-gray-500">A short summary of your post that will appear in
                                previews</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>

                            <div
                                ref={editorjs}
                                id={'editorjs'}
                                className=" border rounded-md p-4 min-h-[300px] bg-gray-50">
                            </div>

                        </div>

                        <div>
                            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
                                Tags
                            </label>
                            <input
                                type="text"
                                id="tags"
                                name="tags"
                                value={formData.tags}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                                placeholder="Enter tags separated by commas"
                            />
                            <p className="mt-1 text-sm text-gray-500">
                                Separate tags with commas (e.g., nextjs, react, web-development)
                            </p>
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
                                        checked={formData.status === 'draft'}
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
                                onClick={handleSave}
                                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
                            >
                                Save Post
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
