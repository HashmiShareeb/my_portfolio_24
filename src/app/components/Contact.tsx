import { Mail } from 'lucide-react'
import React from 'react'
import GradientTitle from './Text/GradientHeaderText'
import CTA from './CTA'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="px-4 mx-auto py-4 lg:py-24"
      id="contact"
    >
      <div className="grid place-items-center m-8">
        <GradientTitle title="Contact" IsCentered={true} />
        <div className="mt-4">
          <p className="text-md text-center leading-relaxed text-slate-400 lg:w-3/4 mx-auto">
            I am always open to new opportunities and collaborations. Feel free
            to reach out to me if you have any questions or just want to say hi.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <CTA mailto="shareeb.hashmi@howest.student.be">
              <span className="inline-flex items-center mx-auto">
                <Mail size={20} />
                <span className="ml-2">Email me</span>
              </span>
            </CTA>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
