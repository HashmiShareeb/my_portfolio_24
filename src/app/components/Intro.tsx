'use client'
import React from 'react'
import { motion } from 'framer-motion'
import CTA from './CTA'
import { CldImage } from 'next-cloudinary'

const Intro = () => {
  return (
    <motion.section
      transition={{ delay: 0.2, duration: 0.5 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      initial={{
        opacity: 0,
        y: 10,
      }}
      id="#home"
      className="max-w-xl flex flex-col items-center justify-center mx-auto px-4"
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: 'tween',
            duration: 0.5,
          }}
        >
          <CldImage
            src="projects/qpggxcmd93hwgiisoakb"
            alt="Shareeb portrait"
            width="400"
            height="400"
            className="rounded-full my-20 h-60 w-60 overflow-hidden bg-gradient-to-tr from-teal-300 to-blue-500 object-cover shadow-lg dark:shadow-none"
            quality="95"
            priority={true}
          />
        </motion.div>
      </div>

      <span className="mb-4 font-mono">👋 Hello there!</span>
      <h1 className="lg:text-6xl md:text-4xl text-3xl text-nowrap font-extrabold leading-relaxed tracking-tight">
        Shareeb Hashmi
      </h1>
      <h2 className="mt-4 text-2xl lg:text-6xl font-bold text-center bg-gradient-to-r from-teal-300 to-blue-500 bg-clip-text text-transparent">
        Web developer
      </h2>
      <p className="mb-10 mt-4 text-md leading-relaxed text-center dark:text-slate-400 font-medium">
        I&apos;m a graduate in MIT currently studying{' '}
        <a
          href="https://mct.be/"
          target="_blank"
          className="text-teal-400 underline hover:text-teal-300 transition-colors duration-100
         "
        >
          MCT-Next Web Developer in Howest{' '}
        </a>
        in Belgium. I have a passion for web development and love to create new
        things. I am a fast learner and always eager to something new or face
        challenges.
      </p>

      <div className="flex lg:flex-row selection  items-center justify-center gap-10">
        <CTA href="/#contact" id="contact-cta" ariaLabel="ContactButton">
          <span>Contact me here</span>
        </CTA>

        <a
          href="/cv_shareeb_2024_updated.pdf"
          target="_blank"
          className="group inline transition duration-300"
        >
          Download CV
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 dark:bg-white bg-black"></span>
        </a>
      </div>
    </motion.section>
  )
}
export default Intro
