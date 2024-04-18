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
    <main className="flex flex-col items-center px-4">
      <Intro />
      <ProjectCards project={projects[0]} />
      {/* <Contact /> */}
    </main>
  )
}
