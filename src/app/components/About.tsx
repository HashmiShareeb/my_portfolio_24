'use client'
import React from 'react'
import { motion } from 'framer-motion'
import GradientHeaderText from './Text/GradientHeaderText'

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      id="about"
      className="px-4 mx-auto py-4 lg:py-24"
    >
      <div className="grid place-items-center m-8">
        <GradientHeaderText title="about me" IsCentered={true} />
        <p className="mt-8 text-md text-center leading-relaxed text-slate-400 lg:w-3/4 mx-auto font-medium">
          My name is{' '}
          <span className="text-teal-500 font-bold">Shareeb Hashmi </span> I am
          a recent graduate from a college in Kortrijk, Belgium. I spent two
          years studying Web Development. During my time in college, I gained
          valuable experience and knowledge in various programming languages and
          techniques. I also had the opportunity to complete an internship where
          I learned a lot and was able to apply my skills in a real-world
          setting. Currently, I am pursuing a Bachelor&apos;s degree in Next Web
          Development to further expand my skills and knowledge.
        </p>
      </div>
    </motion.section>
  )
}

export default About
