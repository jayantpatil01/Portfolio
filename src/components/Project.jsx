import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Ticket, Layout, ChevronRight, ChevronLeft, Zap } from 'lucide-react';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiLaravel, 
  SiPhp, SiTailwindcss, SiMysql, SiExpress 
} from 'react-icons/si';

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Enterprise ERP System",
      category: "Internal Management",
      description: "A comprehensive solution for inventory tracking, financial reporting, and employee management. Architected to handle complex relational data with high security and real-time updates.",
      stack: "React, Node.js, MongoDB, Express",
      images: [
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000", 
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
      ], 
      cardTech: [
        { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
        { icon: <SiNodedotjs className="text-[#339933]" />, name: "Node" },
        { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" }
      ],
      mainIcon: <Layout className="text-blue-500" />
    },
    {
      id: 2,
      title: "Modern E-Commerce",
      category: "Retail Tech",
      description: "A full-scale marketplace featuring dynamic product filtering, an optimized checkout flow, and a custom-built admin dashboard for inventory management.",
      stack: "MERN Stack, Tailwind CSS, Redux",
      images: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1000"
      ],
      cardTech: [
        { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
        { icon: <SiExpress className="text-white" />, name: "Express" },
        { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind" }
      ],
      mainIcon: <ShoppingBag className="text-blue-500" />
    },
    {
      id: 3,
      title: "Lottery Gaming Engine",
      category: "Gaming & Logic",
      description: "High-performance lottery ecosystem featuring secure transaction logic, automated prize distribution algorithms, and real-time result broadcasting.",
      stack: "PHP, Laravel, MySQL, JavaScript",
      images: [
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80&w=1000"
      ],
      cardTech: [
        { icon: <SiPhp className="text-[#777BB4]" />, name: "PHP" },
        { icon: <SiLaravel className="text-[#FF2D20]" />, name: "Laravel" },
        { icon: <SiMysql className="text-[#4479A1]" />, name: "MySQL" }
      ],
      mainIcon: <Ticket className="text-blue-500" />
    }
  ];

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImgIndex(0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20">
          <span className="text-blue-500 font-mono tracking-widest text-xs uppercase">/ 05. Portfolio</span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mt-4 uppercase">
            Feat<span className="text-blue-500 italic">ured.</span>
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="h-48 bg-gradient-to-br from-blue-600/5 to-transparent flex items-center justify-center relative overflow-hidden">
                 <div className="z-10 p-5 bg-black/40 rounded-3xl backdrop-blur-xl border border-white/5 group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(project.mainIcon, { size: 32 })}
                </div>
              </div>
              
              <div className="p-8">
                <span className="text-blue-500 font-bold text-[10px] uppercase tracking-widest">{project.category}</span>
                <h3 className="text-2xl font-black text-white mt-1 uppercase leading-tight mb-6">{project.title}</h3>
                
                {/* Tech Icons on Card Layout */}
                <div className="flex gap-4 mb-8 border-t border-white/5 pt-6">
                  {project.cardTech.map((tech, i) => (
                    <div key={i} title={tech.name} className="text-xl group-hover:scale-125 transition-transform duration-300">
                      {tech.icon}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 font-bold text-[10px] tracking-widest group-hover:text-blue-500 transition-colors">
                    EXPLORE CASE STUDY <ChevronRight size={14} />
                  </div>
                  <Zap size={14} className="text-blue-500/20 group-hover:text-blue-500 transition-colors animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Modal Popup */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-xl"
              onClick={closeModal}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-[#0f0f0f] border border-white/10 w-full max-w-6xl max-h-[90vh] rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  onClick={closeModal}
                  className="absolute top-6 right-6 p-2 bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors z-[110]"
                >
                  <X size={20} />
                </button>

                {/* Left: Image Gallery */}
                <div className="relative bg-black h-[300px] lg:h-full flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5 group/gallery">
                  <motion.img 
                    key={currentImgIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={selectedProject.images[currentImgIndex]} 
                    alt="Project Detail"
                    className="w-full h-full object-cover opacity-60 group-hover/gallery:opacity-80 transition-opacity duration-700"
                  />
                  
                  {/* Gallery Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button onClick={prevImage} className="absolute left-4 p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-blue-500 transition-all transform -translate-x-10 group-hover/gallery:translate-x-0">
                        <ChevronLeft size={20} />
                      </button>
                      <button onClick={nextImage} className="absolute right-4 p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-blue-500 transition-all transform translate-x-10 group-hover/gallery:translate-x-0">
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}

                  {/* Image Progress Indicator */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.images.map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1 rounded-full transition-all duration-300 ${i === currentImgIndex ? 'w-8 bg-blue-500' : 'w-2 bg-white/20'}`} 
                      />
                    ))}
                  </div>
                </div>

                {/* Right: Project Details */}
                <div className="p-8 md:p-16 overflow-y-auto">
                  <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.4em] font-bold">Deep Dive Analysis</span>
                  <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-8 uppercase tracking-tighter italic leading-[0.9]">
                    {selectedProject.title}
                  </h2>
                  
                  <div className="space-y-10">
                    <div>
                      <h4 className="text-white font-bold mb-3 uppercase text-[10px] tracking-widest border-b border-white/10 pb-2 inline-block">The Problem / Solution</h4>
                      <p className="text-gray-400 leading-relaxed text-base">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest border-b border-white/10 pb-2 inline-block">Core Stack Integration</h4>
                      <div className="flex gap-6 items-center">
                        {selectedProject.cardTech.map((t, i) => (
                          <div key={i} className="flex flex-col items-center gap-2">
                            <span className="text-3xl">{t.icon}</span>
                            <span className="text-[8px] font-black text-gray-600 tracking-tighter">{t.name}</span>
                          </div>
                        ))}
                      </div>
                      <p className="mt-6 text-gray-500 font-mono text-xs italic">
                        Technical Architecture: {selectedProject.stack}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectSection;