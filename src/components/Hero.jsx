import React from "react";
import { Canvas } from "@react-three/fiber";
import { Icon } from "@iconify/react";
import Scene from "./Scene";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Scene />
        </Canvas>
      </div>

      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-accent-cyan/5 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-dark-bg/60 via-transparent to-dark-bg/60 pointer-events-none" />
      
      {/* Radial Gradient Soft Lights */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Center soft light */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(103, 232, 249, 0.2) 0%, rgba(167, 139, 250, 0.1) 50%, transparent 100%)'
          }}
        />
        {/* Top left soft light */}
        <div 
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%)'
          }}
        />
        {/* Bottom right soft light */}
        <div 
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(103, 232, 249, 0.15) 0%, transparent 70%)'
          }}
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-left pointer-events-none py-20 md:py-0">
        <div className="max-w-3xl animate-float">
          <div className="inline-block px-4 py-1.5 mb-4 md:mb-6 border border-accent-purple/20 rounded-full bg-gradient-to-r from-accent-purple/10 to-accent-cyan/10 backdrop-blur-md">
            <span className="text-accent-muted text-xs md:text-sm font-medium tracking-widest uppercase">
              Available for work
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-accent-primary mb-6 md:mb-8 font-display tracking-tighter leading-none">
            MANZER
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-pink">
              ANSARI
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-accent-secondary mb-8 md:mb-10 max-w-2xl font-light leading-relaxed">
            Crafting digital experiences with code and passion.
            <br />
            Specialized in MERN Stack Development.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3 md:gap-4 animate-fade-in-up pointer-events-auto">
          <a
            href="#projects"
            className="group relative px-6 md:px-8 py-2.5 md:py-3 bg-slate-600 text-white font-semibold rounded-full hover:bg-slate-500 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            View Work
            <Icon icon="mdi:arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-6 md:px-8 py-2.5 md:py-3 border border-accent-purple/30 text-accent-primary font-semibold rounded-full hover:bg-accent-purple/10 hover:border-accent-purple/50 transition-all duration-300 backdrop-blur-md w-full sm:w-auto text-center"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-8 md:mt-12 flex items-center justify-start gap-4 md:gap-6 text-accent-muted pointer-events-auto">
          <a
            href="https://github.com/ManzerAnsari"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-cyan transition-colors transform hover:scale-110 duration-300"
          >
            <Icon icon="mdi:github" className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/manzer-ansari-831881263"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-blue transition-colors transform hover:scale-110 duration-300"
          >
            <Icon icon="mdi:linkedin" className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="mailto:manzeransari2@gmail.com"
            className="hover:text-accent-pink transition-colors transform hover:scale-110 duration-300"
          >
            <Icon icon="mdi:email" className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="https://wa.me/917262027692?text=Hello%20Manzer!%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors transform hover:scale-110 duration-300"
          >
            <Icon icon="mdi:whatsapp" className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>

      {/* Gradient Overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
