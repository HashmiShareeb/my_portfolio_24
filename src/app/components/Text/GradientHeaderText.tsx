import React from 'react'

type GradientHeaderTextProps = {
  title: string
  description?: string
  centerTitle?: boolean
}

const GradientHeaderText = (props: GradientHeaderTextProps) => {
  return (
    <div
      className={`text-center ${props.centerTitle ? 'lg:text-center' : 'lg:text-left'}`}
    >
      <h1
        className={`text-4xl lg:text-5xl font-bold text-transparent ${props.centerTitle ? 'text-center' : 'lg:text-left'}`}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500">
          {props.title}
        </span>
      </h1>
      <p
        className={`mt-4 ${props.centerTitle ? 'text-center' : 'lg:text-left'} text-slate-400 leading-relaxed font-medium`}
      >
        {props.description}
      </p>
    </div>
  )
}

export default GradientHeaderText
