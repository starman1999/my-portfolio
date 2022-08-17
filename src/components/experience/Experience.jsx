import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {SiAdobephotoshop} from 'react-icons/si'
import {SiAdobeillustrator} from 'react-icons/si'
import {CgFigma} from 'react-icons/cg'
import {SiAdobeindesign} from 'react-icons/si'
import {SiHtml5} from 'react-icons/si'
import {IoLogoCss3} from 'react-icons/io'
import {IoLogoJavascript} from 'react-icons/io' 
import {GrReactjs} from 'react-icons/gr' 
import {TbBrandPython} from 'react-icons/tb'
import {SiTypescript} from 'react-icons/si'

const Experience = () => {
  return (
    <section id="experience">
      
      <h2> Skills I Have</h2>
      <div className="container experience__container">
        <div className="experience__forntend">
            <h3> IT</h3>
            <div className="experience__content">

              <article className='experience__details'>
              <SiHtml5 style = {{color: "#e34c26"}} className='experience-icon'/>
              <div>
              <h4> HTML </h4>
              </div>
              
              </article>

              <article className='experience__details'>
              <IoLogoCss3 style= {{color: "#264de4"}} className='experience-icon'/>
              <div>
              <h4> CSS </h4>
              </div></article>

              <article className='experience__details'>
              <IoLogoJavascript style = {{color: "#FFFF00"}} className='experience-icon'/>
              <div>
              <h4> JavaScript </h4>
              </div></article>

              <article className='experience__details'>
              <GrReactjs style = {{color: "#5ED4F3"}} className='experience-icon'/>
              <div>
              <h4> React </h4>
              </div>
              </article>

              <article className='experience__details'>
              <TbBrandPython style = {{color: "#356A97"}} className='experience-icon'/>
              <div>
              <h4> Python </h4>
              <small className='text-light'> Ai algorithms </small>
              </div>
              </article>

              <article className='experience__details'>
              <SiTypescript style={{color: '#2F74C0'}} className='experience-icon'/>
              <div>
              <h4> Typescript </h4>
              </div>
              </article>

            </div>
        </div>


          
        <div className="experience__backend">


            <h3> Graphic Design</h3>
            <div className="experience__content">

              <article className='experience__details'>
              <SiAdobeillustrator style={{color: '#D5661F'}} className="experience-icon" /> 
              <div>
              <h4> Adobe Illustrator </h4>
              </div>
              </article>

              <article className='experience__details'>
              <SiAdobephotoshop style={{color: '#2287B9'}} className='experience-icon'/>
              <div>
              <h4> Adobe Photoshop </h4>
              </div>
              </article>

              <article className='experience__details'>
              <CgFigma style={{color: '#D5661F'}} className='experience-icon'/>
              <div>
              <h4> Figma </h4>
              </div>
              </article>

              <article className='experience__details'>
              <SiAdobeindesign style={{color: '#E749A0'}} className='experience-icon'/>
              <div>
              <h4> InDesign </h4>
              </div>
              </article>

        

            </div>

        </div>


          <div className="experience__ai">


            <h3> Artificial Intelligence</h3>
            <small style={{color: "#ffffff"}} > Tools and algrithms</small>
            
            <br/> 
            <small > Image processing algorithms <br/> Machine Learning algorithms (regression - classification) <br/> OpenCV</small>
    
            

        </div>
        
      </div>
    </section>
  )
}

export default Experience