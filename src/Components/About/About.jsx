import React from 'react'
import './About.css'
import { Link } from 'react-scroll';

const About = () => {
    const skills = [
        'HTML',
        'CSS',
        'Javascript',
        'React',
        'Terminal',
        'Git & Github',
        'Bootstrap',
        'Responsive Design'

    ];
  return (
    <div className='about'>
        <h2 className='about-title'>About Me</h2>
        <div className="about-underline"></div>
        <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
        
     <div className="about-section">
        <div className="about-me">
            <h3>Get to know me!</h3>
            <p>I'm a <b>Frontend Focused Web Developer</b> building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p><br />

            <p>I also like sharing content related to the stuff that I have learned over time in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="https://www.linkedin.com/in/hassan-oseni-3047291bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='blank'>LinkedIn</a> and <a href="https://www.tiktok.com/@hxssxn007?_r=1&_t=ZS-92gjCKj1lpZ" target='blank'>Tiktok</a> where I post useful content related to Web Development and Programming</p><br />

            <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>

            <button className='contact-btn'> <Link to='contact' smooth={true} offset={-200} duration={500}>Contact Me</Link></button>
        </div>



        <div className="skills">
            <h3>My Skills</h3>

          <div className="skills-grid">

            {skills.map((skill, index) => (
                <span className='skill-pill' key={index}> {skill}</span>
            ))}
          </div>
        </div>
        </div>
      
    </div>
  )
}

export default About
