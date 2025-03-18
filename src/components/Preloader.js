import React from 'react';
import pipinLogo from '../asset/logo/pipin_logo.png';

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col justify-center items-center text-white z-50">
      <img src={pipinLogo} alt="Pipin Logo" className="w-24 h-24 animate-bounce mb-4" />
      <p className="text-lg font-bold animate-pulse">Loading your experience...</p>
    </div>
  );
};

export default Preloader;
