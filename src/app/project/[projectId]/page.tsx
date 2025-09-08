'use client'

import { ChevronLeft, Folder } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { CldImage } from 'next-cloudinary'
import { motion } from 'framer-motion'

import Data from '@/app/data/projects'

/* -------------------------------------------------
   Helper: decides <CldImage> vs <Image>
-------------------------------------------------- */
const ResponsiveImage = ({
  src,
  alt,
  className = '',
}: {
  src: string
  alt?: string
  className?: string
}) => {
  const isCloudinary = !src.startsWith('/')
  const sharedProps = {
    width: 800,
    height: 450,
    alt: alt || 'Section image',
    className: `rounded-xl shadow-md ${className}`,
    style: { objectFit: 'cover', width: '100%', height: 'auto' } as const,
    priority: true,
  }

  return isCloudinary ? (
    <CldImage {...sharedProps} src={src} quality={95} />
  ) : (
    <Image {...sharedProps} src={src} />
  )
}

/* -------------------------------------------------
   Component
-------------------------------------------------- */
// export default function ProjectDetail() {
//   // Get route params using Next.js App Router
//   const params = useParams()
//   const project = Data.find(p => p.id === params?.projectId)

//   if (!project) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen">
//         <h1 className="flex items-center gap-4 text-2xl font-bold">
//           <Folder size={40} />
//           Project not found
//         </h1>

//         <Link href="/project/">
//           <button className="group inline transition duration-300 dark:text-teal-400 text-teal-500 relative">
//             <span className="flex items-center gap-2 group-hover:text-teal-300 group-focus:text-teal-300 mt-2">
//               <ChevronLeft
//                 size={20}
//                 className="transition-transform duration-300 transform group-hover:-translate-x-1"
//               />
//               back to projects
//             </span>
//           </button>
//         </Link>
//       </div>
//     )
//   }

// return (
//   <motion.section
//     transition={{ delay: 0.2, duration: 0.5 }}
//     initial={{ opacity: 0, y: 8 }}
//     animate={{ opacity: 1, y: 0 }}
//     className="min-h-screen flex flex-col my-10"
//   >
// <div className="fixed top-10 left-4 z-20">
//   <Link href="/project">
//     <button className="relative inline group transition duration-300 text-teal-500 dark:text-teal-400">
//       <span className="mt-2 flex items-center gap-2 transition-colors group-hover:text-teal-300 group-focus:text-teal-300 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 shadow dark:shadow-none">
//         <ChevronLeft
//           size={20}
//           className="transform transition-transform duration-300 lg:group-hover:-translate-x-1"
//         />
//         <span className="sr-only md:not-sr-only">Projects</span>
//       </span>
//     </button>
//   </Link>
// </div>

//     <div className="px-4 md:px-40 lg:px-64">
//       <CldImage
//         src={project.image}
//         alt={project.title}
//         width={1400}
//         height={600}
//         quality={95}
//         className="mx-auto my-8 overflow-hidden shadow-lg dark:shadow-none rounded-xl w-full h-auto"
//         priority
//       />

//       {project.label && (
//         <span className="inline-block mb-4 px-3 py-1 text-sm font-semibold rounded-full bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300">
//           {project.label}
//         </span>
//       )}

//       <h2 className="text-2xl font-bold mb-4">
//         <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 dark:from-teal-300 dark:via-cyan-400 dark:to-blue-400">
//           {project.title}
//         </span>
//       </h2>

//       <div className="flex flex-wrap gap-2 mb-6">
//         {project.tags.map(tag => (
//           <span
//             key={tag}
//             className="px-3 py-1 text-xs sm:text-sm font-mono bg-gray-200 dark:bg-slate-800 rounded-full"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>

//       {/* Description */}
//       <p className="text-md leading-relaxed dark:text-slate-400 font-medium">
//         {project.description}
//       </p>

//       {/* ---------- Sections (clean layout) ---------- */}
//       {project.sections?.[0] && (
//         <motion.section
//           className="my-16 grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-6 items-start"
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {/* Text block */}
//           <div
//             className={
//               project.sections[0].image
//                 ? 'lg:col-span-7 xl:col-span-6 flex flex-col justify-center'
//                 : 'lg:col-span-12 xl:col-span-12 flex flex-col justify-center'
//             }
//           >
//             {project.sections[0].title && (
//               <h3 className="text-2xl font-semibold text-teal-500 mb-3">
//                 {project.sections[0].title}
//               </h3>
//             )}
//             {project.sections[0].text && (
//               <p className="text-slate-700 dark:text-slate-400 leading-relaxed text-justify font-medium">
//                 {project.sections[0].text}
//               </p>
//             )}
//           </div>

