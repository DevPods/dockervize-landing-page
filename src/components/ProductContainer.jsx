import React from 'react';
import screenShot from '../assets/DockerVize.png';

const ProductContainer = () => {
  const productTitle = 'Docker Container Metrics Visualizer';
  const productInfo =
    'An application that intuitively manages Docker containers and monitors memory & CPU usage. While Docker has revolutionized container technology, the Command Line Interface and Docker Desktop app can \
    be cumbersome to manage. With Dockervize, docker container statuses can be modified with the click of a button and developers can toggle the data feed to quickly \
    see container metrics.';

  return (
    <div className='product-content'>
      <h1>
        Docker Container <br></br> Visualizer&nbsp;
        <span className='dockervize-text'>DockerVize</span>
      </h1>
      <p>{productInfo}</p>
      <img src={screenShot} alt='Screenshot of DockerVize application.'></img>
    </div>
  );
};

export default ProductContainer;
