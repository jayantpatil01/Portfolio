import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ShoppingBag, Layout, Code2, Users, HeartPulse, CreditCard, ArrowRight
} from 'lucide-react';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiMysql, SiPhp, SiOpenai, SiRedux 
} from 'react-icons/si';

// --- YOUR IMAGE IMPORTS ---
import codeReviewImg1 from '../assets/Ai-code/Login.webp';
import codeReviewImg2 from '../assets/Ai-code/Home.webp';
import banquetImg1 from '../assets/BanquetPro/Login.webp'; 
import banquetImg2 from '../assets/BanquetPro/Home.webp';   
import banquetImg3 from '../assets/BanquetPro/Priority.webp';   
import karigarImg1 from '../assets/Karigar/Loginpage.webp';
import karigarImg2 from '../assets/Karigar/Home.webp';
import karigarImg3 from '../assets/Karigar/AdminDashboard.webp';
import karigarImg4 from '../assets/Karigar/AdminManageServiceprovider.webp';
import karigarImg5 from '../assets/Karigar/ServiceCard.webp';
import karigarImg6 from '../assets/Karigar/ServiceProviderDashboard.webp';
import karigarImg7 from '../assets/Karigar/AdminServicesmanage.webp';
import pawcareImg1 from '../assets/Pawcare/AdminDashboard.webp';
import pawcareImg2 from '../assets/Pawcare/AdminLogin.webp';
import pawcareImg3 from '../assets/Pawcare/AllAppointments.webp';
import pawcareImg4 from '../assets/Pawcare/AllUsers.webp';
import pawcareImg5 from '../assets/Pawcare/AppointmentSucess.webp';
import pawcareImg6 from '../assets/Pawcare/BookAppointments.webp';
import pawcareImg7 from '../assets/Pawcare/Homewithoutlogin.webp';
import pawcareImg8 from '../assets/Pawcare/MyAppointments.webp';
import pawcareImg9 from '../assets/Pawcare/Myprofile.webp';
import pawcareImg10 from '../assets/Pawcare/Notifications.webp';
import pawcareImg11 from '../assets/Pawcare/Reports.webp';
import pawcareImg12 from '../assets/Pawcare/UserDashboard.webp';
import pawcareImg13 from '../assets/Pawcare/Userlogin.webp';
import pawcareImg14 from '../assets/Pawcare/UserRegister.webp';
import tmafiaImg1 from '../assets/Tmafia/Home.webp';
import tmafiaImg2 from '../assets/Tmafia/Addproducts.webp';
import tmafiaImg3 from '../assets/Tmafia/AdminDashboard.webp';
import tmafiaImg4 from '../assets/Tmafia/AllProducts.webp';
import tmafiaImg5 from '../assets/Tmafia/Bestseller.webp';
import tmafiaImg6 from '../assets/Tmafia/cart.webp';
import tmafiaImg7 from '../assets/Tmafia/Orders.webp';
import tmafiaImg8 from '../assets/Tmafia/SingleProduct.webp';

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      interval = setInterval(() => {
        setCurrentImgIndex((prev) => 
          prev === selectedProject.images.length - 1 ? 0 : prev + 1
        );
      }, 4000);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => clearInterval(interval);
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: "AI Code Reviewer",
      category: "Generative AI",
      description: "MERN stack app providing instant code logic reviews and bug detection using specialized AI prompts.",
      images: [codeReviewImg1, codeReviewImg2],
      cardTech: [
        { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
        { icon: <SiOpenai className="text-white" />, name: "AI API" },
        { icon: <SiNodedotjs className="text-[#339933]" />, name: "Node" }
      ],
      mainIcon: <Code2 size={24} className="text-blue-500" />
    },
    {
      id: 2,
      title: "BanquetPro ERP",
      category: "Event Management",
      description: "Complete ERP for managing staff, room allocation, and real-time booking for luxury banquet halls.",
      images: [banquetImg1, banquetImg2, banquetImg3],
      cardTech: [
        { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
        { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind" },
        { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" }
      ],
      mainIcon: <Layout size={24} className="text-blue-500" />
    },
    {
      id: 3,
      title: "Karigar Platform",
      category: "B2B Marketplace",
      description: "Service marketplace with Razorpay integration. Features robust PHP/MySQL architecture for Admin, Provider, and User roles.",
      images: [karigarImg1, karigarImg2, karigarImg3, karigarImg4, karigarImg5, karigarImg6, karigarImg7],
      cardTech: [
        { icon: <SiPhp className="text-[#777BB4]" />, name: "PHP" },
        { icon: <SiMysql className="text-[#4479A1]" />, name: "MySQL" },
        { icon: <CreditCard className="text-blue-400" />, name: "Razorpay" }
      ],
      mainIcon: <Users size={24} className="text-blue-500" />
    },
    {
      id: 4,
      title: "Pawcare Clinic",
      category: "Healthcare",
      description: "Appointment booking system for pet clinics with detailed medical reports and owner notifications.",
      images: [pawcareImg1, pawcareImg2, pawcareImg3, pawcareImg4, pawcareImg5, pawcareImg6, pawcareImg7, pawcareImg8, pawcareImg9, pawcareImg10, pawcareImg11, pawcareImg12, pawcareImg13, pawcareImg14],
      cardTech: [
        { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
        { icon: <SiNodedotjs className="text-[#339933]" />, name: "Node" },
        { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" }
      ],
      mainIcon: <HeartPulse size={24} className="text-blue-500" />
    },
    {
      id: 5,
      title: "TMafia Store",
      category: "E-Commerce",
      description: "A premium clothing brand storefront featuring high-fidelity cart management and fashion catalogs.",
      images: [tmafiaImg1, tmafiaImg2, tmafiaImg3, tmafiaImg4, tmafiaImg5, tmafiaImg6, tmafiaImg7, tmafiaImg8],
      cardTech: [
        { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
        { icon: <SiRedux className="text-[#764ABC]" />, name: "Redux" },
        { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind" }
      ],
      mainIcon: <ShoppingBag size={24} className="text-blue-500" />
    }
  ];

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImgIndex(0);
  };

  return (
    <section id="projects" className="py-20 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* --- HEADER --- */}
        <div className="mb-12">
          <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-3 block">/ Selected Works</span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            Proj<span className="text-blue-600 italic">ects.</span>
          </h2>
        </div>

        {/* --- SMALL CARD GRID (Mobile Snap / Desktop Grid) --- */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-auto md:overflow-visible pb-10 md:pb-0 snap-x snap-mandatory no-scrollbar">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="min-w-[75vw] md:min-w-full snap-center group cursor-pointer relative bg-[#0a0a0a] border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-blue-500/40 shadow-2xl"
            >
              {/* Image Area - Shorter height for "Small Card" look */}
              <div className="h-56 md:h-64 relative overflow-hidden bg-black">
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-40 group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                
                {/* Floating Tech Tag */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                    {project.mainIcon}
                  </div>
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6">
                <span className="text-blue-500 font-bold text-[9px] uppercase tracking-widest mb-1 block">
                  {project.category}
                </span>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowRight size={18} className="text-white/20 -rotate-45 group-hover:rotate-0 group-hover:text-blue-500 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- MODAL (Keeps the big immersive feel) --- */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-black/95 backdrop-blur-md"
              onClick={closeModal}
            >
              <button onClick={closeModal} className="absolute top-6 right-6 z-[200] p-4 bg-white/10 rounded-full text-white md:hidden">
                <X size={24} />
              </button>

              <motion.div 
                initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="bg-[#050505] w-full h-[90vh] md:h-auto md:max-h-[85vh] md:max-w-6xl md:rounded-[3rem] rounded-t-[3rem] overflow-hidden grid grid-cols-1 md:grid-cols-2 relative border-t md:border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image Showcase */}
                <div className="relative h-[35vh] md:h-full bg-black flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentImgIndex}
                      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }}
                      src={selectedProject.images[currentImgIndex]} 
                      className="w-full h-full object-contain p-6 md:p-12 z-10"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-blue-600/5 blur-[100px]" />
                  
                  {/* Indicators */}
                  <div className="absolute bottom-6 left-10 right-10 flex gap-2">
                    {selectedProject.images.map((_, i) => (
                      <div key={i} className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                        {i === currentImgIndex && (
                          <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 4, ease: "linear" }} className="h-full bg-blue-600" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-8 md:p-16 overflow-y-auto no-scrollbar">
                  <button onClick={closeModal} className="hidden md:flex absolute top-8 right-8 p-2 text-gray-500 hover:text-white">
                    <X size={32} />
                  </button>
                  <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-4 block">Project Detail</span>
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-400 text-base md:text-lg font-light mb-10 pl-5 border-l border-blue-500/30">
                    {selectedProject.description}
                  </p>
                  <div>
                    <h4 className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-6">Tech Stack</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {selectedProject.cardTech.map((t, i) => (
                        <div key={i} className="flex flex-col items-center p-4 bg-white/[0.03] border border-white/5 rounded-2xl">
                          <span className="text-2xl mb-2">{t.icon}</span>
                          <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest">{t.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default ProjectSection;