import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header.js';

const App = () => {
  return (
    <Router>
      <Helmet>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website." />
      </Helmet>
      <div className="bg-black text-primary">
        <Header />
        <main className="mt-16">
          <Hero />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
