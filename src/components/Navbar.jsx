import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Code2, User, Mail, Menu, X, Briefcase } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", icon: <Home size={16} /> },
    { name: "Projects", href: "#projects", icon: <Code2 size={16} /> },
    { name: "About", href: "#about", icon: <User size={16} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={16} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-4 py-4 md:px-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Compact Text Logo Section */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-black text-xs group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
            JP
          </div>
          <span className="text-white font-bold tracking-tighter text-sm hidden sm:block">
            JAYANT <span className="text-gray-500 font-normal">PATIL</span>
          </span>
        </motion.div>

        {/* Ultra-Slim Desktop Dock */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 backdrop-blur-md p-1 rounded-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 px-4 py-1.5 text-[13px] text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              {link.icon}
              <span className="font-medium">{link.name}</span>
            </a>
          ))}
        </motion.div>

        {/* Slim Action Section */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-lg font-bold text-[12px] uppercase tracking-wider transition-transform"
          >
            <Briefcase size={14} />
            Hire
          </motion.button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white bg-white/5 border border-white/10 rounded-lg"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="absolute top-20 left-4 right-4 bg-[#111] border border-white/10 p-4 rounded-2xl md:hidden flex flex-col gap-2 shadow-2xl"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 text-gray-400 hover:text-white p-3 hover:bg-white/5 rounded-xl transition-colors"
                >
                  <div className="text-blue-500">{link.icon}</div>
                  <span className="font-medium text-sm">{link.name}</span>
                </a>
              ))}
              <button className="mt-2 flex items-center justify-center gap-2 bg-white text-black p-3 rounded-xl font-bold text-sm">
                <Briefcase size={16} />
                Hire Me
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;