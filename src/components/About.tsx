import { motion } from 'framer-motion';
import { Code2, Sparkles, Target, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '2+', label: 'Years Experience', icon: Award },
    { value: '50+', label: 'Projects Completed', icon: Target },
    { value: '100%', label: 'Client Satisfaction', icon: Sparkles },
  ];

  return (
    <section id="about" className="py-32 bg-dark-bg relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-accent-primary mb-6 font-display tracking-tighter">
            About Me
          </h2>
          <p className="text-accent-secondary text-xl max-w-3xl mx-auto font-light">
            Crafting digital experiences with passion and precision
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-dark-card/60 backdrop-blur-xl border border-dark-border p-10 rounded-3xl hover:border-accent-purple/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 rounded-2xl border border-accent-purple/30">
                <Code2 className="w-8 h-8 text-accent-cyan" />
              </div>
              <h3 className="text-3xl font-bold text-accent-primary font-display">Developer & Designer</h3>
            </div>
            <p className="text-accent-secondary text-lg leading-relaxed font-light mb-6">
              I'm a <span className="text-accent-cyan font-medium">Frontend Developer</span> with a passion for building beautiful, functional, and scalable web applications. I specialize in the React ecosystem and modern web technologies.
            </p>
            <p className="text-accent-secondary text-lg leading-relaxed font-light">
              My journey in web development began with a curiosity for how things work on the internet. Today, I leverage that curiosity to solve complex problems and deliver high-quality software solutions.
            </p>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent-purple/10 to-accent-cyan/10 backdrop-blur-xl border border-accent-purple/20 p-10 rounded-3xl hover:border-accent-purple/40 transition-all duration-300"
          >
            <div className="space-y-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-2 bg-accent-purple/10 rounded-xl border border-accent-purple/20">
                        <Icon className="w-5 h-5 text-accent-purple" />
                      </div>
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent font-display mb-1">
                      {stat.value}
                    </div>
                    <div className="text-accent-muted text-sm uppercase tracking-widest">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Achievements Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-dark-card/60 backdrop-blur-xl border border-dark-border p-10 rounded-3xl hover:border-accent-cyan/30 transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-accent-primary mb-8 font-display">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Developing premium healthcare platforms",
              "Building aviation route optimization systems",
              "Creating comprehensive project management solutions",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-dark-card/40 border border-dark-border hover:border-accent-cyan/30 transition-all">
                <div className="w-2 h-2 bg-accent-cyan rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-accent-secondary font-light">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;