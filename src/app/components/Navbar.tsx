'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import CTA from './CTA'
import { Download, Folder, Github, Linkedin } from 'lucide-react'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const [activeHash, setActiveHash] = useState<string>('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActiveHash(window.location.hash)
    }
  }, [])

  const isActive = (id: string) => {
    return `#${id}` === activeHash ? 'text-teal-400' : 'text-gray-400'
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <nav className="z-[999] relative">
      <div className="fixed top-0  h-[3.5rem] w-full bg-white dark:bg-slate-900 dark:bg-opacity-80 bg-opacity-80 shadow-sm dark:shadow-none">
        <div className="flex items-center justify-between h-full lg:px-52 px-4">
          <Link href="/" className="text-lg font-bold">
            Shareeb{' '}
            <span className="text-teal-500 dark:text-teal-400 font-extrabold">
              Hashmi
            </span>
          </Link>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-teal-400 hover:dark:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
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
        } fixed top-[3.5rem] left-0 w-full h-screen bg-white dark:bg-slate-900 bg-opacity-80  dark:bg-opacity-80 bg-opacity-80  shadow-sm dark:shadow-none`}
      >
        <div className="flex flex-col gap-10 items-center justify-center lg:h-full  h-3/4 pt-10 lg:pt-0">
          <Link
            href="/#home"
            onClick={closeMenu}
            className={`lg:text-6xl text-4xl font-bold uppercase hover:text-teal-300 transition-colors duration-200 ${isActive('home')}`}
          >
            Home
          </Link>
          {/* <Link
            href="/#about"
            onClick={closeMenu}
            className={`lg:text-6xl text-4xl font-bold uppercase hover:text-teal-300 transition-colors duration-200 ${isActive('about')}`}
          >
            about
          </Link> */}
          <Link
            href="/#projects"
            onClick={closeMenu}
            className={`lg:text-6xl text-4xl font-bold uppercase hover:text-teal-300 transition-colors duration-200 ${isActive('projects')}`}
          >
            Projects
          </Link>
          <Link
            href="/#skills"
            onClick={closeMenu}
            className={`lg:text-6xl text-4xl font-bold uppercase hover:text-teal-300 transition-colors duration-200 ${isActive('skills')}`}
          >
            My Skills
          </Link>
          <Link
            href="/#contact"
            onClick={closeMenu}
            className={`lg:text-6xl text-4xl font-bold uppercase hover:text-teal-300 transition-colors duration-200 ${isActive('contact')}`}
          >
            Contact
          </Link>
          <CTA href="/cv_shareeb_2025.pdf" target="_blank" download>
            <Download size={32} />
            <h1 className="text-lg font-bold ml-2">Download Resume</h1>
            <span className="sr-only">Resume</span>
          </CTA>
          <div className="flex gap-4 mt-4 justify-center w-full">
            <Link
              href="https://github.com/HashmiShareeb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center"
            >
              <Github
                size={28}
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shareeb-hashmi-569b38161/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center"
            >
              <Linkedin
                size={28}
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
