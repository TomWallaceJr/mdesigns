// PortfolioItem.js
import React from "react";
import "../styles.css";

const PortfolioItem = ({ title, imageUrl }) => {
  return (
    <div className='portfolio-item'>
      <img src={imageUrl} alt={title} />
      <span className='portfolio-item-title'>{title}</span>
    </div>
  );
};

export default PortfolioItem;
