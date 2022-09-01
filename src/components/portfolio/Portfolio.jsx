import React, {useState, useEffect} from 'react'
import './portfolio.css'
import shygger from '../../assets/shygger.png'
import icedCoffee from '../../assets/icedcoffee.png'
import beautyMatch from '../../assets/beautyMatche.png'
import bloomFlowers from '../../assets/bloomflowers.png'
import asdp from '../../assets/asdp.jpg'
import alton from '../../assets/alton.png'


import mag1 from '../../assets/portfolio/mag/mag1.png'
import mag2 from '../../assets/portfolio/mag/mag2.png'
import mag3 from '../../assets/portfolio/mag/mag3.png'
import mag5 from '../../assets/portfolio/mag/mag5.png'
import mag6 from '../../assets/portfolio/mag/mag6.png'
import mag7 from '../../assets/portfolio/mag/mag7.png'
import mag8 from '../../assets/portfolio/mag/mag8.png'


import icedcoffee1 from '../../assets/portfolio/icedcoffee/icedcoffee1.png'
import icedcoffee2 from '../../assets/portfolio/icedcoffee/icedcoffee2.png'
import icedcoffee3 from '../../assets/portfolio/icedcoffee/icedcoffee3.png'
import icedcoffee4 from '../../assets/portfolio/icedcoffee/icedcoffee4.png'
import icedcoffee5 from '../../assets/portfolio/icedcoffee/icedcoffee5.png'
import icedcoffee6 from '../../assets/portfolio/icedcoffee/icedcoffee6.png'

import website1 from '../../assets/website/website1.png'
import website2 from '../../assets/website/website2.png'
import website3 from '../../assets/website/website3.png'
import website4 from '../../assets/website/website4.png'
import website5 from '../../assets/website/website5.png'

import print1 from "../../assets/print1.jpg"
import print2 from "../../assets/print2.png"
import print3 from "../../assets/print3.jpg"
import print4 from "../../assets/print4.jpg"

import {FaArrowAltCircleRight, FaArrowAltCircleLeft, FaSlidersH, FaLongArrowAltDown } from 'react-icons/fa'


const logos = [
  {
    id: 1,
    image: shygger,
    title: 'Shygger Logo Design',

  },

  {
    id: 2,
    image: icedCoffee,
    title: 'Iced Coffee Visual Identity',

  },
  {
    id: 3,
    image: bloomFlowers,
    title: 'Shygger Logo Design',
    github: 'https://github.com/starman1999',

  },

  {
    id: 4,
    image: beautyMatch,
    title: 'Shygger Logo Design',
 
  },

  {
    id: 5,
    image: asdp,
    title: 'asdp logo design',

  },

  {
    id: 5,
    image: alton,
    title: 'alton logo design',

  },



  
]



const magazine = [
  {
    id: 1,
    image: mag1,
    title: 'Shygger Logo Design',
    github: 'https://github.com/starman1999',
  },

  {
    id: 2,
    image: mag2,
    title: 'Iced Coffee Visual Identity',
    github: 'https://github.com/',
  },
  {
    id: 3,
    image: mag3,
    title: 'Shygger Logo Design',
    github: 'https://github.com/starman1999',
  },

 
  {
    id: 5,
    image: mag5,
    title: 'Shygger Logo Design',
    github: 'https://github.com/starman1999',
  },

  {
    id: 6,
    image: mag6,
    title: 'Shygger Logo Design',
    github: 'https://github.com/starman1999',
  },
  {
    id: 7,
    image: mag7,
    title: 'Shygger Logo Design',
    github: 'https://github.com/starman1999',
  },
  {
    id: 8,
    image: mag8,
    title: 'Shygger Logo Design',
    github: 'https://github.com/starman1999',
  }
]



const branding1 = [
  {
    id: 1,
    image: icedcoffee1,
    behance: 'https://behance.net/altonstudio',
  },

  {
    id: 2,
    image: icedcoffee2,
    behance: 'https://behance.net/altonstudio',
  },
  {
    id: 3,
    image: icedcoffee3,
    behance: 'https://behance.net/altonstudio',
  },

 
  {
    id: 5,
    image: icedcoffee4,
    behance: 'https://behance.net/altonstudio',
  },

  {
    id: 6,
    image: icedcoffee5,
    behance: 'https://behance.net/altonstudio',
  },
  {
    id: 7,
    image: icedcoffee6,
    behance: 'https://behance.net/altonstudio',
  },

]

