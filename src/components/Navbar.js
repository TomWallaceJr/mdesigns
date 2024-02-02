// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure you have this CSS file

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-items'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About Me</Link>
        <a href='#portfolio'>Portfolio</a>
        <a href='#contact'>Contact Me</a>
      </div>
    </nav>
  );
};

export default Navbar;
