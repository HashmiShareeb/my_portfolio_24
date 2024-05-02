import { Mail } from 'lucide-react'
import React from 'react'
import GradientTitle from './Text/GradientHeaderText'

const Contact = () => {
  return (
    <section id="contact">
      <div className="grid place-items-center m-8">
        <GradientTitle title="Contact" />
        <div className="mt-4">
          <p className="text-md text-center leading-relaxed text-slate-400 lg:w-3/4 mx-auto">
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
