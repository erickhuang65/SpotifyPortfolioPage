import React from 'react'
import './Education.css'
import sjsuImage from '../../assets/sjsu.png';
import cdojoImage from '../../assets/cdojo.png';

const Education = () => {
  return (
    <div className='education-page'>
        <div className='education-content'>
            <div className='education-image'><img src={sjsuImage} alt="sjsu logo" /></div>
            <div className='education-details'>
                <p>Bachelor of Science in Management Information Systems (Computer Science emphasis)</p>
                <p>San Jose State University</p>
                <p>GPA: 3.38</p>
                <p>2016 - 2018 | San Jose, CA</p>
            </div>
        </div>
        <div className='education-content'>
            <div className='education-image'><img src={cdojoImage} alt="cdojo logo" /></div>
            <div className='education-details'>
                <p>Software Development Certification</p>
                <p>Colorado Technical University - via Coding Dojo</p>
                <p>August 2024</p>
            </div>
        </div>
    </div>
  )
}

export default Education
