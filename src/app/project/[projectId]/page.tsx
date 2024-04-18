import Image from 'next/image'
import React from 'react'

const ProjectDetail = ({ params }: { params: { projectId: string } }) => {
  return (
    <div>
      <h1>Project {params.projectId}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        fermentum ligula. Sed ac metus nec nisl ultricies posuere. Curabitur
        finibus, libero nec ultricies ultricies, ligula sapien ultricies lorem,
        eget ultricies metus nunc eget nisl. Nam ac metus nec nisl ultricies
        posuere. Curabitur finibus, libero nec ultricies ultricies, ligula
        sapien ultricies lorem, eget ultricies metus nunc eget nisl. Nam ac
        metus nec nisl ultricies posuere. Curabitur finibus, libero nec
        ultricies ultricies, ligula sapien ultricies lorem, eget ultricies metus
        nunc eget nisl.
      </p>
    </div>
  )
}

export default ProjectDetail
