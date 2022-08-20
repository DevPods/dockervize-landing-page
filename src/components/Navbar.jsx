/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

const connectGitHub = () => {

};

  return(
    <div className = "Navbar">
    <div>DockerVize</div>
    <div><Link className="nav-link" to="/">Product</Link></div>
    <div><Link className="nav-link" to="/team">Team</Link></div>
    <div><button onClick={() => connectGitHub}>Download</button></div>

    </div>

  );
};


export default Navbar;