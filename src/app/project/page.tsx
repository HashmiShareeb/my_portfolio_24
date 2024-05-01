import { Folder } from 'lucide-react'
import ProjectCards from '../components/ProjectCardsAll'

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col lg:px-52 px-4 py-20">
      <h1 className="md:text-5xl lg:text-6xl text-4xl font-bold text-transparent text-center lg:text-left">
        <span className="bg-clip-text text-transparent  bg-gradient-to-r from-teal-300 to-blue-500">
          Projects
        </span>
      </h1>
      <ProjectCards />
    </div>
  )
}

export default Projects
