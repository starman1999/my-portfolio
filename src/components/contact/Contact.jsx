import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();





  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_msf0ipx', 'template_m4125rh', form.current, 'Hj1c7NABscZYgnZ2l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  
    
  };



  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2> Contact Me </h2>

      <div className="container contact__container">
        <div className="contact__options">
          
          <article className='contact__option'>
            <MdOutlineEmail className ="contact__option-icon"/>
            <h4 className='hidden-tablet'> Email </h4>
            <h5> mounirdekali1@gmail.com </h5>
            <a href='mailto: mounirdekali1@gmail.com' target="_blank" rel="noopener noreferrer"> Send Email </a>
          </article>

          <article className='contact__option'>
            <BsFacebook className ="contact__option-icon" />
            <h4 className='hidden-tablet'> Facebook </h4>
            <h5> Mounir Dekali </h5>
            <a href='https://www.facebook.com/MounirDek/' target="_blank" rel="noopener noreferrer"> Send A Message </a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className ="contact__option-icon" />
            <h4 className='hidden-tablet' > WhatsApp </h4>
            <h5> +213 794059467</h5>
          
          </article>

        </div>


        <form ref= {form} onSubmit = {sendEmail} >
          
          <input type="text" name = "name" placeholder ="full name" required/>
          <input type="email" name = "email" placeholder ="Your Email" required/>
          <textarea type="text" name = "name" placeholder ="message" required></textarea>
          <button id = "submitButton" type='submit' className='btn btn-primary'> Send Message</button>
        </form>

        <form></form>
      </div>
    </section>
  )
}

export default Contact