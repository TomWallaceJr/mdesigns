// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full flex justify-between items-center bg-white shadow-md p-4'>
      <Link to='/' className='text-xl font-bold'>
        MDesigns
      </Link>
      <div>
        <Link to='/about' className='px-4'>
          About Me
        </Link>
        <a href='#portfolio' className='px-4'>
          Portfolio
        </a>
        <a href='#contact' className='px-4'>
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
