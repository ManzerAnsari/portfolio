import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio] Message from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n---\nSent by: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:manzeransari2@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg overflow-hidden"
    >
      {/* Theme background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block mb-6 px-4 py-2 rounded-full text-sm uppercase tracking-wider font-semibold
            bg-gradient-to-r from-accent-purple/20 to-accent-cyan/20 border border-accent-purple/30 text-accent-primary">
            Contact
          </span>

          <h2 className="text-6xl md:text-7xl font-extrabold leading-tight mb-8 font-display">
            Let’s build
            <br />
            <span className="bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan bg-clip-text text-transparent">
              something real.
            </span>
          </h2>

          <p className="text-lg text-accent-secondary max-w-md mb-12">
            I’m open to freelance work, full-time roles, or meaningful technical collaborations.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6">
            {[
              { icon: 'mdi:github', link: 'https://github.com/ManzerAnsari' },
              { icon: 'mdi:linkedin', link: 'https://www.linkedin.com/in/manzer-ansari-831881263' },
              { icon: 'mdi:email', link: 'mailto:manzeransari2@gmail.com' },
              { icon: 'mdi:whatsapp', link: 'https://wa.me/917262027692?text=Hello%20Manzer!%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.' },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.1 }}
                className="text-accent-secondary hover:text-accent-primary transition"
              >
                <Icon icon={item.icon} className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-dark-card/70 backdrop-blur-xl border border-dark-border rounded-3xl p-10 space-y-8"
        >
          {['name', 'email'].map((field) => (
            <input
              key={field}
              name={field}
              type={field === 'email' ? 'email' : 'text'}
              placeholder={`Your ${field}`}
              value={formData[field]}
              onChange={handleChange}
              className="
                w-full bg-transparent border-b border-dark-border
                py-3 text-accent-primary placeholder-accent-muted
                focus:outline-none focus:border-accent-purple
                transition
              "
              required
            />
          ))}

          <textarea
            name="message"
            rows={4}
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            className="
              w-full bg-transparent border-b border-dark-border
              py-3 text-accent-primary placeholder-accent-muted resize-none
              focus:outline-none focus:border-accent-purple
              transition
            "
            required
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              w-full mt-6 py-4 rounded-xl font-semibold
              bg-slate-600 text-white hover:bg-slate-500
              transition-colors
            "
          >
            Send Message →
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
