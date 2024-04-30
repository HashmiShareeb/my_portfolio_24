'use client'
import { Earth, File, Github, Link2, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import projectData from '@/app/data'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const ProjectDetail = ({ params }: { params: { projectId: string } }) => {
  // Find the project with the matching id
  const project = projectData.find(p => p.id === params.projectId)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <motion.section
      transition={{ delay: 0.2, duration: 0.5 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={960}
        height={600}
        quality={100}
        className="mx-auto my-[3.5rem] overflow-hidden shadow-lg dark:shadow-none rounded-b-lg"
        priority={true}
      />
      <div className="px-4 lg:px-96">
        <h2
          className="text-2xl font-bold text-transparent 
           -mt-8 mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500">
            {project.title}
          </span>
        </h2>
        {/* tags */}
        <div className="flex flex-wrap gap-4">
          {project.tags.map(tag => (
            <span key={tag} className="py-1 font-mono mb-4 dark:text-slate-400">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-md leading-relaxed  dark:text-slate-400 font-medium">
          {project.description}
        </p>
        <div className="mx-1 m-6 flex items-center gap-4">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:scale-105 transition-all duration-200 ease-in-out hover:text-teal-500 bg-teal-800 p-3 text-teal-600 rounded-md hover:underline hover:text-teal-400 transition-colors"
            >
              <Github size={32} />
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:scale-105 transition-all duration-200 ease-in-out hover:text-teal-500 bg-teal-800 p-3 text-teal-600 rounded-md hover:underline hover:text-teal-400 transition-colors"
            >
              <Earth size={32} />
            </Link>
          )}
          {project.externalLink && (
            <Link
              href={project.externalLink}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:scale-105 transition-all duration-200 ease-in-out hover:text-teal-500 bg-teal-800 p-3 text-teal-600 rounded-md hover:underline hover:text-teal-400 transition-colors"
            >
              <Link2 size={32} />
            </Link>
          )}
          {project.videoUrl && (
            <Link
              href={project.videoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:scale-105 transition-all duration-200 ease-in-out hover:text-teal-500 bg-teal-800 p-3 text-teal-600 rounded-md hover:underline hover:text-teal-400 transition-colors"
            >
              <Youtube size={32} />
            </Link>
          )}
        </div>
      </div>
    </motion.section>
  )
}

export default ProjectDetail
