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
    <section className="min-h-screen">
      <Image
        src={project.image}
        alt={project.title}
        width={960}
        height={600}
        quality={100}
        className="mx-auto lg:rounded-md"
        priority={true}
      />
      <div className="px-4 lg:px-64">
        <h2 className="text-2xl font-bold text-transparent my-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500">
            {project.title}
          </span>
        </h2>
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
    </section>
  )
}

export default ProjectDetail
