import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d0303] text-white py-12 relative border-t border-red-900/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF1E1E' fill-opacity='0.15'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start mb-3">
              <span className="text-2xl font-bold text-white tracking-tight">Madhan</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF1E1E] inline-block shadow-[0_0_12px_rgba(255,30,30,0.9)] ml-1" />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Frontend & Full Stack Developer passionate about creating beautiful, scalable digital experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-sm font-bold uppercase tracking-wider text-red-400 mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#projects', label: 'Projects' },
                { href: '#resume', label: 'Resume' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-neutral-300 hover:text-red-400 font-medium text-sm transition-colors duration-300 relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF1E1E] to-[#FF4D4D] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="bg-black/40 border-red-500/30 text-neutral-200 hover:text-white hover:border-red-500/70 hover:bg-red-950/40 backdrop-blur-md transition-all duration-300 shadow-md"
            >
              <ArrowUp size={16} className="mr-2 text-red-400" />
              Back to Top
            </Button>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-red-900/30 my-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-neutral-400 text-sm flex items-center justify-center">
            © {currentYear} Madhan. Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-1.5 inline-block"
            >
              <Heart size={15} className="text-red-500 fill-red-500 drop-shadow-[0_0_8px_rgba(255,30,30,0.8)]" />
            </motion.span>
            using React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
