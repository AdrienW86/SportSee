import React from 'react';
import Logo from '../../assets/logo.svg';
import './navbar.css';

function Navbar() {
  return (
    <nav>
      <img 
        className='logo'
        src={Logo} 
        alt="logo"/>
      <p className='logo-title'> SportSee </p>
      <ul>
        
      </ul>
    </nav>
  )
}
export default Navbar