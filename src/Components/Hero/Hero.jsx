import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll'
import arrow from '../../assets/white-arrow.png'
import github from '../../assets/github-brands-solid-full.svg'
import linkedin from '../../assets/linkedin-brands-solid-full.svg'
import tiktok from '../../assets/tiktok-brands-solid-full.svg'
import whatsapp from '../../assets/whatsapp-brands-solid-full.svg'
import mail from '../../assets/mail_24dp_BLACK_FILL0_wght400_GRAD0_opsz24.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="side-logo">
           <li><a href="https://github.com/hassanolawale023-pixel" target='blank'><img src={github} alt="" /></a></li>

           <li><a href="https://www.linkedin.com/in/hassan-oseni-3047291bb" target='blank'><img src={linkedin} alt="" /></a></li>

           <li><a href="https://www.tiktok.com/@hxssxn007?_r=1&_t=ZS-92gjCKj1lpZ" target='blank'><img src={tiktok} alt="" /></a></li>

           <li><a href="mailto:hassanolawale@gmail.com" target='blank'><img src={mail} alt="" /></a></li>

           <li><a href="https://wa.me/+2348139754558" target='blank'><img src={whatsapp} alt="" /></a></li> 
        </div>
        <div className="hero-text">
            <h1>Hi, I'm Hassan Oseni</h1>
            <p>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>


           
            <button className='hero-btn' >  <Link to="project" smooth={true} duration={500} offset={-150}>PROJECTs</Link><img src={arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
