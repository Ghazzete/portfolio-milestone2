import React, { useState } from 'react';
import { LuMenu } from "react-icons/lu";
import '../app/styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-content" data-aos="zoom-in">My Portfolio</div>
        <LuMenu
          className="navbar-menu-icon"
          size={30}
          onClick={toggleMenu}
        />
        <ul
          className={`navbar-links ${
            isOpen ? "navbar-menu" : "md:flex"
          }`}
        >
          <li className="navbar-link">
            <a href="#hero" onClick={toggleMenu}>Home</a>
          </li>
          <li className="navbar-link">
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li className="navbar-link">
            <a href="#projects" onClick={toggleMenu}>Projects</a>
          </li>
          <li className="navbar-link">
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li className="navbar-link">
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
