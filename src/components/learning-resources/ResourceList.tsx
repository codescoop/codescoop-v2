import React from 'react'

const ResourceList = () => {
  return (
    <section className="md:col-span-3 space-y-10">
      {/* <!-- Top Search --> */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h4 className="text-xl font-semibold text-gray-800">Projects</h4>
        <input
          type="text"
          placeholder="Search projects..."
          className="w-full sm:w-64 border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* <!-- Project Cards Grid --> */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* <!-- Card 1 --> */}
        <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 pt-10">
          <span className="absolute top-4 right-4 bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Article</span>
          <h5 className="text-xl font-semibold text-gray-900 mb-2">Build a Todo App (React)</h5>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">Create a full CRUD todo application using React and localStorage.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-full">React</span>
            <span className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-full">JavaScript</span>
          </div>
          <a href="#" className="inline-block text-sm font-medium text-blue-600 hover:underline">View Project →</a>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 pt-10">
          <span className="absolute top-4 right-4 bg-red-50 text-red-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Video</span>
          <h5 className="text-xl font-semibold text-gray-900 mb-2">CI/CD with GitHub Actions</h5>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">Set up a continuous deployment pipeline for your app with GitHub Actions.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-full">DevOps</span>
            <span className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-full">YAML</span>
          </div>
          <a href="#" className="inline-block text-sm font-medium text-blue-600 hover:underline">View Project →</a>
        </div>

        {/* <!-- Card 3 --> */}
        <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 pt-10">
          <span className="absolute top-4 right-4 bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Article</span>
          <h5 className="text-xl font-semibold text-gray-900 mb-2">Image Classifier with TensorFlow</h5>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">Train and evaluate a basic image classifier using TensorFlow and Keras.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-full">TensorFlow</span>
            <span className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-full">Python</span>
          </div>
          <a href="#" className="inline-block text-sm font-medium text-blue-600 hover:underline">View Project →</a>
        </div>

        {/* <!-- Card 4 --> */}
        <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 pt-10">
          <span className="absolute top-4 right-4 bg-purple-50 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Video</span>
          <h5 className="text-xl font-semibold text-gray-900 mb-2">Intro to System Design</h5>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">Understand scalability, load balancing, and caching through real examples.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-full">Architecture</span>
            <span className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-full">Design</span>
          </div>
          <a href="#" className="inline-block text-sm font-medium text-blue-600 hover:underline">View Project →</a>
        </div>

        {/* <!-- Card 5 --> */}
        <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 pt-10">
          <span className="absolute top-4 right-4 bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Article</span>
          <h5 className="text-xl font-semibold text-gray-900 mb-2">Build a Portfolio with Next.js</h5>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">Launch your developer portfolio using modern frameworks and static hosting.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-full">Next.js</span>
            <span className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-full">Tailwind CSS</span>
          </div>
          <a href="#" className="inline-block text-sm font-medium text-blue-600 hover:underline">View Project →</a>
        </div>

        {/* <!-- Card 6 --> */}
        <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 pt-10">
          <span className="absolute top-4 right-4 bg-yellow-50 text-yellow-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Video</span>
          <h5 className="text-xl font-semibold text-gray-900 mb-2">Data Structures in TypeScript</h5>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">Learn how to implement core data structures like stacks, queues, and trees.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-full">TypeScript</span>
            <span className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-full">DSA</span>
          </div>
          <a href="#" className="inline-block text-sm font-medium text-blue-600 hover:underline">View Project →</a>
        </div>
      </div>
    </section>
  )
}

export default ResourceList