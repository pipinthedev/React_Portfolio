import React, { useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import TelegramPopup from './TelegramPopup';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../asset/images/', false, /\.png$/));

const Hero = () => {
  const starContainerRef = useRef(null);

  useEffect(() => {
    const starContainer = starContainerRef.current;
    const stars = Array.from(starContainer.querySelectorAll('.star, .shooting-star'));

    const randomizeStarPositions = () => {
      stars.forEach(star => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        star.style.top = `${y}%`;
        star.style.left = `${x}%`;
      });
    };

    const animateShootingStars = () => {
      const shootingStars = Array.from(starContainer.querySelectorAll('.shooting-star'));
      const numStarsToAnimate = Math.floor(Math.random() * 3) + 3;
      const starsToAnimate = shootingStars.sort(() => 0.5 - Math.random()).slice(0, numStarsToAnimate);

      starsToAnimate.forEach(star => {
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
      });
    };

    randomizeStarPositions();
    animateShootingStars();
    const interval = setInterval(animateShootingStars, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="galaxy-background h-screen flex flex-col justify-center items-center text-center p-4 relative">
      <TelegramPopup />
      <div ref={starContainerRef} className="absolute w-full h-full top-0 left-0">
        {Array.from({ length: 100 }).map((_, index) => (
          <div key={index} className="star" />
        ))}
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="shooting-star" />
        ))}
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="glow" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }} />
        ))}
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="galaxy" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `galaxyAnimation ${Math.random() * 50 + 50}s linear infinite`
          }} />
        ))}
      </div>
      <h1 className="text-5xl font-bold text-primary z-10">
        Full Stack Web Developer <span className="hand-wave">👋</span>
      </h1>
      <p className="text-xl text-secondary mt-4 z-10">
        <span className="code-text">
          <Typewriter
            words={["I'm pipin", "a web developer", "working remotely", "freelancer", "making robust websites", "ready to take orders"]}
            loop={false}
            cursor
            cursorStyle="|."
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </p>
      <a href="#projects" className="view-button  mt-8 px-6 py-3 bg-secondary text-primary rounded-lg z-10">View My Work</a>
      <div className="marquee-container w-full flex justify-center mt-16">
        <div className="transparent-wall left"></div>
        <div className="marquee-content animate-marquee" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {images.concat(images).map((image, index) => (
            <div key={index} className="flex items-center justify-center w-20 h-20 text-black rounded-full shadow-md transition-transform transform hover:scale-110" onMouseEnter={(e) => handleMouseEnterIcon(e, index)} onMouseLeave={handleMouseLeaveIcon}>
              <img src={image} alt={`Tech ${index}`} className="w-full h-full object-contain" style={{ backgroundColor: 'transparent' }} />
              <div className="tooltip">{image.split('/').pop()}</div>
            </div>
          ))}
        </div>
        <div className="transparent-wall right"></div>
      </div>
    </section>
  );

  function handleMouseEnter() {
    document.querySelector('.animate-marquee').style.animationPlayState = 'paused';
  }

  function handleMouseLeave() {
    document.querySelector('.animate-marquee').style.animationPlayState = 'running';
  }

  function handleMouseEnterIcon(event, index) {
    document.querySelectorAll('.animate-marquee > div').forEach((icon, i) => {
      if (i !== index) {
        icon.style.filter = 'blur(2px)';
      }
    });
    const tooltip = event.target.querySelector('.tooltip');
    if (tooltip) {
      tooltip.classList.add('show');
    }
  }

  function handleMouseLeaveIcon(event) {
    document.querySelectorAll('.animate-marquee > div').forEach(icon => {
      icon.style.filter = 'none';
    });
    const tooltip = event.target.querySelector('.tooltip');
    if (tooltip) {
      tooltip.classList.remove('show');
    }
  }
};

export default Hero;
