import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs'; 
import { Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <SiGithub />, url: "https://github.com/jayantpatil01/", color: "text-white" },
    { icon: <SiLinkedin />, url: "https://www.linkedin.com/in/jayantpatil01/", color: "text-[#0A66C2]" },
    { icon: <SiInstagram />, url: "https://www.instagram.com/_patil__04", color: "text-[#E4405F]" },
    { icon: <BsWhatsapp />, url: "https://wa.me/917219709493", color: "text-[#25D366]" },
    { icon: <Mail size={18} />, url: "mailto:patiljayant2023@gmail.com", color: "text-blue-500" }
  ];

  return (
    <footer className="bg-[#0a0a0a] py-10 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        
        {/* Compact Brand Section */}
        <div className="text-center">
          <h2 className="text-2xl font-black text-white tracking-tighter uppercase">
            Jayant <span className="text-blue-500 italic">Patil.</span>
          </h2>
          <p className="text-gray-500 text-[8px] font-bold uppercase tracking-[0.3em] mt-1">
            Building Digital Experiences
          </p>
        </div>

        {/* Scaled Down Socials */}
        <div className="flex items-center gap-6">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className={`text-xl transition-all duration-300 ${link.color} opacity-80 hover:opacity-100`}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Minimal Copyright */}
        <div className="pt-6 border-t border-white/5 w-full text-center">
          <p className="text-gray-600 text-[9px] font-bold uppercase tracking-[0.2em]">
            © 2026 Jayant Patil
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;