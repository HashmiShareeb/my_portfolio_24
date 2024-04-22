'use client'
import React from 'react'
import { motion } from 'framer-motion'
import projectData, { ProjectData } from '../data'

const ProjectCards = () => {
  return (
    <motion.section
      transition={{ delay: 0.2, duration: 0.5 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      id="projects"
      className="px-4 py-24 flex gap-10 flex-col lg:flex-row"
    >
      {projectData.map((project: ProjectData) => (
        <motion.div
          className="py-4 "
          key={project.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          
        >
          <div>
            <picture>
              <source srcSet={project.image} type="image/webp" />
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl object-cover object-center shadow-lg dark:shadow-none w-[400px] h-96"
              />
            </picture>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-transparent">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500">
                {project.title}
              </span>
            </h2>
            {/* <p className="text-slate-400">{project.description}</p> */}
            <a
              href={'/project/' + project.id}
              className="text-teal-500 hover:underline hover:text-teal-400 transition-colors"
            >
              Read more
            </a>
          </div>
        </motion.div>
      ))}
    </motion.section>
  )
}

export default ProjectCards
