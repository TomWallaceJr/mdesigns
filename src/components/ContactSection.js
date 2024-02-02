// src/components/ContactSection.js
import React from "react";

const ContactSection = () => {
  return (
    <footer id='contact' className='p-8 bg-gray-200'>
      <div className='flex justify-center space-x-4'>
        <a href='https://linkedin.com/in/username'>LinkedIn</a>
        <a href='https://instagram.com/username'>Instagram</a>
        <a href='mailto:email@example.com'>Email</a>
      </div>
    </footer>
  );
};

export default ContactSection;
