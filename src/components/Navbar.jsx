import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      setScrolled(currentScroll > 50);
      
      if (scrollHeight > 0) {
        setScrollProgress(currentScroll / scrollHeight);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-6 left-[5%] md:left-1/2 md:-translate-x-1/2 z-50 w-[90%] max-w-2xl rounded-full transition-all duration-300 ${
        scrolled
          ? "border border-white/20 shadow-lg py-3 px-6"
          : "bg-transparent py-4 px-6"
      }`}
      style={{
        background: scrolled 
          ? `linear-gradient(to right, rgba(255, 255, 255, 0.95) ${scrollProgress * 100}%, rgba(255, 255, 255, 0.5) ${scrollProgress * 100}%)`
          : 'transparent'
      }}
    >
      {/* Glassmorphism backdrop for the unfilled part */}
      {scrolled && (
        <div className="absolute inset-0 -z-10" />
      )}

      <div className="flex items-center justify-between relative z-10">
        <a href="#" className={`text-2xl font-bold font-display tracking-tighter transition-colors ${scrolled ? 'text-dark-bg' : 'text-accent-primary'}`}>
          MA<span className="text-accent-purple">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors relative group ${scrolled ? 'text-dark-bg/70 hover:text-accent-purple' : 'text-accent-secondary hover:text-accent-primary'}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-purple transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${
              scrolled 
                ? "bg-slate-600 text-white hover:bg-slate-500" 
                : "bg-slate-600 text-white hover:bg-slate-500"
            }`}
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <Icon icon="mdi:close" className="w-6 h-6" /> : <Icon icon="mdi:menu" className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-full left-0 right-0 mt-4 p-6 bg-dark-card/95 backdrop-blur-xl border border-dark-border rounded-2xl shadow-2xl md:hidden z-50"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-accent-secondary hover:text-accent-primary font-medium transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="px-5 py-3 bg-slate-600 text-white rounded-full text-sm font-bold hover:bg-slate-500 transition-colors text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;