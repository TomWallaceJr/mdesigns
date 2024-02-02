// src/components/HeroImage.js
import React from "react";
import sampleLogo from "../images/MDesign.png"; // Place a sample logo in the src/assets folder

const HeroImage = () => {
  return (
    <div className='hero-image flex flex-col md:flex-row items-center justify-between bg-hero-pattern p-8'>
      <img
        src={sampleLogo}
        alt='Artist Logo'
        className='max-w-xs md:max-w-sm'
      />
      <div className='text-center mt-4 md:mt-0'>
        <h1>Hello, I'm Melissa</h1>
        <p>A brief introduction about Melissa.</p>
      </div>
    </div>
  );
};

export default HeroImage;
