import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './LandingPage.css';

function WelcomeText() {
  // Function to scroll down smoothly
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight, // scrolls to the next section, assuming full viewport height
      behavior: 'smooth'
    });
  };

  return (
    <div className='landingPage'>
      <h1>Welcome to TED x VIT</h1>
      <h1>where we aim to discover and spread ideas that </h1>
      <TypeAnimation
        sequence={[
          "Spark conversation",
          2000,
          "deepen understanding",
          2000,
          "drive meaningful change",
          2000,
        ]}
        wrapper="h1"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '2.5em', fontWeight: 'bold' }}
      />
      {/* Arrow Button */}
      <div className="down-arrow" onClick={scrollToNextSection}>
        ⌄
      </div>
    </div>
  );
}

export default WelcomeText;
