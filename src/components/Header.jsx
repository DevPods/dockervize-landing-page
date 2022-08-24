/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/wordpressTransparent.png';
import { HashLink } from 'react-router-hash-link';

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
      {/* <HashLink to='#features'>
        <h1 className='header-component'>Test</h1>
      </HashLink> */}
      <div className='header-right'>
        <Link className='header-component' to='/'>
          Home
        </Link>
        <a
          href='https://medium.com/@jay.hickey3/introducing-dockervize-the-best-way-to-visualize-all-your-favorite-docker-container-metrics-de05c577d208'
          target='_blank'
          rel='noreferrer'
          className='header-component'
        >
          Blog
        </a>
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
