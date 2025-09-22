import { ProjectData } from '../interfaces/projects.interface'

const Data: ProjectData[] = [
  {
    id: 'digital-patient-twin',
    title: 'Digital Patient Twin',
    label: 'Industry Project',
    image: 'Digital_Patient_Twin',
    tags: ['Azure', 'CosmosDB', 'Dapr', 'Microservices', 'Nuxt', 'TypeScript'],
    githubUrl: 'https://github.com/JarneDel/digital-patient-twin-frontend',
    folderUrl: '/FA02.pdf',
    otherFile: '/technical_components.pdf',
    featured: true,
    sections: [
      {
        title: 'Project Presentation',
        image: 'digitalpatienttwin',
        text: 'Me and my team had the honour to present this project at the Delaware HQ in Ghent, where we showcased the Digital Patient Twin to a large audience. The project was well-received, and we received positive feedback for our work.',
      },
    ],
  },
  {
    id: 'timetable-app',
    title: 'TimeTable App',
    label: 'SmartApp Development',
    image: 'timetable_app',
    videoUrl:
      'https://drive.google.com/file/d/1X1Y6rSPLK4fZPHOgxgoZLFMUVkJNk4iM/view',
    githubUrl: 'https://github.com/HashmiShareeb/smartapp_project24',
    tags: ['Dart', 'Firebase', 'Firestore', 'Flutter'],
  },
  {
    id: 'my-portfolio',
    title: 'My Portfolio',
    label: 'Frontend Development',
    image: 'My_portfolio-lightmode',
    tags: [
      'Cloudinary',
      'Framer Motion',
      'MDX',
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Vercel',
    ],
    githubUrl: 'https://github.com/HashmiShareeb/my_portfolio_24',
    gallery: ['my_portfolio_dm_display', 'my_portfolio_lm'],
  },
  {
    id: 'blitx',
    title: 'Blitx – Robottaxi Dashboard',
    image: 'Bachelor_Proef',
    label: 'Research Project',
    // alphabetically align the tags
    tags: [
      'Axios',
      'Hexagonal Architecture',
      'JPA',
      'Mapbox',
      'Maven',
      'Pinia',
      'PostgreSQL',
      'REST API',
      'Spring Boot',
      'Spring Security',
      'Vue 3',
    ],
    sections: [
      {
        title: 'Hexagonal Architecture',
        image: '/images/hexagonal_architecture.png',
        text: 'Hexagonal architecture, also known as "Ports and Adapters" or DDD (Domain-Driven Design), is a software architecture aimed at isolating the core of the application (domain logic) from external systems such as databases, frameworks, user interfaces, and container technologies like Docker. This architecture establishes a clear separation between internal domains and external components by using well-defined interfaces (Ports) and implementations of these interfaces to interact with external systems (Adapters).',
      },
      {
        title: 'User Roles',
        text: 'This project uses two roles: ADMIN and USER. Admin can manage the vehicles and see the rides, while User can request rides and look at their rides history. These roles are enforced through Spring Security to ensure secure access control.',
      },
      {
        title: 'Frontend',
        text: 'Built with Vue 3 and Vite, using Pinia and LocalStorage for state management and Axios for API communication. The dashboard features secure navigation via Vue Router guards, responsive CRUD views for vehicles andrides, and a clear separation between the user roles. The user can request rides and the route backend fetches the coordinates with the mapbox map and draws the routes.',
        image: 'routesummary',
      },
      {
        title: 'Backend',
        text: 'Powered by Spring Boot with JPA and PostgreSQL, the backend follows a hexagonal architecture with distinct domain, application, and infrastructure layers. Data Transfer Objects (DTOs) protect sensitive fields, while WebConfig ensures secure CORS communication with the frontend. Authentication and authorization are handled via Spring Security.',
      },
      {
        title: 'Research & Learning',
        text: 'During the project, I explored different architectural approaches (MVC, layered, clean architecture) and compared them with hexagonal architecture. Community feedback (e.g. Spring and other communities on Reddit and forums) influenced pragmatic decisions such as combining JPA annotations with a domain-driven model. The project demonstrates my ability to research, evaluate, and implement complex fullstack architectures.',
      },
    ],
    githubUrl: 'https://github.com/HashmiShareeb/researchproject_backend',
    gallery: ['vehicle_list', 'ridehistory_dm'],

    featured: true,
  },
  {
    id: 'harmony-energy',
    title: 'Harmony Energy',
    label: 'Internship',
    image: 'My_Harmony_Energy',

    sections: [
      {
        title: 'Marketing Website',
        image: 'marketingsite_harmony',
        text: 'I completely recreated the marketing website using Svelte, TypeScript, and Tailwind CSS. I implemented i18n using Svelte Stores to manage locales, which was a huge challenge at first but with using reactivity that Svelte 5 provides this was ultimately a smooth process. I also got the freedom to make my own layout as my intership mentor was impressed by my UI/UX and frontend skills, it was a fun project to work on and a good introduction on using Svelte which may come in handy for future projects 😉.',
      },

      {
        title: 'My Harmony Dashboard',
        text: 'On the internal dashboard I worked on multiple core features including the dynamic device management page, onboarding flow (with GoLang autodetection script), energy forecasting charts, and a logging component. I also recreated complex KPI and monitoring graphs using Grafana and custom HTML panels. Throughout the project, I focused on clean code structure, API integration, and user experience improvements. This was a great learning experience as I got to work with different technologies and frameworks, and also got to understand how a real-world application is built and maintained.',
      },
    ],

    tags: [
      'API Integration',
      'Docker',
      'Golang',
      'Grafana',
      'I18n',
      'SQL',
      'Svelte',
      'Svelte Stores',
      'Tailwind CSS',
      'TypeScript',
    ],

    otherFile: '/Harmony Brochure.pdf',
    featured: true,
    // gallery: ['projects/Harmony_Energy_ooomjf'],
  },
  {
    id: 'deborah-lintermans',
    title: 'Honden Coach Deborah Lintermans',
    image: 'Deborah_Lintermans',
    label: 'Internship',
    tags: ['BEM', 'Bootstrap', 'PHP', 'ProccesWire', 'SCSS', 'UIkit', 'VueJS'],
    liveUrl: 'https://deborahlintermans.be/',
  },
  {
    id: 'michael-naessens',
    title: 'Michael Naessens',
    label: 'Internship',
    image: 'MNaesens',
    tags: ['BEM', 'Bootstrap', 'PHP', 'ProccesWire', 'SCSS', 'UIkit', 'VueJS'],
    liveUrl: 'https://michaelnaessens.be/',
  },
  {
    id: 'movie-app',
    title: 'The Movie App',
    label: 'Interaction Design',
    image: 'movieapp',
    githubUrl: 'https://github.com/HashmiShareeb/movieapp',
    liveUrl: 'https://hashmishareeb.github.io/movieapp/',
    tags: ['CSS', 'HTML', 'JavaScript', 'TheMovieDB API'],
    // externalLink: 'https://www.themoviedb.org/',
    //ExtraImages: ['projects/themovieapp_rbjdme'],
  },
  {
    id: 'nexus-fm',
    title: 'Nexus FM',
    label: 'Full-stack development ',
    image: 'NexusFM_eqeu7k',
    // alphabetically align the tags
    tags: [
      'Docker',
      'GraphQL',
      'MongoDB',
      'NestJS',
      'Monorepo',
      'TailwindCSS',
      'TypeScript',
      'Vue',
      'Vue-Charts',
    ],
    githubUrl: 'https://github.com/HashmiShareeb/shareeb_afsd_fm2025',
    featured: true,
    gallery: ['nexus_fm_admin', 'nexus_fm_manageprop', 'nexus_fm_asignrounds'],
  },
]

export default Data
