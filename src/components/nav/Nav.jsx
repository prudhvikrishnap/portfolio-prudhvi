import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {IoBookOutline} from 'react-icons/io5'
import {AiOutlineExperiment} from 'react-icons/ai'
import {FaRegHandshake} from'react-icons/fa'
import {useState} from 'react'

const Nav = () =>{
  const [activeNav, setActiveNav] = useState('#')
  return(
    <nav>
    <a href="#"  onClick={() => setActiveNav('#')} className= {activeNav==='#' ? 'active': ''} > <AiOutlineHome/> </a>
    <a href="#about" onClick={() => setActiveNav('about')} className= {activeNav==='about' ? 'active': ''}> <AiOutlineUser/> </a>
    <a href="#experience" onClick={() => setActiveNav('experience')} className= {activeNav==='experience' ? 'active': ''}> <IoBookOutline/> </a>
    <a href="#services" onClick={() => setActiveNav('services')} className= {activeNav==='about' ? 'services': ''}> <AiOutlineExperiment/> </a>
    <a href="#contact" onClick={() => setActiveNav('contact')} className= {activeNav==='contact' ? 'active': ''}> <FaRegHandshake/> </a>
     </nav>
  )
}

export default Nav
