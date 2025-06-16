import React from 'react'

const FilterBar = () => {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-6 gap-4">
        <input type="text" placeholder="Search..." className="col-span-2 border border-gray-300 px-4 py-2 rounded-md w-full" />
        <select className="border border-gray-300 px-3 py-2 rounded-md w-full">
          <option>Sort by</option>
          <option>Default</option>
          <option>Most Solved</option>
          <option>Recently Added</option>
        </select>
        <select className="border border-gray-300 px-3 py-2 rounded-md w-full">
          <option>Language</option>
          <option>JavaScript</option>
          <option>Python</option>
          <option>Java</option>
        </select>
        <select className="border border-gray-300 px-3 py-2 rounded-md w-full">
          <option>Difficulty</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
        <select className="border border-gray-300 px-3 py-2 rounded-md w-full">
          <option>Status</option>
          <option>Solved</option>
          <option>Unsolved</option>
        </select>
      </div>
    </section>
  )
}

export default FilterBar