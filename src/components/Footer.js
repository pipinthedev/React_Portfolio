import React from 'react';
import MonkeyLogo from '../asset/logo/mk.png';
import patchedLogo from '../asset/logo/patched_1.png';
import githubLogo from '../asset/logo/github_1.png'; 
import telegramLogo from '../asset/logo/telegram_1.png';
import '../asset/footer.css'; 

const Footer = () => {
  return (
    <footer className="bg-[#000000] py-2 text-primary">
      <div className="max-w-screen-xl mx-auto px-2 flex flex-col items-center">
        <p className="mb-1 text-center text-xs font-bold">
          Made by <span className="underline">pipin</span> with <span className="bump-heart">💓</span>
        </p>
        <div className="flex space-x-2 mb-1">
          <a href="https://github.com/pipinthedev" className="text-primary hover:text-[#61dafb] transition-colors duration-300" target="_blank">
            <img src={githubLogo} alt="GitHub Logo" className="h-8 w-8" />
          </a>
          <a href="https://t.me/uhq69" className="text-primary hover:text-[#61dafb] transition-colors duration-300" target="_blank">
            <img src={telegramLogo} alt="Telegram Logo" className="h-8 w-8" />
          </a>
          <a href="https://monkeytype.com/profile/pranesh_" className="text-primary hover:text-[#61dafb] transition-colors duration-300" target="_blank" disabled>
            <img src={MonkeyLogo} alt="monkeytype Logo" className="h-8 w-8" />
          </a>
          <a href="https://patched.to/User/pipin-36630" className="text-primary hover:text-[#61dafb] transition-colors duration-300" target="_blank">
            <img src={patchedLogo} alt="Patched Logo" className="h-8 w-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
