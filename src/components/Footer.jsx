import React from 'react'
import Link from 'next/link'
// import defaultSiteMetadata from "../json/siteMetadata.json"
import defaultSiteMetadata from "../json/siteMetadata.json"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-sm text-gray-600 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-2 md:mb-0">
          &copy; 2025 CodeScoop.dev. All rights reserved.
        </p>

        <div className="space-x-4">
          { defaultSiteMetadata?.footerNav?.map((nav, id) => {
              return (
                <Link 
                  key = {id}
                  href={nav?.link}
                  className="hover:underline"
                >
                  {nav?.title}
                </Link>
              )
            })
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer