import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='button'>
        <a href="https://www.linkedin.com/in/erickhuang/" target="linkedin" rel="profile">
            <button>LINKEDIN</button>
        </a>
        <button>EMAIL</button>
        <a href="https://github.com/erickhuang65">
            <button>GitHub</button>
        </a>
    </div>
  )
}

export default NavBar
