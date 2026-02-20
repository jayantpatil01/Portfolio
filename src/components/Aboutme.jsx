import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
// Importing high-quality tech icons
import { 
  SiMongodb, SiExpress, SiReact, SiNodedotjs, 
  SiNextdotjs, SiLaravel, SiTailwindcss, SiOpenai 
} from 'react-icons/si';

const AboutSection = () => {
  // Added 'color' property to each tech for original branding
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
    <section id="about" className="relative py-24 bg-[#0a0a0a] px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Left Column: Heading & Experience Hook */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-blue-500 font-mono tracking-tighter text-sm uppercase">
                / 01. The Transition
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                MICROBIOLOGY <br /> 
                <span className="text-blue-500 italic">TO SOFTWARE.</span>
              </h2>
            <p className="max-w-2xl text-gray-500 text-lg md:text-xl font-medium pt-4">
  I'm <span className="text-white">Jayant Patil</span>. In 2022, I moved from lab research to software development, where I build high-performance web applications and work with <span className="text-blue-400">Generative AI</span>.
</p>
            </motion.div>
          </div>

          {/* Right Column: Experience Stat */}
          <div className="lg:col-span-4 lg:text-right">
            <div className="inline-block border-l-2 lg:border-l-0 lg:border-r-2 border-blue-500 pl-4 lg:pl-0 lg:pr-4">
              <span className="block text-4xl font-bold text-white">1.5+</span>
              <span className="text-gray-500 text-xs uppercase tracking-[0.2em]">Years in Tech</span>
            </div>
          </div>
        </div>

        {/* Bottom Detail Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20 pt-12 border-t border-white/5">
          
          {/* Main Bio Text */}
          <div className="lg:col-span-7">
            <p className="text-gray-400 leading-relaxed">
              My path isn't typical, and that's my edge. My background in **BSc Microbiology** taught me how to 
              observe complex patterns—a skill that translates perfectly to architecting **MERN Stack** applications and debugging logic. I don't just write code; I engineer solutions with a 
              scientist’s precision.
            </p>
          </div>

          {/* Tech Stack Pills with Persistent Original Colors */}
          <div className="lg:col-span-5">
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {techStack.map((tech) => (
                <span 
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/10 rounded-full text-xs font-bold text-gray-400 hover:border-blue-500/50 transition-all cursor-default group"
                >
                  <span className={`text-sm ${tech.color} group-hover:scale-110 transition-transform`}>
                    {tech.icon}
                  </span>
                  {tech.name}
                </span>
              ))}
            </div>
            
            {/* AI Focus Badge */}
            <div className="mt-6 lg:text-right">
              <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-bold">
                <Sparkles size={14} />
                <span>ACTIVE AI API INTEGRATION</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Accent */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default AboutSection;