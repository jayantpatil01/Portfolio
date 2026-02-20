import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs'; // Using Bootstrap icon for WhatsApp
import { Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "GitHub", 
      icon: <SiGithub />, 
      url: "https://github.com/yourusername", 
      color: "hover:text-white" 
    },
    { 
      name: "LinkedIn", 
      icon: <SiLinkedin />, 
      url: "https://linkedin.com/in/yourusername", 
      color: "hover:text-[#0A66C2]" 
    },
    { 
      name: "Instagram", 
      icon: <SiInstagram />, 
      url: "https://instagram.com/yourusername", 
      color: "hover:text-[#E4405F]" 
    },
    { 
      name: "WhatsApp", 
      icon: <BsWhatsapp />, 
      url: "https://wa.me/91XXXXXXXXXX", // Replace with your number in international format
      color: "hover:text-[#25D366]" 
    },
    { 
      name: "Email", 
      icon: <Mail size={22} />, 
      url: "mailto:yourname@email.com", 
      color: "hover:text-blue-500" 
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          
          {/* Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-white tracking-tighter uppercase">
              Jayant <span className="text-blue-500 italic">Patil.</span>
            </h2>
            <p className="text-gray-500 text-sm mt-2 font-medium tracking-wide">
              Software Developer & AI Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 md:gap-8">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className={`text-gray-500 text-2xl transition-all duration-300 ${link.color}`}
                title={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest"
          >
            Back to top 
            <div className="p-2 border border-white/10 rounded-full group-hover:border-blue-500 transition-colors">
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">
            © {currentYear} Jayant Patil. All Rights Reserved.
          </p>
          
          <div className="flex gap-8 text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="hover:text-blue-500 cursor-default transition-colors">Nagpur, India</span>
            <span className="text-blue-500/50 animate-pulse">Available for Work</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;