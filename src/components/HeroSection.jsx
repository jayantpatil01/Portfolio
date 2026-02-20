import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, ChevronRight } from 'lucide-react';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs} from 'react-icons/si';

const HeroSection = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Software Developer", "Full Stack Developer", "Frontend Developer", "Backend Developer"];
  
  const techStack = [
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Express.js", icon: <SiExpress className="text-white" /> },
    { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 70 : 150);
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden px-6 pt-24 pb-12">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent z-0" />

      <div className="relative z-20 w-full max-w-6xl flex flex-col items-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] text-[10px] md:text-xs tracking-[0.2em] text-gray-400 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          OPEN TO NEW OPPORTUNITIES
        </motion.div>

        {/* Headline */}
        <div className="text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black tracking-tighter text-white leading-none"
          >
            JAYANT <span className="text-blue-500 italic">PATIL</span>
          </motion.h1>
          
          <motion.h2 className="text-2xl md:text-4xl font-medium tracking-tight text-gray-300 min-h-[48px]">
            I am a <span className="text-blue-500">{text}</span>
            <span className="animate-pulse ml-1 text-blue-500">|</span>
          </motion.h2>
        </div>

        <motion.p className="mt-8 max-w-xl text-center text-gray-500 text-sm md:text-base leading-relaxed font-medium">
          Building reliable digital systems with 1.5 years of industry expertise. 
          Specializing in the MERN stack to deliver high-performance web applications.
        </motion.p>

        {/* CTA Section */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <button className="flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl text-sm hover:scale-105 transition-all shadow-lg">
            View Projects <ChevronRight size={16} />
          </button>
          
          {/* Functional Resume Button */}
          <a 
            href="https://drive.google.com/file/d/1KCaVqCLOw5mkQ5xjLLbfjtT35KSLjAD6/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl text-sm hover:bg-white/10 hover:border-blue-500/50 transition-all shadow-lg"
          >
            Resume <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* INFINITE MOVABLE DIAGONAL MARQUEE */}
      <div className="absolute bottom-[10%] left-[-10%] w-[120%] rotate-[-3deg] border-y border-white/[0.05] py-6 bg-white/[0.02] z-10 backdrop-blur-sm overflow-hidden flex">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex whitespace-nowrap gap-12 md:gap-24 items-center"
        >
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <div key={index} className="flex items-center gap-4 opacity-30 hover:opacity-100 transition-opacity duration-300">
              <span className="text-2xl md:text-3xl">{tech.icon}</span>
              <span className="text-xs md:text-sm font-black tracking-[0.4em] text-white uppercase italic">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-6 right-6 opacity-20 hidden md:block">
        <Terminal size={120} strokeWidth={0.5} className="text-blue-500" />
      </div>
    </section>
  );
};

export default HeroSection;