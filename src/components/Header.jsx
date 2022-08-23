/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/wordpressTransparent.png';


const Header = () => {
  
 
  

  return(
    <div className='header-container'>
    <img src ={logo} alt="Blue and white orca product logo" />
    <h1>DockerVize</h1>
    <Link className="header-component" to="/">Product</Link>
    <Link className="header-component" to="/team">Team</Link>
    <a href="https://github.com/oslabs-beta/dockervize" className="header-component"><button className="header-component">Download</button></a>
    </div>

  );
};

export default Header;
