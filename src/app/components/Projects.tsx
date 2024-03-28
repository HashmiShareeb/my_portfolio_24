import React from 'react'
import project from '/public/images/digitalpatienttwin.jpeg'
import Image from 'next/image'

type projectProps = {
  title: string
  image: string
  link: string
}

const Projects = ({ project }: { project: projectProps }) => {
  return (
    <div className="mt-8 hover:scale-105 transition-transform ease-in">
      <Image
        src={project.image}
        alt={project.title}
        width={400} // Adjust width according to your design
        height={300} // Adjust height according to your design
        className="aspect-video object-cover w-full h-auto rounded-xl"
      />
      <h1 className="text-2xl font-bold mt-4">Digital Patient Twin</h1>
      <a href={project.link}>
        <br />
        <button className="transform rounded-md  bg-teal-800 text-teal-400 px-5 py-3 font-medium transition-colors hover:bg-teal-700 transition-colors duration-200">
          View Project
        </button>
      </a>
    </div>
  )
}

export default Projects
