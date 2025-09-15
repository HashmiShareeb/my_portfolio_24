'use client'

import { ChevronLeft, Folder } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Data from '@/app/data/projects'
import DigitalPatientTwin from '@/app/mdx/digital-patient-twin.mdx'
import Blitx from '@/app/mdx/blitx.mdx'
import TimeTableApp from '@/app/mdx/time-table-app.mdx'
import MyPortfolio from '@/app/mdx/my-portfolio.mdx'
import Harmony from '@/app/mdx/harmony-energy.mdx'
import MovieApp from '@/app/mdx/movie-app.mdx'
import MichaelN from '@/app/mdx/michael-naessens.mdx'
import NexusFM from '@/app/mdx/nexus-fm.mdx'
import { MDXProvider, useMDXComponents } from '@mdx-js/react'
import { ProjectData } from '@/app/interfaces/projects.interface'
import { ProjectWrapper } from '@/app/components/ProjectWrapper'
import { ProjectCTAs as ProjectCTA } from '@/app/components/project/cta'
import { Section } from '@/app/components/project/Section'
import { ProjectGallery } from '@/app/components/project/ProjectGallery'

// Map projectId → { data, mdx component }
const projects: Record<string, { data: ProjectData; Content: any }> = {
  'digital-patient-twin': {
    data: {
      ...Data.find((p: { id: string }) => p.id === 'digital-patient-twin')!,
    },
    Content: DigitalPatientTwin,
  },
  blitx: {
    data: {
      ...Data.find((p: { id: string }) => p.id === 'blitx')!,
    },
    Content: Blitx,
  },
  'my-portfolio': {
    data: {
      ...Data.find((p: { id: string }) => p.id === 'my-portfolio')!,
    },
    Content: MyPortfolio,
  },
  'timetable-app': {
    data: {
      ...Data.find((p: { id: string }) => p.id === 'timetable-app')!,
    },
    Content: TimeTableApp,
  },
  'harmony-energy': {
    data: {
      ...Data.find((p: { id: string }) => p.id === 'harmony-energy')!,
    },
    Content: Harmony,
  },
  'movie-app': {
    data: {
      ...Data.find((p: { id: string }) => p.id === 'movie-app')!,
    },
    Content: MovieApp,
  },
  'deborah-lintermans': {
    data: {
      ...Data.find((p: { id: string }) => p.id === 'deborah-lintermans')!,
    },
    Content: require('@/app/mdx/deborah-lintermans.mdx').default,
  },
  'michael-naessens': {
    data: {
      ...Data.find((p: { id: string }) => p.id === 'michael-naessens')!,
    },
    Content: MichaelN,
  },
  'nexus-fm': {
    data: {
      ...Data.find((p: { id: string }) => p.id === 'nexus-fm')!,
    },
    Content: NexusFM,
  },
}

export default function ProjectPage() {
  const { projectId } = useParams()

  // Find the project data from the imported Data array
  const project = Data.find(p => p.id === projectId)

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="flex items-center gap-4 text-2xl font-bold">
          <Folder size={40} />
          Project not found
        </h1>

        <Link href="/project/">
          <button className="group inline transition duration-300 dark:text-teal-400 text-teal-500 relative">
            <span className="flex items-center gap-2 group-hover:text-teal-300 group-focus:text-teal-300 mt-2">
              <ChevronLeft
                size={20}
                className="transition-transform duration-300 transform group-hover:-translate-x-1"
              />
              back to projects
            </span>
          </button>
        </Link>
      </div>
    )
  }
  const { Content } = projects[projectId as string]
  const projectData = projects[projectId as string].data

  return (
    <section className="dark:text-slate-300 font-medium">
      <MDXProvider>
        <ProjectWrapper>
          {/* start go back to project btn */}
          <div className="fixed top-10 left-4 z-20">
            <Link href="/project">
              <button className="relative inline group transition duration-300 text-teal-500 dark:text-teal-400">
                <span className="mt-2 flex items-center gap-2 transition-colors group-hover:text-teal-300 group-focus:text-teal-300 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 shadow dark:shadow-none">
                  <ChevronLeft
                    size={20}
                    className="transform transition-transform duration-300 lg:group-hover:-translate-x-1"
                  />
                  <span className="sr-only md:not-sr-only">Projects</span>
                </span>
              </button>
            </Link>
            {/* end of go back button */}
          </div>
          <Content {...projectData} />
          {/* Render sections */}
          {project.sections?.map((section, idx) => (
            <Section key={idx} section={section} />
          ))}
          <ProjectGallery project={projectData} />
          <ProjectCTA project={projectData} />
        </ProjectWrapper>
      </MDXProvider>
    </section>
  )
}
