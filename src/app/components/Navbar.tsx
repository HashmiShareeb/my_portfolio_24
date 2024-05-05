'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  //is active
  const isActive = (id: string) => {
    if (typeof window !== 'undefined') {
      return `#${id}` === window.location.hash
        ? 'text-teal-500'
        : 'text-gray-400'
    }
    return 'text-gray-400'
  }

  return (
    <nav className="z-[999] relative">
      <div className="fixed top-0  h-[3.5rem] w-full bg-white dark:bg-slate-900 bg-opacity-80 backdrop-blur-[0.5rem] shadow-sm">
        <div className="flex items-center justify-between h-full lg:px-52 px-4">
          <Link href="/" className="text-lg font-bold">
            Shareeb <span className="text-teal-500 font-extrabold">Hashmi</span>
          </Link>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-teal-500 hover:dark:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
            aria-label="Toggle menu"
          >
            <svg
              className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <svg
              className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } fixed top-[3.5rem] left-0 w-full h-screen bg-white dark:bg-slate-950 bg-opacity-80  backdrop-blur-[0.5rem] dark:bg-opacity-80 dark:backdrop-blur-[0.5rem] shadow-sm dark:shadow-none`}
      >
        <div className="flex flex-col gap-10 items-center justify-center lg:h-full h-3/4">
          <Link
            href="/#home"
            onClick={closeMenu}
            className={`lg:text-6xl text-4xl font-bold uppercase hover:text-teal-500 transition-colors duration-200 ${isActive('home')}`}
          >
            Home
          </Link>
          <Link
            href="/#about"
            onClick={closeMenu}
            className={`lg:text-6xl text-4xl font-bold uppercase hover:text-teal-500 transition-colors duration-200 ${isActive('about')}`}
          >
            about
          </Link>
          <Link
            href="/#projects"
            onClick={closeMenu}
            className={`lg:text-6xl text-4xl font-bold uppercase hover:text-teal-500 transition-colors duration-200 ${isActive('projects')}`}
          >
            Projects
          </Link>
          <Link
            href="/#skills"
            onClick={closeMenu}
            className={`lg:text-6xl text-4xl font-bold uppercase hover:text-teal-500 transition-colors duration-200 ${isActive('skills')}`}
          >
            My Skills
          </Link>
          <Link
            href="/#contact"
            onClick={closeMenu}
            className={`lg:text-6xl text-4xl font-bold uppercase hover:text-teal-500 transition-colors duration-200 ${isActive('contact')}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
