'use client'
import {
  ChevronRight,
  Earth,
  Folder,
  Github,
  Link2,
  Youtube,
  File,
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import projectData from '@/app/interfaces/projects.interface'
import { motion } from 'framer-motion'
import { CldImage } from 'next-cloudinary'
import CTA from '@/app/components/CTA'

const ProjectDetail = ({ params }: { params: { projectId: string } }) => {
  // Find the project with the matching id
  const project = projectData.find(p => p.id === params.projectId)

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="flex items-center gap-4 text-2xl font-bold text-center">
          <Folder size={40} />
          project not found
        </h1>
        <div className="mt-4">
          {/* link back to project page */}
          <Link
            href="/project"
            className="group inline transition duration-300 text-teal-500 relative"
          >
            <span className="flex items-center gap-2 group-hover:text-teal-400">
              back to projects
              <ChevronRight
                size={20}
                className="transition-transform duration-300 transform group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <motion.section
      transition={{ delay: 0.2, duration: 0.5 }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen"
    >
      <CldImage
        src={project.image}
        alt={project.title}
        width="1220"
        height="600"
        quality="95"
        className="mx-auto my-[3.5rem] overflow-hidden shadow-lg dark:shadow-none lg:rounded-b-lg"
        priority={true}
      />
      <div className="px-4 lg:px-64">
        <h2
          className="text-2xl font-bold text-transparent 
           -mt-8 mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500">
            {project.title}
          </span>
        </h2>
        {/* tags */}
        <div className="flex flex-wrap lg:gap-4 gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="py-1 font-mono lg:text-[1rem] text-[0.9rem] mb-4 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-md leading-relaxed  dark:text-slate-400 font-medium">
          {project.description}
        </p>
        <div className="mx-1 m-6 flex items-center gap-4">
          {project.githubUrl && (
            <CTA href={project.githubUrl} target="_blank">
              <Github size={32} />
            </CTA>
          )}
          {project.liveUrl && (
            <CTA href={project.liveUrl} target="_blank">
              <Earth size={32} />
            </CTA>
          )}
          {project.externalLink && (
            <CTA href={project.externalLink} target="_blank">
              <Link2 size={32} />
            </CTA>
          )}
          {project.videoUrl && (
            <CTA href={project.videoUrl} target="_blank">
              <Youtube size={32} />
            </CTA>
          )}
          {/* folder */}
          {project.folderUrl && (
            <CTA href={project.folderUrl} target="_blank">
              <Folder size={32} />
            </CTA>
          )}
          {project.otherFile && (
            <CTA href={project.otherFile} target="_blank">
              <File size={32} />
            </CTA>
          )}
        </div>
      </div>
    </motion.section>
  )
}

export default ProjectDetail
