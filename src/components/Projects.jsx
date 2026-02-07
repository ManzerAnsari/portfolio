import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const projects = [
  {
    id: "aircraft-routing",
    title: "Aircraft Route Optimiser",
    description:
      "Web-based route optimiser for Dubai International Airport. Built with React and Node.js, it computes shortest aircraft routes while maintaining minimum separation using live location data. Real-time tracking via Socket.io. Features: remaining distance, gap between aircraft, current route, ETA vs calculated arrival, position swap, and 3D visualization with Cesium & Resium. Separation rules enforced via configurable separation table.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Google Maps", "Cesium", "Resium"],
    status: "active",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    hideLocAndButton: true,
  },
  {
    id: "hrms-user-mgmt",
    title: "HRMS & User Management Platform",
    description:
      "Enterprise HR and user management system built with React.js, React Native, and .NET. Comprehensive features include user management and profiles, leave management, timesheet tracking, punch in/out attendance, holiday calendar, role-based access control, document management section, and payroll processing. Cross-platform with web and mobile support.",
    tech: ["React", "React Native", ".NET"],
    status: "active",
    image:
      "https://images.unsplash.com/photo-1454165804606-3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    hideLocAndButton: true,
  },
  {
    id: "medconnect",
    title: "MedConnect",
    description:
      "Platform connecting patients with nearby pharmacies via mobile app. Users can search medicines, check availability, place online orders, and pay securely with Cinet Pay. Features include stock control for pharmacies, location-based search with Google Maps, and a web-based admin panel for management. Firebase for real-time data.",
    tech: ["React", "React Native", "Node.js", "Express", "MongoDB", "Firebase", "Google Maps", "Cinet Pay"],
    status: "active",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    hideLocAndButton: true,
  },
  {
    id: "shop-master",
    title: "Shop Master",
    description:
      "Full-stack shop analytics and point-of-sale application. Dashboard with stats, sales trends (Recharts), category breakdown, low-stock alerts, and AI insights. Inventory with barcode/QR scanning, product management. Sales module with multi-item checkout and invoice download. Reports with date range filters and charts. Smart Calendar: historical sales view, year-over-year comparison, festival-based predictions, product trends across years. JWT auth (access + refresh), protected routes, user management. Real-time updates via Socket.IO. Built with React (Vite), Node.js, Express, MongoDB.",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Redux", "Socket.IO", "Recharts", "Ant Design", "Tailwind"],
    status: "active",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "library-mgmt",
    title: "Library Management System",
    description:
      "Full-stack library management system with role-based access (Student, Librarian, Admin). Students browse the catalog and view borrowings; librarians and admins manage books, issue/return, and (admin only) users. Features: JWT auth with access + refresh tokens, multi-step registration with OTP, forgot/reset password, profile with library card export. Paginated catalog, search, issue/return workflow. Validation with Zod, rate limiting, security headers. Built with React (Vite), Node.js, Express, MongoDB.",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Zustand", "Ant Design", "Tailwind", "Zod"],
    status: "active",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "https://library-management-system-client-xu5m.onrender.com",
  },
];

