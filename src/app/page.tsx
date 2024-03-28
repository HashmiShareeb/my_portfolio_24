import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Intro from './components/Intro'

export default function Home() {
  return (
    <main>
      <section
        id="about"
        className="py-10 grid place-items-center min-h-screen "
      >
        <Intro />
      </section>
      <section id="projects" className="px-10 md:px-20 lg:px-40 m-8">
        <h1 className="mt-8 text-4xl lg:text-6xl font-bold  text-transparent">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500">
            Projects
          </span>
        </h1>
        <div className="flex flex-col lg:flex-row gap-10">
          <Projects
            project={{
              title: 'Digital Patient Twin',
              image: '/images/digitalpatienttwin.jpeg',
              link: '/project/digital-patient-twin',
            }}
          />
        </div>
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}
