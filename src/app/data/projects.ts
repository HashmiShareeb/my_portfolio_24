import { ProjectData } from '../interfaces/projects.interface'

const Data: ProjectData[] = [
  {
    id: '1',
    title: 'Digital Patient Twin',
    label: 'Industry Project',
    description:
      'During Industry Project i was assigned with a team of talanted developers and worked with Delaware. The Digital Patient Twin is a real-time monitoring dashboard designed to empower doctors with instant access to patient data. By providing a user-friendly interface, doctors can efficiently manage patient information and enhance patient care. Collaborating closely with my team members, I integrated backend data seamlessly into the frontend. This cohesive approach ensures that doctors receive accurate and up-to-date patient information. Due the company policy I can unfortunately not display the backend code online because of the company policy.',
    image: 'projects/Digital_Patient_Twin_kbgfwx',
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

    description:
      'This is my portfolio website where I showcase my projects, skills and more about myself. This website is made with Next.js, Tailwind CSS, TypeScript and also used Framer Motion for animations for the webpage. I also used Cloudinary Image component to optimize the images.',
    image: 'projects/My_portfolio_turnp5',
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
    label: 'Internship',
    description:
      "this was one of my first projects during my Intership in Exsited Webdesign, it was a webste for a psychologist. I made this website with the use of a CMS called ProccesWire that's powered on PHP along with SCSS, VueJS, and CSS frameworks such as UIkit and Bootstrap.",
    image: 'projects/MNaesens_e065rr',
    tags: ['PHP', 'SCSS', 'VueJS', 'UIkit', 'Bootstrap', 'ProccesWire'],
    liveUrl: 'https://michaelnaessens.be/',
    externalLink: 'https://exsited.be/',
  },
  {
    id: '5',
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
  {
    id: '6',
    title: 'Harmony Energy',
    label: 'Internship',
    description:
      "During my internship at Harmony Energy, I contributed to both their marketing website and their internal dashboard. I recreated the entire website using modern technologies such as Svelte, TypeScript, and Tailwind CSS, and implemented i18n using Svelte Stores for locale and language management. On the internal 'My Harmony Dashboard', I worked on multiple core features including the dynamic device management page, onboarding flow (with GoLang autodetection script), energy forecasting charts, and a logging component. I also recreated complex KPI and monitoring graphs using Grafana and custom HTML panels. Throughout the project, I focused on clean code structure, API integration, and user experience improvements.",
    image: '/projects/Harmony_Energy_xthhmc',

    sections: [
      {
        title: 'Marketing Website',
        image: '2025-06-10_13.40.53_harmony.energy_24c07fcd9430_hyueuo',
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
    id: '7',
    title: 'Blitxz – Robottaxi Dashboard',
    description:
      'Blitxz is a fullstack dashboard application developed as part of my bachelor thesis. The backend is built using Spring Boot and follows a hexagonal architecture to isolate domain logic from external systems such as the PostgreSQL database. The frontend is developed with Vue 3, Axios, and Pinia for state management. The dashboard includes CRUD operations for vehicle and ride management, user authentication via Spring Security, and route guards for secure frontend navigation. I applied DTOs to protect sensitive data, structured the backend with clean architectural layers, and focused on a modular, testable system. This project demonstrates strong backend architecture and smooth API communication between frontend and backend.',
    image: '/projects/BlitX_tzi8qd',
    label: 'Bachelor Thesis',
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
      'Maven',
    ],
    sections: [
      {
        title: 'Hexagonal Architecture',
        image: '/images/hexagonal_architecture.png',
        text: 'This architecture enforces a clear separation between the internal domain and external systems, such as the UI and the database, by using interfaces (Ports) and implementations for each external dependency (Adapters). The domain layer contains the core business logic and is independent of any frameworks or technologies. The application layer orchestrates use cases and interacts with the domain layer, while the infrastructure layer handles technical details like database access and web communication. This structure enhances maintainability, testability, and flexibility, allowing easy replacement of external systems without impacting the core logic.',
      },
      {
        title: 'User Roles',
        text: 'The system defines two roles: Admin and User. Admins can manage vehicles and oversee rides, while Users can request, start, and complete rides. These roles are enforced through Spring Security to ensure secure access control.',
      },
      {
        title: 'Frontend',
        text: 'Built with Vue 3 and Vite, using Pinia and LocalStorage for state management and Axios for API communication. The dashboard features secure navigation via Vue Router guards, responsive CRUD views for vehicles and rides, and a clear separation between the user Roles so that each role has access to the appropriate routes.',
      },
      {
        title: 'Backend',
        text: 'Powered by Spring Boot with JPA and PostgreSQL, the backend follows a hexagonal architecture with distinct domain, application, and infrastructure layers. Data Transfer Objects (DTOs) protect sensitive fields, while WebConfig ensures secure CORS communication with the frontend. Authentication and authorization are handled via Spring Security.',
      },
      {
        title: 'Research & Learning',
        text: 'During the project, I explored different architectural approaches (MVC, layered, clean architecture) and compared them with hexagonal architecture. Community feedback (e.g. Spring and Vue forums, Reddit) influenced pragmatic decisions such as combining JPA annotations with a domain-driven model. The project demonstrates my ability to research, evaluate, and implement complex fullstack architectures.',
      },
    ],
    featured: true,
  },
]

export default Data
