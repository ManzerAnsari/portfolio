import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Plane, Calendar } from 'lucide-react';

const projects = [
  {
    title: "Premium Medical Fitness Center",
    description: "A healthcare platform providing rapid medical test results within 30 minutes, featuring VIP service and integration with Golden Visa Partner program.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Aircraft Route Optimization",
    description: "Advanced system for calculating optimal aircraft routes while maintaining minimum separation requirements for safety.",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Project Management Suite",
    description: "Comprehensive HRMS and CRM solution with integrated calendar and meeting scheduling capabilities.",
    icon: Calendar,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const Projects = () => {
  const gradientColors = [
    'from-accent-cyan/10 to-transparent',
    'from-accent-purple/10 to-transparent',
    'from-accent-blue/10 to-transparent',
  ];

  const iconColors = [
    'text-accent-cyan',
    'text-accent-purple',
    'text-accent-blue',
  ];

  const iconBgColors = [
    'bg-accent-cyan/5 border-accent-cyan/20',
    'bg-accent-purple/5 border-accent-purple/20',
    'bg-accent-blue/5 border-accent-blue/20',
  ];

  const hoverBorderColors = [
    'hover:border-accent-cyan/40 hover:shadow-lg hover:shadow-accent-cyan/10',
    'hover:border-accent-purple/40 hover:shadow-lg hover:shadow-accent-purple/10',
    'hover:border-accent-blue/40 hover:shadow-lg hover:shadow-accent-blue/10',
  ];

  const titleHoverColors = [
    'group-hover:text-accent-cyan',
    'group-hover:text-accent-purple',
    'group-hover:text-accent-blue',
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-surface/50 via-transparent to-dark-surface/30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-4 font-display"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-accent-secondary mb-16 text-lg"
        >
          Crafted with precision and passion
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative bg-gradient-to-br from-dark-card/60 to-dark-card/40 backdrop-blur-xl border border-dark-border rounded-2xl overflow-hidden transition-all duration-500 ${hoverBorderColors[index]} hover:shadow-2xl`}
            >
              {/* Subtle gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`}></div>
              
              {/* Image container */}
              <div className="h-52 overflow-hidden relative">
                {/* Soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 via-dark-card/20 to-transparent z-10"></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors[index]} opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-10`}></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-7 relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 ${iconBgColors[index]} border rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <project.icon className={`w-6 h-6 ${iconColors[index]} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <h3 className={`text-xl font-semibold text-accent-primary font-display transition-colors duration-300 ${titleHoverColors[index]} leading-tight`}>
                    {project.title}
                  </h3>
                </div>
                <p className="text-accent-secondary leading-relaxed text-sm md:text-base group-hover:text-accent-primary transition-colors duration-300">
                  {project.description}
                </p>
              </div>

              {/* Subtle shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;