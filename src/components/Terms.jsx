import React from 'react';

const Terms = () => {
  const termsTitle = 'Terms and Conditions';
  const termsContent = 'These terms and conditions outline the rules and reculations for the use of DockerVize, \
  located at DockerVize.com. By accessing this website we assume you accept these terms and conditions. Do not continue \
   to use DockerVize if you do not agree to take all of the terms stated on this page. The following terminology applies \
   to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, \
   the person on this website. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance \
   and consideration of payment necessary to undertake the process of our assistance to the Client in the most \
   appropriate manner for the express purpose of meeting the Client\'s needs in respect of provision of the the Company\'s stated \
   services, in accordance with and subject to, prevailing las of Netherlands. Any use of the above terminology \
   or other words in the singular, plural, capitalization and/or he/she ot they, are taken as interchangebale and \
   referring to the same.';
  const licenseTitle = 'License';
  const licenseContent = 'Unless otherswise stated, DockerVize and/or its licensors own the intellectual property rights \
   for all material on DockerVize.com. All intellectual property rights are reserved. You may access this from DockerVize.com \
   for your own personal use subjected to restrictions set in terms and conditions. You must not: 1. Republish material from \
   DockerVize. 2. Sell, rent or sub-license material from DoverVize. 3. Reproduce, duplicate or copy material from \
   DockerVize. 4. Redistribute content from DocerVize. This Agreement shall begin on the date hereof. Parts of this \
   website offer an opportunity for users to post and exchange opinions and information in certain areas os the website. \
   Comments do not reflect the views and opinions of DockerVize its agents and/or affilitates. Comments reflect the \
   views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, \
   DockerVize shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a \
   result of any use of any use of and/or posting of and/or apperance of the Comments on this website. DockerVize reserves \
   the right to monitor all Comments and to remove any Comments which can be considered in appropriate, offensive or causes \
   breach of these Terms and Conditions. You warrant and represent that: A) You are entitled fo post the Comments on our \
   website and have all necessary licenses and contents to do so; B) The Comments do not invade any intellectual property \
   right, including without limitation copyright, patent, or trademark of any third party; C)The Comments do not contain any \
   defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy; D) The Comments \
   will not be used to solicit of promote busines or custom or present commercial activities of unlawful activity. You \
   hearby grant DockerVize a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce, and edit any \
   of your Comments in any and all forms, formats, or media.';
  const iFramesTitle = 'iFrames';
  const iFramesContent = 'Without prior approval and written permission, you many not creat grames around DockerVize that alter \
   in any way the visial presentation or apperance of DockerVize.';
  const liabilityTitle = 'Content Liability';
  const liabilityContent = 'We shall not be held responsible for any content that appears on your Website. You agree to protect \
   and defend us against all claims that arise on your Website. No link(s) should appear on any Website that may be interpretated as \
   libelous, obscene or criminal, or which infringes, otherwise violated, or advocates the infringement of other violation of, \
   and third party rights.';
  const rightsTitle = 'Reservation of Rights';
  const rightsContent = 'We reserve the right to request that you remove all links or any particulat link to our Website. You \
   approve to immediately remove all links to our Websiste upon reqeust. We also reserve the right to amend these terms and \
   conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and \
   follow thest linking terms and conditions.';
  

  return (
    <>
      <h2>{termsTitle}</h2>
      <p>{termsContent}</p>
      <h2>{licenseTitle}</h2>
      <p>{licenseContent}</p>
      <h2>{iFramesTitle}</h2>
      <p>{iFramesContent}</p>
      <h2>{liabilityTitle}</h2>
      <p>{liabilityContent}</p>
      <h2>{rightsTitle}</h2>
      <p>{rightsContent}</p>
    </>
  );
};


export default Terms;