//           {/* Image block (only if present) */}
//           {project.sections[0].image && (
//             <div className="lg:col-span-5 xl:col-span-6 w-full">
//               <ResponsiveImage
//                 src={project.sections[0].image}
//                 alt={project.sections[0].title}
//                 className="rounded-xl shadow-md"
//               />
//             </div>
//           )}
//         </motion.section>
//       )}

//       {/* -------------------------------------------------
//           OTHER SECTIONS
//       -------------------------------------------------- */}
//       {project.sections?.slice(1).map((section, index) => {
//         const hasImage = !!section.image
//         return (
//           <motion.section
//             key={index}
//             className="my-16 grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-6 items-start"
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             {/* Text */}
//             <div
//               className={
//                 hasImage
//                   ? 'lg:col-span-7 xl:col-span-6 flex flex-col justify-center'
//                   : 'lg:col-span-12 xl:col-span-12 flex flex-col justify-center'
//               }
//             >
//               {section.title && (
//                 <h3 className="text-2xl font-semibold text-teal-500 mb-3">
//                   {section.title}
//                 </h3>
//               )}
//               {section.text && (
//                 <p className="text-slate-700 dark:text-slate-400 leading-relaxed text-justify font-medium">
//                   {section.text}
//                 </p>
//               )}
//             </div>

//             {/* Image */}
//             {hasImage && (
//               <div className="lg:col-span-5 xl:col-span-6 w-full">
//                 <ResponsiveImage
//                   src={section.image ?? ''}
//                   alt={section.title}
//                   className="rounded-xl shadow-md"
//                 />
//               </div>
//             )}
//           </motion.section>
//         )
//       })}

//       {/* ---------- Gallery ---------- */}
//       {(project.gallery?.length ?? 0) > 0 && (
//         <motion.div
//           className="mt-6"
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {/* <h3 className="text-lg font-semibold text-teal-400 mb-4">
//             More Images
//           </h3> */}
//           <div
//             className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
//             style={{ columnGap: '1.5rem' }}
//           >
//             {(project.gallery ?? []).map((img, idx) => (
//               <motion.div
//                 key={idx}
//                 className="break-inside-avoid mb-6"
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: idx * 0.08 }}
//                 viewport={{ once: true, amount: 0.2 }}
//               >
//                 <CldImage
//                   src={img}
//                   alt={`Extra ${idx + 1}`}
//                   width={600}
//                   height={400}
//                   className="rounded-xl shadow-lg w-full h-auto"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       )}

//       {/* ---------- CTA Links ---------- */}
//       <div className="mx-1 m-6 flex items-center gap-4">
//         {project.githubUrl && (
//           <CTA href={project.githubUrl} target="_blank" ariaLabel="GitHub">
//             <Github size={32} />
//           </CTA>
//         )}
//         {project.liveUrl && (
//           <CTA href={project.liveUrl} target="_blank" ariaLabel="LiveUrl">
//             <Earth size={32} />
//           </CTA>
//         )}
//         {project.externalLink && (
//           <CTA
//             href={project.externalLink}
//             target="_blank"
//             ariaLabel="ExternalLink"
//           >
//             <Link2 size={32} />
//           </CTA>
//         )}
//         {project.videoUrl && (
//           <CTA href={project.videoUrl} target="_blank" ariaLabel="VideoUrl">
//             <PlayCircle size={32} />
//           </CTA>
//         )}
//         {project.folderUrl && (
//           <CTA href={project.folderUrl} target="_blank" ariaLabel="FolderURL">
//             <Folder size={32} />
//           </CTA>
//         )}
//         {project.otherFile && (
//           <CTA
//             href={project.otherFile}
//             target="_blank"
//             ariaLabel="OtherFiles"
//           >
//             <File size={32} />
//           </CTA>
//         )}
//       </div>
//     </div>
//   </motion.section>
// )
// }

// Import MDX files (you’ll add more as you grow)
import DigitalPatientTwin from '@/app/mdx/digital-patient-twin.mdx'
import Blitx from '@/app/mdx/blitx.mdx'
import TimeTableApp from '@/app/mdx/time-table-app.mdx'
import MyPortfolio from '@/app/mdx/my-portfolio.mdx'
import Harmony from '@/app/mdx/harmony-energy.mdx'
import { MDXProvider, useMDXComponents } from '@mdx-js/react'
import { ProjectData } from '@/app/interfaces/projects.interface'
import { ProjectWrapper } from '@/app/components/ProjectWrapper'
import { ProjectCTAs as ProjectCTA } from '@/app/components/project/cta'

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
          {/* go back to project btn */}
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
          </div>
          <Content {...projectData} />
          <ProjectCTA project={projectData} />
        </ProjectWrapper>
      </MDXProvider>
    </section>
  )
}
