import React from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-dark-bg min-h-screen text-white relative">
      {/* Grain Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-20 mix-blend-overlay">
        <div className="absolute inset-0 bg-grain animate-grain"></div>
      </div>

      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;