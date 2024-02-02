// src/components/HeroImage.js
import React from "react";
import sampleLogo from "../images/MDesign.png";
import "../styles.css";

const HeroImage = () => {
  return (
    <div className='hero-image'>
      <div>
        <img src={sampleLogo} alt='Artist Logo' />
      </div>
      <div>
        <h1>Hello, I'm Melissa</h1>
        <p>A brief introduction about Melissa's artistic journey and vision.</p>
      </div>
    </div>
  );
};

export default HeroImage;
