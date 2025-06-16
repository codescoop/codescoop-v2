"use client"
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Header = () => {
  const path = usePathname()
  return (
    <header className='fixed top-0 w-full border-b bg-white/95 backdrop-blur z-50 supports-[backdrop-filter]:bg-white/60'>
      <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
        <Link href="/" className='flex items-center gap-2'> 
          <Image
            src={"/logos/csd-logo.png"}
            alt="CodeScoop Logo"
            width={200}
            height={60}
            className='h-11 w-auto object-contain max-w-[185px]'
          />
        </Link>

        { path === "/" &&
          <div>
            <Link href="Learn">'
              Learn
            </Link>
          </div>
        }
        <Button>Login</Button>
      </nav>
    </header>
  )
}

export default Header