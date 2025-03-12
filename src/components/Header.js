import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../asset/logo/pipin_logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full z-20 top-0 left-0 bg-black shadow-md transition-all duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        <ScrollLink to="hero" smooth={true} duration={500} className="flex items-center space-x-3 cursor-pointer">
          <img src={logo} className="h-12 transition-transform duration-300 hover:scale-110" alt="Logo" />
          <span className="text-xl font-semibold text-white hover:text-[#a428c5] transition">pipin.dev</span>
        </ScrollLink>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={26} className="text-[#a428c5]" /> : <FaBars size={26} />}
          </button>
        </div>

        <nav className={`md:flex md:items-center md:space-x-6 ${isOpen ? 'block' : 'hidden'} w-full md:w-auto mt-4 md:mt-0 transition-all duration-300`}>
          <ScrollLink to="hero" smooth={true} duration={500} className="nav-link">Home</ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} offset={-50} className="nav-link">Projects</ScrollLink>
          <ScrollLink to="experience" smooth={true} duration={500} offset={-50} className="nav-link">Experience</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-50} className="nav-link">Contact</ScrollLink>
        </nav>

      </div>
    </header>
  );
};

export default Header;
