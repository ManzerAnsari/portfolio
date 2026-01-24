import React from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioLoader from './components/PortfoiloLoader';

function App() {
  return (
    <div className="bg-dark-bg min-h-screen text-white relative">
      <PortfolioLoader />
      {/* Grain Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-10 mix-blend-overlay">
        <div className="absolute inset-0 bg-grain animate-grain"></div>
      </div>

      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;