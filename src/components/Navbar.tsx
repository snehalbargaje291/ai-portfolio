import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import AIChatButton from './AIChatButton'

const Navbar = () => {
  return (
    <header className='stickey top-0 bg-background'>
        <div className='max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3 px-3 py-4'>
            <nav className='space-x-4 uppercase font-mono text-md font-semibold'>
                <Link href='/'>home</Link>
                <Link href='./about'>about</Link>
            </nav>
            <div className='flex items-center gap-4'>
            <AIChatButton/>
            <ThemeToggle/>
            </div>
        </div>
    </header>
  )
}

export default Navbar