const TypingText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");

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
    { text: "> ready for exploration →", delay: 1200 },
  ]);

  const scrollToProject = (projectId) => {
    const element = document.getElementById(`project-${projectId}`);
    if (element && scrollRef.current) {
      const container = scrollRef.current;
      const elementLeft = element.offsetLeft;
      const elementWidth = element.offsetWidth;
      const containerWidth = container.offsetWidth;
      const scrollPosition =
        elementLeft - containerWidth / 2 + elementWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    scrollToProject(project.id);
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg py-28 px-4 md:px-6 font-mono relative overflow-hidden"
    >
      {/* Background effects matching your theme */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"></div>

      {/* Scanlines effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(167, 139, 250, 0.5) 2px, rgba(167, 139, 250, 0.5) 4px)",
          }}
        ></div>
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(167, 139, 250, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(167, 139, 250, 0.3) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan bg-clip-text text-transparent mb-4 font-display">
            Featured Projects
          </h2>
          <p className="text-accent-secondary text-xl font-light">
            Explore my work through the terminal
          </p>
        </motion.div>

        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-dark-card/80 backdrop-blur-xl border-2 border-accent-purple/30 rounded-t-xl p-4 shadow-2xl shadow-accent-purple/10"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="lg:border-none border-b border-accent-purple/30 pb-2 mb-4">
            <div className="flex items-center gap-2 text-accent-purple text-sm">
              <Icon icon="mdi:console" className="w-4 h-4" />
              <span>~/portfolio/projects</span>
            </div>
            <div className="space-y-1">
              {terminalLines.map((line, i) => (
                <div
                  key={i}
                  className="text-accent-cyan text-sm flex items-center gap-2"
                >
                  <TypingText text={line.text} delay={line.delay} />
                  {i === terminalLines.length - 1 && (
                    <span className="animate-pulse text-accent-purple">▊</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Mobile: Horizontal Carousel + Selected Project */}
          <div className="lg:hidden">
            <div className="flex items-center gap-2 text-accent-purple mb-4 pb-2 border-b border-accent-purple/30">
              <Icon icon="mdi:folder" className="w-4 h-4" />
              <span className="text-sm font-semibold">PROJECTS_DIR/</span>
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
                        ? "border-accent-purple bg-accent-purple/20 shadow-lg shadow-accent-purple/30 scale-105"
                        : "border-dark-border bg-dark-card/50 hover:border-accent-purple/30"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon
                        icon="mdi:file-code"
                        className={`w-4 h-4 ${
                          selectedProject?.id === project.id
                            ? "text-accent-cyan"
                            : "text-accent-muted"
                        }`}
                      />
                      <span
                        className={`text-xs font-bold ${
                          selectedProject?.id === project.id
                            ? "text-accent-cyan"
                            : "text-accent-secondary"
                        }`}
                      >
                        {project.id}.js
                      </span>
                    </div>

                    <h4
                      className={`text-sm font-semibold mb-2 line-clamp-2 ${
                        selectedProject?.id === project.id
                          ? "text-accent-purple"
                          : "text-accent-secondary"
                      }`}
                    >
                      {project.title}
                    </h4>

                    {project.status && (
                      <span
                        className={`px-2 py-0.5 text-xs font-semibold inline-block ${
                          project.status === "deployed"
                            ? "bg-accent-mint/20 text-accent-mint border border-accent-mint/50"
                            : "bg-accent-amber/20 text-accent-amber border border-accent-amber/50"
                        }`}
                      >
                        {project.status.toUpperCase()}
                      </span>
                    )}
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
                className="border-2 border-accent-purple/20 bg-dark-card/30 backdrop-blur-sm overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center gap-2 bg-dark-card/50 px-4 py-3 border-b border-accent-purple/20">
                  <Icon
                    icon="mdi:code-tags"
                    className="w-4 h-4 text-accent-purple"
                  />
                  <span className="text-sm text-accent-purple font-semibold">
                    PROJECT_VIEWER
                  </span>
                  <span className="ml-auto text-xs text-accent-muted">
                    /{selectedProject.id}
                  </span>
                </div>

                <div className="p-4 space-y-4">
                  {/* Project Image */}
                  <div className="relative overflow-hidden border-2 border-accent-purple/30">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-accent-purple/10"></div>

                    {/* Tech badges overlay */}
                    <div className="absolute bottom-3 left-3 right-3 flex gap-2 flex-wrap">
                      {selectedProject.tech.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-dark-card/80 backdrop-blur-sm border border-accent-purple/30 text-accent-purple text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3">
                    <div>
                      <div className="text-accent-muted text-xs mb-1 font-mono">
                        // PROJECT_NAME
                      </div>
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan">
                        {selectedProject.title}
                      </h3>
                    </div>

                    <div>
                      <div className="text-accent-muted text-xs mb-1 font-mono">
                        // DESCRIPTION
                      </div>
                      <p className="text-accent-secondary text-sm leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <div className="text-accent-muted text-xs mb-2 font-mono">
                        // TECH_STACK
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-accent-purple/10 border border-accent-purple/30 text-accent-purple text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedProject.status && (
                      <div className="pt-3 border-t border-accent-purple/20">
                        <div className="text-accent-muted text-xs mb-1">Status</div>
                        <div
                          className={`font-semibold ${
                            selectedProject.status === "deployed"
                              ? "text-accent-mint"
                              : "text-accent-amber"
                          }`}
                        >
                          {selectedProject.status.toUpperCase()}
                        </div>
                      </div>
                    )}

                    {!selectedProject.hideLocAndButton && (
                      <motion.a
                        href={selectedProject.link || "#"}
                        target={selectedProject.link ? "_blank" : undefined}
                        rel={selectedProject.link ? "noopener noreferrer" : undefined}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-4 py-2.5 bg-slate-600 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-slate-500 transition-colors"
                      >
                        <Icon icon="mdi:open-in-new" className="w-4 h-4" />
                        <span>View Live Project</span>
                      </motion.a>
                    )}
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
          className="bg-dark-card/60 backdrop-blur-xl border-2 border-t-0 border-accent-purple/30 rounded-b-xl p-6 shadow-2xl"
        >
          {/* Desktop: Two column layout */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-6">
            {/* Left: Project List */}
            <div className="lg:col-span-2 space-y-2">
              <div className="flex items-center gap-2 text-accent-purple mb-4 pb-2 border-b border-accent-purple/30">
                <Icon icon="mdi:folder" className="w-4 h-4" />
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
                        ? "border-accent-purple bg-accent-purple/10 shadow-lg shadow-accent-purple/20"
                        : "border-dark-border hover:border-accent-purple/50 hover:bg-accent-purple/5"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon
                          icon="mdi:chevron-right"
                          className={`w-4 h-4 transition-transform ${
                            selectedProject?.id === project.id
                              ? "text-accent-purple rotate-90"
                              : "text-accent-muted"
                          }`}
                        />
                        <Icon
                          icon="mdi:file-code"
                          className={`w-4 h-4 ${
                            selectedProject?.id === project.id
                              ? "text-accent-cyan"
                              : "text-accent-muted"
                          }`}
                        />
                      </div>
                    </div>

                    <div
                      className={`text-sm font-bold mb-2 transition-colors ${
                        selectedProject?.id === project.id
                          ? "text-accent-cyan"
                          : "text-accent-secondary group-hover:text-accent-purple"
                      }`}
                    >
                      {project.id}.js
                    </div>

                    <div className="flex items-center gap-2 text-xs flex-wrap">
                      {project.status && (
                        <span
                          className={`px-2 py-0.5 font-semibold ${
                            project.status === "deployed"
                              ? "bg-accent-mint/20 text-accent-mint border border-accent-mint/50"
                              : "bg-accent-amber/20 text-accent-amber border border-accent-amber/50"
                          }`}
                        >
                          {project.status.toUpperCase()}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Project Details - Desktop */}
            <div className="lg:col-span-3 border-2 border-accent-purple/20 bg-dark-card/30 backdrop-blur-sm overflow-hidden">
              {selectedProject && (
                <motion.div
                  key={selectedProject.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="h-full"
                >
                  {/* Header */}
                  <div className="flex items-center gap-2 bg-dark-card/50 px-4 py-3 border-b border-accent-purple/20">
                    <Icon
                      icon="mdi:code-tags"
                      className="w-4 h-4 text-accent-purple"
                    />
                    <span className="text-sm text-accent-purple font-semibold">
                      PROJECT_VIEWER
                    </span>
                    <span className="ml-auto text-xs text-accent-muted">
                      /{selectedProject.id}
                    </span>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* Project Image */}
                    <div className="relative overflow-hidden border-2 border-accent-purple/30 group">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent"></div>
                      <div className="absolute inset-0 bg-accent-purple/10 group-hover:bg-accent-purple/20 transition-colors"></div>

                      {/* Overlay stats */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <div className="flex gap-2">
                          {selectedProject.tech.slice(0, 3).map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-dark-card/80 backdrop-blur-sm border border-accent-purple/30 text-accent-purple text-xs"
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
                        <div className="text-accent-muted text-xs mb-1 font-mono">
                          // PROJECT_NAME
                        </div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan">
                          {selectedProject.title}
                        </h3>
                      </div>

                      <div>
                        <div className="text-accent-muted text-xs mb-1 font-mono">
                          // DESCRIPTION
                        </div>
                        <p className="text-accent-secondary text-sm leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div>
                        <div className="text-accent-muted text-xs mb-2 font-mono">
                          // TECH_STACK
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-accent-purple/10 border border-accent-purple/30 text-accent-purple text-sm hover:bg-accent-purple/20 hover:border-accent-purple/50 transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {selectedProject.status && (
                        <div className="pt-4 border-t border-accent-purple/20">
                          <div className="text-accent-muted text-xs mb-1">
                            Status
                          </div>
                          <div
                            className={`font-semibold ${
                              selectedProject.status === "deployed"
                                ? "text-accent-mint"
                                : "text-accent-amber"
                            }`}
                          >
                            {selectedProject.status.toUpperCase()}
                          </div>
                        </div>
                      )}

                      {!selectedProject.hideLocAndButton && (
                        <motion.a
                          href={selectedProject.link || "#"}
                          target={selectedProject.link ? "_blank" : undefined}
                          rel={selectedProject.link ? "noopener noreferrer" : undefined}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full mt-4 px-4 py-3 bg-slate-600 text-white font-semibold hover:bg-slate-500 transition-colors flex items-center justify-center gap-2"
                        >
                          <Icon icon="mdi:open-in-new" className="w-4 h-4" />
                          <span>View Live Project</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Bottom Terminal Stats */}
          <div className="mt-6 pt-4 border-t border-accent-purple/20 flex flex-wrap justify-between gap-4 text-xs text-accent-muted">
            <div className="flex items-center gap-2">
              <span className="text-accent-purple">◉</span>
              <span>TOTAL: {projects.length} projects</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent-cyan">◉</span>
              <span>STATUS: operational</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent-mint">◉</span>
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
          background: rgba(17, 24, 39, 0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(167, 139, 250, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(167, 139, 250, 0.5);
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
