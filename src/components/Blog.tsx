import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "Optimizing React Performance",
    excerpt: "Learn the best practices for improving your React application's performance through code splitting, memoization, and more.",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Modern CSS Techniques",
    excerpt: "Explore the latest CSS features and techniques that can enhance your web development workflow.",
    date: "Mar 10, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Future of Web Development",
    excerpt: "A look at upcoming technologies and trends that will shape the future of web development.",
    date: "Mar 5, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-32 bg-dark-surface relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-accent-primary mb-6 font-display tracking-tighter">Latest Insights</h2>
          <p className="text-accent-secondary max-w-2xl mx-auto text-xl font-light">
            Thoughts, learnings, and perspectives from my journey in web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-dark-card/60 backdrop-blur-xl border border-dark-border rounded-2xl overflow-hidden group hover:border-accent-purple/40 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-accent-muted mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-accent-primary mb-2 group-hover:text-accent-cyan transition-colors">
                  {post.title}
                </h3>
                <p className="text-accent-secondary mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-accent-cyan hover:text-accent-purple transition-colors"
                >
                  <span className="mr-2">Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;