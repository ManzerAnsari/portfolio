import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-8 font-display">Let's Connect</h2>
          <p className="text-gray-400 mb-12 text-lg">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          
          <div className="flex justify-center gap-8 flex-wrap">
            <a 
              href="mailto:your.email@example.com" 
              className="flex items-center px-6 py-3 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/10 hover:border-accent-cyan/50 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:text-accent-cyan transition-colors" />
              <span>Email</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center px-6 py-3 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/10 hover:border-accent-purple/50 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 mr-2 group-hover:text-accent-purple transition-colors" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center px-6 py-3 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 mr-2 group-hover:text-white transition-colors" />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;