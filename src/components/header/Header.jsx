import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/IMG_3763.JPG'
import HeaderSocials from './HeaderSocials'

const Header = () =>{
  return(
    <header>
    <div className='container header__container'>
    <h5> Hello I am </h5>
    <h1> PRUDHVI KRISHNA PARUCHURI </h1>
    <h5 className='text-light'>Data Analyst | Machine Learning Engineer </h5>
    <CTA />
    <HeaderSocials />

    <div className='me'>
    <img src={ME} alt='My' />
    </div>

    <a href='#contact' className='scroll__down'> Scroll Down</a>
    </div>
    </header>
  )
}

export default Header
