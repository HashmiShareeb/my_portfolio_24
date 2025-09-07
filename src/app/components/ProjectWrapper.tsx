'use client'
import { motion } from 'framer-motion'
import { ProjectData } from '../interfaces/projects.interface'

export const ProjectWrapper = ({
  children,
  metadata: ProjectData,
}: {
  children: React.ReactNode
  id?: string
  metadata?: ProjectData
}) => {
  return (
    <motion.section
      transition={{ delay: 0.2, duration: 0.5 }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex flex-col my-10"
    >
      <div className="px-4 md:px-40 lg:px-64">{children}</div>
    </motion.section>
  )
}
