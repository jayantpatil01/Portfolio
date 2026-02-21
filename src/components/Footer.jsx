import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs'; 
import { Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "GitHub", 
      icon: <SiGithub />, 
      url: "https://github.com/jayantpatil01/", 
      color: "text-white", 
      hoverColor: "hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
    },
    { 
      name: "LinkedIn", 
      icon: <SiLinkedin />, 
      url: "https://www.linkedin.com/in/jayantpatil01/", 
      color: "text-[#0A66C2]", 
      hoverColor: "hover:drop-shadow-[0_0_10px_rgba(10,102,194,0.6)]"
    },
    { 
      name: "Instagram", 
      icon: <SiInstagram />, 
      url: "https://www.instagram.com/_patil__04", 
      color: "text-[#E4405F]", 
      hoverColor: "hover:drop-shadow-[0_0_10px_rgba(228,64,95,0.6)]"
    },
    { 
      name: "WhatsApp", 
      icon: <BsWhatsapp />, 
      url: "https://wa.me/917219709493", 
      color: "text-[#25D366]", 
      hoverColor: "hover:drop-shadow-[0_0_10px_rgba(37,211,102,0.6)]"
    },
    { 
      name: "Email", 
      icon: <Mail size={22} />, 
      url: "mailto:patiljayant2023@gmail.com", 
      color: "text-blue-500", 
      hoverColor: "hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] pt-24 pb-12 px-4 md:px-6 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-12 mb-20">
          
          {/* Brand Name */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
              Jayant <span className="text-blue-500 italic">Patil.</span>
            </h2>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mt-4">
              Building Digital Experiences
            </p>
          </div>

          {/* Icon-Only Social Row */}
          <div className="flex items-center gap-8 md:gap-10">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`text-3xl md:text-2xl transition-all duration-300 ${link.color} ${link.hoverColor}`}
                title={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Simple Back to Top */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-gray-600 hover:text-white transition-colors font-mono text-[10px] uppercase tracking-[0.4em]"
          >
            <span>Top</span>
            <div className="p-3 border border-white/10 rounded-full group-hover:border-blue-500 transition-all duration-300">
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">
              © {currentYear} Jayant Patil
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
              Maharashtra, IN
            </span>
            <a 
              href="mailto:patiljayant2023@gmail.com" 
              className="text-blue-500 hover:brightness-125 transition-all"
            >
              patiljayant2023@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;