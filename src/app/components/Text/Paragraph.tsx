import React from 'react'

function Paragraph({ text }: { text: string }) {
  return (
    <p className="text-lg text-center lg:text-left leading-relaxed text-slate-400">
      {text}
    </p>
  )
}

export default Paragraph
