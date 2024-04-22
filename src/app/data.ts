// data.ts
export interface ProjectData {
  id: string
  title: string
  description: string
  image: string
  githubUrl: string
  liveUrl: string
}

const Data: ProjectData[] = [
  // Add your project details here in the following format:
  {
    id: '1',
    title: 'The Movie App',
    description:
      'An app that shows the latest movies with movie ratings and a searchbar to search for your favorite movies...',
    image: '/images/movieappmockup.png',
    githubUrl: 'https://github.com/HashmiShareeb/movieapp',
    liveUrl: 'https://hashmishareeb.github.io/movieapp/',
  },
  {
    id: '2',
    title: 'Michael Naessens',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    image: '/images/projects-michaelnaessens.png',
    githubUrl: 'https://github.com/HashmiShareeb/movieapp',
    liveUrl: 'https://hashmishareeb.github.io/movieapp/',
  },

  // Add more projects following the same format
]

export default Data
