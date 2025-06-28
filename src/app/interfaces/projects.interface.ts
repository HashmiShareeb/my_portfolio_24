export interface ProjectData {
  id: string
  title: string
  description: string
  label?: string //for the project card
  image: string
  gallery?: string[]
  githubUrl?: string
  liveUrl?: string
  externalLink?: string
  videoUrl?: string
  tags: string[]
  folderUrl?: string
  otherFile?: string
  date?: string //sort by date
  featured?: boolean
  createdAt?: string

  sections?: {
    title?: string
    image?: string
    text?: string
  }[]
}