const websiteDesign = [
  {
    id: 1,
    image: website1,
    behance: 'https://behance.net/altonstudio',
  },

  {
    id: 2,
    image: website2,
    behance: 'https://behance.net/altonstudio',
  },
  {
    id: 3,
    image: website3,
    behance: 'https://behance.net/altonstudio',
  },

 
  {
    id: 5,
    image: website4,
    behance: 'https://behance.net/altonstudio',
  },

  {
    id: 6,
    image: website5,
    behance: 'https://behance.net/altonstudio',
  },


]



const prints = [
  {
    id: 1,
    image: print1,
    behance: 'https://behance.net/altonstudio',
  },

  {
    id: 2,
    image: print2,
    behance: 'https://behance.net/altonstudio',
  },
  {
    id: 3,
    image: print3,
    behance: 'https://behance.net/altonstudio',
  },

 
  {
    id: 4,
    image: print4,
    behance: 'https://behance.net/altonstudio',
  },



]






const Portfolio = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength1 = logos.length;

  const [currentSlide2, setCurrentSlide2] = useState(0);
  const slideLength2 = magazine.length;

  const [currentSlide3, setCurrentSlide3] = useState(0);
  const slideLength3 = branding1.length;

  const [currentSlide4, setCurrentSlide4] = useState(0);
  const slideLength4 = websiteDesign.length;


  const [currentSlide5, setCurrentSlide5] = useState(0);
  const slideLength5 = prints.length;

  
  

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;


  //first slide
  const nextSlide = (currentSlide, slideLength1) => {
    setCurrentSlide(currentSlide === slideLength1 - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = (currentSlide, slideLength1) => {
    setCurrentSlide(currentSlide === 0 ? slideLength1 - 1 : currentSlide - 1);
    console.log("prev");
  };

  // second slide
  const nextSlide2 = () => {
    setCurrentSlide2(currentSlide2 === slideLength2 - 1 ? 0 : currentSlide2 + 1);
    console.log("next");
  };

  const prevSlide2 = () => {
    setCurrentSlide2(currentSlide2 === 0 ? slideLength2 - 1 : currentSlide2 - 1);
    console.log("prev");
  };

  //third slide

  const nextSlide3 = () => {
    setCurrentSlide3(currentSlide3 === slideLength3 - 1 ? 0 : currentSlide3 + 1);
    console.log("next");
  };

  const prevSlide3 = () => {
    setCurrentSlide3(currentSlide3 === 0 ? slideLength3 - 1 : currentSlide3 - 1);
    console.log("prev");
  };

    //fourth slide


  const nextSlide4 = () => {
    setCurrentSlide4(currentSlide4 === slideLength4 - 1 ? 0 : currentSlide4 + 1);
    console.log("next");
  };

  const prevSlide4 = () => {
    setCurrentSlide4(currentSlide4 === 0 ? slideLength4 - 1 : currentSlide4 - 1);
    console.log("prev");
  };

     //fifth slide


     const nextSlide5 = () => {
      setCurrentSlide5(currentSlide5 === slideLength5 - 1 ? 0 : currentSlide5 + 1);
      console.log("next");
    };
  
    const prevSlide5 = () => {
      setCurrentSlide4(currentSlide5 === 0 ? slideLength5 - 1 : currentSlide5 - 1);
      console.log("prev");
    };

  return (

    <section id="portfolio">

    
    <h2> Portfolio </h2>
    <h5 className='small_text'>my recent work</h5>
    <section  className='portfolio__container'>

        
          
      <div>
        {

          logos.map((slide, index) => {

            return (
              <div>


                <div
                  className={index === currentSlide ? "slide current" : "slide"}
                  key={index}>
                  {index === currentSlide && (


                    <div className='thumbs-wrapper'>

                    <article className="portfolio__item">
                      <FaArrowAltCircleLeft size={35} className="arrow_prev" onClick={()=>prevSlide(currentSlide, slideLength1)} />
                    <FaArrowAltCircleRight size={35} className="arrow_next" onClick={()=>nextSlide(currentSlide, slideLength1)} />
                     
                      
                      <h3>Logos</h3>
                      <img src={slide.image} alt="slide" className="image" />
                    </article>
                    </div>

                  )}
                </div>


              </div>



            );})


            
        
        
        }
        </div>

       



         <div>
            {

            branding1.map((slide, index) => {

              return (
                <div>


                  <div
                    className={index === currentSlide3 ? "slide current" : "slide"} index
                    key={index}>
                    {index === currentSlide3 && (


                       <div className='thumbs-wrapper'>

                      <article className="portfolio__item">
                        <FaArrowAltCircleLeft size={40} className="arrow_prev" onClick={()=>prevSlide3(currentSlide3, slideLength3)} />
                      <FaArrowAltCircleRight size={40} className="arrow_next" onClick={()=>nextSlide3(currentSlide3, slideLength3)} />
                        <div className='portfolio__item-image'>
                          <h3>Iced Coffee Branding</h3>
                        <img src={slide.image} alt="slide" className="image" />
                        
                        </div>
                        
                      </article>
                      <div className='portfolio__item-cta'>
                      <a href={slide.github} className='btn' target="_blank"> full project </a>
                      </div>
                      </div>


                    )}
                  </div>


                </div>



              );})

            }
            </div>

      
        
      




        <div>
            {

            prints.map((slide, index) => {

              return (
                <div>


                  <div
                    className={index === currentSlide5 ? "slide current" : "slide"} index
                    key={index}>
                    {index === currentSlide5 && (


                       <div className='thumbs-wrapper'>

                      <article className="portfolio__item">
                        <FaArrowAltCircleLeft size={40} className="arrow_prev" onClick={()=>prevSlide5(currentSlide5, slideLength5)} />
                      <FaArrowAltCircleRight size={40} className="arrow_next" onClick={()=>nextSlide5(currentSlide5, slideLength5)} />
                        <div className='portfolio__item-image'>
                        <img src={slide.image} alt="slide" className="image" />
                        
                        </div>
                        
                      </article>
                     
                      </div>


                    )}
                  </div>


                </div>



              );})

            }
            </div>

      
        
    
        



        <div>
        {

          magazine.map((slide, index) => {

            return (
              <div>


                <div
                  className={index === currentSlide2 ? "slide current" : "slide"}
                  key={index}>
                  {index === currentSlide2 && (
                     <div className='thumbs-wrapper'>

                    <article className="portfolio__item2">
                      <FaArrowAltCircleLeft size={35} className="arrow_prev" onClick={()=>prevSlide2(currentSlide2, slideLength2)} />
                      <FaArrowAltCircleRight size={35} className="arrow_next" onClick={()=>nextSlide2(currentSlide2, slideLength2)} />
                      
                        <h3>Magazine Design</h3>
                    
                      <img src={slide.image} alt="slide" className="image" />
                      
                      <div className='portfolio__item-cta'>
                      <a href={slide.github} className='btn' target="_blank"> full project </a>
                      </div>
                      
                    </article>
                      
                    </div>


                  )}
                </div>


              </div>



            );})


            
        
        
        }
        </div>





        <div>
         {

          websiteDesign.map((slide, index) => {

            return (
              <div>


                <div
                  className={index === currentSlide4 ? "slide current" : "slide"}
                  key={index}>
                  {index === currentSlide4 && (

                    
                    <div className='thumbs-wrapper'>
                    
                    <article className="portfolio__item2">
                       
                      <FaArrowAltCircleLeft size={35} className="arrow_prev" onClick={()=>prevSlide4(currentSlide4, slideLength4)} />
                    <FaArrowAltCircleRight size={35} className="arrow_next" onClick={()=>nextSlide4(currentSlide4, slideLength4)} />
                    
                      <div className='portfolio__item-image'>
                      <h3>HEC Alumni Alger Website Design</h3>
                      <img src={slide.image} alt="slide" className="image" />

                      </div>
                      
                      <div className='portfolio__item-cta'>
                      <a href={slide.github} className='btn' target="_blank"> full project </a>
                      </div>

                    </article>
                   
                    </div>


                  )}
                </div>


              </div>



            );})


            
        
        
        }
        </div>

        
     

        


        
    </section>
    </section>
  );
}

export default Portfolio