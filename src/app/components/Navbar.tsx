'use client'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      // Assuming 768px is your md breakpoint
      setNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setNav(false) // Close navbar after clicking a link
  }

  const links = [
    {
      id: 1,
      label: 'About',
      sectionId: 'about',
    },
    {
      id: 2,
      label: 'Projects',
      sectionId: 'projects',
    },
    {
      id: 3,
      label: 'Experience',
      sectionId: 'experience',
    },
    {
      id: 4,
      label: 'Contact',
      sectionId: 'contact',
    },
  ]

  return (
    <nav className="z-50 flex shadow-md lg:justify-between justify-between items-center w-full h-20 px-10 fixed bg-zinc-50 dark:bg-slate-950 ">
      <div>
        <h1 className="text-3xl font-black ml-2">Logo</h1>
      </div>

      <ul className="hidden lg:flex">
        {links.map(({ id, label, sectionId }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-semibold hover:scale-105 hover:text-white duration-200"
            onClick={() => scrollToSection(sectionId)}
          >
            {label}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-teal-500 lg:hidden transition-all duration-300 ease-in-out hover:text-white hover:scale-110"
      >
        {nav ? <X size={30} /> : <Menu size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 transition-all duration-300 ease-in-out">
          {links.map(({ id, label, sectionId }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
              onClick={() => scrollToSection(sectionId)}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
