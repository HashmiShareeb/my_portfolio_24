"use client";
import Contact from './components/Contact'
import Intro from './components/Intro'
import FeaturedProjects from './components/FeaturedProjects'
import Skills from './components/Skills'
export default function Home() {
  return (
    <main className="flex flex-col lg:px-52 px-4 ">
      {/* hero (intro) */}
      <Intro />
      {/* projects */}
      <FeaturedProjects />
      {/* skills */}
      <Skills />
      {/* contact */}
      <Contact />
    </main>
  )
}
