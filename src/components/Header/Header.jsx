import React from 'react'
import './Header.css'
import headerImage from './assets/header2.png';

const Header = () => {
  return (
    <div className='header'>
        <div className='header-image'> 
            <img src={headerImage} alt="header image" />
            <div className='verify-image'><img src="src/assets/verify.png" alt="verified icon" /></div>
            <div className='verify-text'>Verified Artist</div>
            <div className="header-text">Erick Huang</div>
            <div className="body-text">1,218 monthly listeners</div>
        </div>
    </div>
  )
}

export default Header
