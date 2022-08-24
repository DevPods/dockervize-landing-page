import React from 'react';
import fullLogo from '../assets/Transparent Logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-title'>
        <h2 className='footer-component'>About Us</h2>
        <p className='footer-component'>
          <Link class='footer-component' to='/team'>
            The Team
          </Link>
        </p>
        <p className='footer-component'>
          <Link class='footer-component' to='/terms'>
            Terms of Service
          </Link>
        </p>
        <Link class='footer-component' to='/privacy'>
          Privacy Policy
        </Link>
      </div>

      <div className='footer-title'>
        <h2 className='footer-component'> Product</h2>
        <a
          href='https://github.com/oslabs-beta/dockervize#readme'
          target='_blank'
          rel='noreferrer'
          className='footer-component'
        >
          <ul className='footer-component'>Read Me</ul>
        </a>
        <a
          href='https://github.com/oslabs-beta/dockervize'
          target='_blank'
          rel='noreferrer'
          className='footer-component'
        >
          <ul className='footer-component'>Documentation</ul>
        </a>
      </div>

      <p className='footer-component'>
        Accelerated by OS Labs, a non-profit supporting open-source projects.
      </p>
    </div>
  );
};

export default Footer;
