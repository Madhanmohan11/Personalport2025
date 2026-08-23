import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#120505]/85 backdrop-blur-xl border-b border-red-900/30 shadow-[0_4px_25px_rgba(255,30,30,0.15)] py-3' 
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <motion.div
            onClick={() => scrollToSection('#home')}
            className="cursor-pointer flex items-center space-x-1"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Madhan
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF1E1E] inline-block shadow-[0_0_12px_rgba(255,30,30,0.9)]" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-neutral-300 hover:text-white font-medium text-sm transition-colors relative group py-1"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF1E1E] to-[#FF4D4D] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(255,30,30,0.8)]" />
              </motion.button>
            ))}

            {/* Hire Me CTA */}
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-[#FF1E1E] to-[#B80000] hover:from-[#B80000] hover:to-[#FF1E1E] text-white font-semibold text-sm px-6 py-2.5 rounded-lg shadow-[0_0_20px_rgba(255,30,30,0.35)] hover:shadow-[0_0_30px_rgba(255,30,30,0.6)] transition-all duration-300 border border-red-500/30"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-red-950/40 hover:text-red-400 border border-red-500/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pt-4 pb-6 px-4 rounded-2xl bg-[#120505]/95 border border-red-900/40 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-neutral-200 hover:text-red-400 font-medium py-2 px-3 rounded-lg hover:bg-red-950/30 transition-colors"
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full mt-3 bg-gradient-to-r from-[#FF1E1E] to-[#B80000] text-white font-semibold py-3 rounded-lg shadow-[0_0_20px_rgba(255,30,30,0.4)]"
                >
                  Hire Me
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navigation;