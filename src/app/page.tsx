import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Projects from './components/ProjectCards'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Intro from './components/Intro'
import Paragraph from './components/Text/Paragraph'

export default function Home() {
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
              link: '/project/digital-patient-twin',
            }}
          />
          {/* placeholder project component in development */}
          <Projects
            project={{
              title: 'the movie app',
              image: '/images/themovieapp.png',
              link: '/project/digital-patient-twin',
            }}
          />
        </div>
      </section>
      <section id="contact" className="px-10 md:px-20 lg:py-20 lg:px-40 m-8">
        <Contact />
      </section>
    </main>
  )
}
