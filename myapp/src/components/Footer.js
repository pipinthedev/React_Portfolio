import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-background py-8 text-primary">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="text-primary"><FaFacebook /></a>
          <a href="https://twitter.com" className="text-primary"><FaTwitter /></a>
          <a href="https://linkedin.com" className="text-primary"><FaLinkedin /></a>
          <a href="https://github.com" className="text-primary"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
