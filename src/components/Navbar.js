// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>MDesigns</Link>
      <div>
        <Link to='/about'>About Me</Link>
        <a href='#portfolio'>Portfolio</a>
        <a href='#contact'>Contact Me</a>
      </div>
    </nav>
  );
};

export default Navbar;
