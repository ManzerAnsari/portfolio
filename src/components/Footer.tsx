import { Icon } from '@iconify/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-dark-bg border-t border-dark-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-accent-muted text-sm font-light">
            © {currentYear} Manzer Ansari
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/ManzerAnsari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-muted hover:text-accent-primary transition-colors"
            >
              <Icon icon="mdi:github" className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/manzer-ansari-831881263"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-muted hover:text-accent-primary transition-colors"
            >
              <Icon icon="mdi:linkedin" className="w-5 h-5" />
            </a>
            <a
              href="mailto:manzeransari2@gmail.com"
              className="text-accent-muted hover:text-accent-primary transition-colors"
            >
              <Icon icon="mdi:email" className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/917262027692?text=Hello%20Manzer!%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-muted hover:text-accent-primary transition-colors"
            >
              <Icon icon="mdi:whatsapp" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

