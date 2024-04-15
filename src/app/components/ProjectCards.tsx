import React from 'react'

type ProjectProps = {
  title: string
  image: string
  link: string
  description?: string
}

const ProjectCards = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="py-4">
      <div>
        <picture>
          <source srcSet={project.image} type="image/webp" />
          <img
            src={project.image}
            alt={project.title}
            className="rounded-xl object-cover object-center shadow-lg dark:shadow-none
            w-[400px] h-96"
          />
        </picture>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-transparent">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500">
            {project.title}
          </span>
        </h2>
        <p className="text-slate-400">{project.description}</p>
        <a
          href={project.link}
          className="text-teal-500 hover:underline hover:text-teal-400 transition-colors"
        >
          Read more
        </a>
      </div>
    </div>
  )
}

export default ProjectCards
