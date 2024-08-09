import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full z-20 top-0 left-0 bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="logo.svg" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary">My Portfolio</span>
        </Link>
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-primary focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav className={`md:flex md:items-center md:justify-center md:space-x-6 ${isOpen ? 'block' : 'hidden'} w-full md:w-auto mt-4 md:mt-0`}>
          <Link to="/" className="block text-primary md:inline-block border border-primary p-2 rounded">Home</Link>
          <a href="#projects" className="block text-primary md:inline-block border border-primary p-2 rounded">Projects</a>
          <a href="#experience" className="block text-primary md:inline-block border border-primary p-2 rounded">Experience</a>
          <a href="#contact" className="block text-primary md:inline-block border border-primary p-2 rounded">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
