import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Smartphone, Globe, Terminal } from 'lucide-react';

const skills = [
  {
    category: "Frontend Development",
    icon: Layout,
    skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "GSAP", "Three.js"]
  },
  {
    category: "Backend Integration",
    icon: Database,
    skills: ["RESTful APIs", "GraphQL", "Firebase", "Supabase"]
  },
  {
    category: "Tools & Methods",
    icon: Terminal,
    skills: ["Git", "Webpack", "Vite", "Jest", "CI/CD", "Agile"]
  },
  {
    category: "UI/UX Design",
    icon: Globe,
    skills: ["Figma", "Responsive Design", "Animation", "Prototyping"]
  }
];

const SkillCard = ({ category, icon: Icon, skills, index, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`bg-dark-card/60 backdrop-blur-xl border border-dark-border p-8 rounded-3xl hover:border-accent-purple/30 transition-all duration-300 group ${className}`}
  >
    <div className="flex items-center mb-6">
      <div className="p-3 bg-gradient-to-br from-accent-purple/10 to-accent-cyan/10 rounded-2xl mr-4 group-hover:from-accent-purple/20 group-hover:to-accent-cyan/20 transition-all border border-accent-purple/20">
        <Icon className="w-6 h-6 text-accent-cyan" />
      </div>
      <h3 className="text-2xl font-bold text-accent-primary font-display tracking-tight">{category}</h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, idx) => (
        <span
          key={idx}
          className="px-4 py-2 bg-dark-card/40 text-accent-secondary rounded-lg text-sm font-medium border border-dark-border hover:bg-accent-purple/10 hover:text-accent-primary hover:border-accent-purple/30 transition-all cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-dark-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-accent-primary mb-6 font-display tracking-tighter">
            Expertise
          </h2>
          <p className="text-accent-secondary text-xl max-w-2xl mx-auto font-light">
            A curated stack of technologies I use to build digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillCard 
            {...skills[0]} 
            index={0} 
            className="md:col-span-2 md:row-span-2" 
          />
          <SkillCard 
            {...skills[1]} 
            index={1} 
            className="md:col-span-1 md:row-span-1" 
          />
          <SkillCard 
            {...skills[2]} 
            index={2} 
            className="md:col-span-1 md:row-span-1" 
          />
          <SkillCard 
            {...skills[3]} 
            index={3} 
            className="md:col-span-3" 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;