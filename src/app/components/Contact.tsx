import { Mail } from 'lucide-react'
import React from 'react'
import Paragraph from './Text/Paragraph'

type Props = {}
const Contact = () => {
  return (
    <div className="grid place-items-center px-10 md:px-20 lg:px-40 m-8">
      <h1 className="lg:text-5xl text-3xl text-nowrap font-extrabold leading-10 tracking-tight">
        Get in touch with me!
      </h1>
      <div className="mt-4">
        <Paragraph text="I am always open to new opportunities and collaborations. Feel free to reach out to me if you have any questions or just want to say hi." />
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
  )
}

export default Contact