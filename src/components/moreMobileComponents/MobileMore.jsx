import React from 'react'
import Projects from '../projectsComponents/Projects'
import SocialLinks from '../socialLinksComponents/SocialLinks'

const MobileMore = () => {
  return (
    <div className='flex flex-col items-center my-[5%]'>
        <Projects/>
        <SocialLinks/>
    </div>
  )
}

export default MobileMore