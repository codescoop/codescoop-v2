import React from 'react'

const ContentCards = () => {
    return (
        <main className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* <!-- Card --> */}
                <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-200">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-blue-600 font-semibold">DSA</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Beginner</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Two Sum Problem</h3>
                    <p className="text-sm text-gray-600 mb-4">Find indices of two numbers in an array that add up to a target.</p>
                    <div className="flex flex-wrap gap-2 text-xs mb-4">
                        <span className="bg-gray-100 px-2 py-1 rounded-full">Array</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full">HashMap</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full">LeetCode</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="/online-complier" className="text-sm font-medium text-blue-600 hover:underline">Solve Now →</a>
                        <span className="text-xs text-gray-500">Google</span>
                    </div>
                </div>

                {/* <!-- Repeat card template with different data --> */}
                <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-200">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-purple-600 font-semibold">System Design</span>
                        <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Intermediate</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Design a URL Shortener</h3>
                    <p className="text-sm text-gray-600 mb-4">Plan how to build scalable services like Bitly or TinyURL.</p>
                    <div className="flex flex-wrap gap-2 text-xs mb-4">
                        <span className="bg-gray-100 px-2 py-1 rounded-full">Architecture</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full">Database</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="online-complier" className="text-sm font-medium text-blue-600 hover:underline">Solve Now →</a>
                        <span className="text-xs text-gray-500">Meta</span>
                    </div>
                </div>

                <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-200">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-pink-600 font-semibold">Frontend</span>
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Advanced</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Virtual Scrolling List</h3>
                    <p className="text-sm text-gray-600 mb-4">Implement a performant scrollable list with React.</p>
                    <div className="flex flex-wrap gap-2 text-xs mb-4">
                        <span className="bg-gray-100 px-2 py-1 rounded-full">React</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full">Rendering</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="/online-complier" className="text-sm font-medium text-blue-600 hover:underline">Solve Now →</a>
                        <span className="text-xs text-gray-500">Netflix</span>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default ContentCards