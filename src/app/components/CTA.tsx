'use client'
import React from 'react'
import { motion } from 'framer-motion'

function CTA() {
  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <a
          href="#contact"
          className="rounded-md bg-teal-800 text-teal-400 px-5 py-3 font-medium transition-colors  hover:bg-teal-700 duration-300  outline-none focus:scale-110 hover:scale-110"
        >
          Contact me here{' '}
        </a>
      </motion.button>
    </>
  )
}

export default CTA
