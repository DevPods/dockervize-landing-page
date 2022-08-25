import React from 'react';

const Features = () => {
  return (
    <div className='getting-started-container'>
      <div className='getting-started-text-title'>Getting Started</div>
      <ul className='tilesWrap'>
        <li>
          <h2>01</h2>
          <h3>Start Docker Desktop</h3>
          <p>
            Make sure you have Docker Desktop or Docker Daemon running in the
            background.
          </p>
        </li>
        <li>
          <h2>02</h2>
          <h3>Clone Repo</h3>
          <p>Clone the repo onto your local machine.</p>
        </li>
        <li>
          <h2>03</h2>
          <h3>Install dependencies</h3>
          <p>
            Run `npm install -f` to install all dependencies.
          </p>
        </li>
        <li>
          <h2>04</h2>
          <h3>Start Application</h3>
          <p>Run `npm start dev` to start using DockerVize!</p>
        </li>
      </ul>
    </div>
  );
};

export default Features;
