import Data from '@/app/data/projects'
import { ProjectData } from '@/app/interfaces/projects.interface'

export const getFeaturedProjects = (limit?: number): ProjectData[] => {
  const featured = Data.filter(p => p.featured)
  return typeof limit === 'number' ? featured.slice(0, limit) : featured
}
