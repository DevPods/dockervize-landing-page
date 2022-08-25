import React from 'react';
import recording from '../assets/recording.gif';
import Features from '../components/Features.jsx';
import GettingStarted from '../components/GettingStarted.jsx';

const ProductContainer = () => {
  const productInfo =
    'An application that intuitively manages Docker containers and monitors memory & CPU usage. While Docker has revolutionized container technology, the Command Line Interface and Docker Desktop app can \
    be cumbersome to manage. With DockerVize, docker container statuses can be modified with the click of a button and developers can toggle the data feed to quickly \
    see container metrics.';

  return (
    <div className='product-content'>
      <div className='content-text-title'>
        Docker Container <br></br> Visualizer&nbsp;
        <span className='dockervize-text'>DockerVize</span>
      </div>

      <div className='content-text'>{productInfo}</div>
      <img src={recording} alt='Recording'></img>

      <Features />
      <GettingStarted />
    </div>
  );
};

export default ProductContainer;
