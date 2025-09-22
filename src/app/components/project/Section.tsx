import { motion } from 'framer-motion'
import { ResponsiveImage } from '../ResponsiveImg'

// Section component
export const Section = ({ section }: { section: any }) => {
  const hasImage = !!section.image
  return (
    <motion.section
      className="my-16 grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-6 items-start"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Text */}
      <div
        className={
          hasImage
            ? 'lg:col-span-7 xl:col-span-6 flex flex-col justify-center'
            : 'lg:col-span-12 xl:col-span-12 flex flex-col justify-center'
        }
      >
        {section.title && (
          <h3 className="text-xl font-semibold text-teal-500 dark:text-teal-400 mb-3">
            {section.title}
          </h3>
        )}
        {section.text && (
          <p className="leading-relaxed text-justify font-medium">
            {section.text}
          </p>
        )}
      </div>

      {/* Image */}
      {hasImage && (
        <div className="lg:col-span-5 xl:col-span-6 w-full">
          <ResponsiveImage src={section.image} alt={section.title} />
        </div>
      )}
    </motion.section>
  )
}
