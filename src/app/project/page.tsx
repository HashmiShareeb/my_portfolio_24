"use client";
import ProjectCards from '../components/ProjectCardsAll'
import GradientTitle from '../components/Text/GradientHeaderText'

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col lg:px-52 px-4 py-20">
      <GradientTitle
        title="Projects"
        description="some of my projects, some projects are still in development!"
      />
      <ProjectCards />
    </div>
  )
}

export default Projects
