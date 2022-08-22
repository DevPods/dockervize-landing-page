import React from 'react';
import Bruno from '../assets/Bruno.png';
import Jay from '../assets/Jay.png';
import Ian from '../assets/Ian.png';
import Taryn from '../assets/Taryn.png';


const TeamMembers = () => {
  return (
    <div className="team-container">
      <h2> Meet the DockerVize team</h2>
      <img src={Bruno} alt="Man wearing a button down shirt" />
      <span>Place holder text for Bruno's bio.</span><br></br>
      <span>Place holder text for Jay's bio.</span>
      <img src={Jay} alt="Man wearing a blue t-shirt" /><br></br>
      <img src={Ian} alt="Man wearing a light blue suit" />
      <span>Place holder text for Ian's bio.</span><br></br>
      <span>Place holder text for Taryn's bio.</span>
      <img src={Taryn} alt="Woman sitting in a garden" />
      

    </div>
  );


};

export default TeamMembers;