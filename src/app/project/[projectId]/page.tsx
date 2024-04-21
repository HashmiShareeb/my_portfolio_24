import { Earth, Github, WholeWord, WholeWordIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectDetail = ({ params }: { params: { projectId: string } }) => {
  return (
    <section className="min-h-screen">
      <Image
        src="/images/movieappmockup.png"
        alt="The Movie App"
        width={960}
        height={600}
        quality={100}
        className="mx-auto lg:rounded-md"
      />
      <div className="px-4 lg:px-64">
        <h2 className="text-2xl font-bold text-transparent my-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500">
            The Movie App
          </span>
        </h2>
        <p className="text-md leading-relaxed  dark:text-slate-400 font-medium">
          An app that shows the latest movies with movie ratings and a searchbar
          to search for your favorite movies. this app is made with the{' '}
          <Link
            href={'https://www.themoviedb.org/'}
            target="_blank"
            className="text-teal-600 font-semibold hover:underline hover:text-teal-400 transition-colors duration-100"
          >
            The Movie Database (TMDb)
          </Link>{' '}
          API. there is a lightmode option aswell but it is based on the
          settings of your device/sytem which the darkmode or lightmode is
          applied. This was a project i had to make in the class called
          Interaction Design, where we use CSS variables and make use of
          standard CSS and Vanilla Javascript to display data and visualise it
          properly. This app
        </p>
        <div className="mx-1 m-6 flex items-center gap-4">
          <Link
            href={'https://github.com/your-username/your-repo'}
            target="_blank"
            className="hover:text-teal-500 bg-teal-800 p-3 text-teal-600 rounded-md hover:underline hover:text-teal-400 transition-colors"
          >
            <Github size={32} />
          </Link>
          <Link
            href={'https://hashmishareeb.github.io/movieapp/'}
            target="_blank"
            className="hover:text-teal-500 bg-teal-800 p-3 text-teal-600 rounded-md hover:underline hover:text-teal-400 transition-colors"
          >
            <Earth size={32} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail
