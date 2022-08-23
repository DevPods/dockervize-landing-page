import React from 'react';
import Bruno from '../assets/Bruno.png';
import Jay from '../assets/Jay.png';
import Ian from '../assets/Ian.png';
import Taryn from '../assets/Taryn.png';
import linkedIn from '../assets/linkedin-logo-png-2028.png';
import gitHub from '../assets/GitHub-Mark-120px-plus.png';


const TeamMembers = () => {
  return (
    <div className="team-container">
      <div className="team-container-1">
        <img src={Bruno} alt="Man wearing a button down shirt" />
        <span><b className="names">Bruno Albero</b></span>
        <p className="logos">
          <a href="https://www.linkedin.com/in/alberobruno/"><img src={linkedIn} alt="Linked in logo. Blue cirle with white LI in the center."/></a>
          <a href="https://github.com/alberobruno"><img src={gitHub} alt="Github logo. Black circle with white octocat in the middle." /></a>
        </p>
        <br></br>
        <img src={Jay} alt="Man wearing a blue t-shirt" />
        <span><b className="names">Jay Hickey</b></span>
        <p>I’m a software engineer from NYC passionate about testing and security.  I like to spend my free time watching baseball or soccer, reading fiction, and cooking.</p>
        <p className="logos">
          <a href="https://www.linkedin.com/in/jay-hickey-4a18751a0/"><img src={linkedIn} alt="Linked in logo. Blue cirle with white LI in the center." /></a>
          <a href="https://github.com/J-hickey"><img src={gitHub} alt="Github logo. Black circle with white octocat in the middle." /></a>
        </p>
        <br></br>
      </div>
      <div className="team-container-2">
        <img src={Ian} alt="Man wearing a light blue suit" />
        <span><b>Sinian Ma</b></span>
        <p className="logos">
          <a href ="https://www.linkedin.com/in/sinian-ma/"> <img src={linkedIn} alt="Linked in logo. Blue cirle with white LI in the center." /></a>
          <a href="https://github.com/ian-ma-nyc"><img src={gitHub} alt="Github logo. Black circle with white octocat in the middle." /></a>
        </p><br></br>
        <img src={Taryn} alt="Woman sitting in a garden" />
        <span><b className="names">Taryn Cunha</b></span>
        <p>I am a full-stack engineer that enjoys contributing to the open-source community. In my free time I like to hike, dance, and hang out with my pup Galaxy.</p>
        <p className="logos">
          <a href="https://www.linkedin.com/in/taryncunha/"><img src={linkedIn} alt="Linked in logo. Blue cirle with white LI in the center." /></a>
          <a href="https://github.com/cunhanator"><img src={gitHub} alt="Github logo. Black circle with white octocat in the middle." /></a>
        </p>
      </div>



    </div>
  );


};

export default TeamMembers;