import React from 'react'
import './Project.css'
import logoImage from '../../assets/logoE.png';
import shibaImage from '../../assets/shiba.png';

const Project = () => {
  return (
    <div className='project-page'>
        <div className='project-content'>
            <div className='project-image'>
                <a href="https://portfolio-website-ericks-projects-9fe68f90.vercel.app/" target="" rel="">
                    <img src={logoImage} alt="Erick's Logo" />
                </a>
            </div>
            <div className='project-details'>
                <p>Erick's Portfolio Website</p>
                <p>Tech Stack: React.js, HTML, CSS</p>
                <p>Responsive web application to showcase my skillsets and personal project</p>
            </div>
        </div>
        <div className='project-content'>
            <div className='project-image'>
                <a href="https://github.com/erickhuang65/pet-adoption-webapp" target="" rel="">
                    <img src={shibaImage} alt="Erick's Logo" />
                </a>
            </div>
            <div className='project-details'>
                <p>Pet Adoption Web Application</p>
                <p>Tech Stack: React.js, Node.js, Express and Postman</p>
                <p>Pet Adoption Web Application is built with React.js, Node.js, React Hooks, Google Map API, and Rescue Pet API.</p>
            </div>
        </div>
    </div>
  )
}

export default Project
