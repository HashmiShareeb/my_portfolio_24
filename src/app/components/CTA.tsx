'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

function CTA({
  href,
  target,
  download,
  mailto,
  children,
}: {
  href?: string
  target?: string
  download?: boolean
  mailto?: string
  children: React.ReactNode
}) {
  const handleClick = () => {
    if (mailto) {
      window.location.href = `mailto:${mailto}`
    }
    // Add other conditions for different behaviors, like navigating to pages or sections
  }

  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        whileFocus={{
          scale: 1.2,
          transition: { duration: 0.2 },
        }}
      >
        <Link
          href={href || '#'}
          target={target || '_self'}
          download={download || false}
          className="rounded-md bg-teal-800 text-teal-400 px-5 py-3 font-medium transition-colors hover:bg-teal-700 duration-300 outline-none flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          {children}
        </Link>
      </motion.button>
    </>
  )
}

export default CTA
