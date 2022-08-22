/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/wordpressTransparent.png';

const Header = () => {
  
 
  

  return(
    <div className='header-container'>
    <img src ={logo} alt="Blue and white orca product logo" />
    <h1>DockerVize</h1>
    <div><Link className="header-component" to="/">Product</Link></div>
    <div><Link className="header-component" to="/team">Team</Link></div>
    <a href="https://github.com/oslabs-beta/dockervize"><button className="header-component button">Download</button></a>
    </div>

  );
};


export default Header;