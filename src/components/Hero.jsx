import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Scene from './Scene';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Scene />
        </Canvas>
      </div>

      {/* Gradient Overlay for Contrast */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none" />

      {/* Overlay Content */}
      <div className="relative z-10 container mx-auto px-6 text-left pointer-events-none">
        <div className="animate-float">
          <div className="inline-block px-4 py-1.5 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="text-accent-secondary text-sm font-medium tracking-widest uppercase">
              Available for work
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-bold text-white mb-8 font-display tracking-tighter leading-none">
            MANZER<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">ANSARI</span>
          </h1>
          <p className="text-xl md:text-2xl text-accent-secondary mb-10 max-w-2xl font-light leading-relaxed">
            Crafting digital experiences with code and passion.
            <br />
            Specialized in MERN Stack Development.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-start gap-4 animate-fade-in-up pointer-events-auto">
          <a
            href="#projects"
            className="group relative px-8 py-3 bg-white text-dark-bg font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
          >
            View Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-12 flex items-center justify-start gap-6 text-gray-400 pointer-events-auto">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors transform hover:scale-110 duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors transform hover:scale-110 duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:hello@example.com" className="hover:text-white transition-colors transform hover:scale-110 duration-300">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      {/* Gradient Overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent z-10" />
    </section>
  );
};

export default Hero;
