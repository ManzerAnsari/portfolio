import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

// Calculate positions in a circular pattern for even distribution
const centerX = 50;
const centerY = 50;
const GOLDEN_ANGLE = 137.5 * (Math.PI / 180); // radians
const CENTER = 50;
const MAX_RADIUS = 40; // percentage radius

// Floating skill icons
const skillsIcon = [
  { name: "React", icon: "mdi:react", color: "#61DAFB" },
  { name: "TypeScript", icon: "mdi:language-typescript", color: "#3178C6" },
  { name: "JavaScript", icon: "mdi:language-javascript", color: "#F7DF1E" },
  { name: "Node.js", icon: "mdi:nodejs", color: "#339933" },
  { name: "Express", icon: "simple-icons:express", color: "#a78bfa" },
  { name: "MongoDB", icon: "mdi:database", color: "#47A248" },
  { name: "Tailwind", icon: "mdi:tailwind", color: "#06B6D4" },
  { name: "React Query", icon: "mdi:database-search", color: "#FF4154" },
  { name: "Redux Toolkit", icon: "simple-icons:redux", color: "#764ABC" },
  { name: "React Router", icon: "simple-icons:reactrouter", color: "#CA4245" },
  { name: "JWT", icon: "simple-icons:jsonwebtokens", color: "#F59E0B" },
  { name: "Zod", icon: "simple-icons:zod", color: "#3E67B1" },
  { name: "Git", icon: "mdi:git", color: "#F05032" },
  { name: "Postman", icon: "simple-icons:postman", color: "#FF6C37" },
];

// Calculate distance from center and determine size
const calculateSize = (x, y) => {
  const centerX = 50;
  const centerY = 50;
  const distance = Math.sqrt(
    Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
  );
  // Distance ranges from 0 to ~40 (with 4 orbits)
  // Size ranges from 44px (close) to 84px (far)
  const minSize = 34;
  const maxSize = 74;
  const maxDistance = 30; // Maximum expected distance for 4 orbits

  // Closer to center = smaller, farther = larger
  const normalizedDistance = Math.min(distance / maxDistance, 1);
  const size = minSize + (maxSize - minSize) * normalizedDistance;

  return {
    containerSize: Math.round(size),
    iconSize: Math.round(size * 0.5), // Icon is 50% of container
    distance: distance,
  };
};
const getGoldenPosition = (index, total) => {
  const angle = index * GOLDEN_ANGLE;
  const radius = Math.sqrt(index / total) * MAX_RADIUS;

  return {
    x: CENTER + radius * Math.cos(angle),
    y: CENTER + radius * Math.sin(angle),
  };
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg py-32 px-6 relative overflow-hidden"
    >
      {/* Enhanced Background effects */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-accent-purple/20 to-accent-cyan/20 border border-accent-purple/30 rounded-full text-accent-primary text-sm font-semibold uppercase tracking-wider">
              Technical Expertise
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 font-display">
            <span className="bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
          <p className="text-accent-secondary text-lg md:text-xl max-w-2xl mx-auto font-light">
            Crafting modern web experiences with the latest technologies and
            best practices
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Skill categories */}
            <div className="space-y-6">
              {[
                {
                  category: "Frontend Development",
                  skills: [
                    "React",
                    "React Router",
                    "JavaScript",
                    "TypeScript",
                    "Tailwind",
                    "React Query",
                    "Redux Toolkit",
                    "Zustand",
                  ],
                  color: "from-accent-blue to-accent-cyan",
                  icon: "mdi:code-tags",
                },
                {
                  category: "Backend Development",
                  skills: ["Node.js", "Express", "MongoDB", "JWT", "Yup", "Zod"],
                  color: "from-accent-mint to-accent-cyan",
                  icon: "mdi:server",
                },
                {
                  category: "Tools & AI",
                  skills: ["Git", "Postman", "Cursor", "ChatGPT"],
                  color: "from-accent-purple to-accent-pink",
                  icon: "mdi:tools",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <motion.div
                    className="bg-gradient-to-br from-dark-card/60 to-dark-card/30 border border-dark-border p-6 rounded-2xl hover:border-accent-purple/40 transition-all duration-300 backdrop-blur-sm"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`p-3 bg-gradient-to-br ${item.color} bg-opacity-10 rounded-xl flex-shrink-0 border border-accent-purple/20`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <Icon
                          icon={item.icon}
                          className="w-6 h-6 text-accent-purple"
                        />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-accent-primary font-semibold text-lg mb-3 flex items-center gap-2">
                          {item.category}
                          <div
                            className={`h-0.5 flex-1 bg-gradient-to-r ${item.color} rounded-full`}
                          ></div>
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 + idx * 0.1 + i * 0.05 }}
                              viewport={{ once: true }}
                              className="px-3 py-1.5 bg-dark-card/80 text-accent-secondary text-sm rounded-lg border border-dark-border hover:border-accent-purple/50 hover:bg-accent-purple/10 hover:text-accent-primary transition-all cursor-default"
                              whileHover={{ scale: 1.05 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Floating Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[600px] flex items-center justify-center"
          >
            {/* Center dot */}
            <motion.div
              className="absolute w-4 h-4 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full shadow-lg z-20"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Orbit circles - 4 orbits with increased spacing */}
            {[140, 240, 340, 440].map((size, idx) => (
              <motion.div
                key={idx}
                className="absolute rounded-full border-2"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  borderColor:
                    idx === 0
                      ? "rgba(167, 139, 250, 0.25)"
                      : idx === 1
                      ? "rgba(240, 171, 252, 0.18)"
                      : idx === 2
                      ? "rgba(103, 232, 249, 0.15)"
                      : "rgba(147, 197, 253, 0.12)",
                }}
                animate={{ rotate: idx % 2 === 0 ? 360 : -360 }}
                transition={{
                  duration: 30 + idx * 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

            {/* Floating icons at random positions */}
            {skillsIcon.map((skill, index) => {
              const { x, y } = getGoldenPosition(index, skillsIcon.length);
              const { containerSize, iconSize } = calculateSize(x, y);

              return (
                <motion.div
                  key={index}
                  className="absolute animate-float z-50"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${index * 0.15}s`,
                    animationDuration: `${6 + index * 0.3}s`,
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="relative group cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                  >
                    {/* Simple Icon container */}
                    <div
                      className="rounded-2xl bg-dark-surface/90 backdrop-blur-md border-2 flex items-center justify-center transition-all duration-300 group-hover:border-opacity-60"
                      style={{
                        width: `${containerSize}px`,
                        height: `${containerSize}px`,
                        borderColor: skill.color + "30",
                        backgroundColor: "rgba(17, 24, 39, 0.9)",
                      }}
                    >
                      <Icon
                        icon={skill.icon}
                        style={{
                          color: skill.color,
                          width: `${iconSize}px`,
                          height: `${iconSize}px`,
                        }}
                      />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-dark-card border border-dark-border rounded-lg text-xs text-accent-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {skill.name}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
