import type { MDXComponents } from 'mdx/types'
import { ProjectWrapper } from '@/app/components/ProjectWrapper'

const components: MDXComponents = {
  ProjectWrapper,
  // You can add more custom components like
  // h1: (props) => <h1 className="text-2xl" {...props} />,
  // p: (props) => <p className="text-lg" {...props} />,
}

export function useMDXComponents(): MDXComponents {
  return components
}
