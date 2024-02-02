// src/components/HeroImage.js
import React from "react";
import sampleLogo from "../images/MDesign.png";
import "./HeroImage.css"; // Ensure you have this CSS file

const HeroImage = () => {
  return (
    <div className='hero-image'>
      <div className='hero-logo'>
        <img src={sampleLogo} alt='Artist Logo' />
      </div>
      <div className='hero-text'>
        <h1>Hello, I'm Melissa</h1>
        <p>This webpage is still under construction!!!</p>
      </div>
    </div>
  );
};

export default HeroImage;
