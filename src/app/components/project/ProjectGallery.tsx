import { ProjectData } from '@/app/interfaces/projects.interface'
import { motion } from 'framer-motion'
import { CldImage } from 'next-cloudinary'

export const ProjectGallery = ({ project }: { project: ProjectData }) => {
  return (
    (project.gallery?.length ?? 0) > 0 && (
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* <h3 className="text-lg font-semibold text-teal-400 mb-4">
            More Images
          </h3> */}
        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          style={{ columnGap: '1.5rem' }}
        >
          {(project.gallery ?? []).map((img: string, idx: number) => (
            <motion.div
              key={idx}
              className="break-inside-avoid mb-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <CldImage
                src={img}
                alt={`Extra ${idx + 1}`}
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    )
  )
}
