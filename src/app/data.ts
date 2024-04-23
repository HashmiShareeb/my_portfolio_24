// data.ts
export interface ProjectData {
  id: string
  title: string
  description: string
  image: string
  githubUrl?: string
  liveUrl?: string
  externalLink?: string
  videoUrl?: string
}

const Data: ProjectData[] = [
  // Add your project details here in the following format:
  {
    id: '1',
    title: 'The Movie App',
    description:
      'An app that shows the latest movies with movie ratings and a searchbar to search for your favorite movies. This app is made with The Movie Database (TMDb) API. There is a light mode option as well, but it is based on the settings of your device/system where the dark mode or light mode is applied. This was a project I had to make in the class called Interaction Design, where we use CSS variables and make use of standard CSS and Vanilla JavaScript to display data and visualize it properly.',
    image: '/images/movieappmockup.png',
    githubUrl: 'https://github.com/HashmiShareeb/movieapp',
    liveUrl: 'https://hashmishareeb.github.io/movieapp/',
    externalLink: 'https://www.themoviedb.org/',
  },
  {
    id: '2',
    title: 'Michael Naessens',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    image: '/images/projects-michaelnaessens.png',
    liveUrl: 'https://michaelnaessens.be/',
  },

  // Add more projects following the same format
]

export default Data
