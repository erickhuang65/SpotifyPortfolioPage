import React from 'react'
import Experience from '../Experience/Experience.jsx'
import Education from '../Education/Education.jsx'
import Project from '../Project/Project.jsx'
import Header from '../Header/Header.jsx'
import NavBar from '../NavBar/NavBar.jsx'
import './Content.css'

const Content = () => {
  return (
    <div className='main'>
    <Header />
    <NavBar />
    <div className='content-page'>
      <div className='content-page-experience'>
        <div>
          <p className='title'>Experience</p>
          <hr className="divider" />
          <Experience />
        </div>
      </div>
      <div className='content-page-education'> 
          <div>
            <p className='title'>Education</p>
            <hr className="divider" />
            <Education />
            <p className='title'>Project</p>
            <hr className="divider" />
            <Project />
          </div>
      </div>
      </div>
    </div>
  )
}

export default Content
