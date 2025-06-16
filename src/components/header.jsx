"use client"
import React, { useState } from 'react'
import Link from 'next/link'
// import defaultSiteMetadata from "./json/siteMetadata.json"
import defaultSiteMetadata from "../json/siteMetadata.json"
import { Button } from './ui/button'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [open, setOpen] = useState(false)
  console.log("defaultSiteMetadata: ", defaultSiteMetadata)
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50" x-data="{ open: false }">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-blue-600 tracking-tight">
          <Link href="/">
            CodeScoop
            <span className="text-gray-800">
              .dev
            </span>
          </Link>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          {
            defaultSiteMetadata?.headerNav?.map((navDetail, id) => {
              return (
                <Link
                  key={id}
                  href={navDetail?.link}
                  className="hover:text-blue-600"
                >
                  {navDetail?.title}
                </Link>
              )
            })
          }
        </nav>

        {/* Hamburger Button for Mobile Nav */}
        <button
          className="md:hidden flex flex-col justify-center items-end w-8 h-8 space-y-1.5 z-50 focus:outline-none"
          onClick={() => setOpen(prev => !prev)}
        >
          <span className={`block h-0.5 w-full bg-gray-800 transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-gray-800 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-gray-800 transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

      </div>

      {/* Mobile Nav */}
      {open &&
        <nav className="absolute top-full left-0 w-full bg-white border-t border-gray-200 md:hidden">
          {
            defaultSiteMetadata?.headerNav?.map((navDetail, id) => {
              return (
                <Link
                  key={id}
                  href={navDetail?.link}
                  className="block px-4 py-3 border-b border-gray-100 text-gray-800 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  {navDetail?.title}
                </Link>
              )
            })
          }
        </nav>
      }
    </header>
  )
}

export default Header