import React from 'react'

const SkillsCard = ({src,name}) => {
  return (
    <>
      <div className='skills-card'>
        <img src={src} alt="" />
         <h3>{name}</h3>
        
      </div>
      </>
  )
}

export default SkillsCard


