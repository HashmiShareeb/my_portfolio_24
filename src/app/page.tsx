import Projects from './components/ProjectCards'
import Contact from './components/Contact'
import Intro from './components/Intro'
import projects, { ProjectData } from './data'
import ProjectCards from './components/ProjectCards'
import Data from './data'
export default function Home() {
  // const projects = [
  //   {
  //     title: 'The Movie App',
  //     image: 'images/movieappmockup.png',
  //     link: '/project/1',
  //     description:
  //       'An app that shows the latest movies with movie ratings and a searchbar to search for your favorite movies. This app is made with the The Movie Database (TMDb) API. there is a lightmode option aswell but it is based on the settings of your device/sytem which the darkmode or lightmode is applied.',
  //   },
  //   {
  //     title: 'The Weather App',
  //     image: 'images/weatherapp.png',
  //     link: '',
  //     description:
  //       'An app that shows the current weather and the weather forecast for the next 7 days. This app is made with the OpenWeatherMap API. there is a lightmode option aswell but it is based on the settings of your device/sytem which the darkmode or lightmode is applied.',
  //   },
  //   {
  //     title: 'The Calculator App',
  //     image: 'images/calculatorapp.png',
  //     link: '#',
  //     description:
  //       'A calculator app that can do basic math operations like addition, subtraction, multiplication and division. This app is made with React.js and TailwindCSS. there is a lightmode option aswell but it is based on the settings of your device/sytem which the darkmode or lightmode is applied.',
  //   },

  //   // Add more projects as needed
  // ]
  return (
    <main className="flex flex-col lg:px-52 px-4 ">
      {/* hero (intro) */}
      <Intro />
      {/* projects */}
      <ProjectCards />
      {/* contact */}
      <Contact />
    </main>
  )
}
