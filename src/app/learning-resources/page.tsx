import React from 'react'
import Hero from "../../components/learning-resources/Hero"
import FilterSection from "../../components/learning-resources/FilterSection"
import ResourceList from "../../components/learning-resources/ResourceList"

const LearningResources = () => {
  return (
    <>
      <Hero/>
       <main className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <FilterSection/>
        <ResourceList />
      </main>
    </>
  )
}

export default LearningResources