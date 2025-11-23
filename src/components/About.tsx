import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-dark-card/40 backdrop-blur-md border border-white/5 p-10 rounded-3xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tighter">
              About Me
            </h2>
            <p className="text-accent-secondary text-xl leading-relaxed font-light">
              I'm a <span className="text-white font-medium">Frontend Developer</span> with a passion for building beautiful, functional, and scalable web applications. I specialize in the React ecosystem and modern web technologies.
            </p>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-md border border-white/5 p-10 rounded-3xl flex flex-col justify-center items-center text-center"
          >
            <span className="text-6xl font-bold text-white font-display mb-2">2+</span>
            <span className="text-accent-secondary text-sm uppercase tracking-widest">Years Experience</span>
          </motion.div>

          {/* Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 bg-dark-card/40 backdrop-blur-md border border-white/5 p-10 rounded-3xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-accent-secondary text-lg font-light">
                <p>
                  My journey in web development began with a curiosity for how things work on the internet. Today, I leverage that curiosity to solve complex problems and deliver high-quality software solutions.
                </p>
                <ul className="space-y-3">
                  {[
                    "Developing premium healthcare platforms",
                    "Building aviation route optimization systems",
                    "Creating comprehensive project management solutions",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-full min-h-[200px] flex items-center justify-center overflow-hidden rounded-2xl bg-white/5">
                 <Code2 size={120} className="text-white/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;