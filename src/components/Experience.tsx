import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'Remote',
    period: '2022 - Present',
    description: 'Leading frontend development for enterprise applications using React, TypeScript, and modern web technologies.',
    achievements: [
      'Architected scalable component libraries',
      'Improved application performance by 40%',
      'Mentored junior developers'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    location: 'San Francisco, CA',
    period: '2020 - 2022',
    description: 'Developed user-facing features for a SaaS platform, focusing on user experience and performance optimization.',
    achievements: [
      'Built responsive web applications',
      'Collaborated with design team',
      'Implemented accessibility standards'
    ]
  },
  {
    title: 'Junior Developer',
    company: 'WebAgency',
    location: 'New York, NY',
    period: '2019 - 2020',
    description: 'Started my journey in web development, working on various client projects and learning modern frameworks.',
    achievements: [
      'Learned React and modern JavaScript',
      'Worked on 20+ client projects',
      'Gained experience in agile methodologies'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-dark-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-accent-primary mb-6 font-display tracking-tighter">
            Experience
          </h2>
          <p className="text-accent-secondary text-xl max-w-2xl mx-auto font-light">
            My professional journey and career milestones
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-purple/30 via-accent-cyan/30 to-transparent transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:pr-12' : 'md:pl-1/2 md:pl-12 md:text-right'}`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br from-accent-purple to-accent-cyan rounded-full border-4 border-dark-surface transform -translate-x-1/2 z-10 ${index % 2 === 0 ? 'md:left-1/2' : 'md:left-1/2'}`}></div>

                <div className={`bg-dark-card/60 backdrop-blur-xl border border-dark-border p-8 rounded-3xl hover:border-accent-purple/30 transition-all duration-300 ${index % 2 === 0 ? 'ml-16 md:ml-0 md:mr-auto' : 'ml-16 md:ml-auto md:mr-0'}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-accent-purple/10 to-accent-cyan/10 rounded-xl border border-accent-purple/20 flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-accent-cyan" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-accent-primary mb-2 font-display">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-accent-secondary mb-3">
                        <span className="font-medium text-accent-cyan">{exp.company}</span>
                        <span className="flex items-center gap-1 text-sm">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1 text-sm">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-accent-secondary mb-4 font-light">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-accent-secondary text-sm">
                        <span className="text-accent-cyan mt-1.5">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

