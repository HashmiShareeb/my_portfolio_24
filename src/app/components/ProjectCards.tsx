import React from 'react'
import project from '/public/images/digitalpatienttwin.jpeg'
import Image from 'next/image'

type projectProps = {
  title: string
  image: string
  link: string
}

const ProjectCards = ({ project }: { project: projectProps }) => {
  return (
    <div className="py-4 py-4">
      <div className="block md:flex justify-between md:-mx-2">
        <div className="w-full h-auto mb-4 md:mb-0">
          <div className="dark:bg-slate-800 bg-zinc-50 rounded-lg overflow-hidden shadow dark:shadow-none relative">
            <img
              className="lg:h-96 h-auto w-full object-cover object-center"
              src={project.image}
              alt=""
            />
            <div className="p-4 h-auto md:h-40 lg:h-48">
              <a
                href={project.link}
                className="block font-bold mb-2 text-lg md:text-base lg:text-lg capitalize"
              >
                {project.title}
              </a>
              {/* <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                
              </div> */}
              {/* <div className="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                <a
                  className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                  href="#"
                >
                  #something
                </a>
                <a
                  className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                  href="#"
                >
                  #sky
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCards
