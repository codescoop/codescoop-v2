import React from 'react'
import Link from 'next/link'
import { CapIcon, SmallWindowIcon, VerticalArrowIcon } from "../../assets/icon.jsx"
import defaultHeroData from "../../json/home.json"

const Feature = () => {
  const icons = {
    CapIcon,
    SmallWindowIcon,
    VerticalArrowIcon
  }
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Explore the Features</h3>
        <div className="grid md:grid-cols-3 gap-8">

          {defaultHeroData?.features?.map((feature, id) => {
            console.log("feature?.iconName: ",feature?.iconName)
            console.log("icons:", icons)
            
            const SvgIcon2 = icons[feature?.iconName]
            const iconName = feature?.iconName
            const SvgIcon = icons[iconName]
            console.log("SvgIcon", SvgIcon)
            return (
              <Link
                key={id}
                href={feature?.linkPath}
                className="block bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition p-6 text-center"
              >
                <div className="mb-4 flex justify-center">
                  <SvgIcon/>
                </div>
                <h4 className="text-xl font-semibold text-blue-600 mb-2">{feature?.title}</h4>
                <p className="text-gray-600">{feature?.description}</p>
                <span className="inline-flex items-center mt-4 text-blue-600 font-medium">{feature?.linkText}</span>
              </Link>
            )
          })

          }

          {/* Interview Prep */}
          {/* <a href="/interview" className="block bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition p-6 text-center">
            <div className="mb-4 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0l3-3m-3 3l-3-3" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-blue-600 mb-2">Interview Prep</h4>
            <p className="text-gray-600">Solve categorized questions across DSA, React, and System Design — tailored for your next tech interview.</p>
            <span className="inline-flex items-center mt-4 text-blue-600 font-medium">Go to Interview Prep →</span>
          </a> */}

          {/* Learn by Doing */}
          {/* <a href="/projects" className="block bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition p-6 text-center">
            <div className="mb-4 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2a4 4 0 118 0v2m-6 4h4a2 2 0 002-2v-4a6 6 0 10-12 0v4a2 2 0 002 2h4z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-blue-600 mb-2">Learn by Doing</h4>
            <p className="text-gray-600">Build real-world projects with guided resources, code snippets, and learning-by-building approach.</p>
            <span className="inline-flex items-center mt-4 text-blue-600 font-medium">Go to Learn Projects →</span>
          </a> */}

          {/* Online Compiler */}
          {/* <a href="/compiler" className="block bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition p-6 text-center">
            <div className="mb-4 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17l4 4 4-4m0-10l-4-4-4 4m4-4v18" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-blue-600 mb-2">Online Compiler</h4>
            <p className="text-gray-600">Run code instantly in-browser — perfect for quick experiments, tutorials, or interviews.</p>
            <span className="inline-flex items-center mt-4 text-blue-600 font-medium">Go to JS Compiler →</span>
          </a> */}

        </div>
      </div>
    </section>
  )
}

export default Feature