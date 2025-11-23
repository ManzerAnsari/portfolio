import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at HealthTech",
    content: "An exceptional developer who transformed our healthcare platform with innovative solutions and attention to detail.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Michael Chen",
    role: "Lead Developer at AeroNav",
    content: "Their expertise in React and commitment to performance optimization made our aviation system a success.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager at TechCorp",
    content: "A true professional who consistently delivers high-quality work and exceeds expectations.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-dark-bg relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-display">Client Testimonials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Don't just take my word for it - here's what others have to say about working with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-dark-card/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl relative hover:border-accent-cyan/30 transition-colors duration-300"
            >
              <Quote className="absolute top-4 right-4 text-accent-cyan/20 w-12 h-12" />
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-accent-cyan/20"
                />
                <div>
                  <h3 className="text-white font-semibold font-display">{testimonial.name}</h3>
                  <p className="text-accent-cyan text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;