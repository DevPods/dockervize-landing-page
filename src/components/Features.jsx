import React from 'react';
import screenShot from '../assets/DockerVize.png';

const Features = () => {
  return (
    <div className='features-container'>
      <section className='dl-blurbs'>
        <dl>
          <dt>Connect</dt>
          <dd>
            Connect with your Docker Desktop application to seamlessly sync your
            Docker containers onto DockerVize.
          </dd>
          <dt>View</dt>
          <dd>
            View CPU and memory usage for any selected Docker container at the
            click of a button.
          </dd>
          <dt>Modify</dt>
          <dd>
            Modify container statuses with ease. Status changes made through
            DockerVize will automatically show on Docker Desktop, and vice
            versa.
          </dd>
        </dl>
      </section>
      <img src={screenShot} alt='Screenshot of DockerVize application.'></img>
    </div>
  );
};

export default Features;
