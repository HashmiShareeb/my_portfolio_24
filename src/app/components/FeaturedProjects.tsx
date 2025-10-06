import React from 'react'
import { motion } from 'framer-motion'
import { ProjectData } from '../interfaces/projects.interface'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import GradientTitle from './Text/GradientHeaderText'
import { ChevronRight } from 'lucide-react'
import { getFeaturedProjects } from '@/utils/featured.projects'

const FeaturedProjects = () => {
  const featured = getFeaturedProjects(3)

  return (
    <motion.section
      transition={{ delay: 0.2, duration: 0.5 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      id="projects"
      className="py-24 px-4 mx-auto lg:mx-0"
    >
      <div className="flex lg:flex-row flex-col items-center">
        <GradientTitle title="featured projects" IsCentered={false} />
        <Link
          href="/project"
          className="lg:ml-auto group inline transition duration-300 dark:text-teal-400 text-teal-500 relative"
        >
          <span className="flex items-center gap-2 group-hover:text-teal-300">
            show all projects
            <ChevronRight
              size={20}
              className="transition-transform duration-300 transform group-hover:translate-x-1"
            />
          </span>
        </Link>
      </div>

      {/* Grid Layout for Featured Projects */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map((project: ProjectData) => (
          <motion.div
            className="relative group"
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-64">
              <CldImage
                width={800}
                height={600}
                src={project.image}
                alt={project.title}
                quality={100}
                priority
                className="rounded-xl shadow-lg dark:shadow-none w-full h-full transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="mt-4">
              <h2 className="text-2xl font-bold text-transparent">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 dark:from-teal-300 dark:via-cyan-400 dark:to-blue-400">
                  {project.title}
                </span>
              </h2>
              {project.label && (
                <p className="mt-2 dark:text-slate-300 text-base font-medium">
                  {project.label}
                </p>
              )}
              <Link href={'/project/' + project.id}>
                <button className="group inline transition duration-300 dark:text-teal-400 text-teal-500 relative">
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

export default FeaturedProjects
