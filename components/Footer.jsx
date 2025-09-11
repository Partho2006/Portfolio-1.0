
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Partho2006", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/parthojoty-roy-chowdhury-562a71371/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/partho221/", label: "Twitter" },
    { icon: Mail, href: "mailto:parthojotyroychowdhury@gmail.com", label: "Email" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <button
              onClick={scrollToTop}
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              P. R Chowdhury
            </button>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
              >
                <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                © 2025 P. R Chowdhury. All rights reserved.
              </p>

              <div className="flex items-center gap-1 text-slate-400 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>and lots of Effort.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
