import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false); // close menu first

    // wait until menu close animation finishes
    setTimeout(() => {
      if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 350);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Determine active section
      const sections = ['hero', 'projects', 'contact'];
      const sectionElements = sections.map(id => ({
        id,
        element: id === 'hero' ? document.body : document.getElementById(id),
        offset: id === 'hero' ? 0 : document.getElementById(id)?.offsetTop || 0
      }));

      const currentSection = sectionElements.reduce((active, section) => {
        if (!section.element) return active;
        const offset = section.id === 'hero' ? 0 : section.offset - 100;
        return scrollY >= offset ? section.id : active;
      }, 'hero');

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-300 ${isScrolled
            ? 'bg-black/80 backdrop-blur-xl border border-white/20 shadow-xl shadow-black/20'
            : 'bg-black/30 backdrop-blur-lg border border-white/10'
          }`}>

          {/* Logo */}
          <motion.div
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
                <path d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17"
                  stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12"
                  stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-white text-lg font-semibold group-hover:text-amber-400 transition-colors duration-300">
              P. R Chowdhury
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeSection === item.id
                    ? 'text-amber-400'
                    : 'text-slate-300 hover:text-white'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-amber-400/20 rounded-lg border border-amber-400/30"
                    layoutId="activeSection"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-amber-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu (overlay style) */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: "auto", opacity: 1, marginTop: 12 } : { height: 0, opacity: 0, marginTop: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="md:hidden absolute top-full left-0 right-0 px-4 overflow-hidden"
        >
          <div className="bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl p-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeSection === item.id
                    ? 'text-amber-400 bg-amber-400/10 border border-amber-400/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                initial={{ opacity: 0, x: -20 }}
                animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: isMenuOpen ? index * 0.1 : 0, duration: 0.3 }}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
