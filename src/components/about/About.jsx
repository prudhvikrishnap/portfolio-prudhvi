import React from 'react'
import './about.css'
import ME from '../../assets/IMG_3763.JPG'
import {MdOutlineVerified} from 'react-icons/md'
import {GiBookCover} from 'react-icons/gi'
import {VscSmiley} from 'react-icons/vsc'

const About = () => {
  return(
    <section id="about">
    <h5> Get to Know </h5>
    <h2> About Me </h2>

    <div className='container about__container'>
    <div className='about__me'>
    <div className='about__me-image'>
    <img src={ME} alt='About Image' />
    </div>
    </div>
    <div className='about__content'>
    <div className='about__cards'>
    <article className='about__card'>
    <MdOutlineVerified className='about__icon'/>
    <h5> Experience </h5>
    <small> Fresher </small>
     </article>

     <article className='about__card'>
     <VscSmiley className='about__icon'/>
     <h5> Clients </h5>
     <small> 300+ </small>
      </article>

     <article className='about__card'>
     <GiBookCover className='about__icon'/>
     <h5> Projects </h5>
     <small> 15 Github Repositories </small>
      </article>
    </div>

    <p></p>
    <a href='#contact' className='btn btn-primary'> Let's Talk </a>
    </div>
    </div>
    </section>
  )
}

export default About
