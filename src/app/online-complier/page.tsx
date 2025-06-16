'use client'
import React from 'react'
import QuestionSection from "../../components/online-complier/QuestionSection"
import EditorSection from "../../components/online-complier/EditorSection"

const OnlineComplier = () => {
  return (
    <main className="flex h-[calc(100vh-80px)] overflow-hidden">
        {/* Left Panel */}
        <QuestionSection />
        {/*  Vertical Resizer */}
        <div id="vertical-resizer" className="resizer"></div>
        {/* Right Panel */}
        <EditorSection />
    </main>
  )
}

export default OnlineComplier