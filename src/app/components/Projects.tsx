import React from 'react'
import { ExternalLink, File, Folder, GitBranch, GithubIcon } from 'lucide-react'
import project from '../images/digitalpatienttwin.jpeg'
import Image from 'next/image'

const Projects = () => {
  return (
    <section className="px-10 md:px-20 lg:px-40">
      <div className="mx-auto max-w-md overflow-hidden rounded-lg dark:bg-slate-900  bg-white shadow">
        <Image
          src={project}
          className="aspect-video w-full object-cover"
          alt="digital patient twin"
        />
        <div className="p-4">
          <p className="mb-1 text-sm">
            <Folder size={16} className="inline-block mr-3" />
            <span className="">Projects</span>
          </p>
          <h3 className="text-xl font-medium">Digital Patient Twin</h3>
          <p className="mt-1 ">
            <span className="text-sm">Description:</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects
