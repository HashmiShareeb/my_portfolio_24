import React from 'react'
import project from '/public/images/digitalpatienttwin.jpeg'
import Image, { StaticImageData } from 'next/image'

type projectProps = {
  title: string
  image: StaticImageData
  link: string
}

const Projects = ({ project }: { project: projectProps }) => {
  return (
    <div className="mt-8">
      <Image
        src={project.image}
        alt={project.title}
        width={0}
        height={0}
        className="aspect-contain object-cover w-full h-auto rounded-xl"
      />
      <h1 className="text-2xl font-bold mt-4">Digital Patient Twin</h1>
      <a href={project.link}>
        <button className="bg-gradient-to-r from-teal-300 to-teal-600 text-white px-4 py-2 rounded-md mt-4">
          View Project
        </button>
      </a>
    </div>
  )
}

export default Projects
