export default function Dashboard() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-gray-500 text-sm font-medium mb-2">Total Portfolio Items</h2>
                    <p className="text-3xl font-bold">12</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-gray-500 text-sm font-medium mb-2">Total Blog Posts</h2>
                    <p className="text-3xl font-bold">24</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-gray-500 text-sm font-medium mb-2">Published Posts</h2>
                    <p className="text-3xl font-bold">18</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-gray-500 text-sm font-medium mb-2">Draft Posts</h2>
                    <p className="text-3xl font-bold">6</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Recent Portfolio Entries</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="border-b pb-4 last:border-0">
                                <h3 className="font-medium">Portfolio Project {item}</h3>
                                <p className="text-gray-500 text-sm">Added on May {item}, 2023</p>
                            </div>
                        ))}
                    </div>
                    <button className="mt-4 text-sm font-medium text-black hover:underline">View all portfolio entries</button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Recent Blog Posts</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="border-b pb-4 last:border-0">
                                <h3 className="font-medium">Blog Post Title {item}</h3>
                                <p className="text-gray-500 text-sm">Published on May {item + 10}, 2023</p>
                            </div>
                        ))}
                    </div>
                    <button className="mt-4 text-sm font-medium text-black hover:underline">View all blog posts</button>
                </div>
            </div>
        </div>
    )
}
