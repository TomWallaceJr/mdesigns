// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import HeroImage from "./components/HeroImage";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";
import About from "./components/About";
import "./global.css";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <div className='body-padded'>
        <HeroImage />
      </div>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <PortfolioSection />
            </>
          }
        />
        <Route path='/about' element={<About />} />
        {/* Define more routes for individual portfolio items here */}
      </Routes>
      <ContactSection />
    </Router>
  );
};

export default App;
