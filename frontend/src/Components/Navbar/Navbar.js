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
      <ul className='ul-navbar'>
       <li className='navbar-item'> Accueil </li>
       <li className='navbar-item'> Profil </li>
       <li className='navbar-item'> Réglage</li>
       <li className='navbar-item'> Communauté </li>
      </ul>
    </nav>
  )
}
export default Navbar