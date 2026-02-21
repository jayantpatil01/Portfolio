import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Microscope, Code2, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      year: "2023",
      title: "Full Stack Developer Diploma",
      institution: "Code Insight Academy",
      desc: "Intensive focus on Python, PHP, MySQL, and the MERN stack ecosystem.",
      icon: <Code2 size={20} />,
      isTech: true,
      tag: "Specialization"
    },
    {
      year: "2023",
      title: "Bachelor's Degree",
      institution: "RTMNU University",
      desc: "Comprehensive curriculum in Microbiology, Zoology, and Chemistry.",
      icon: <Microscope size={20} />,
      isTech: false,
      tag: "University"
    },
    {
      year: "2020",
      title: "12th Grade (Science)",
      institution: "Maharashtra State Board",
      desc: "Higher secondary education with a specialized focus on the Science stream.",
      icon: <GraduationCap size={20} />,
      isTech: false,
      tag: "HSC"
    },
    {
      year: "2018",
      title: "10th Grade (Secondary)",
      institution: "CBSE Board",
      desc: "Achieved strong foundational knowledge in core academic subjects.",
      icon: <Award size={20} />,
      isTech: false,
      tag: "SSC"
    }
  ];

  return (
    <section id="education" className="py-24 bg-[#0a0a0a] px-4 md:px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-10 right-[-5%] text-[12rem] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter hidden lg:block">
        History
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-24 text-center lg:text-left">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-mono tracking-[0.4em] text-[10px] uppercase block mb-4"
          >
            / 03. The Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8]"
          >
            Educa<span className="text-blue-500 italic">tion.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="absolute left-[21px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-blue-500 via-white/10 to-transparent hidden md:block" />

          <div className="space-y-12">
            {education.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-0 md:pl-16 group"
              >
                {/* Timeline Dot/Icon */}
                <div className={`absolute left-0 top-0 w-[44px] h-[44px] rounded-xl flex items-center justify-center z-20 transition-all duration-500 hidden md:flex
                  ${item.isTech 
                    ? 'bg-blue-500 text-black shadow-[0_0_20px_rgba(59,130,246,0.4)]' 
                    : 'bg-[#111] border border-white/10 text-gray-500 group-hover:border-blue-500/50 group-hover:text-white'
                  }`}
                >
                  {item.icon}
                </div>

                {/* Content Card */}
                <div className="bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-[2rem] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 relative overflow-hidden group/card">
                  
                  {/* Subtle Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] opacity-0 group-hover/card:opacity-100 transition-opacity" />

                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-[10px] font-black uppercase tracking-widest border border-blue-500/20">
                          {item.tag}
                        </span>
                        <div className="flex items-center gap-1.5 text-gray-500 font-mono text-[10px] uppercase tracking-widest">
                          <Calendar size={12} />
                          {item.year}
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-white group-hover/card:text-blue-500 transition-colors uppercase tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                    
                    <div className="lg:text-right">
                      <p className="text-white/40 font-mono text-xs md:text-sm uppercase tracking-widest font-bold">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-500 leading-relaxed max-w-3xl text-sm md:text-base font-medium italic border-l border-white/10 pl-6 group-hover/card:border-blue-500/50 transition-colors">
                    {item.desc}
                  </p>

                  {/* Year Background Decoration (Mobile) */}
                  <div className="absolute bottom-[-10px] right-4 text-6xl font-black text-white/[0.02] select-none pointer-events-none italic md:hidden">
                    {item.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;