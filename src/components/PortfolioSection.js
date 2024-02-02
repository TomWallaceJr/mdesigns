import React from "react";
import PortfolioItem from "./PortfolioItem";
import "./PortfolioSection.css";
import plantbrochure from "../images/plantbrochure.png";
import plantbrochure2 from "../images/plantbrochure2.png";
import plantbrochure3 from "../images/plantbrochure3.png";
import plantbrochure4 from "../images/plantbrochure4.png";
import briflyer2 from "../images/briflyer2.png";
import ppplogo from "../images/ppplogo.png";
import pppbnw from "../images/pppbnw.png";
import ppptable from "../images/ppptable.png";
import thesmoke from "../images/thesmoke.png";
import thesmokebusinesscard from "../images/thesmokebusinesscard.png";
import mdesignslogo from "../images/MDesign.png";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Plant Brochure",
      imageUrl: plantbrochure,
    },
    {
      id: 2,
      title: "Plant Brochure 2",
      imageUrl: plantbrochure2,
    },
    {
      id: 3,
      title: "Plant Brochure 3",
      imageUrl: plantbrochure3,
    },
    {
      id: 4,
      title: "Plant Brochure 3",
      imageUrl: plantbrochure4,
    },
    {
      id: 5,
      title: "Pitch Perfect Poker",
      imageUrl: ppplogo,
    },
    {
      id: 6,
      title: "Pitch Perfect Poker",
      imageUrl: pppbnw,
    },
    {
      id: 7,
      title: "Pitch Perfect Poker",
      imageUrl: ppptable,
    },
    {
      id: 8,
      title: "The Smoke",
      imageUrl: thesmoke,
    },
    {
      id: 9,
      title: "Smoke Business Card",
      imageUrl: thesmokebusinesscard,
    },
    {
      id: 10,
      title: "Mdesigns",
      imageUrl: mdesignslogo,
    },
    // Add more items as needed
  ];

  return (
    <div className='portfolio-section' id='portfolio'>
      {portfolioItems.map((item) => (
        <PortfolioItem key={item.id} {...item} className='portfolio-item' />
      ))}
    </div>
  );
};

export default PortfolioSection;
