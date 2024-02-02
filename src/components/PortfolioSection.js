import React from "react";
import PortfolioItem from "./PortfolioItem";
import "../styles.css";

const PortfolioSection = () => {
  const portfolioItems = [
    { id: 1, title: "Portfolio Item 1", imageUrl: "path/to/image1.jpg" },
    // Add more items as needed
  ];

  return (
    <div className='portfolio-section' id='portfolio'>
      {portfolioItems.map((item) => (
        <PortfolioItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default PortfolioSection;
