import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import About from './About';
import Footer from './Footer';

const App = () => {
  return (
    <div id="app">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Footer />
    </div>
  );
};

export default App;
