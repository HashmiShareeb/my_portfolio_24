import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Projects from './components/ProjectCards'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Intro from './components/Intro'
import Paragraph from './components/Text/Paragraph'
import { Mail } from 'lucide-react'
import ProjectCards from './components/ProjectCards'

export default function Home() {
  const projects = [
    {
      title: 'The Movie App',
      image: 'images/themovieapp.png',
      link: '#',
      description:
        'An app that shows the latest movies with movie ratings and a searchbar to search for your favorite movies. This app is made with the The Movie Database (TMDb) API. there is a lightmode option aswell but it is based on the settings of your device/sytem which the darkmode or lightmode is applied.',
    },

    // Add more projects as needed
  ]
  return (
    <main className="min-h-screen  ">
      <section id="about">
        <Intro />
      </section>
      <section id="projects" className="px-10 md:px-20 lg:py-20 lg:px-40 m-8">
        <h1 className="text-4xl lg:text-6xl font-bold  text-transparent">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500">
            Projects
          </span>
        </h1>

        <p className="text-md text-left leading-relaxed text-slate-400">
          some projects are still in development!
        </p>
        <div className="flex flex-col lg:flex-row gap-10">
          <Projects
            project={{
              title: 'Digital Patient Twin',
              image: '/images/digitalpatienttwin.jpeg',
              description:
                'A project that aims to create a digital twin of a patient to help doctors diagnose and treat patients more effectively.',

              link: '/project/digital-patient-twin',
            }}
          />
          {/* placeholder project component in development */}
          {projects.map((project, i) => (
            <ProjectCards key={i} project={project} />
          ))}
        </div>
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}
