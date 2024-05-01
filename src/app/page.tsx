import Contact from './components/Contact'
import Intro from './components/Intro'
import FeaturedProjects from './components/FeaturedProjects'
export default function Home() {
  return (
    <main className="flex flex-col lg:px-52 px-4 ">
      {/* hero (intro) */}
      <Intro />
      {/* projects */}
      <FeaturedProjects />
      {/* contact */}
      <Contact />
    </main>
  )
}
