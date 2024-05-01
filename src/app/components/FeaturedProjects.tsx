'use client'
import React from 'react'
import { motion } from 'framer-motion'
import projectData, { ProjectData } from '../data'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'

const FeaturedProjects = () => {
  return (
    <motion.section
      transition={{ delay: 0.2, duration: 0.5 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      id="projects"
      className="py-24 px-4 mx-auto lg:mx-0"
    >
      <div className="flex lg:flex-row flex-col items-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-transparent  lg:text-left">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500">
            Featured Projects
          </span>
        </h1>

        <Link
          href="/project"
          className="lg:ml-auto group inline transition duration-300 text-teal-500 "
        >
          Show all projects
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-teal-500"></span>
        </Link>
      </div>
      <div className="mt-8 flex gap-4 lg:gap-10 flex-col lg:flex-row items-end lg:items-start">
        {projectData.slice(0, 3).map((project: ProjectData) => (
          <motion.div
            className="py-2"
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
          >
            <div>
              {/* <picture>
                <source srcSet={project.image} type="image/webp" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl object-cover object-center shadow-lg dark:shadow-none w-[400px] h-96"
                />
              </picture> */}
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
      </div>
    </motion.section>
  )
}

export default FeaturedProjects
