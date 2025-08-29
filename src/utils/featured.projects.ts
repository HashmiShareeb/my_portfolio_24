import Data from '@/app/data/projects'
import { ProjectData } from '@/app/interfaces/projects.interface'

export const getFeaturedProjects = (limit = 3): ProjectData[] =>
  Data.filter(p => p.featured).slice(0, limit)
