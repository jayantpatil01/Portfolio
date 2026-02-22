import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import SplashScreen from '../../components/User/SplashScreen.jsx';
import Navbar from '../../components/User/Navbar';
import HeroSection from '../../components/User/HeroSection';
import AboutSection from '../../components/User/Aboutme';
import SkillsSection from '../../components/User/Skills';  
import EducationSection from '../../components/User/Education';
import ProfessionalJourney from '../../components/User/ProfessionalJourney';
import ProjectsSection from '../../components/User/Project';
import Footer from '../../components/User/Footer';



function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-[#0a0a0a] min-h-screen selection:bg-white selection:text-black">
      {/* 1. Splash Screen Layer */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <SplashScreen key="loader" isFinished={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* 2. Main Portfolio Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />

            <main>
              {/* Added IDs to sections for Navbar navigation */}
              <div id="home">
                <HeroSection />
              </div>

              <div id="about">
                <AboutSection />
              </div>

              <div id="skills">
                <SkillsSection />
              </div>

              <EducationSection />
              <ProfessionalJourney />

              <div id="projects">
                <ProjectsSection />
              </div>
            </main>

            {/* Added ID to Footer for "Contact" navigation */}
            <div id="contact">
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;