import React from 'react'

type GradientHeaderTextProps = {
  title: string
  description?: string
}

const GradientHeaderText = (props: GradientHeaderTextProps) => {
  return (
    <div className="text-center lg:text-left">
      <h1 className="text-4xl lg:text-5xl font-bold text-transparent   lg:text-left">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500">
          {props.title}
        </span>
      </h1>
      <p className="mt-4 lg:text-left text-center text-slate-400 leading-relaxed font-medium">
        {props.description}
      </p>
    </div>
  )
}

export default GradientHeaderText
