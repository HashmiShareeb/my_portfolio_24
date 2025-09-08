import { ProjectData } from '@/app/interfaces/projects.interface'
import CTA from '../CTA'
import { Github, Earth, Link2, PlayCircle, Folder, File } from 'lucide-react'

// CTA Buttons component
export const ProjectCTAs = ({ project }: { project: ProjectData }) => {
  return (
    <div className="mx-1 m-6 flex items-center gap-4">
      {project.githubUrl && (
        <CTA href={project.githubUrl} target="_blank" ariaLabel="GitHub">
          <Github size={32} />
        </CTA>
      )}
      {project.liveUrl && (
        <CTA href={project.liveUrl} target="_blank" ariaLabel="LiveUrl">
          <Earth size={32} />
        </CTA>
      )}
      {project.externalLink && (
        <CTA
          href={project.externalLink}
          target="_blank"
          ariaLabel="ExternalLink"
        >
          <Link2 size={32} />
        </CTA>
      )}
      {project.videoUrl && (
        <CTA href={project.videoUrl} target="_blank" ariaLabel="VideoUrl">
          <PlayCircle size={32} />
        </CTA>
      )}
      {project.folderUrl && (
        <CTA href={project.folderUrl} target="_blank" ariaLabel="FolderURL">
          <Folder size={32} />
        </CTA>
      )}
      {project.otherFile && (
        <CTA href={project.otherFile} target="_blank" ariaLabel="OtherFiles">
          <File size={32} />
        </CTA>
      )}
    </div>
  )
}
