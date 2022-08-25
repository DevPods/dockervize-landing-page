import React from 'react';

const Terms = () => {
  const termsTitle = 'Terms and Conditions';
  const termsContent =
    "These terms and conditions outline the rules and regulations for the use of DockerVize, located at DockerVize.com. By accessing this website, you accept these terms and conditions. Do not continue to use DockerVize if you do not agree to take all of the terms stated on this page. The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: ‘Client’, ‘You’ and ‘Your’ refers to you, the person on this website. ‘Party’, ‘Parties’, or ‘Us’, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing laws. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and referring to the same.";
  const licenseTitle = 'License';
  const licenseContent =
    'Unless otherwise stated, DockerVize and/or its licensors own the intellectual property rights \
   for all material on DockerVize.com. All intellectual property rights are reserved. You may access this from DockerVize.com \
   for your own personal use subjected to restrictions set in terms and conditions. You must not: 1. Republish material from \
   DockerVize. 2. Sell, rent or sub-license material from DoverVize. 3. Reproduce, duplicate or copy material from \
   DockerVize. 4. Redistribute content from DockerVize. This Agreement shall begin on the date hereof.';
  const iFramesTitle = 'iFrames';
  const iFramesContent =
    'Without prior approval and written permission, you may not create frames around DockerVize that alter, \
   in any way, the visual presentation or appearance of DockerVize.';
  const liabilityTitle = 'Content Liability';
  const liabilityContent =
    'We shall not be held responsible for any content that appears on your Website. You agree to protect \
   and defend us against all claims that arise on your Website. No link(s) should appear on any Website that may be interpretated as \
   libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement of other violation of, \
   and third-party rights.';
  const rightsTitle = 'Reservation of Rights';
  const rightsContent =
    'We reserve the right to request that you remove all links or any particular link to our Website. You \
   approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and \
   conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and \
   follow these linking terms and conditions.';

  return (
    <div className='terms'>
      <h2 className='terms-title'>{termsTitle}</h2>
      <p>{termsContent}</p>
      <br></br>

      <h2 className='terms-title'>{licenseTitle}</h2>
      <p>{licenseContent}</p>
      <br></br>

      <h2 className='terms-title'>{iFramesTitle}</h2>
      <p>{iFramesContent}</p>
      <br></br>

      <h2 className='terms-title'>{liabilityTitle}</h2>
      <p>{liabilityContent}</p>
      <br></br>

      <h2 className='terms-title'>{rightsTitle}</h2>
      <p>{rightsContent}</p>
    </div>
  );
};

export default Terms;
