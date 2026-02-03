import React from 'react'
import './Projects.css'
import project_1 from '../../assets/Eventify.png'
import project_2 from '../../assets/Legal Consult.png'
import project_3 from '../../assets/Pastry Website.png' 
import project_4 from '../../assets/Museum Web.png'

import project_5 from '../../assets/postmanager.png'
import project_6 from '../../assets/Fix website.png'
import project_7 from '../../assets/Eventify1.png'
import project_8 from '../../assets/edusity.png'
const Project = () => {
  return (
    <div className='project'>
          <h2 className='project-title'>Projects</h2>
        <div className="about-underline"></div>

        <p>Here you will find some of the personal projects that I created with each project containing its own link where you can have a better view of each website</p>

    <div className="project-details">
      <img src={project_1} alt="" />

      <div className='project-description'>
        <h3>Eventify</h3>
        <p>This is an event website built with HTML, CSS and minimal Javascript. It is not responsive(Best-view in desktop mode). This website was based off of a senior UI/UX design </p>
        <button className="project-btn"><a href="https://eventify-zeta-nine.vercel.app/" target='blank'>View Project</a></button>
      </div>

      <img src={project_2} alt="" />

      <div className='project-description'>
        <h3>Legal Consult</h3>
        <p>A legal firm website, a replica of a design i saw on figma. I built  this with pure HTML and CSS. it is 80% responsive. </p>
          <button className="project-btn"><a href="https://legal-consult-zeta.vercel.app/" target='blank'>View Project</a></button>
      </div>

       <img src={project_3} alt="" />

      <div className='project-description' >
        <h3>Pastry Website</h3>
        <p>This pastry website was the first practical website i built at my bootcamp after just learning HTML and the basic-level css. It is 100% responsive</p>
          <button className="project-btn"><a href="https://pastry-three.vercel.app/" target='blank'>View Project</a></button>
      </div>

       <img src={project_4} alt="" />

      <div className='project-description'>
        <h3>Museum Website</h3>
        <p>This was my first ever website. It was an idea i thought of as a project to present at my bootcamp, built with HTML and CSS. The reason behind this project was to bring the world to people who do not have access or the luxury to visit the Museums around the world in person. It is still an abstract idea which i plan to implement in the nearest future.  </p>
         <button className="project-btn"><a href="https://museum-web-ruddy.vercel.app/" target='blank'>View Project</a></button>
      </div>

       <img src={project_5} alt="" />

      <div>
        <h3 className='project-description'>Post Manager</h3>
        <p>This is a Javascript-based website. This was built for the purpose of knowing how API works (how to send, delete and fetch api requests). This website is not responsive</p>
         <button className="project-btn"><a href="https://post-manager-gamma.vercel.app/" target='blank'>View Project</a></button>
      </div>

       <img src={project_6} alt="" />

      <div className='project-description'>
        <h3>Fix</h3>
        <p>Fix is a supposed SaaS which I created for my final project at my bootcamp. This website was to create a platform for artisans to sell their services and also for users who are looking for genuine artisans to connect and work together (it's still a work in progress). This website was built with HTML, CSS and Javascript and it is also responsive</p>
         <button className="project-btn"><a href="https://fix-website-olive.vercel.app/" target='blank'>View Project</a></button>
      </div>

      <img src={project_7} alt="" />

      <div className='project-description'>
        <h3>Eventify 1</h3>
        <p>This is a total redesgin of the first event website built with HTML an CSS (also best viewed on big screen). </p>
          <button className="project-btn"><a href="https://event1-eta.vercel.app/" target='blank'>View Project</a></button>
      </div>

      <img src={project_8} alt="" />

      <div className='project-description'>
        <h3>Edusity</h3>
        <p>This is my first React project and it is fully responsive built with ReactJS </p>
          <button className="project-btn"><a href="https://my-first-react-project-iota.vercel.app/" target='blank'>View Project</a></button>
      </div>
    </div>
      
    </div>
  )
}

export default Project
