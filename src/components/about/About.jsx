import React from 'react'
import './about.css'
import ME from '../../assets/IMG_3763.JPG'
import {MdOutlineVerified} from 'react-icons/md'
import {GiBookCover} from 'react-icons/gi'
import {CgCrown} from 'react-icons/cg'

const About = () => {
  return(
    <section id="about">
    <h5> Get to Know </h5>
    <h2> About Me </h2>

    <div className='container about__container'>
    <div className='about__me'>
    <div className='about__me-image'>
    <img src={ME} alt='My'/>
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
     <CgCrown className='about__icon'/>
     <h5> Education </h5>
     <small> M.S. in C.S </small>
      </article>

     <article className='about__card'>
     <GiBookCover className='about__icon'/>
     <h5> Projects </h5>
     <small> 14 Public GitHub repos </small>
      </article>
    </div>

    <p>Currently pursuing Master of Science in Computer Science from Stevens
    Institute of Technology, NJ.
    Keen on creating an innovative technology to address many real-world proble
    ms. In-depth knowledge of working with most operating systems. Good data vis
    ualization and analytic skills for decision making and business intelligence.<br/><br/>

    My most interesting job would be in the field of Quantum Computing. I am re
    ading more and more about how powerful and secure quantum computers have be
    come and I love to be a part of it.My dream project would be finding the code to make this universe. We are all
    part of Object Oriented Programming.<br/><br/>

    Related Courses : Machine Learning, Fundamentals of Cybersecurity, Business
    Analytics, Quantum Networking and Security, Decision Making via Data Visual
    ization,Cloud Computing.</p>
    <a href='#contact' className='btn btn-primary'> Let's Talk </a>
    </div>
    </div>
    </section>
  )
}

export default About
