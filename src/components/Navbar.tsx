import React, { useState } from 'react';
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        <div className='text-4xl font-medium text-yellow-600'data-aos="zoom-in">My Portfolio</div>
        <LuMenu className='md:hidden cursor-pointer' size={30} onClick={toggleMenu} />
        <ul className={`gap-10 lg:gap-16 ${isOpen ? 'flex flex-col md:flex-row' : 'hidden md:flex'} transition-all duration-300`}>
          <li className='menuLink'>
            <a href='#hero' onClick={toggleMenu}>Home</a>
          </li>
          <li className='menuLink'>
            <a href='#about' onClick={toggleMenu}>About</a>
          </li>
          <li className='menuLink'>
            <a href='#Projects' onClick={toggleMenu}>Projects</a>
          </li>
          <li className='menuLink'>
            <a href='#Skills' onClick={toggleMenu}>Skills</a>
          </li>
          <li className='menuLink'>
            <a href='#Contact' onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
