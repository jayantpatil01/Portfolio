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
      size: "lg:col-span-3", // Larger card for main stack
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
    <section id="skills" className="py-24 bg-[#0a0a0a] px-4 md:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-blue-500 font-mono tracking-[0.4em] text-[10px] uppercase block mb-2">
              / 02. Technical Arsenal
            </span>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8]">
              Skil<span className="text-blue-500 italic">ls.</span>
            </h2>
          </div>
          <p className="text-gray-500 font-mono text-xs md:text-right max-w-[200px]">
            SCIENTIFIC PRECISION IN EVERY LINE OF CODE.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`${cat.size} group relative overflow-hidden bg-white/[0.03] border border-white/5 p-6 md:p-8 rounded-[2rem] hover:bg-white/[0.05] transition-all duration-500 hover:border-blue-500/20`}
            >
              {/* Background Glow Overlay */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/5 blur-[50px] group-hover:bg-blue-500/10 transition-colors" />

              <h4 className="text-white font-black text-xs tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                {cat.title}
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {cat.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-4 group/skill"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500/20 blur-md opacity-0 group-hover/skill:opacity-100 transition-opacity" />
                      <span className={`relative text-2xl md:text-3xl ${skill.color} transition-transform duration-500 group-hover/skill:scale-110 group-hover/skill:-rotate-12 block`}>
                        {skill.icon}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-300 text-sm font-bold tracking-tight group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[9px] text-gray-600 font-black uppercase tracking-widest mt-0.5">
                        Professional
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