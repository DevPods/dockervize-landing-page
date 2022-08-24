import React from 'react';

const Privacy = () => {
  const privacyTitle = 'Privacy Policy';
  const privacyContent =
    'At DockerVize, accessible at DockerVize.com, one of our main priorities is the privacy \
    of our visitors. This Privacy Policy document contains the type of information that is collected and recorded by \
    DockerVize.com and how we use it. This privacy policy applies only to our online activities and is valid for visitors \
    to our website with regards to the information that they share/or collect in DockerVize.com. This policy is not \
    applicable to any information collected offline or via channels other than the website.';
  const consentTitle = 'Consent';
  const consentContent =
    'By using our website, you hereby consent to our Privacy Policy and agree to its terms.';
  const informationTitle = 'Information we collect';
  const informationContent =
    'The personal information that you are asked to provide, and the reasons why you are asked \
    to provide it, will be made clear to you at the point we ask you to provide your personal information.';

  return (
    <div className='privacy'>
      <h2 className='privacy-title'>{privacyTitle}</h2>
      <p>{privacyContent}</p>
      <br></br>

      <h2 className='privacy-title'>{consentTitle}</h2>
      <p>{consentContent}</p>
      <br></br>

      <h2 className='privacy-title'>{informationTitle}</h2>
      <p>{informationContent}</p>
    </div>
  );
};

export default Privacy;
