import React from 'react'

const FilterSection = () => {
  return (
    <aside className="md:col-span-1 space-y-6">
      <h3 className="text-xl font-semibold text-gray-800">Filter by</h3>

      {/* Domain Filter */}
      <div>
        <label className="block font-medium mb-2 text-sm text-gray-700">Domain</label>
        <select className="w-full border-gray-300 rounded-md shadow-sm">
          <option>All</option>
          <option>Web Development</option>
          <option>Mobile</option>
          <option>DevOps</option>
          <option>Machine Learning</option>
        </select>
      </div>

      {/* Level Filter */}
      <div>
        <label className="block font-medium mb-2 text-sm text-gray-700">Level</label>
        <select className="w-full border-gray-300 rounded-md shadow-sm">
          <option>All</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </div>

      {/* Content Type Filter */}
      <div>
        <label className="block font-medium mb-2 text-sm text-gray-700">Content Type</label>
        <select className="w-full border-gray-300 rounded-md shadow-sm">
          <option>All</option>
          <option>Article</option>
          <option>Video</option>
        </select>
      </div>

      {/* Sort By Filter */}
      <div>
        <label className="block font-medium mb-2 text-sm text-gray-700">Sort by</label>
        <select className="w-full border-gray-300 rounded-md shadow-sm">
          <option>Newest</option>
          <option>Oldest</option>
          <option>A–Z</option>
          <option>Z–A</option>
        </select>
      </div>
    </aside>
  )
}

export default FilterSection