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
      <img src={fullLogo} alt="Blue and white orca product logo with DockerVize written underneath" />
      <div className="about-container">
        <h2 className="footer-component" >{about}</h2>
        <p className="footer-component"><Link class="footer-component" to="/team">{teamLink}</Link></p>
        <p className="footer-component"><Link class="footer-component" to="/terms">{termsLink}</Link></p>
        <Link class="footer-component" to="/privacy">{privacyLink}</Link>
      </div>
      <div className="product-container">
        <h2 className="footer-component" > {product}</h2>
        <a href="https://github.com/oslabs-beta/dockervize#readme" className="footer-component"><ul className="footer-component" >{gettingStarted}</ul></a>
        <a href="https://github.com/oslabs-beta/dockervize" className="footer-component"><ul className="footer-component" >{docs}</ul></a>
      </div>
      <p className="footer-component"> {osLabTag}</p>
    </div>


  );
};

export default Footer;
