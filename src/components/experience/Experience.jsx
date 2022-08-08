import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id="experience">
      
      <h2> Skills I Have</h2>
      <div className="container experience__container">
        <div className="experience__forntend">
            <h3> Frontend Development</h3>
            <div className="experience__content">

              <article className='experience__details'>
              <BsPatchCheckFill className='experience-icon'/>
              <div>
              <h4> HTML </h4>
              <small className='text-light'> experienced </small>
              </div>
              
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience-icon'/>
              <div>
              <h4> HTML </h4>
              <small className='text-light'> experienced </small>
              </div></article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience-icon'/>
              <div>
              <h4> HTML </h4>
              <small className='text-light'> experienced </small>
              </div></article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience-icon'/>
              <div>
              <h4> HTML </h4>
              <small className='text-light'> experienced </small>
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience-icon'/>
              <div>
              <h4> HTML </h4>
              <small className='text-light'> experienced </small>
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience-icon'/>
              <div>
              <h4> HTML </h4>
              <small className='text-light'> experienced </small>
              </div>
              </article>

            </div>
        </div>


          
        <div className="experience__backend">

          {/* END OF FRONT END */}

        <h3> Backend Development</h3>
            <div className="experience__content">

              <article className='experience__details'>
              <BsPatchCheckFill className='experience-icon'/>
              <div>
              <h4> HTML </h4>
              <small className='text-light'> experienced </small>
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience-icon'/>
              <div>
              <h4> HTML </h4>
              <small className='text-light'> experienced </small>
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience-icon'/>
              <div>
              <h4> HTML </h4>
              <small className='text-light'> experienced </small>
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience-icon'/>
              <div>
              <h4> HTML </h4>
              <small className='text-light'> experienced </small>
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience-icon'/>
              <div>
              <h4> HTML </h4>
              <small className='text-light'> experienced </small>
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience-icon'/>
              <div>
              <h4> HTML </h4>
              <small className='text-light'> experienced </small>
              </div>
              </article>

            </div>

        </div>
      </div>
    </section>
  )
}

export default Experience