import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () =>{
  return(
    <section id='services'>
    <h5>What I offer</h5>
    <h2> Areas of Expertise </h2>

    <div className='container services__container'>
    <article className='service'>
    <div className='service__head'>
    <h3> Product Development </h3>
    </div>
    <ul className='service__list'>
    <li> <BiCheck className='service__list-icon'/>
    <p> Machine Learning predictions</p>
    </li>
    <li> <BiCheck className='service__list-icon'/>
    <p> Python based application development</p>
    </li>
    <li> <BiCheck className='service__list-icon'/>
    <p> Cloud Development </p>
    </li>
    <li> <BiCheck className='service__list-icon'/>
    <p> Security in cloud applications</p>
    </li>
    <li> <BiCheck className='service__list-icon'/>
    <p> Mobile based applications with Flutter</p>
    </li>
    </ul>
    </article>

    <article className='service'>
    <div className='service__head'>
    <h3> Data Analysis </h3>
    </div>
    <ul className='service__list'>
    <li> <BiCheck className='service__list-icon'/>
    <p> R Data Analysis</p>
    </li>
    <li> <BiCheck className='service__list-icon'/>
    <p> Python Data Analysis</p>
    </li>
    <li> <BiCheck className='service__list-icon'/>
    <p> Desciptive and Predictive Modelling</p>
    </li>
    <li> <BiCheck className='service__list-icon'/>
    <p> R Markdown and R Dashboards </p>
    </li>
    <li> <BiCheck className='service__list-icon'/>
    <p> Tableau and PowerBI</p>
    </li>
    </ul>
    </article>


    <article className='service'>
    <div className='service__head'>
    <h3> Web Development </h3>
    </div>
    <ul className='service__list'>
    <li> <BiCheck className='service__list-icon'/>
    <p> HTML5 and CSS</p>
    </li>
    <li> <BiCheck className='service__list-icon'/>
    <p> React.js Framework</p>
    </li>
    <li> <BiCheck className='service__list-icon'/>
    <p> Javascript based applications</p>
    </li>
    <li> <BiCheck className='service__list-icon'/>
    <p> Python Django Framework</p>
    </li>
    <li> <BiCheck className='service__list-icon'/>
    <p> Backend and Frontend Development</p>
    </li>
    </ul>
    </article>

    </div>
    </section>
  )
}

export default Services
