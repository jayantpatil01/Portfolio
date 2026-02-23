import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, SiPhp, SiLaravel, 
  SiMongodb, SiMysql, SiExpress, SiReact, SiNodedotjs, 
  SiNextdotjs, SiOpenai, SiGooglegemini,
  SiGithub, SiLinux, SiCloudflare, SiTailwindcss
} from 'react-icons/si';

const SkillsSection = () => {
  const categories = [
    {
      title: "Frontend",
      size: "lg:col-span-3",
      skills: [
        { name: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E]" },
        { name: "React.js", icon: <SiReact />, color: "text-[#61DAFB]" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
      ] 
    },
    {
      title: "Backend",
      size: "lg:col-span-2",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "text-[#339933]" },
        { name: "Express", icon: <SiExpress />, color: "text-white" },
        { name: "Laravel", icon: <SiLaravel />, color: "text-[#FF2D20]" },
        { name: "PHP", icon: <SiPhp />, color: "text-[#777BB4]" },
      ]
    },
    {
      title: "AI & Future",
      size: "lg:col-span-2",
      skills: [
        { name: "OpenAI", icon: <SiOpenai />, color: "text-[#74aa9c]" },
        { name: "Gemini", icon: <SiGooglegemini />, color: "text-[#4285F4]" },
      ]
    },
    {
      title: "Databases",
      size: "lg:col-span-1",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
        { name: "MySQL", icon: <SiMysql />, color: "text-[#4479A1]" },
      ]
    },
    {
      title: "DevOps & Tools",
      size: "lg:col-span-2",
      skills: [
        { name: "GitHub", icon: <SiGithub />, color: "text-white" },
        { name: "Linux", icon: <SiLinux />, color: "text-[#FCC624]" },
        { name: "Cloud", icon: <SiCloudflare />, color: "text-[#F38020]" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#050505] px-4 md:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-blue-500 font-mono tracking-[0.4em] text-[10px] uppercase block mb-2">
              / 02. Technical Arsenal
            </span>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8]">
              Skil<span className="text-blue-500 italic">ls.</span>
            </h2>
          </div>
          <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest max-w-[180px]">
            Precision built stack for modern scale.
          </p>
        </div>

        {/* Bento Grid Layout - Now responsive with 2 cols on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`${cat.size} group relative overflow-hidden bg-white/[0.02] border border-white/5 p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] hover:bg-white/[0.04] transition-all duration-500`}
            >
              {/* Subtle Corner Accents */}
              <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                 <div className="w-1 h-1 bg-blue-500 rounded-full" />
              </div>

              <h4 className="text-white/40 font-bold text-[10px] tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
                {cat.title}
              </h4>
              
              {/* Skill Items Grid: 2 columns on mobile, 1 on desktop (inside bento) */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-y-6 gap-x-2">
                {cat.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-3 group/skill"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500/20 blur-md opacity-0 group-hover/skill:opacity-100 transition-opacity" />
                      <span className={`relative text-xl md:text-2xl ${skill.color} transition-all duration-300 group-hover/skill:scale-110 block`}>
                        {skill.icon}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-400 text-xs font-bold tracking-tight group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;