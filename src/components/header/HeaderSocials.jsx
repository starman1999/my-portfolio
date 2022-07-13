import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaBehanceSquare} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/mounirdekali/'target="_blank"
          rel="noopener noreferrer"> <BsLinkedin/></a>

        <a href='https://github.com/starman1999' target="_blank"
          rel="noopener noreferrer">  <BsGithub/> </a>

        <a href='https://behance.com/altonstudio' target="_blank" 
         rel="noopener noreferrer">  <FaBehanceSquare/> </a>
    </div>
  )
  
}

export default HeaderSocials