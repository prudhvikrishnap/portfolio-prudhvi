import React from 'react'
import './experience.css'
import {IoCheckmarkCircleSharp} from 'react-icons/io5'

const Experience = () =>{
  return(
    <section id='experience'>
    <h5>What skills I have</h5>
    <h2>My experience</h2>
    <div className='container experience__container'>
    <div className='experience__frontend'>

    <h3>Programming Languages</h3>
    <div className='experience__content'>
    <article className='experience__details'>
    <IoCheckmarkCircleSharp className='experience__details-icon'/>
    <div>
    <h4> Python </h4>
    <small className='text-light'> Experienced </small>
    </div>
    </article>

    <article className='experience__details'>
    <IoCheckmarkCircleSharp className='experience__details-icon'/>
    <div>
    <h4> C / C++</h4>
    <small className='text-light'> Intermediate </small>
    </div>
    </article>

    <article className='experience__details'>
    <IoCheckmarkCircleSharp className='experience__details-icon'/>
    <div>
    <h4> Java </h4>
    <small className='text-light'> Intermediate </small>
    </div>
    </article>

    <article className='experience__details'>
    <IoCheckmarkCircleSharp className='experience__details-icon'/>
    <div>
    <h4> R </h4>
    <small className='text-light'> Experienced </small>
    </div>
    </article>
    </div>
    </div>


    <div className='experience__backend'>
    <h3> Cloud </h3>
    <div className='experience__content'>

    <article className='experience__details'>
    <IoCheckmarkCircleSharp className='experience__details-icon'/>
    <div>
    <h4> AWS </h4>
    <small className='text-light'> Intermediate </small>
    </div>
    </article>

    <article className='experience__details'>
    <IoCheckmarkCircleSharp className='experience__details-icon'/>
    <div>
    <h4> Azure </h4>
    <small className='text-light'> Basic </small>
    </div>
    </article>


    <article className='experience__details'>
    <IoCheckmarkCircleSharp className='experience__details-icon'/>
    <div>
    <h4> Google Cloud </h4>
    <small className='text-light'> Basic </small>
    </div>
    </article>
    </div>
    </div>

    <div className='experience__os'>
    <h3> Database Systems </h3>
    <div className='experience__content'>
    <article className='experience__details'>
    <IoCheckmarkCircleSharp className='experience__details-icon'/>
    <div>
    <h4> MySQL </h4>
    <small className='text-light'> Intermediate </small>
    </div>
    </article>

    <article className='experience__details'>
    <IoCheckmarkCircleSharp className='experience__details-icon'/>
    <div>
    <h4> MongodDB </h4>
    <small className='text-light'> Basic </small>
    </div>
    </article>

    <article className='experience__details'>
    <IoCheckmarkCircleSharp className='experience__details-icon'/>
    <div>
    <h4> Amazon RDS </h4>
    <small className='text-light'> Basic </small>
    </div>
    </article>
    </div>
    </div>

    <div className='experience__os'>
    <h3> Softwares </h3>
    <div className='experience__content'>
    <article className='experience__details'>
    <IoCheckmarkCircleSharp className='experience__details-icon'/>
    <div>
    <h4> PyCharm </h4>
    <small className='text-light'> Intermediate </small>
    </div>
    </article>

    <article className='experience__details'>
    <IoCheckmarkCircleSharp className='experience__details-icon'/>
    <div>
    <h4> R Studio </h4>
    <small className='text-light'> Intermediate </small>
    </div>
    </article>

    <article className='experience__details'>
    <IoCheckmarkCircleSharp className='experience__details-icon'/>
    <div>
    <h4> Microsoft Office </h4>
    <small className='text-light'> Basic </small>
    </div>
    </article>
    </div>
    </div>
    </div>
    </section>
  )
}

export default Experience
