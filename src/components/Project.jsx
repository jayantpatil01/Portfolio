import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Ticket, Layout, ChevronRight, ChevronLeft, Zap, ArrowUpRight } from 'lucide-react';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiLaravel, 
  SiPhp, SiTailwindcss, SiMysql, SiExpress 
} from 'react-icons/si';

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: "Enterprise ERP System",
      category: "Management",
      description: "A comprehensive solution for inventory tracking, financial reporting, and employee management. Architected to handle complex relational data with high security and real-time updates.",
      stack: "MERN Stack / Internal Operations",
      images: [
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000", 
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
      ], 
      cardTech: [
        { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
        { icon: <SiNodedotjs className="text-[#339933]" />, name: "Node" },
        { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" }
      ],
      mainIcon: <Layout size={24} className="text-blue-500" />
    },
    {
      id: 2,
      title: "Modern E-Commerce",
      category: "Retail Tech",
      description: "A full-scale marketplace featuring dynamic product filtering, an optimized checkout flow, and a custom-built admin dashboard for inventory management.",
      stack: "MERN Stack / Redux / Tailwind",
      images: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1000"
      ],
      cardTech: [
        { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
        { icon: <SiExpress className="text-white" />, name: "Express" },
        { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind" }
      ],
      mainIcon: <ShoppingBag size={24} className="text-blue-500" />
    },
    {
      id: 3,
      title: "Lottery Gaming Engine",
      category: "Gaming Logic",
      description: "High-performance lottery ecosystem featuring secure transaction logic, automated prize distribution algorithms, and real-time result broadcasting.",
      stack: "PHP 8.x / Laravel / MySQL",
      images: [
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80&w=1000"
      ],
      cardTech: [
        { icon: <SiPhp className="text-[#777BB4]" />, name: "PHP" },
        { icon: <SiLaravel className="text-[#FF2D20]" />, name: "Laravel" },
        { icon: <SiMysql className="text-[#4479A1]" />, name: "MySQL" }
      ],
      mainIcon: <Ticket size={24} className="text-blue-500" />
    }
  ];

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImgIndex(0);
  };

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] px-4 md:px-6 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20">
          <span className="text-blue-500 font-mono tracking-[0.4em] text-[10px] uppercase block mb-4">/ 05. Digital Archive</span>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8]">
            Feat<span className="text-blue-500 italic">ured.</span>
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="h-64 bg-gradient-to-br from-blue-600/10 to-transparent flex items-center justify-center relative overflow-hidden">
                <img 
                   src={project.images[0]} 
                   alt="" 
                   className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="z-10 p-5 bg-black/60 rounded-3xl backdrop-blur-xl border border-white/10 group-hover:border-blue-500/50 transition-colors">
                  {project.mainIcon}
                </div>
                <div className="absolute bottom-6 right-6 p-3 bg-blue-500 rounded-full text-black translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <ArrowUpRight size={20} strokeWidth={3} />
                </div>
              </div>
              
              <div className="p-8">
                <span className="text-blue-500 font-black text-[9px] uppercase tracking-[0.3em] mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6">{project.title}</h3>
                
                <div className="flex gap-4 pt-6 border-t border-white/5">
                  {project.cardTech.map((tech, i) => (
                    <div key={i} title={tech.name} className="text-xl text-gray-400 group-hover:text-white transition-colors">
                      {tech.icon}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Popup */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-12 bg-black/98 backdrop-blur-2xl"
              onClick={closeModal}
            >
              {/* TOP CENTER CLOSE BUTTON */}
              <motion.button 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                onClick={closeModal}
                className="fixed top-6 md:top-10 left-1/2 -translate-x-1/2 z-[150] flex flex-col items-center gap-2 group"
              >
                <div className="p-4 bg-blue-500 rounded-full text-black shadow-[0_0_30px_rgba(59,130,246,0.6)] group-hover:scale-110 transition-transform">
                  <X size={24} strokeWidth={3} />
                </div>
                <span className="text-[10px] font-black text-white uppercase tracking-[0.5em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">Close Archive</span>
              </motion.button>

              <motion.div 
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="bg-[#0a0a0a] border-t md:border border-white/10 w-full h-full md:h-auto md:max-h-[85vh] md:max-w-7xl md:rounded-[3.5rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image Section */}
                <div className="relative h-[45vh] lg:h-full bg-[#050505] overflow-hidden group/gal">
                  <motion.img 
                    key={currentImgIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    src={selectedProject.images[currentImgIndex]} 
                    className="w-full h-full object-cover opacity-50"
                  />
                  
                  {/* Gallery Nav */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 opacity-0 group-hover/gal:opacity-100 transition-opacity duration-500">
                    <button onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(prev => prev === 0 ? selectedProject.images.length-1 : prev-1); }} className="p-4 bg-black/50 backdrop-blur-xl rounded-2xl text-white hover:bg-blue-500 transition-colors">
                      <ChevronLeft size={24} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(prev => prev === selectedProject.images.length-1 ? 0 : prev+1); }} className="p-4 bg-black/50 backdrop-blur-xl rounded-2xl text-white hover:bg-blue-500 transition-colors">
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  {/* Indicators */}
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                    {selectedProject.images.map((_, i) => (
                      <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === currentImgIndex ? 'w-10 bg-blue-500' : 'w-2 bg-white/20'}`} />
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-16 overflow-y-auto bg-gradient-to-br from-[#0a0a0a] to-black">
                  <div className="space-y-12">
                    <div>
                      <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em] font-black">Architecture Brief</span>
                      <h2 className="text-5xl md:text-7xl font-black text-white mt-6 uppercase tracking-tighter italic leading-[0.8]">
                        {selectedProject.title.split(' ')[0]}<br/>
                        <span className="text-blue-500">{selectedProject.title.split(' ').slice(1).join(' ')}</span>
                      </h2>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed font-medium italic border-l-2 border-blue-500/30 pl-6">
                      "{selectedProject.description}"
                    </p>

                    <div className="pt-10 border-t border-white/5">
                      <h4 className="text-gray-500 font-mono text-[10px] uppercase tracking-widest mb-8 text-center md:text-left">Technical Integration</h4>
                      <div className="flex flex-wrap justify-center md:justify-start gap-10">
                        {selectedProject.cardTech.map((t, i) => (
                          <div key={i} className="flex flex-col items-center gap-3">
                            <span className="text-4xl text-white">{t.icon}</span>
                            <span className="text-[9px] font-black text-gray-500 uppercase tracking-tighter">{t.name}</span>
                          </div>
                        ))}
                      </div>
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