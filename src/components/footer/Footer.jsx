import React from 'react'
import './footer.css'

import {AiOutlineInstagram} from 'react-icons/ai'

import {BsFacebook} from 'react-icons/bs'

import {AiFillBehanceCircle} from 'react-icons/ai'

import {AiOutlineGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>

      <ul className='permalinks'>
        <li> <a href = "/#"> Home</a></li>
        <li> <a href = "#about"> About</a></li>
        <li> <a href = "#experience"> Experiences</a></li>
        <li> <a href = "#portfolio"> Portfolio</a></li>
        <li> <a href = "#contact"> Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a class="fa-lg" href = "https://facebook.com/mounirdek" target="_blank"  rel="noopener noreferrer"> <BsFacebook/> </a>
        <a class="fa-lg" href = "https://instagram.com/alton.graphics" target="_blank"  rel="noopener noreferrer"> <AiOutlineInstagram/> </a>
        <a class="fa-lg" href = "https://behance.net/altonstudio" target="_blank"  rel="noopener noreferrer"> <AiFillBehanceCircle/> </a>
        <a class="fa-lg" href = "https://github.com/startman1999" target="_blank"  rel="noopener noreferrer"> <AiOutlineGithub/> </a>
      </div>
    </footer>
  )
}

export default Footer