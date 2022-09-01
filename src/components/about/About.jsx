import React from 'react';
import './about.css';
import ME from '../../assets/me2.png';
import  {FaAward} from 'react-icons/fa'
import  {VscFolderLibrary} from 'react-icons/vsc'
import shape3D from '../../assets/ppperspective2.svg'

const About = () =>{
    return(
        <section id='about' >
            <h5> Get To Know</h5>
            <h2> About Me </h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src = {ME} alt =" about me" />
                    </div>
                </div>
            

            <div className='about__content'> 
                <div className="about__cards">
                    <article className='about__card'>
                        <FaAward className= "about__icon"/>
                        <h5> Experience </h5>
                        <small> 3+ Years </small>
                    </article>


                    <article className='about__card'>
                        <VscFolderLibrary className= "about__icon"/>
                        <h5> Projects </h5>
                        <small> 08 completed </small>
                    </article>
                    <img src= {shape3D} className='shape3D_about' alt="3d design "/>
                </div> 

                <p>
                        I'm Mounir Dekali, a passionate Graphic Designer to create quality projects for your business, This includes your website design, Logo, Brochure designs, Posters, Layouts, Social Media designs, ...etc.
                        <br/>I will make sure that your identity design communicates the perfect message that suits your brand and differentiates it from your competitors.
                        
                </p>
                <a href='#contact' className='btn btn-primary'> Let's Talk</a>
                

            </div>
            </div>
            
        </section>
    )
}

export default About