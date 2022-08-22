import React from 'react';
import screenShot from '../assets/DockerVizeSS.png';


const ProductContainer = () => {
  const welcome = 'Supervise with DockerVize';
  const productInfo = 'Introducing a new single page GUI to intuitively manage containers and monitor vital metrics \
    such as memory and CPU. While Docker has revolutionized container technology the CLI and Docker Desktop app can \
    be cumbersome to manage. That is where DockerVize can help a developer out. Stopping, starting, pausing, and  \
    unpausing containers can now be done with the click of a button. Developers can toggle the data feed to quickly \
    see CPU or memory data for the container.';


  return(
    <div>
      <h2 className = "product-content">{welcome}</h2>
      <p className = "product-content">{productInfo}</p>
      <img src={screenShot} alt="Screenshot of DockerVize application."></img>
    </div>
  );



};

export default ProductContainer;