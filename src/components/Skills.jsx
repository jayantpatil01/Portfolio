import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss3, SiJavascript, SiPhp, SiLaravel, 
  SiMongodb, SiMysql, SiExpress, SiReact, SiNodedotjs, 
  SiNextdotjs, SiOpenai, SiGooglegemini,
  SiGit, SiGithub, SiLinux, SiCloudflare, SiTailwindcss
} from 'react-icons/si';

const SkillsSection = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <SiReact />, color: "text-[#61DAFB]" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
        { name: "JS / HTML / CSS", icon: <SiJavascript />, color: "text-[#F7DF1E]" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "text-[#339933]" },
        { name: "Express", icon: <SiExpress />, color: "text-white" },
        { name: "Laravel", icon: <SiLaravel />, color: "text-[#FF2D20]" },
        { name: "PHP", icon: <SiPhp />, color: "text-[#777BB4]" },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
        { name: "MySQL", icon: <SiMysql />, color: "text-[#4479A1]" },
      ]
    },
    {
      title: "AI Integration",
      skills: [
        { name: "OpenAI API", icon: <SiOpenai />, color: "text-[#74aa9c]" },
        { name: "Gemini API", icon: <SiGooglegemini />, color: "text-[#4285F4]" },
      ]
    },
    {
      title: "Tools & OS",
      skills: [
        { name: "Git / GitHub", icon: <SiGithub />, color: "text-white" },
        { name: "Linux / VPS", icon: <SiLinux />, color: "text-[#FCC624]" },
        { name: "Vercel / Cloud", icon: <SiCloudflare />, color: "text-[#F38020]" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header matches the previous About Section */}
        <div className="mb-16">
          <span className="text-blue-500 font-mono tracking-tighter text-sm uppercase">
            / 02. Tech Arsenal
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mt-4 uppercase">
            Capabili<span className="text-blue-500 italic">ties.</span>
          </h2>
        </div>

        {/* 5-Column Grid for distinct categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-white font-bold text-lg tracking-tight border-l-2 border-blue-500 pl-4 uppercase">
                {cat.title}
              </h4>
              
              <div className="flex flex-col gap-4">
                {cat.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-3 group"
                  >
                    <span className={`text-xl ${skill.color} transition-transform group-hover:scale-110`}>
                      {skill.icon}
                    </span>
                    <span className="text-gray-400 text-sm font-semibold tracking-wide group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
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