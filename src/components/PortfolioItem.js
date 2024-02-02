// PortfolioItem.js
import React from "react";
import "./PortfolioItem.css";

const PortfolioItem = ({ title, imageUrl }) => {
  return (
    <div className='portfolio-item'>
      <img src={imageUrl} alt={title} />
      <span className='portfolio-item-title'>{title}</span>
    </div>
  );
};

export default PortfolioItem;
