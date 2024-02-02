// src/components/PortfolioSection.js
import React from "react";
import PortfolioItem from "./PortfolioItem";

const portfolioItems = [
  { id: 1, title: "Portfolio Item 1", imageUrl: "path/to/image1.jpg" },
  // Add more items as needed
];

const PortfolioSection = () => {
  return (
    <section id='portfolio' className='p-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {portfolioItems.map((item) => (
          <PortfolioItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
