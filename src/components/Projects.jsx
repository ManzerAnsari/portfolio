import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Folder, FileCode, ChevronRight, ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    id: "medical-center",
    title: "Premium Medical Fitness Center",
    description: "Healthcare platform providing rapid medical test results within 30 minutes with VIP service and Golden Visa Partner integration",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    status: "deployed",
    lines: 12847,
    year: "2024",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "aircraft-routing",
    title: "Aircraft Route Optimization",
    description: "Advanced system for calculating optimal aircraft routes while maintaining minimum separation requirements for maximum safety",
    tech: ["TypeScript", "GraphQL", "PostgreSQL", "Redis"],
    status: "active",
    lines: 8932,
    year: "2024",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "project-mgmt",
    title: "Project Management Suite",
    description: "Comprehensive HRMS and CRM solution with integrated calendar and meeting scheduling capabilities for enterprise teams",
    tech: ["Next.js", "Express", "Redis", "AWS"],
    status: "deployed",
    lines: 15203,
    year: "2023",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description: "Modern shopping experience with AI-powered product recommendations and seamless checkout process",
    tech: ["React", "Stripe", "AWS", "Docker"],
    status: "active",
    lines: 10456,
    year: "2024",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description: "Interactive portfolio showcasing projects with modern animations, clean design, and optimized performance",
    tech: ["Framer", "Tailwind", "Vercel", "React"],
    status: "deployed",
    lines: 6234,
    year: "2024",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const TypingText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let timeout;
    let currentIndex = 0;
    
    const typeNextChar = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        currentIndex++;
        timeout = setTimeout(typeNextChar, 20);
      }
    };
    
    timeout = setTimeout(typeNextChar, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);
  
  return <span>{displayText}</span>;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const scrollRef = React.useRef(null);
  const [terminalLines] = useState([
    { text: "$ initializing project_explorer.sh", delay: 0 },
    { text: "> connecting to database...", delay: 400 },
    { text: "> [SUCCESS] 5 projects loaded", delay: 800 },
    { text: "> ready for exploration →", delay: 1200 }
  ]);

  const scrollToProject = (projectId) => {
    const element = document.getElementById(`project-${projectId}`);
    if (element && scrollRef.current) {
      const container = scrollRef.current;
      const elementLeft = element.offsetLeft;
      const elementWidth = element.offsetWidth;
      const containerWidth = container.offsetWidth;
      const scrollPosition = elementLeft - (containerWidth / 2) + (elementWidth / 2);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    scrollToProject(project.id);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-4 md:px-6 font-mono relative overflow-hidden">
      {/* Background effects matching your theme */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      {/* Scanlines effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 92, 246, 0.5) 2px, rgba(139, 92, 246, 0.5) 4px)',
        }}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-xl">
            Explore my work through the terminal
          </p>
        </motion.div>

        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-900/80 backdrop-blur-xl border-2 border-purple-500/30 rounded-t-xl p-4 shadow-2xl shadow-purple-500/10"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          {/* Mobile: Horizontal Carousel + Selected Project */}
          <div className="lg:hidden">
            <div className="flex items-center gap-2 text-purple-400 mb-4 pb-2 border-b border-purple-500/30">
              <Folder className="w-4 h-4" />
              <span className="text-sm font-semibold">PROJECTS_DIR/</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400 text-sm">
              <Terminal className="w-4 h-4" />
              <span>~/portfolio/projects</span>
            </div>
            <div className="space-y-1 mb-2">
            {terminalLines.map((line, i) => (
              <div key={i} className="text-cyan-400 text-sm flex items-center gap-2">
                <TypingText text={line.text} delay={line.delay} />
                {i === terminalLines.length - 1 && (
                  <span className="animate-pulse text-purple-400">▊</span>
                )}
              </div>
            ))}
          </div>

            {/* Horizontal scrolling project titles */}
            <div 
              ref={scrollRef}
              className="overflow-x-auto snap-x snap-mandatory scrollbar-hide mb-6 -mx-4 px-4 scroll-smooth"
            >
              <div className="flex gap-3 pb-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    id={`project-${project.id}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => handleProjectClick(project)}
                    className={`snap-center flex-shrink-0 w-64 p-4 border-2 cursor-pointer transition-all duration-300 ${
                      selectedProject?.id === project.id
                        ? 'border-purple-500 bg-purple-500/20 shadow-lg shadow-purple-500/30 scale-105'
                        : 'border-slate-700 bg-slate-800/50 hover:border-purple-500/30'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <FileCode className={`w-4 h-4 ${
                        selectedProject?.id === project.id ? 'text-cyan-400' : 'text-slate-600'
                      }`} />
                      <span className={`text-xs font-bold ${
                        selectedProject?.id === project.id ? 'text-cyan-400' : 'text-slate-400'
                      }`}>
                        {project.id}.js
                      </span>
                      <span className="ml-auto text-xs text-slate-500">{project.year}</span>
                    </div>
                    
                    <h4 className={`text-sm font-semibold mb-2 line-clamp-2 ${
                      selectedProject?.id === project.id ? 'text-purple-300' : 'text-slate-400'
                    }`}>
                      {project.title}
                    </h4>
                    
                    <span className={`px-2 py-0.5 text-xs font-semibold inline-block ${
                      project.status === 'deployed' 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50' 
                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/50'
                    }`}>
                      {project.status.toUpperCase()}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Selected Project Details */}
            {selectedProject && (
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="border-2 border-purple-500/20 bg-slate-800/30 backdrop-blur-sm overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-3 border-b border-purple-500/20">
                  <Code className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-purple-400 font-semibold">PROJECT_VIEWER</span>
                  <span className="ml-auto text-xs text-slate-500">/{selectedProject.id}</span>
                </div>

                <div className="p-4 space-y-4">
                  {/* Project Image */}
                  <div className="relative overflow-hidden border-2 border-purple-500/30">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-purple-500/10"></div>
                    
                    {/* Tech badges overlay */}
                    <div className="absolute bottom-3 left-3 right-3 flex gap-2 flex-wrap">
                      {selectedProject.tech.slice(0, 3).map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 bg-slate-900/80 backdrop-blur-sm border border-purple-500/30 text-purple-300 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3">
                    <div>
                      <div className="text-slate-500 text-xs mb-1 font-mono">// PROJECT_NAME</div>
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                        {selectedProject.title}
                      </h3>
                    </div>

                    <div>
                      <div className="text-slate-500 text-xs mb-1 font-mono">// DESCRIPTION</div>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <div className="text-slate-500 text-xs mb-2 font-mono">// TECH_STACK</div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-purple-500/20 grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <div className="text-slate-500 mb-1">Status</div>
                        <div className={`font-semibold ${
                          selectedProject.status === 'deployed' ? 'text-emerald-400' : 'text-amber-400'
                        }`}>
                          {selectedProject.status.toUpperCase()}
                        </div>
                      </div>
                      <div>
                        <div className="text-slate-500 mb-1">Lines of Code</div>
                        <div className="font-semibold text-cyan-400">
                          {selectedProject.lines.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-2.5 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Live Project</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          
          
        </motion.div>

        {/* Terminal Body */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="bg-slate-900/60 backdrop-blur-xl border-2 border-t-0 border-purple-500/30 rounded-b-xl p-6 shadow-2xl"
        >
          {/* Desktop: Two column layout */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-6">
            {/* Left: Project List */}
            <div className="lg:col-span-2 space-y-2">
              <div className="flex items-center gap-2 text-purple-400 mb-4 pb-2 border-b border-purple-500/30">
                <Folder className="w-4 h-4" />
                <span className="text-sm font-semibold">PROJECTS_DIR/</span>
              </div>
              
              <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.7 + index * 0.1 }}
                    onClick={() => setSelectedProject(project)}
                    className={`p-4 border-2 cursor-pointer transition-all group ${
                      selectedProject?.id === project.id
                        ? 'border-purple-500 bg-purple-500/10 shadow-lg shadow-purple-500/20'
                        : 'border-slate-700 hover:border-purple-500/50 hover:bg-purple-500/5'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <ChevronRight className={`w-4 h-4 transition-transform ${
                          selectedProject?.id === project.id ? 'text-purple-400 rotate-90' : 'text-slate-600'
                        }`} />
                        <FileCode className={`w-4 h-4 ${
                          selectedProject?.id === project.id ? 'text-cyan-400' : 'text-slate-600'
                        }`} />
                      </div>
                      <span className="text-slate-500 text-xs">{project.year}</span>
                    </div>
                    
                    <div className={`text-sm font-bold mb-2 transition-colors ${
                      selectedProject?.id === project.id ? 'text-cyan-400' : 'text-slate-400 group-hover:text-purple-400'
                    }`}>
                      {project.id}.js
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs flex-wrap">
                      <span className={`px-2 py-0.5 font-semibold ${
                        project.status === 'deployed' 
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50' 
                          : 'bg-amber-500/20 text-amber-400 border border-amber-500/50'
                      }`}>
                        {project.status.toUpperCase()}
                      </span>
                      <span className="text-slate-600">
                        {project.lines.toLocaleString()} LOC
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Project Details - Desktop */}
            <div className="lg:col-span-3 border-2 border-purple-500/20 bg-slate-800/30 backdrop-blur-sm overflow-hidden">
              {selectedProject && (
                <motion.div
                  key={selectedProject.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="h-full"
                >
                  {/* Header */}
                  <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-3 border-b border-purple-500/20">
                    <Code className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-purple-400 font-semibold">PROJECT_VIEWER</span>
                    <span className="ml-auto text-xs text-slate-500">/{selectedProject.id}</span>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* Project Image */}
                    <div className="relative overflow-hidden border-2 border-purple-500/30 group">
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                      <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors"></div>
                      
                      {/* Overlay stats */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <div className="flex gap-2">
                          {selectedProject.tech.slice(0, 3).map((tech, i) => (
                            <span 
                              key={i}
                              className="px-2 py-1 bg-slate-900/80 backdrop-blur-sm border border-purple-500/30 text-purple-300 text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-4">
                      <div>
                        <div className="text-slate-500 text-xs mb-1 font-mono">// PROJECT_NAME</div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                          {selectedProject.title}
                        </h3>
                      </div>

                      <div>
                        <div className="text-slate-500 text-xs mb-1 font-mono">// DESCRIPTION</div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div>
                        <div className="text-slate-500 text-xs mb-2 font-mono">// TECH_STACK</div>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tech.map((tech, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm hover:bg-purple-500/20 hover:border-purple-500/50 transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-purple-500/20">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-slate-500 text-xs mb-1">Status</div>
                            <div className={`font-semibold ${
                              selectedProject.status === 'deployed' ? 'text-emerald-400' : 'text-amber-400'
                            }`}>
                              {selectedProject.status.toUpperCase()}
                            </div>
                          </div>
                          <div>
                            <div className="text-slate-500 text-xs mb-1">Lines of Code</div>
                            <div className="font-semibold text-cyan-400">
                              {selectedProject.lines.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Live Project</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Bottom Terminal Stats */}
          <div className="mt-6 pt-4 border-t border-purple-500/20 flex flex-wrap justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="text-purple-400">◉</span>
              <span>TOTAL: {projects.length} projects</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">◉</span>
              <span>STATUS: operational</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">◉</span>
              <span>UPTIME: 99.9%</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(71, 85, 105, 0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.5);
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;