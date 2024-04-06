import Navbar from '@/app/components/Navbar'
import React from 'react'

const ProjectDetail = () => {
  return (
    <div>
      {/* image */}
      <div className="max-w-screen-xl mx-auto min-h-screen">
        <div className="py-28">
          <h1 className="mb-4 text-4xl lg:text-6xl font-bold text-transparent">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500">
              Digital Patient Twin
            </span>
          </h1>
          <picture>
            <source
              srcSet="/images/digitalpatienttwin.jpeg"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="/images/digitalpatienttwin.jpeg"
              media="(min-width: 768px)"
            />
            <img
              src="/images/digitalpatienttwin.jpeg"
              alt="Digital Patient Twin"
              className="w-full h-auto lg:aspect-video aspect-auto object-cover object-center rounded-lg shadow dark:shadow-none"
            />
          </picture>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
