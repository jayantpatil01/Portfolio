import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Circle, Briefcase } from 'lucide-react';
import { 
  SiPhp, SiLaravel, SiReact, SiNodedotjs, 
  SiMongodb, SiExpress, SiJavascript, SiMysql, SiTailwindcss 
} from 'react-icons/si';

const ProfessionalJourney = () => {
  const experiences = [
    {
      role: "Software Developer",
      company: "RS Software",
      location: "Nagpur, IN",
      duration: "2024 - 2025",
      points: [
        "Architected a comprehensive ERP System for business operations.",
        "Developed high-performance Lottery Games using Laravel.",
        "Built scalable MERN E-commerce solutions with seamless checkout.",
      ],
      tech: [
        { name: "PHP", icon: <SiPhp className="text-[#777BB4]" /> },
        { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20]" /> },
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> }
      ]
    },
    {
      role: "Software Intern",
      company: "Coding Raja",
      location: "Remote",
      duration: "2024",
      points: [
        "Contributed to MERN stack projects and feature development.",
        "Gained hands-on experience with front-end & back-end logic.",
        "Delivered milestones in a collaborative remote environment."
      ],
      tech: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Express", icon: <SiExpress className="text-white" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> }
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#0a0a0a] px-4 md:px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Scaled for impact */}
        <div className="mb-16 md:mb-24">
          <span className="text-blue-500 font-mono tracking-[0.3em] text-[10px] uppercase block mb-4">
            / 04. Career Path
          </span>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8]">
            Work<span className="text-blue-500 italic">.</span>
          </h2>
        </div>

        <div className="space-y-8 md:space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-white/[0.02] border border-white/5 rounded-[2.5rem] md:rounded-none md:bg-transparent md:border-none md:grid md:grid-cols-12 md:gap-16"
            >
              {/* MOBILE ONLY: Glassy Header Background */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-500/10 to-transparent md:hidden" />

              {/* Left Column: Role & Meta */}
              <div className="relative p-8 md:p-0 md:col-span-4 space-y-4 z-10">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500 rounded-lg text-black">
                        <Briefcase size={16} />
                    </div>
                    <span className="text-blue-500 font-mono text-[10px] font-black uppercase tracking-widest">
                        {exp.duration}
                    </span>
                </div>
                
                <div className="pt-2">
                  <h3 className="text-3xl md:text-5xl font-black text-white leading-[0.9] uppercase tracking-tighter">
                    {exp.role}
                  </h3>
                  <p className="text-gray-400 font-bold mt-2 text-lg uppercase tracking-tight">{exp.company}</p>
                  <p className="text-gray-600 flex items-center gap-2 text-xs font-black tracking-widest uppercase mt-1">
                    <MapPin size={12} className="text-blue-500" /> {exp.location}
                  </p>
                </div>
              </div>

              {/* Right Column: Points & Tech */}
              <div className="p-8 pt-0 md:p-0 md:col-span-8 md:border-l md:border-white/5 md:pl-12">
                <div className="space-y-8">
                  <ul className="space-y-4">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-4 group">
                        <Circle size={6} className="mt-2 text-blue-500 fill-blue-500 flex-shrink-0" />
                        <p className="text-gray-400 text-sm md:text-lg leading-relaxed group-hover:text-white transition-colors">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack - Scrolling Grid on Mobile */}
                  <div className="pt-6 border-t border-white/5">
                    <div className="flex flex-wrap md:grid md:grid-cols-6 gap-5 md:gap-8">
                      {exp.tech.map((t, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-2 md:flex-col md:items-start group/icon">
                          <div className="text-2xl md:text-4xl transition-all duration-300 group-hover/icon:scale-125 group-hover/icon:-rotate-12">
                            {t.icon}
                          </div>
                          <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest md:hidden lg:block">
                            {t.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;