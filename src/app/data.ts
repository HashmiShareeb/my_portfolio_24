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
  tags: string[]
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
    tags: ['HTML', 'CSS', 'JavaScript', 'TheMovieDB API'],
  },
  {
    id: '2',
    title: 'TimeTable App',
    description:
      'For this project, I made a timetable app that shows the timetable of the school. This app is made with Flutter, using the calender_view package to display the timetable. I also used firebase for te user authentication and firebase as the datbase to store the added event each user can add. This was a project I had to make in the class called Mobile Development, where we use Flutter and Dart to make a mobile app.',
    image: '/images/timetableapp_showcase.png',
    videoUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
    githubUrl: 'https://github.com/HashmiShareeb/smartapp_project24',
    tags: ['Flutter', 'Dart', 'Firebase', 'Firestore'],
  },
  {
    id: '3',
    title: 'My Portfolio',
    description:
      'This is my portfolio website where I showcase my projects and skills. This website is made with Next.js, Tailwind CSS, and TypeScript. I also used Framer Motion for animations and Google Fonts for the fonts. I also used the Next.js Image component to optimize the images. I also used the Next.js',
    image: '/images/portfolio_showcase.png',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/HashmiShareeb/my_portfolio',
  },

  // Add more projects following the same format
]

export default Data
