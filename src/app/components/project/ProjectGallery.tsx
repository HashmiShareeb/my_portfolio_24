import { ProjectData } from '@/app/interfaces/projects.interface'
import { motion } from 'framer-motion'
import { CldImage } from 'next-cloudinary'

export const ProjectGallery = ({ project }: { project: ProjectData }) => {
  return (
    (project.gallery?.length ?? 0) > 0 && (
      <div className="mt-4 grid grid-cols-12 gap-4 md:gap-8 lg:my-10 lg:gap-16">
        {(project.gallery ?? []).map((img: string, idx: number) => {
          // Alternate col-start for staggered layout
          const colStart = idx % 2 === 0 ? 'lg:col-start-3' : 'lg:col-start-1'
          return (
            <div
              key={idx}
              className={`col-span-full lg:col-span-10 ${colStart}`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <CldImage
                  src={img}
                  alt={`Extra ${idx + 1}`}
                  width={500}
                  height={400}
                  quality={100}
                  priority
                  sizes="100vw"
                  className="rounded-xl shadow-lg w-full h-auto dark:border dark:border-slate-700"
                />
              </motion.div>
            </div>
          )
        })}
      </div>
    )
  )
}
