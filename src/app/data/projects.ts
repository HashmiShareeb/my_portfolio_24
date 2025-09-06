import { ProjectData } from '../interfaces/projects.interface'

const Data: ProjectData[] = [
  {
    id: '1',
    title: 'Digital Patient Twin',
    label: 'Industry Project',
    description:
      'During Industry Project i was assigned with a team of talanted developers and worked with Delaware. The Digital Patient Twin is a real-time monitoring dashboard designed to empower doctors with instant access to patient data. By providing a user-friendly interface, doctors can efficiently manage patient information and enhance patient care. Collaborating closely with my team members, I integrated backend data seamlessly into the frontend. This cohesive approach ensures that doctors receive accurate and up-to-date patient information. Due the company policy I can unfortunately not display the backend code online because of the company policy.',
    image: 'projects/Digital_Patient_Twin_hr0whf',
    tags: ['Nuxt', 'TypeScript', 'Azure', 'CosmosDB', 'Dapr', 'Microservices'],
    githubUrl: 'https://github.com/JarneDel/digital-patient-twin-frontend',
    folderUrl: '/FA02.pdf',
    otherFile: '/technical_components.pdf',
    externalLink: 'https://www.delaware.pro/en-be',
    featured: true,
    sections: [
      {
        title: 'Project Presentation',
        image: 'projects/digitalpatienttwin',
        text: 'Me and my team had the honour to present this project at the Delaware HQ in Ghent, where we showcased the Digital Patient Twin to a large audience. The project was well-received, and we received positive feedback for our work.',
      },
    ],
    // gallery: ,
  },
  {
    id: '2',
    title: 'TimeTable App',
    label: 'SmartApp Development',
    description:
      'For this project, I made a timetable app that shows the timetable of each course (which is simulated). This app is made with Flutter, using the calender_view package to display the timetable. I also used firebase for the user authentication and firebase as the database to store the added event from each user. This was a project I had to make in the class called SmartApp Development, where we use Flutter and Dart to make a mobile application.',
    image: 'projects/ifzri2p4xyvtvhmqdczf',
    videoUrl:
      'https://drive.google.com/file/d/1X1Y6rSPLK4fZPHOgxgoZLFMUVkJNk4iM/view',
    githubUrl: 'https://github.com/HashmiShareeb/smartapp_project24',
    tags: ['Flutter', 'Dart', 'Firebase', 'Firestore'],
    externalLink: 'https://pub.dev/packages/calendar_view',
  },
  {
    id: '3',
    title: 'My Portfolio',
    label: 'Frontend Development',
    description:
      'This is my portfolio website where I showcase my projects, skills and more about myself. This website is made with Next.js, Tailwind CSS, TypeScript and also used Framer Motion for animations for the webpage. I also used Cloudinary Image component to optimize the images.',
    image: 'projects/My_portfolio-lightmode',
    tags: [
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Cloudinary',
      'Framer Motion',
    ],
    githubUrl: 'https://github.com/HashmiShareeb/my_portfolio',
    gallery: ['projects/my_portfolio_dm', 'projects/my_portfolio_lm'],
  },
  {
    id: '4',
    title: 'Blitx – Robottaxi Dashboard',
    description:
      'Blitx Robottaxi Dashboard is a scalable Full-Stack proof-of-concept project for managing autonomous vehicles. Designed with hexagonal architecture in mind and a primary focus on Spring Boot backend, the system supports two user roles and includes map integration via MapBox, as well as CRUD functionalities and other backend logic implemented in the Vue 3 frontend. Developed for research project with a focus on scalability and user-friendliness. This project also illustrates the importance of clean architecture and separation of concerns in software development.',
    image: '/projects/Bachelor_Proef_zwj5zi',
    label: 'Research Project',
    tags: [
      'Spring Boot',
      'Hexagonal Architecture',
      'PostgreSQL',
      'Vue 3',
      'JPA',
      'Axios',
      'Pinia',
      'Spring Security',
      'REST API',
      'Mapbox',
      'Maven',
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
        image: 'projects/routesummary_ponmty',
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
    gallery: [
      'projects/Screenshot_2025-08-30_221945_alcyou',
      'projects/Screenshot_2025-08-30_221416_eikydn',
    ],

    featured: true,
  },
  {
    id: '5',
    title: 'Harmony Energy',
    label: 'Internship',
    description:
      "During my internship at Harmony Energy, I contributed to both their marketing website and their internal dashboard. I recreated the entire website using modern technologies such as Svelte, TypeScript, and Tailwind CSS, and implemented i18n using Svelte Stores for locale and language management. On the internal 'My Harmony Dashboard', I worked on multiple core features including the dynamic device management page, onboarding flow (with GoLang autodetection script), energy forecasting charts, and a logging component. I also recreated complex KPI and monitoring graphs using Grafana and custom HTML panels. Throughout the project, I focused on clean code structure, API integration, and user experience improvements.",
    image: '/projects/Harmony_Energy_lhljgf',

    sections: [
      {
        title: 'Marketing Website',
        image: '2025-06-10_13.40.53_harmony.energy_24c07fcd9430_hyueuo',
        text: 'I completely recreated the marketing website using Svelte, TypeScript, and Tailwind CSS. I implemented i18n using Svelte Stores to manage locales, which was a huge challenge at first but with using reactivity that Svelte 5 provides this was ultimately a smooth process. I also got the freedom to make my own layout as my intership mentor was impressed by my UI/UX and frontend skills, it was a fun project to work on and a good introduction on using Svelte which may come in handy for future projects 😉.',
      },

      {
        title: 'My Harmony Dashboard',
        text: 'On the internal dashboard I worked on multiple core features including the dynamic device management page, onboarding flow (with GoLang autodetection script), energy forecasting charts, and a logging component. I also recreated complex KPI and monitoring graphs using Grafana and custom HTML panels. Throughout the project, I focused on clean code structure, API integration, and user experience improvements. This was a great learning experience as I got to work with different technologies and frameworks, and also got to understand how a real-world application is built and maintained.',
      },
    ],

    tags: [
      'Svelte',
      'TypeScript',
      'Tailwind CSS',
      'Svelte Stores',
      'I18n',
      'Golang',
      'Grafana',
      'Docker',
      'SQL',
      'API Integration',
    ],

    otherFile: '/Harmony Brochure.pdf',
    liveUrl: 'https://harmony.energy',
    featured: true,
    // gallery: ['projects/Harmony_Energy_ooomjf'],
  },
  {
    id: '6',
    title: 'Honden Coach Deborah Lintermans',
    description:
      'during my intership in Exsited (now known as Indie Group) I made a website for a dog coach.I made this website with the use of a CMS called ProcessWire thats powered on PHP along with SCSS, VueJS, and CSS frameworks such as UIkit and Bootstrap.',
    image: '/projects/Deborah_Lintermans',
    label: 'Internship',
    tags: ['PHP', 'SCSS', 'UIkit', 'Bootstrap', 'ProcessWire'],
    liveUrl: 'https://deborahlintermans.be/',
    externalLink: 'https://www.indiegroup.be/',
    featured: true,
  },
  {
    id: '7',
    title: 'Michael Naessens',
    label: 'Internship',
    description:
      "this was one of my first projects during my Intership in Exsited Webdesign (now known as Indie Group), it was a webste for a psychologist. I made this website with the use of a CMS called ProccesWire that's powered on PHP along with SCSS, VueJS, and CSS frameworks such as UIkit and Bootstrap.",
    image: 'projects/MNaesens_slqogb',
    tags: ['PHP', 'SCSS', 'VueJS', 'UIkit', 'Bootstrap', 'ProccesWire'],
    liveUrl: 'https://michaelnaessens.be/',
    externalLink: 'https://www.indiegroup.be/',
  },
  {
    id: '8',
    title: 'The Movie App',
    label: 'Interaction Design',
    description:
      'An app that shows the latest movies with movie ratings and a searchbar to search for your favorite movies. This app is made with The Movie Database (TMDb) API. There is a light mode option as well, but it is based on the settings of your device/system where the dark mode or light mode is applied. This was a project I had to make in the class called Interaction Design, where we use CSS variables and make use of standard CSS and Vanilla JavaScript to display data and visualize it properly.',
    image: 'projects/movieapp_fu3f4p',
    githubUrl: 'https://github.com/HashmiShareeb/movieapp',
    liveUrl: 'https://hashmishareeb.github.io/movieapp/',
    externalLink: 'https://www.themoviedb.org/',
    tags: ['HTML', 'CSS', 'JavaScript', 'TheMovieDB API'],
    //ExtraImages: ['projects/themovieapp_rbjdme'],
  },
]

export default Data
