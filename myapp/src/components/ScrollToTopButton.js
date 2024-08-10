import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../asset/button.css'; 

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        const heroSectionHeight = heroElement.clientHeight;
        if (window.scrollY > heroSectionHeight) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollDuration = 1000;
    const scrollStep = -window.scrollY / (scrollDuration / 15);

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <button
      className={`scroll-to-top-button fixed bottom-4 right-4 p-3 rounded-full shadow-lg transition-opacity duration-300 ${showButton ? 'opacity-100' : 'opacity-0'}`}
      onClick={scrollToTop}
      style={{ zIndex: 1000 }}
    >
      <FaArrowUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;
