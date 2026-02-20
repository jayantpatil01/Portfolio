import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Microscope, Code2 } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      year: "2023",
      title: "Full Stack Developer Diploma",
      institution: "Code Insight Academy",
      desc: "Intensive focus on Python, PHP, MySQL, and the MERN stack ecosystem.",
      icon: <Code2 size={18} />,
      isTech: true
    },
    {
      year: "2023",
      title: "Bachelor's Degree",
      institution: "RTMNU University",
      desc: "Comprehensive curriculum in Microbiology, Zoology, and Chemistry.",
      icon: <Microscope size={18} />,
      isTech: false
    },
    {
      year: "2020",
      title: "12th Grade (Science)",
      institution: "Maharashtra State Board",
      desc: "Higher secondary education with a specialized focus on the Science stream.",
      icon: <GraduationCap size={18} />,
      isTech: false
    },
    {
      year: "2018",
      title: "10th Grade (Secondary)",
      institution: "CBSE Board",
      desc: "Achieved strong foundational knowledge in core academic subjects.",
      icon: <Award size={18} />,
      isTech: false
    }
  ];

  return (
    <section id="education" className="py-24 bg-[#0a0a0a] px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Matches your Branding */}
        <div className="mb-20">
          <span className="text-blue-500 font-mono tracking-tighter text-sm uppercase">/ 03. Journey</span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mt-4 uppercase">
            Educa<span className="text-blue-500 italic">tion.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {education.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-0 p-8 rounded-2xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5"
            >
              {/* Left Side: Year */}
              <div className="md:col-span-2 flex items-start">
                <span className="text-2xl font-black text-blue-500/40 group-hover:text-blue-500 transition-colors italic">
                  {item.year}
                </span>
              </div>

              {/* Middle Side: Icon & Line */}
              <div className="hidden md:flex md:col-span-1 flex-col items-center">
                <div className={`p-3 rounded-full border ${item.isTech ? 'border-blue-500 text-blue-500 bg-blue-500/10' : 'border-white/10 text-gray-500'}`}>
                  {item.icon}
                </div>
                {idx !== education.length - 1 && (
                  <div className="w-[1px] h-full bg-gradient-to-b from-white/10 to-transparent mt-4" />
                )}
              </div>

              {/* Right Side: Content */}
              <div className="md:col-span-9 md:pl-8">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-blue-500/80 font-mono text-xs uppercase tracking-widest font-bold">
                    {item.institution}
                  </p>
                  <p className="text-gray-500 mt-4 leading-relaxed max-w-2xl text-sm md:text-base font-medium italic">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;