import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
  "Hello",           // English
  "नमस्ते",          // Hindi
  "नमस्कार",        // Marathi
  "নমস্কার",        // Bengali
  "வணக்கம்",       // Tamil
  "నమస్కారం",       // Telugu
  "નમસ્તે",          // Gujarati
  "ನಮಸ್ಕಾರ",        // Kannada
  "നമസ്കാരം",       // Malayalam
  "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ"    // Punjabi
];

const SplashScreen = ({ isFinished }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < words.length - 1) {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
      }, 350); 
      return () => clearTimeout(timeout);
    } else {
      const finalTimeout = setTimeout(() => {
        isFinished();
      }, 1200);
      return () => clearTimeout(finalTimeout);
    }
  }, [index, isFinished]);

  // Calculate percentage for the progress bar
  const progress = ((index + 1) / words.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#000000] text-white"
    >
      {/* Word Container */}
      <div className="h-32 flex items-center justify-center overflow-hidden px-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={words[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-4xl md:text-7xl font-semibold tracking-tight text-center leading-tight"
          >
            {words[index]}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Progress Bar Container */}
      <div className="mt-8 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="h-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
        />
      </div>
    </motion.div>
  );
};

export default SplashScreen;