import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpeg'
import IMG3 from '../../assets/portfolio3.jpeg'
import IMG4 from '../../assets/portfolio4.jpeg'
import IMG5 from '../../assets/portfolio5.jpeg'
import IMG6 from '../../assets/portfolio6.jpeg'


const data=[
  {
    id:1,
    image:IMG1,
    title:'ESPN Cricket Data Analysis',
    github:'https://github.com/prudhvikrishnap/ESPN-Cricket-Data-Analysis',
    demo:'https://google.com'
  },
  {
    id:2,
    image:IMG2,
    title:'Rise of the Red Dragon (INTEL vs AMD)',
    github:'https://github.com/prudhvikrishnap/Rise-Of-The-Red-Dragon',
    demo:'https://google.com'
  },
  {
    id:3,
    image:IMG3,
    title:'Password Generator',
    github:'https://github.com/prudhvikrishnap/password-generator',
    demo:'https://google.com'
  },
  {
    id:4,
    image:IMG4,
    title:"Hasse's Algorithm",
    github:'https://github.com/prudhvikrishnap/Hasse-s-Algorithm',
    demo:'https://google.com'
  },
  {
    id:5,
    image:IMG5,
    title:'Expert System for Crop Selection in Agriculture',
    github:'https://github.com',
    demo:'https://google.com'
  },
  {
    id:6,
    image:IMG6,
    title:'Prodct Review Analysis for Genuine Ratings',
    github:'https://github.com/prudhvikrishnap/Prodct-Review-Analysis-for-Genuine-Ratings',
    demo:'https://google.com'
  }
]

const Portfolio = () =>{
  return(
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Projects</h2>

    <div className='container portfolio__container'>
    {
      data.map(({id,image,title,github,demo})=>{
        return(
          <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={image} alt={title}/>
          </div>
          <h3> {title} </h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn' rel='noreferrer'>Github</a>
          <a href={demo} className='btn btn-primary' rel='noreferrer'>Demo</a>
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
