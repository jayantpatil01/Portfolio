import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { 
  SiMongodb, SiExpress, SiReact, SiNodedotjs, 
  SiNextdotjs, SiLaravel, SiTailwindcss, SiOpenai 
} from 'react-icons/si';
import Dp from '../assets/Dp.jpg';

const AboutSection = () => {
  const techStack = [
    { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
    { name: "Express", icon: <SiExpress />, color: "text-white" },
    { name: "React", icon: <SiReact />, color: "text-[#61DAFB]" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-[#339933]" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
    { name: "Laravel", icon: <SiLaravel />, color: "text-[#FF2D20]" },
    { name: "Gen-AI", icon: <SiOpenai />, color: "text-[#74aa9c]" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#06B6D4]" }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#0a0a0a] px-6 overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Right Column (DP): Mobile First - Appears at top on small screens */}
          <div className="lg:col-span-4 lg:order-2 flex flex-col items-center lg:items-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group mb-10 lg:mb-0"
            >
              {/* Outer Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              {/* Image Container - No Filter */}
              <div className="relative h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
                <img 
                  src={Dp} 
                  alt="Jayant Patil" 
                  className="h-full w-full object-cover transition-transform duration-500"
                />
              </div>

              {/* Experience Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#0f0f0f] border border-blue-500/50 p-4 rounded-xl shadow-2xl">
                <span className="block text-3xl font-black text-white leading-none">1.5+</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Years Tech</span>
              </div>
            </motion.div>
          </div>

          {/* Left Column (Heading) */}
          <div className="lg:col-span-8 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 text-center lg:text-left"
            >
              <span className="text-blue-500 font-mono tracking-tighter text-sm uppercase block">
                / 01. The Transition
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                MICROBIOLOGY <br /> 
                <span className="text-blue-500 italic">TO SOFTWARE.</span>
              </h2>
              <p className="max-w-2xl mx-auto lg:mx-0 text-gray-500 text-lg md:text-xl font-medium pt-4">
                I'm <span className="text-white font-bold">Jayant Patil</span>. In 2022, I moved from lab research to software development, where I build high-performance web applications and work with <span className="text-blue-400">Generative AI</span>.
              </p>
            </motion.div>
          </div>

        </div>

        {/* Bottom Detail Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-24 pt-12 border-t border-white/5">
          
          <div className="lg:col-span-6">
            <p className="text-gray-400 leading-relaxed text-lg italic text-center lg:text-left">
              "My path isn't typical, and that's my edge. My background in <span className="text-white">BSc Microbiology</span> taught me how to 
              observe complex patterns—a skill that translates perfectly to architecting <span className="text-blue-500">MERN Stack</span> applications and debugging logic. I don't just write code; I engineer solutions with a scientist’s precision."
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              {techStack.map((tech) => (
                <span 
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/10 rounded-full text-xs font-bold text-gray-400 hover:border-blue-500/50 transition-all cursor-default group"
                >
                  <span className={`text-sm ${tech.color} group-hover:scale-125 transition-transform duration-300`}>
                    {tech.icon}
                  </span>
                  {tech.name}
                </span>
              ))}
            </div>
            
            <div className="mt-8 text-center lg:text-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/5 border border-blue-500/20 rounded-lg text-blue-400 text-[10px] font-black tracking-widest uppercase">
                <Sparkles size={12} />
                <span>Active AI API Integration Focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default AboutSection;