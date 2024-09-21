'use client'
import React from 'react'
import { motion } from 'framer-motion'
import projectData, { ProjectData } from '../interfaces/projects.interface'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const ProjectCards = () => {
  return (
    <motion.section
      transition={{ delay: 0.2, duration: 0.5 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      id="projects"
      className="px-4 mx-auto lg:py-24 py-4"
    >
      <div className="mt-8 flex  flex-wrap lg:gap-10 flex-col lg:flex-row items-end lg:items-start">
        {projectData.map((project: ProjectData) => (
          <motion.div
            className="py-2"
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
          >
            <div>
              <CldImage
                width={400}
                height={300}
                src={project.image}
                alt={project.title}
                quality={100}
                priority={true}
                className="rounded-xl object-cover object-center shadow-lg dark:shadow-none w-[400px] h-96"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-transparent">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500">
                  {project.title}
                </span>
              </h2>
              <Link href={'/project/' + project.id}>
                <button className="group inline transition duration-300 text-teal-400 relative">
                  <span className="flex items-center gap-2 group-hover:text-teal-300 group-focus:text-teal-300 mt-2">
                    View Project
                    <ChevronRight
                      size={20}
                      className="transition-transform duration-300 transform group-hover:translate-x-1"
                    />
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default ProjectCards
