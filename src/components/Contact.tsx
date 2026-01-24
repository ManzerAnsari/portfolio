import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 bg-dark-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-accent-primary mb-6 font-display tracking-tighter">
            Let's Connect
          </h2>
          <p className="text-accent-secondary text-xl max-w-2xl mx-auto font-light">
            I'm always interested in hearing about new projects and opportunities. Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-dark-card/60 backdrop-blur-xl border border-dark-border p-10 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-accent-primary mb-6 font-display">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-dark-card/40 border border-dark-border rounded-xl text-accent-primary placeholder-accent-muted focus:outline-none focus:border-accent-purple/50 transition-all"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-dark-card/40 border border-dark-border rounded-xl text-accent-primary placeholder-accent-muted focus:outline-none focus:border-accent-purple/50 transition-all"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-card/40 border border-dark-border rounded-xl text-accent-primary placeholder-accent-muted focus:outline-none focus:border-accent-purple/50 transition-all resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-cyan text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-purple/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-dark-card/60 backdrop-blur-xl border border-dark-border p-8 rounded-3xl hover:border-accent-cyan/30 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent-cyan/10 rounded-xl border border-accent-cyan/20">
                  <Mail className="w-6 h-6 text-accent-cyan" />
                </div>
                <div>
                  <h4 className="text-accent-primary font-semibold">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-accent-secondary hover:text-accent-cyan transition-colors">
                    your.email@example.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-dark-card/60 backdrop-blur-xl border border-dark-border p-8 rounded-3xl hover:border-accent-purple/30 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent-purple/10 rounded-xl border border-accent-purple/20">
                  <MapPin className="w-6 h-6 text-accent-purple" />
                </div>
                <div>
                  <h4 className="text-accent-primary font-semibold">Location</h4>
                  <p className="text-accent-secondary">Available for remote work worldwide</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-card/60 backdrop-blur-xl border border-dark-border p-8 rounded-3xl">
              <h4 className="text-accent-primary font-semibold mb-6">Social Links</h4>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-dark-card/40 border border-dark-border rounded-xl text-accent-secondary hover:text-accent-primary hover:bg-accent-purple/10 hover:border-accent-purple/50 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-dark-card/40 border border-dark-border rounded-xl text-accent-secondary hover:text-accent-primary hover:bg-accent-blue/10 hover:border-accent-blue/50 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:your.email@example.com" 
                  className="p-3 bg-dark-card/40 border border-dark-border rounded-xl text-accent-secondary hover:text-accent-primary hover:bg-accent-cyan/10 hover:border-accent-cyan/50 transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;