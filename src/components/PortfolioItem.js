// src/components/PortfolioItem.js
import React from "react";

const PortfolioItem = ({ title, imageUrl }) => {
  return (
    <div className='portfolio-item relative'>
      <img src={imageUrl} alt={title} className='w-full h-auto' />
      <div className='overlay absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100'>
        <p className='text-white font-bold'>{title}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
