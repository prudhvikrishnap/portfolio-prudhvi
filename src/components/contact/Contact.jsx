import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerFill}  from 'react-icons/ri'
import {FaTwitter} from 'react-icons/fa'
import emailjs from 'emailjs-com'
import { useRef } from 'react';



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_zr3iaf6', 'template_mcdyk9p', form.current, '9HjEpOwAsyYNrXR2o')

      e.target.reset()
    };
  return(
    <section id='contact'>
    <h5> Get in Touch </h5>
    <h2> Contact</h2>

    <div className='container contact__container'>
    <div className='contact__options'>
    <article className='contact__option'>
    <AiOutlineMail className='contact__option-icon'/>
    <h4> Email </h4>
    <h5> pparuch1@stevens.edu </h5>
    <a href ='mailto:pparuch1@stevens.edu' target='_blank'> Send an email </a>
    </article>

    <article className='contact__option'>
    <RiMessengerFill className='contact__option-icon'/>
    <h4> Messenger </h4>
    <h5> Prudhvi Krishna Paruchuri </h5>
    <a href ='https://m.me/' target='_blank'> Send a message </a>
    </article>

    <article className='contact__option'>
    <FaTwitter className='contact__option-icon'/>
    <h4> Twitter </h4>
    <h5> @prudhvi98 </h5>
    <a href ='https://twitter.com/messages/compose?recipient_id=prudhvi98'  target='_blank'> Send a text </a>
    </article>

    </div>
    <form ref={form} onSubmit={sendEmail}>
    <input type='text' name='name' placeholder='Your Full Name' required/>
    <input type='email' name='email' placeholder='Your email' required/>
    <textarea name='message' rows='7' placeholder='Your message' required></textarea>
    <button type='submit' className='btn btn-primary'> Send Message </button>

    </form>
    </div>
     </section>
  )
}

export default Contact
