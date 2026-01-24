import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Database, Terminal, 
  FileCode, Package, Palette,
  Zap, GitBranch, Globe
} from 'lucide-react';

const skills = [
  { name: 'React', icon: Code2, color: '#61DAFB', x: 15, y: 20 },
  { name: 'TypeScript', icon: FileCode, color: '#3178C6', x: 75, y: 15 },
  { name: 'Node.js', icon: Terminal, color: '#339933', x: 25, y: 65 },
  { name: 'MongoDB', icon: Database, color: '#47A248', x: 80, y: 70 },
  { name: 'Tailwind', icon: Palette, color: '#06B6D4', x: 50, y: 30 },
  { name: 'Express', icon: Package, color: '#64748B', x: 60, y: 55 },
  { name: 'GraphQL', icon: Zap, color: '#E10098', x: 20, y: 45 },
  { name: 'Git', icon: GitBranch, color: '#F05032', x: 85, y: 40 },
  { name: 'APIs', icon: Globe, color: '#10B981', x: 45, y: 75 },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2 
                className="text-5xl md:text-7xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  My Skills
                </span>
              </motion.h2>
              <motion.p 
                className="text-slate-400 text-xl max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Crafting modern web experiences with the latest technologies and best practices
              </motion.p>
            </div>

            {/* Skill categories */}
            <div className="space-y-6">
              {[
                { 
                  category: 'Frontend Development',
                  skills: ['React', 'TypeScript', 'Tailwind CSS'],
                  color: 'from-blue-500 to-cyan-500'
                },
                { 
                  category: 'Backend Development',
                  skills: ['Node.js', 'Express', 'GraphQL'],
                  color: 'from-green-500 to-emerald-500'
                },
                { 
                  category: 'Database & Tools',
                  skills: ['MongoDB', 'Git', 'API Design'],
                  color: 'from-purple-500 to-pink-500'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-1 h-16 bg-gradient-to-b ${item.color} rounded-full group-hover:h-20 transition-all`}></div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg mb-2">{item.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-slate-800/50 text-slate-300 text-sm rounded-full border border-slate-700/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
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
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 rounded-3xl"></div>

            {/* Center dot */}
            <motion.div
              className="absolute w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full shadow-lg z-20"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Orbit circles */}
            {[150, 250, 350].map((size, idx) => (
              <motion.div
                key={idx}
                className="absolute rounded-full border-2"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  borderColor: idx === 0 
                    ? 'rgba(168, 85, 247, 0.25)' 
                    : idx === 1 
                    ? 'rgba(236, 72, 153, 0.18)' 
                    : 'rgba(34, 211, 238, 0.12)'
                }}
                animate={{ rotate: idx % 2 === 0 ? 360 : -360 }}
                transition={{ 
                  duration: 25 + idx * 5, 
                  repeat: Infinity, 
                  ease: 'linear' 
                }}
              />
            ))}

            {/* Floating icons at random positions */}
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={index}
                  className="absolute"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.random() * 10 - 5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  style={{
                    left: `${skill.x}%`,
                    top: `${skill.y}%`,
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="relative group cursor-pointer"
                    whileHover={{ scale: 1.3 }}
                    transition={{
                      y: { 
                        duration: 3 + index * 0.4, 
                        repeat: Infinity, 
                        ease: 'easeInOut',
                        delay: index * 0.2
                      },
                      x: { 
                        duration: 4 + index * 0.3, 
                        repeat: Infinity, 
                        ease: 'easeInOut',
                        delay: index * 0.15
                      },
                      scale: { 
                        duration: 2.5 + index * 0.2, 
                        repeat: Infinity, 
                        ease: 'easeInOut',
                        delay: index * 0.1
                      }
                    }}
                  >
                    {/* Icon with breathing effect */}
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-slate-900/80 backdrop-blur-md border-2 flex items-center justify-center shadow-2xl transition-all duration-300"
                      style={{ borderColor: skill.color + '40' }}
                      animate={{
                        boxShadow: [
                          `0 0 20px ${skill.color}40`,
                          `0 0 40px ${skill.color}60`,
                          `0 0 20px ${skill.color}40`
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.2
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: skill.color }} />
                    </motion.div>

                    {/* Tooltip */}
                    <div 
                      className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 border rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none"
                      style={{ borderColor: skill.color }}
                    >
                      {skill.name}
                    </div>

                    {/* Breathing glow */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl blur-xl -z-10"
                      style={{ backgroundColor: skill.color }}
                      animate={{
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.2
                      }}
                    />
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