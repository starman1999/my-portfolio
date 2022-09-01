import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FaBook} from 'react-icons/fa'
import {RiServiceLine} from 'react-icons/ri'
import {RiMessage3Fill} from 'react-icons/ri'
import {useState} from 'react'


const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');
  
  return (
    <nav>
      <div className='nav_icons'>
      <a href='/#'  onClick = {() => setActiveNav('#')} className= {activeNav === '#' ? 'active' : ''}> <AiFillHome/> </a>
      <a href='#about' onClick = {() => setActiveNav('#about')} className = {activeNav === '#about' ? 'active' : ''}> <AiOutlineUser/> </a>
      </div>
      
     
      <a href='#experience' onClick = {() => setActiveNav('#experience')} className = {activeNav === '#experience' ? 'active' : ''}> skills </a>
      <a href='#portfolio' onClick = {() => setActiveNav('#portfolio')} className = {activeNav === '#portfolio' ? 'active' : ''}> portfolio </a>
      <a href='#contact' onClick = {() => setActiveNav('#contact')} className = {activeNav === '#contact' ? 'active' : ''}> contact </a>
    </nav>
  )
}

export default Nav