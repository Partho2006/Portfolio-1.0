import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Partho2006?tab=repositories", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/parthojoty-roy-chowdhury-562a71371/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/partho221/", label: "Twitter" },
    { icon: Mail, href: "mailto:parthojotyroychowdhury@gmail.com", label: "Email" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 px-6 pt-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <img 
            src="/Screenshot (187).png"
            alt="P.R.C"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mx-auto mb-6 border-4 border-white/10 shadow-2xl shadow-amber-500/10"
          />
          <h1 className="text-4xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Parthojoty RoyChowdhury
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-400 mb-8 font-medium">
            Full-Stack Developer & Software Engineer
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            1st Year student.
            Currently exploring the intersection of AI and modern web design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center gap-6 mb-16"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
            >
              <link.icon className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="text-white/60 hover:text-white transition-colors duration-300"
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}