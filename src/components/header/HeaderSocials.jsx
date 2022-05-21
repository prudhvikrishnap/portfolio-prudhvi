import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'

const HeaderSocials = () =>{
  return(
    <div className='header__socials'>
    <a href='https://linkedin.com' rel='noopener'><BsLinkedin /> </a>
    <a href='https://github.com' rel='noopener'> <FiGithub /></a>
    <a href='https://google.com'rel='noopener'> </a>
    </div>
  )
}
 export default HeaderSocials
