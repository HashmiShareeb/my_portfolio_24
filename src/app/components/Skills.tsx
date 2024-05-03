'use client'
import React from 'react'
import GradientTitle from './Text/GradientHeaderText'
import { skillsData } from '../data'
import { animate, motion } from 'framer-motion'
import { init } from 'next/dist/compiled/webpack/webpack'
import { tree } from 'next/dist/build/templates/app-page'

//custom motion animation
const fadeIn = {
  initial: {
    y: 60,
    opacity: 0,
  },
  //? function animate for each skill item induvidually
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.1,
    },
  }),
}

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 mx-auto lg:mx-0">
      <GradientTitle title="My Skills" IsCentered={true} />
      <ul className="lg:mt-8 mt-4 flex gap-4 flex-wrap justify-center dark:text-slate-400">
        {skillsData.map((skills, index) => (
          <motion.li
            key={index}
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
            className="dark:bg-teal-800 dark:text-teal-500 shadow dark:shadow-none
            px-4 py-2 rounded-md text-sm font-semibold bg-white  dark:hover:bg-teal-700 dark:hover:text-teal-300 hover:bg-teal-200 hover:text-teal-900 transition-colors duration-300 ease-in-out"
          >
            {skills}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
