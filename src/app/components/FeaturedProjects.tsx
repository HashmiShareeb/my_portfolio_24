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
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
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
            key={project.id}
            className="group rounded-2xl overflow-hidden shadow-sm dark:shadow-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all duration-300 scale-[1.02] sm:scale-[1.03]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={`/project/${project.id}`}>
              <div className="relative w-full overflow-hidden">
                <CldImage
                  width={800}
                  height={600}
                  src={project.image}
                  alt={project.title}
                  quality={90}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
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

                <button className="mt-4 inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-medium group">
                  <span className="group-hover:text-teal-300 transition-all">
                    View Project
                  </span>
                  <ChevronRight
                    size={20}
                    className="transition-transform duration-300 transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default FeaturedProjects
