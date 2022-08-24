import React from 'react';
import containers from '../assets/containers.png';
import dropdown from '../assets/dropdown.png';

const Features = () => {
  return (
    <div className='features-container' id='features'>
      <div className='features-text-title'>Key Features</div>
      <div className='features-content'>
        <div className='features-left'>
          <section className='dl-blurbs'>
            <dl>
              <dt>Connect</dt>
              <dd>
                Connect with your Docker Desktop application to seamlessly sync
                your Docker containers onto DockerVize.
              </dd>
              <dt>View</dt>
              <dd>
                View CPU and memory usage for any selected Docker container at
                the click of a button.
              </dd>
              <dt>Modify</dt>
              <dd>
                Modify container statuses with ease. Status changes made through
                DockerVize will automatically show on Docker Desktop, and vice
                versa.
              </dd>
            </dl>
          </section>
        </div>
        <div className='features-right'>
          <img
            src={containers}
            className='containers-ss'
            alt='Screenshot of DockerVize application.'
          ></img>
          <img
            src={dropdown}
            className='dropdown-ss'
            alt='Screenshot of DockerVize application.'
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Features;
