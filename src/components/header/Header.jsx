import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'

import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
       <div className="container header_container">
        <h5 className='text-light'> Hello I'm</h5>
        <h1 className='text-light'> Mounir  Dekali</h1>
        <h5 className="text-light">Graphic Designer and Web Developer</h5>
        <CTA/>

      
        <HeaderSocials/>

        <a href="#contact" className='scroll__down'> Scroll Down</a>
        <img src= {ME} className='me' alt="mounir dekali "/>

       </div>
    </header>
  )
}

export default Header