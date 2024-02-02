// src/components/About.js
import React from "react";

const About = () => {
  return (
    <div className='about-section bg-white py-12 px-4 md:px-8 lg:px-16'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-4'>About Me</h2>
        <p className='text-lg text-gray-700'>
          Hello! I'm Melissa, a passionate graphic designer with over 5 years of
          experience in creating memorable visuals that tell compelling stories.
          My journey in design started from a young age and has since grown into
          a full-fledged career, fueled by my love for art and technology.
        </p>
        <p className='text-lg text-gray-700 mt-4'>
          I specialize in digital illustrations, brand identity, and user
          interface design. My work is characterized by a unique blend of modern
          aesthetics and functional simplicity. I believe great design not only
          looks good but also solves problems and communicates effectively.
        </p>
        <p className='text-lg text-gray-700 mt-4'>
          When I'm not designing, you can find me exploring the outdoors,
          reading about the latest trends in design and technology, or
          experimenting with new art techniques. I'm always on the lookout for
          new challenges and collaborations that push the boundaries of what's
          possible.
        </p>
        <div className='text-center mt-8'>
          <a
            href='#contact'
            className='bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-blue-600'>
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
