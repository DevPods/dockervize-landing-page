import React from 'react';
import Bruno from '../assets/Bruno.png';
import Jay from '../assets/Jay.png';
import Ian from '../assets/Ian.png';
import Taryn from '../assets/Taryn.png';
import linkedIn from '../assets/linkedin.svg';
import gitHub from '../assets/GitHub-Mark-120px-plus.png';

const TeamMembers = () => {
  return (
    <div className='members-container'>
      <div>
        <h1 className='members-title'>Meet the team! </h1>
      </div>

      <div className='cards-container'>
        <div className='members-card'>
          <img src={Bruno} alt='Bruno Albero' />

          <b className='names'>Bruno Albero</b>

          {/* <p className='member-bio'>
            My passion is building unique projects.
            When I am not coding, you can find me playing volleyball, spoiling
            my cat, or at a boardgame night!
          </p> */}

          <p className='logos'>
            <a
              href='https://www.linkedin.com/in/alberobruno/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={linkedIn}
                alt='Linkedin logo'
              />
            </a>
            <a
              href='https://github.com/alberobruno'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={gitHub}
                alt='Github logo'
              />
            </a>
          </p>
        </div>

        <div className='members-card'>
          <img src={Jay} alt='Jay Hickey' />

          <b className='names'>Jay Hickey</b>

          {/* <p className='member-bio'>
            I am a software engineer from NYC passionate about testing and
            security. I like to spend my free time watching baseball or soccer,
            reading fiction, and cooking.
          </p> */}

          <p className='logos'>
            <a
              href='https://www.linkedin.com/in/jay-hickey-4a18751a0/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={linkedIn}
                alt='Linkedin logo'
              />
            </a>
            <a
              href='https://github.com/J-hickey'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={gitHub}
                alt='Github logo'
              />
            </a>
          </p>
        </div>

        <div className='members-card'>
          <img src={Ian} alt='Sinian Ma' />

          <b className='names'>Sinian Ma</b>

          {/* <p className='member-bio'>
            I am a software engineer with a strong interest in full-stack
            development and building open-source products. In my leisure time, I
            like playing tennis and bringing my golden retriever to the dog
            beach!
          </p> */}

          <p className='logos'>
            <a
              href='https://www.linkedin.com/in/sinian-ma/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={linkedIn}
                alt='Linkedin logo'
              />
            </a>
            <a
              href='https://github.com/ian-ma-nyc'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={gitHub}
                alt='Github logo'
              />
            </a>
          </p>
        </div>

        <div className='members-card'>
          <img src={Taryn} alt='Taryn Cunha' />

          <b className='names'>Taryn Cunha</b>

          {/* <p className='member-bio'>
            I am a full-stack engineer that enjoys contributing to the
            open-source community. In my free time I like to hike, dance, and
            hang out with my pup Galaxy.
          </p> */}

          <p className='logos'>
            <a
              href='https://www.linkedin.com/in/taryncunha/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={linkedIn}
                alt='Linkedin logo'
              />
            </a>
            <a
              href='https://github.com/cunhanator'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={gitHub}
                alt='Github logo'
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
