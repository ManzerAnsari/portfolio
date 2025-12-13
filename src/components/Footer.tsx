import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    quick: [
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Experience', href: '#experience' },
    ],
    sections: [
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Blog', href: '#blog' },
      { name: 'Contact', href: '#contact' },
    ]
  };

  return (
    <footer className="py-16 bg-dark-bg border-t border-dark-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-3xl font-bold text-accent-primary mb-4 font-display tracking-tighter">
              MANZER ANSARI
            </h3>
            <p className="text-accent-secondary mb-6 max-w-md font-light">
              Frontend Developer crafting beautiful digital experiences with modern web technologies.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-card/60 border border-dark-border rounded-xl text-accent-secondary hover:text-accent-primary hover:bg-accent-blue/10 hover:border-accent-blue/50 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-card/60 border border-dark-border rounded-xl text-accent-secondary hover:text-accent-primary hover:bg-accent-purple/10 hover:border-accent-purple/50 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-3 bg-dark-card/60 border border-dark-border rounded-xl text-accent-secondary hover:text-accent-primary hover:bg-accent-cyan/10 hover:border-accent-cyan/50 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-accent-primary font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {links.quick.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-accent-secondary hover:text-accent-cyan transition-colors font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-accent-primary font-semibold mb-4">Sections</h4>
            <ul className="space-y-3">
              {links.sections.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-accent-secondary hover:text-accent-cyan transition-colors font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-accent-muted text-sm font-light">
              © {currentYear} Manzer Ansari. All rights reserved.
            </p>
            <p className="text-accent-muted text-sm font-light flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-accent-pink" /> using React & Three.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

