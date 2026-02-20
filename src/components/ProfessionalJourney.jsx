import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Circle, Layers, ShoppingCart, Ticket } from 'lucide-react';
import { 
  SiPhp, SiLaravel, SiReact, SiNodedotjs, 
  SiMongodb, SiExpress, SiJavascript, SiMysql, SiTailwindcss 
} from 'react-icons/si';

const ProfessionalJourney = () => {
  const experiences = [
    {
      role: "Software Developer",
      company: "RS Software",
      location: "IT Park, Nagpur",
      duration: "July 2024 - Oct 2025",
      points: [
        "Architected and deployed a comprehensive ERP System to streamline internal business operations and data management.",
        "Developed high-performance Lottery Games using PHP and Laravel, focusing on secure transaction logic.",
        "Built scalable E-commerce solutions with the MERN stack, integrating modern UI/UX and seamless checkout flows.",
        "Collaborated with the core team to maintain high code standards and system reliability."
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
      role: "Software Development Intern",
      company: "Coding Raja Technology",
      location: "Remote",
      duration: "March 2024 - April 2024",
      points: [
        "Contributed to MERN stack projects, focusing on new features and bug fixes.",
        "Gained hands-on experience with front-end and back-end technologies.",
        "Participated in an online collaborative environment to deliver milestones."
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
    <section id="experience" className="py-24 bg-[#0a0a0a] px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-20">
          <span className="text-blue-500 font-mono tracking-widest text-xs uppercase">/ 04. Career Path</span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mt-4 uppercase">
            Experience<span className="text-blue-500 italic">.</span>
          </h2>
        </div>

        <div className="space-y-24">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
            >
              {/* Left Side: Meta Info */}
              <div className="lg:col-span-4 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-bold uppercase tracking-widest">
                  <Calendar size={10} /> {exp.duration}
                </div>
                <h3 className="text-3xl font-black text-white leading-tight uppercase italic tracking-tighter">
                  {exp.role}
                </h3>
                <div className="space-y-1">
                  <p className="text-white font-bold text-lg">{exp.company}</p>
                  <p className="text-gray-500 flex items-center gap-2 text-sm">
                    <MapPin size={14} className="text-blue-500" /> {exp.location}
                  </p>
                </div>
              </div>

              {/* Right Side: Details & Tech */}
              <div className="lg:col-span-8">
                <div className="space-y-8">
                  <ul className="space-y-5">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-4 text-gray-400 group">
                        <Circle size={8} className="mt-2 text-blue-500 fill-blue-500 flex-shrink-0" />
                        <p className="text-base md:text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Icons with Original Colors */}
                  <div className="pt-8 flex flex-wrap gap-8 border-t border-white/5">
                    {exp.tech.map((t, tIdx) => (
                      <div key={tIdx} className="flex flex-col items-center gap-2 group/icon">
                        <div className="text-3xl transition-transform duration-300 group-hover/icon:-translate-y-1">
                          {t.icon}
                        </div>
                        <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">
                          {t.name}
                        </span>
                      </div>
                    ))}
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