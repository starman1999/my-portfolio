import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me3.png'
import shape3D from '../../assets/ppperspective2.svg'

import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
       <div className="container header_container">
        <h5 className='text-light'> Hello I'm</h5>
        <h1 className='text-light'> Mounir  Dekali</h1>
        <h5 className="text-light">Graphic Designer and  Front Web Developer</h5>
        <CTA/>

      
        <HeaderSocials/>

        <a href="#contact" className='scroll__down'> Scroll Down</a>
        <img src= {ME} className='me' alt="mounir dekali "/>
        <img src= {shape3D} className='shape3D' alt="3d design "/>


       </div>
    </header>
  )
}

export default Header