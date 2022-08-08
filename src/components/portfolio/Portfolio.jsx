import React from 'react'
import './portfolio.css'
import shygger from '../../assets/shygger.png'
import icedCoffee from '../../assets/icedcoffee.png'


const data = [
  {
    id: 1,
    image: shygger,
    title: 'Shygger Logo Design',
    github: 'https://github.com/starman1999',
    demo: 'https://github.com'
  },

  {
    id: 2,
    image: icedCoffee,
    title: 'Iced Coffee Visual Identity',
    github: 'https://github.com/starman1999',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: icedCoffee,
    title: 'Iced Coffee Visual Identity',
    github: 'https://github.com/starman1999',
    demo: 'https://github.com'
  },

  {
    id: 4,
    image: icedCoffee,
    title: 'Iced Coffee Visual Identity',
    github: 'https://github.com/starman1999',
    demo: 'https://github.com'
  },

  {
    id: 5,
    image: icedCoffee,
    title: 'Iced Coffee Visual Identity',
    github: 'https://github.com/starman1999',
    demo: 'https://github.com'
  },

  {
    id: 6,
    image: icedCoffee,
    title: 'Iced Coffee Visual Identity',
    github: 'https://github.com/starman1999',
    demo: 'https://github.com'
  }
]




const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Work</h5>
      <h2> Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, github, title, image , demo }) => {
            return(
              <article key={id} className='portfolio__item'>

              <div className='portfolio__item-image'>
                <img src = {image} alt = {title}/>
              </div>
              <h3> {title}</h3>
              <div className="portfolio__item-cta">
                <a href = {github} className='btn' target="_blank" rel="noopener noreferrer">Github</a>
                <a href = {demo} className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
    
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio