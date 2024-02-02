// PortfolioItem.js
import React from "react";
import "./PortfolioItem.css";

const PortfolioItem = ({ title, imageUrl }) => {
  return (
    <div className='portfolio-item'>
      <div className='portfolio-item-content'>
        <span className='portfolio-item-title'>{title}</span>
        <img src={imageUrl} alt={title} className='portfolio-item-image' />
      </div>
    </div>
  );
};

export default PortfolioItem;
