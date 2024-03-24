import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Navbar />
        <section id="about" className="py-10 grid place-items-center h-screen">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto mb-8 lg:mt-10 mt-20 h-56 w-56 overflow-hidden rounded-full bg-gradient-to-tr from-teal-300 to-blue-500">
              <Image width={500} height={500} src="" alt="Shareeb Hashmi" />
            </div>
            <div className="text-center">
              <h1 className="lg:text-7xl md:text-5xl text-4xl text-nowrap font-extrabold leading-10 tracking-tight">
                Shareeb Hashmi
              </h1>
              <h2 className="mt-4 text-2xl lg:text-6xl font-bold text-center bg-gradient-to-r from-teal-300 to-blue-500 bg-clip-text text-transparent">
                Web developer
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-400">
                I&apos;m a graduate in MIT currently studying{' '}
                <Link
                  href="https://mct.be/"
                  target="_blank"
                  className="text-teal-500 hover:underline hover:text-teal-400 transition-colors"
                >
                  MCT-Next Web Developer{' '}
                </Link>
                in Howest in Belgium. I have a passion for web development and
                love to create new things. I am a fast learner and always eager
                to something new or face challenges.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href={''}
                className="transform rounded-md  bg-teal-800 text-teal-400 px-5 py-3 font-medium transition-colors hover:bg-teal-700 transition-colors duration-200"
              >
                {' '}
                More about me{' '}
              </Link>

              <Link href="#" className="group  transition duration-300">
                Download Resume
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 dark:bg-white bg-black"></span>
              </Link>
            </div>
          </div>
        </section>
        <section id="projects" className="py-10 flex-grow flex justify-center">
          <div className="grid place-items-center grid-cols-2">
            <Projects />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
