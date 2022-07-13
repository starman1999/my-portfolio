import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FaBook} from 'react-icons/fa'
import {RiServiceLine} from 'react-icons/ri'
import {RiMessage3Fill} from 'react-icons/ri'


const Nav = () => {
  return (
    <nav>
      <a href='#home' className='active'> <AiFillHome/> </a>
      <a href='#about'> <AiOutlineUser/> </a>
      <a href='#experience'> <FaBook/> </a>
      <a href='#services'> <RiServiceLine/> </a>
      <a href='#contact'> <RiMessage3Fill/> </a>
    </nav>
  )
}

export default Nav