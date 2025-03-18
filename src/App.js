import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTopButton from './components/ScrollToTopButton';
import pipinLogo from './asset/logo/pipin_logo.png';
import Preloader from './components/Preloader';
const App = () => {
  const [loading, setLoading] = useState(true);
  const fullTitle = 'Pipin - Full Stack Developer 🧑‍💻';
  const awayTitles = [
    'Hire me for your projects!',
    'Don’t miss out!',
    'Check out my portfolio!',
    'Cheap and best websites',
    'Looking to collaborate with me!',
    'Create amazing websites for your business'
  ];
  let titleInterval;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      window.$crisp=[];
      window.CRISP_WEBSITE_ID="b31823af-a1d1-4106-a671-64e6aae2a50b";
      (function(){
        d=document;
        s=d.createElement("script");
        s.src="https://client.crisp.chat/l.js";
        s.async=1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();
    `;
    document.head.appendChild(script);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        startChangingTitle();
      } else {
        stopChangingTitle();
        document.title = fullTitle;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [fullTitle]);

  const startChangingTitle = () => {
    let currentIndex = 0;
    titleInterval = setInterval(() => {
      document.title = awayTitles[currentIndex];
      currentIndex = (currentIndex + 1) % awayTitles.length;
    }, 2000);
  };

  const stopChangingTitle = () => {
    clearInterval(titleInterval);
    document.title = fullTitle;
  };

  return (
    <Router>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="title" content="Pipin - Full Stack Developer 🧑‍💻" />
        <meta name="description" content="Full stack developer from India specializing in affordable, high-quality projects using leading technologies. Experienced in networking, hardware, and works with all major distros." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Full Stack Developer, Developer India, Affordable Developer, Networking, Hardware, Linux Distro, Leading Stacks, Pipin Portfolio" />
        <meta name="language" content="English" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="author" content="Pipin" />
        <meta property="og:image" content={pipinLogo} />
        <meta property="og:url" content="https://pipin.dev" />
        <meta name="msapplication-TileColor" content="#a428c5" />
        <meta name="theme-color" content="#a428c5" />
        <meta name="twitter:card" content={pipinLogo} />
        <link rel="icon" href={pipinLogo} />
      </Helmet>

      {loading ? (
        <Preloader />
      ) : (
        <div className="bg-black text-primary">
          <Header />
          <main className="mt-16">
            <Hero />
            <Projects />
            <Experience />
            <Contact />
            <ScrollToTopButton />
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
};

export default App;
