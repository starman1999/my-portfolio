import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        
        

        <article className='service'>
          <div className='service__head'>

            <h3> Graphic Design</h3>

          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Logo Design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p> Brand Identity Design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p> Magazine Design and layouts</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p> Web Design</p>
            </li>
          </ul>
            {/*END OF FIRST SERVICE*/}
        </article>


        <article className='service'>
          <div className='service__head'>

            <h3> Front Web Dev</h3>

          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
            {/*END OF FIRST SERVICE*/}
        </article>
      </div>
    
    </section>
  )
}

export default Services