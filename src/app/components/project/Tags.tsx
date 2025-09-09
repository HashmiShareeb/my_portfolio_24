import { ProjectData } from '@/app/interfaces/projects.interface'

export function ProjectTags({ tags }: { tags: ProjectData['tags'] }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map(tag => (
        <span
          key={tag}
          className="px-3 py-1 text-xs sm:text-sm font-mono bg-gray-200 dark:bg-slate-800 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
