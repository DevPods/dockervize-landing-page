import React from 'react';
import fullLogo from '../assets/Transparent Logo.svg';
import { Link } from 'react-router-dom';


const Footer = () => {
  const about = 'About Us';
  const teamLink = 'The Team';
  const termsLink = 'Terms of Service';
  const privacyLink = 'Privacy Policy';
  const product = 'Product';
  const gettingStarted = 'Read Me';
  const docs = 'Documentation';
  const osLabTag = 'Accelerated by OS Labs a non-profit supporting open-source projects.';
 
  return (
    <div className="footer-container">
      <img src={fullLogo} alt = "Blue and white orca product logo with DockerVize written underneath" />
      <h2>{about}</h2>
      <ul>{teamLink}</ul>
      <ul><Link to="/terms">{termsLink}</Link></ul>
      <ul><Link to="/privacy">{privacyLink}</Link></ul>
      <h2>{product}</h2>
      <a href="https://github.com/oslabs-beta/dockervize#readme"><ul>{gettingStarted}</ul></a>
      <a href="https://github.com/oslabs-beta/dockervize"><ul>{docs}</ul></a>
      <p>{osLabTag}</p>
    </div>

  );



};

export default Footer;