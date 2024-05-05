'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

function CTA({
  id,
  href,
  target,
  download,
  mailto,
  ariaLabel,
  children,
}: {
  id?: string
  href?: string
  target?: string
  download?: boolean
  mailto?: string
  ariaLabel?: string
  children: React.ReactNode
}) {
  const handleClick = () => {
    if (mailto) {
      window.location.href = `mailto:${mailto}`
    }
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
          id={id || ''}
          aria-label={ariaLabel || ''}
          href={href || '#'}
          target={target || '_self'}
          download={download || false}
          className="rounded-md bg-teal-900 text-teal-400 p-3 font-medium transition-colors hover:bg-teal-700 duration-300 outline-none flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          {children}
        </Link>
      </motion.button>
    </>
  )
}

export default CTA
