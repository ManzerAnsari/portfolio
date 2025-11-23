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
  return (
    <section id="projects" className="py-20 bg-dark-bg relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white text-center mb-16 font-display"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, rotateX: 5, rotateY: 5, scale: 1.02 }}
              className="group bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden hover:border-accent-purple/50 transition-all duration-300 transform-gpu perspective-1000"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-accent-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-accent-purple/10 rounded-lg mr-3">
                    <project.icon className="w-6 h-6 text-accent-purple" />
                  </div>
                  <h3 className="text-xl font-semibold text-white font-display group-hover:text-accent-purple transition-colors">{project.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;