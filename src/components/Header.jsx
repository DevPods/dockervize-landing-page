/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/wordpressTransparent.png';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-left'>
        <img
          className='logo'
          src={logo}
          alt='Blue and white orca product logo'
        />
        <Link to='/' className='header-left-link'>
          <h1 className='header-left-text'>DockerVize</h1>
        </Link>
      </div>

      <div className='header-right'>
        <Link className='header-component' to='/'>
          Product
        </Link>
        <Link className='header-component' to='/team'>
          Team
        </Link>
        <a
          href='https://github.com/oslabs-beta/dockervize'
          target='_blank'
          rel='noreferrer'
          className='header-component'
        >
          <button className='header-component'>Download</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
