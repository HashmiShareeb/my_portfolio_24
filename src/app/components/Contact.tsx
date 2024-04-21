import { Mail } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-950 text-zinc-100">
      <div className="grid place-items-center m-8">
        <h1 className="text-4xl lg:text-6xl font-bold  text-transparent">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500">
            Contact me
          </span>
        </h1>
        <div className="mt-4">
          <p className="text-md text-center leading-relaxed text-slate-400">
            I am always open to new opportunities and collaborations. Feel free
            to reach out to me if you have any questions or just want to say hi.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <a
              href="mailto:shareeb.hashmi@student.howest.be"
              className="transform rounded-md  bg-teal-800 text-teal-400 px-5 py-3 font-medium transition-colors hover:bg-teal-700 transition-colors duration-200"
            >
              <span className="inline-flex items-center mx-auto">
                <Mail size={20} />
                <span className="ml-2">Email me</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
