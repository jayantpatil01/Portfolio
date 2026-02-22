import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ShoppingBag, Layout, ArrowUpRight, Code2, Users, HeartPulse, CreditCard 
} from 'lucide-react';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiMysql, SiExpress, SiOpenai, SiRedux, SiPhp 
} from 'react-icons/si';

// --- YOUR IMAGE IMPORTS (Keep as is) ---
import codeReviewImg1 from '../../assets/Ai-code/Login.webp';
import codeReviewImg2 from '../../assets/Ai-code/Home.webp';
import banquetImg1 from '../../assets/BanquetPro/Login.webp'; 
import banquetImg2 from '../../assets/BanquetPro/Home.webp';  
import banquetImg3 from '../../assets/BanquetPro/Priority.webp';  
import karigarImg1 from '../../assets/Karigar/Loginpage.webp';
import karigarImg2 from '../../assets/Karigar/Home.webp';
import karigarImg3 from '../../assets/Karigar/AdminDashboard.webp';
import karigarImg4 from '../../assets/Karigar/AdminManageServiceprovider.webp';
import karigarImg5 from '../../assets/Karigar/ServiceCard.webp';
import karigarImg6 from '../../assets/Karigar/ServiceProviderDashboard.webp';
import karigarImg7 from '../../assets/Karigar/AdminServicesmanage.webp';
import pawcareImg1 from '../../assets/Pawcare/AdminDashboard.webp';
import pawcareImg2 from '../../assets/Pawcare/AdminLogin.webp';
import pawcareImg3 from '../../assets/Pawcare/AllAppointments.webp';
import pawcareImg4 from '../../assets/Pawcare/AllUsers.webp';
import pawcareImg5 from '../../assets/Pawcare/AppointmentSucess.webp';
import pawcareImg6 from '../../assets/Pawcare/BookAppointments.webp';
import pawcareImg7 from '../../assets/Pawcare/Homewithoutlogin.webp';
import pawcareImg8 from '../../assets/Pawcare/MyAppointments.webp';
import pawcareImg9 from '../../assets/Pawcare/Myprofile.webp';
import pawcareImg10 from '../../assets/Pawcare/Notifications.webp';
import pawcareImg11 from '../../assets/Pawcare/Reports.webp';
import pawcareImg12 from '../../assets/Pawcare/UserDashboard.webp';
import pawcareImg13 from '../../assets/Pawcare/Userlogin.webp';
import pawcareImg14 from '../../assets/Pawcare/UserRegister.webp';
import tmafiaImg1 from '../../assets/Tmafia/Home.webp';
import tmafiaImg2 from '../../assets/Tmafia/Addproducts.webp';
import tmafiaImg3 from '../../assets/Tmafia/AdminDashboard.webp';
import tmafiaImg4 from '../../assets/Tmafia/AllProducts.webp';
import tmafiaImg5 from '../../assets/Tmafia/Bestseller.webp';
import tmafiaImg6 from '../../assets/Tmafia/cart.webp';
import tmafiaImg7 from '../../assets/Tmafia/Orders.webp';
import tmafiaImg8 from '../../assets/Tmafia/SingleProduct.webp';

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Auto-scroll logic (5 seconds per slide)
  useEffect(() => {
    let interval;
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      interval = setInterval(() => {
        setCurrentImgIndex((prev) => 
          prev === selectedProject.images.length - 1 ? 0 : prev + 1
        );
      }, 5000);
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
    <section id="projects" className="py-24 bg-[#0a0a0a] px-4 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
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
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative bg-white/[0.03] border border-white/5 rounded-[2rem] overflow-hidden"
            >
              <div className="h-60 bg-black flex items-center justify-center relative overflow-hidden">
                <img src={project.images[0]} alt="" className="absolute inset-0 w-full h-full object-cover object-top opacity-30 group-hover:scale-110 transition-transform duration-700" />
                <div className="z-10 p-4 bg-black/60 rounded-2xl backdrop-blur-xl border border-white/10">{project.mainIcon}</div>
              </div>
              <div className="p-6">
                <span className="text-blue-500 font-black text-[9px] uppercase tracking-widest mb-2 block">{project.category}</span>
                <h3 className="text-xl font-bold text-white uppercase">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optimized Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-black/95 backdrop-blur-md"
              onClick={closeModal}
            >
              {/* Close Button Mobile (Floating) */}
              <button onClick={closeModal} className="absolute top-6 right-6 z-[200] p-3 bg-white/10 rounded-full text-white md:hidden">
                <X size={24} />
              </button>

              <motion.div 
                initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="bg-[#0f0f0f] w-full h-[90vh] md:h-auto md:max-h-[85vh] md:max-w-6xl md:rounded-[2.5rem] rounded-t-[2.5rem] overflow-hidden grid grid-cols-1 md:grid-cols-2 relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Auto-Scroll Image Section */}
                <div className="relative h-[40vh] md:h-[60vh] lg:h-full bg-black flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentImgIndex}
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.6 }}
                      src={selectedProject.images[currentImgIndex]} 
                      className="w-full h-full object-contain p-4 md:p-8 relative z-10"
                    />
                  </AnimatePresence>
                  
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full" />

                  {/* Visual Progress Bars */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-20 px-10">
                    {selectedProject.images.map((_, i) => (
                      <div key={i} className="h-1 flex-1 max-w-[40px] bg-white/10 rounded-full overflow-hidden">
                        {i === currentImgIndex && (
                          <motion.div 
                            initial={{ width: 0 }} animate={{ width: "100%" }} 
                            transition={{ duration: 5, ease: "linear" }}
                            className="h-full bg-blue-500"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Section (Scrollable on mobile) */}
                <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
                  {/* Desktop Close Button */}
                  <button onClick={closeModal} className="hidden md:flex absolute top-8 right-8 p-2 text-gray-500 hover:text-white transition-colors">
                    <X size={32} />
                  </button>

                  <div className="space-y-8">
                    <div>
                      <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] font-black">Archive File</span>
                      <h2 className="text-4xl md:text-6xl font-black text-white uppercase mt-4 leading-tight">
                        {selectedProject.title}
                      </h2>
                    </div>

                    <p className="text-gray-400 text-base md:text-lg leading-relaxed border-l-2 border-blue-500/40 pl-5 italic">
                      {selectedProject.description}
                    </p>

                    <div className="pt-6 border-t border-white/5">
                      <h4 className="text-gray-500 font-mono text-[9px] uppercase tracking-widest mb-6">Stack Integration</h4>
                      <div className="grid grid-cols-3 gap-6">
                        {selectedProject.cardTech.map((t, i) => (
                          <div key={i} className="flex flex-col items-center p-4 bg-white/[0.02] rounded-2xl border border-white/5">
                            <span className="text-3xl mb-2">{t.icon}</span>
                            <span className="text-[8px] font-bold text-gray-400 uppercase text-center">{t.name}</span>
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