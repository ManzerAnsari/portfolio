import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const About = () => {
  const highlights = [
    { icon: 'mdi:shield-lock', title: 'Auth & Security', desc: 'Access + refresh token flows, protected routes' },
    { icon: 'mdi:lightning-bolt', title: 'State & Data', desc: 'Redux Toolkit, TanStack Query' },
    { icon: 'mdi:cellphone-link', title: 'Full Coverage', desc: 'Web design & mobile applications' },
    { icon: 'mdi:web-socket', title: 'Real-time', desc: 'Socket.io & live features' },
  ];

  return (
    <section id="about" className="py-28 bg-dark-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-accent-purple/20 to-accent-cyan/20 border border-accent-purple/30 rounded-full text-accent-primary text-sm font-semibold uppercase tracking-wider">
              About Me
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold text-accent-primary mb-6 font-display">
            Full-Stack Developer
          </h2>
          <p className="text-accent-secondary text-lg md:text-xl max-w-3xl mx-auto font-light">
            Let me tell you about me—3 years of MERN stack experience, end to end
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-3xl font-bold text-accent-primary font-display">
                  MERN Stack Specialist
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full"></div>
              </div>
              
              <p className="text-accent-secondary leading-relaxed text-lg">
                I'm a MERN stack developer with 3 years of experience. I build everything from protected routes and token-based auth (access + refresh) to real-time apps with sockets, and modern frontends with Redux Toolkit & TanStack Query.
              </p>
              
              <p className="text-accent-secondary leading-relaxed text-lg">
                I work across the full stack—backend APIs, responsive design, and mobile applications. From architecture to UI, I cover almost everything needed for solid frontend and backend delivery.
              </p>
            </div>

            {/* Right Content - Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-dark-card/60 to-dark-card/30 border border-dark-border p-6 rounded-2xl hover:border-accent-purple/40 transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="p-3 bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 rounded-lg flex-shrink-0"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <Icon icon={item.icon} className="w-6 h-6 text-accent-purple" />
                      </motion.div>
                      <div>
                        <h4 className="text-accent-primary font-semibold mb-1">
                          {item.title}
                        </h4>
                        <p className="text-accent-muted text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;