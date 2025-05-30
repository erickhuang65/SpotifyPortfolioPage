import React from 'react'
import './Experience.css'
import ngspImage from '../../assets/NGSP.png';
import appleImage from '../../assets/apple.png';
import pnpImage from '../..assets/pnp.png';
import adobeImage from '../..assets/adobe.png';


const Experience = () => {
  return (
    <div className='experience-page'>
        <div className='experience-content'>
            <div className='experience-image'><img src={ngspImage} alt="NGSP logo" /></div>
            <div className='experience-details'>
                <p>Full Stack Developer</p>
                <p>Norcal German Shorthaired Pointer Rescue, Inc</p>
                <p>April 2021 - Present</p>
                <p>Worked as a Fullstack Developer built and maintained responsive and reusable React components; Collaborated with backend engineers to build RESTful API integrations using Flask and Node.js.</p>
            </div>
        </div>
        <div className='experience-content'>
            <div className='experience-image'><img src={appleImage} alt="Apple logo" /></div>
            <div className='experience-details'>
                <p>Software Quality Engineer</p>
                <p>Apple - via Ryzen</p>
                <p>Oct 2022 - March 2024</p>
                <p>Software quality assurance testing and automation. Optimized testing processes with Python scripts, and report bugs through concise documenation, and steps for reproducibility.</p>
            </div>
        </div>
        <div className='experience-content'>
            <div className='experience-image'><img src={pnpImage} alt="PnP logo" /></div>
            <div className='experience-details'>
                <p>Data Lead</p>
                <p>Plug and Play</p>
                <p>May 2019 - Oct 2022</p>
                <p>Served as the primary point of contact for all investment data, collaborating with leadership on fundraising initiatives. Streamlined datasets to build dynamic dashboards and analytics tools used across the firm.</p>
            </div>
        </div>
        <div className='experience-content'>
            <div className='experience-image'><img src={adobeImage} alt="Adobe logo" /></div>
            <div className='experience-details'>
                <p>IT Project Manager Intern</p>
                <p>Adobe</p>
                <p>May 2018 - Aug 2018</p>
                <p>Worked in a scrum team to redesign internal PMO home page to enhance user experience for 600+ users. Drove scrum meetings, sprint planning, and feature releases.</p>
            </div>
        </div>
    </div>
  )
}

export default Experience
