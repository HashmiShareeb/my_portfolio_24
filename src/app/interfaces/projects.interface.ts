export interface ProjectData {
  id: string
  title: string
  description: string
  image: string
  ExtraImages?: string[]
  githubUrl?: string
  liveUrl?: string
  externalLink?: string
  videoUrl?: string
  tags: string[]
  folderUrl?: string
  otherFile?: string
}

const Data: ProjectData[] = [
  // Add your project details here in the following format:
  {
    id: '1',
    title: 'The Movie App',
    description:
      'An app that shows the latest movies with movie ratings and a searchbar to search for your favorite movies. This app is made with The Movie Database (TMDb) API. There is a light mode option as well, but it is based on the settings of your device/system where the dark mode or light mode is applied. This was a project I had to make in the class called Interaction Design, where we use CSS variables and make use of standard CSS and Vanilla JavaScript to display data and visualize it properly.',
    image: 'projects/ex1pog8nnwhlf8dnmmnv',
    githubUrl: 'https://github.com/HashmiShareeb/movieapp',
    liveUrl: 'https://hashmishareeb.github.io/movieapp/',
    externalLink: 'https://www.themoviedb.org/',
    tags: ['HTML', 'CSS', 'JavaScript', 'TheMovieDB API'],
    ExtraImages: ['projects/themovieapp_rbjdme'],
  },
  {
    id: '2',
    title: 'TimeTable App',
    description:
      'For this project, I made a timetable app that shows the timetable of the school. This app is made with Flutter, using the calender_view package to display the timetable. I also used firebase for te user authentication and firebase as the datbase to store the added event each user can add. This was a project I had to make in the class called Mobile Development, where we use Flutter and Dart to make a mobile app.',
    image: 'projects/ifzri2p4xyvtvhmqdczf',
    videoUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
    githubUrl: 'https://github.com/HashmiShareeb/smartapp_project24',
    tags: ['Flutter', 'Dart', 'Firebase', 'Firestore'],
    externalLink: 'https://pub.dev/packages/calendar_view',
  },
  {
    id: '3',
    title: 'My Portfolio',
    description:
      'This is my portfolio website where I showcase my projects and skills. This website is made with Next.js, Tailwind CSS, and TypeScript. I also used Framer Motion for animations and Google Fonts for the fonts. I also used Cloudinary Image component to optimize the images.',
    image: 'projects/aw6t5upukymx6fsdcwpx',
    tags: [
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Cloudinary',
      'Framer Motion',
    ],
    githubUrl: 'https://github.com/HashmiShareeb/my_portfolio',
  },
  {
    id: '4',
    title: 'Michael Naessens',
    description:
      "this was one of my first projects during my Intership in Exsited Webdesign, it was a webste for a psychologist. I made this website with the use of a CSM called ProccesWire that's powered on PHP along with SCSS, VueJS, and CSS frameworks such as UIkit and Bootstrap.",
    image: 'projects/qxhim9q0e86wwgajnsjw',
    tags: ['PHP', 'SCSS', 'VueJS', 'UIkit', 'Bootstrap', 'ProccesWire'],
    liveUrl: 'https://michaelnaessens.be/',
    externalLink: 'https://exsited.be/',
  },
  {
    id: '5',
    title: 'Digital Patient Twin',
    description:
      'This is a team project for Delaware. The Digital Patient Twin is a real-time monitoring dashboard designed to empower doctors with instant access to patient data. By providing a user-friendly interface, doctors can efficiently manage patient information, streamline workflows, and enhance patient care. Collaborating closely with my team members, I integrated backend data seamlessly into the frontend. This cohesive approach ensures that doctors receive accurate and up-to-date patient information. Due the company policy I can unfortunately I can not display the code online because of the company policy.',
    image: 'projects/t5auorwrf1zxbpkaumty',
    tags: ['Nuxt', 'TypeScript', 'Azure', 'CosmosDB', 'Dapr', 'Microservices'],
    githubUrl: 'https://github.com/JarneDel/digital-patient-twin-frontend',
    folderUrl: '/FA02.pdf',
    otherFile: '/technical_components.pdf',
  },

  // Add more projects following the same format
]

export default Data
