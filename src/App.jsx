import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SplashScreen from './components/SplashScreen'; 
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/Aboutme';
import SkillsSection from './components/Skills';  
import EducationSection from './components/Education';
import ProfessionalJourney from './components/ProfessionalJourney';
import ProjectsSection from './components/Project';
import Footer from './components/Footer';


function App() {
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
            {/* Navbar appears fixed at the top */}
            <Navbar />

            <main>
              {/* HeroSection now contains your primary greeting and CTA */}
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <EducationSection />
              <ProfessionalJourney />
              <ProjectsSection />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;