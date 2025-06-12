'use client'
import {
  ChevronRight,
  Earth,
  Folder,
  Github,
  Link2,
  Youtube,
  File,
  ChevronLeft,
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { motion } from 'framer-motion'
import { CldImage } from 'next-cloudinary'
import CTA from '@/app/components/CTA'
import Data from '@/app/data/projects'

const ProjectDetail = ({ params }: { params: { projectId: string } }) => {
  // Find the project with the matching id
  const project = Data.find(p => p.id === params.projectId)

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
            className="group inline transition duration-300 text-teal-400 relative"
          >
            <span className="flex items-center gap-2 group-hover:text-teal-300">
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
      className="min-h-screen flex flex-col my-10"
    >
      {/* Fixed back button: always top, spaced, with breathing room, supports dark/light */}
      <div className="fixed top-4 left-4 z-20">
        <Link href="/project" passHref legacyBehavior>
          <button
            className="group flex items-center gap-2 text-teal-500 hover:text-teal-400 transition-colors
         px-4 py-2 rounded-full
          
          space-x-2"
            style={{ minWidth: 44, minHeight: 44 }}
          >
            <ChevronLeft
              size={22}
              className="transition-transform duration-300 transform group-hover:-translate-x-1 group-hover:text-teal-400 group-focus:text-teal-400"
            />
            <span className="sr-only md:not-sr-only group-hover:text-teal-400 group-focus:text-teal-400">
              Projects
            </span>
          </button>
        </Link>
      </div>

      <CldImage
        src={project.image}
        alt={project.title}
        width="1400"
        height="600"
        quality="95"
        className="mx-auto my-[3.5rem] overflow-hidden shadow-lg dark:shadow-none lg:rounded-xl "
        priority={true}
      />
      <div className="px-4 md:px-32 lg:px-64">
        <h2
          className="text-2xl font-bold text-transparent 
       -mt-8 mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 dark:from-teal-300 dark:via-cyan-400 dark:to-blue-400">
            {project.title}
          </span>
        </h2>
        {/* tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-xs sm:text-sm font-mono bg-gray-200 dark:bg-slate-800 rounded-full"
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
            <CTA
              href={project.githubUrl}
              target="_blank"
              id="github-cta"
              ariaLabel="GitHub"
            >
              <Github size={32} />
            </CTA>
          )}
          {project.liveUrl && (
            <CTA
              href={project.liveUrl}
              target="_blank"
              id="live-url-cta"
              ariaLabel="LiveUrl"
            >
              <Earth size={32} />
            </CTA>
          )}
          {project.externalLink && (
            <CTA
              href={project.externalLink}
              target="_blank"
              id="external-link-cta"
              ariaLabel="ExternalLink"
            >
              <Link2 size={32} />
            </CTA>
          )}
          {project.videoUrl && (
            <CTA
              href={project.videoUrl}
              target="_blank"
              id="video-url-cta"
              ariaLabel="VideoUrl"
            >
              <Youtube size={32} />
            </CTA>
          )}
          {/* folder */}
          {project.folderUrl && (
            <CTA
              href={project.folderUrl}
              target="_blank"
              id="folder-url-cta"
              ariaLabel="FolderURL"
            >
              <Folder size={32} />
            </CTA>
          )}
          {project.otherFile && (
            <CTA
              href={project.otherFile}
              target="_blank"
              id="other-file-cta"
              ariaLabel="OtherFiles"
            >
              <File size={32} />
            </CTA>
          )}
        </div>
      </div>
    </motion.section>
  )
}

export default ProjectDetail
