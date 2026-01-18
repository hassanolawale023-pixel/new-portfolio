import React from 'react'
import './Footer.css'
import github from '../../assets/github-white.svg'
import linkedin from '../../assets/linkedin-white.svg'
import tiktok from '../../assets/tiktok-white.svg'
import whatsapp from '../../assets/whatsapp-white.svg'
import mail from '../../assets/mail_24dp_F5F5F5_FILL0_wght400_GRAD0_opsz24.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-section">
    <div className="footer-content">
      <span>Hassan Oseni</span>
      <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>

    </div>

    <div className="footer-social">
      <h4>SOCIAL</h4>
      
       <ul>
          <li><a href="https://github.com/hassanolawale023-pixel" target='blank'><img src={github} alt="" /></a></li>
          
          <li><a href="https://www.linkedin.com/in/hassan-oseni-3047291bb" target='blank'><img src={linkedin} alt="" /></a></li>
          
          <li><a href="https://www.tiktok.com/@hxssxn007?_r=1&_t=ZS-92gjCKj1lpZ" target='blank'><img src={tiktok} alt="" /></a></li>
          
          <li><a href="mailto:hassanolawale@gmail.com" target='blank'><img src={mail} alt="" /></a></li>
          
          <li><a href="https://wa.me/+2348139754558" target='blank'><img src={whatsapp} alt="" /></a></li>
      </ul>
    </div>
      </div>

      <p>&copy; Copyright 2026 . Made by <a href="">Hassan Oseni.</a></p>
    </div>
  )
}

export default Footer
