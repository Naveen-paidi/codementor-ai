import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SplashScreen = ({ onFinish }) => {
  const [phase, setPhase] = useState(0); // 0: initial, 1: logo, 2: glow, 3: branding, 4: complete

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onFinish();
      return;
    }

    // Timeline: Total ~3 seconds
    // 0.0 - 0.5s: Dark navy/indigo background
    const t1 = setTimeout(() => setPhase(1), 500);  // Logo scales/fades in
    const t2 = setTimeout(() => setPhase(2), 1200); // Glow & subtle light shimmer
    const t3 = setTimeout(() => setPhase(3), 2000); // Branding text
    const t4 = setTimeout(() => setPhase(4), 2600); // Fade out transition to main app
    const t5 = setTimeout(() => onFinish(), 3000);  // Completion

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          key="codementor-splash"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#021C1E] select-none overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse at center, #064E52 0%, #043639 60%, #021C1E 100%)'
          }}
        >
          {/* Subtle ambient background glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: phase >= 2 ? 0.45 : 0.15,
              scale: phase >= 2 ? 1.05 : 0.95
            }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            className="absolute w-[450px] h-[450px] rounded-full blur-[90px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.45) 0%, rgba(15, 118, 110, 0.3) 40%, rgba(52, 211, 153, 0.15) 70%, transparent 100%)'
            }}
          />

          {/* Central Logo Container */}
          <div className="relative flex flex-col items-center">
            {/* Logo with smooth scale and fade */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{
                opacity: phase >= 1 ? 1 : 0,
                scale: phase >= 1 ? 1 : 0.88
              }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <div className="relative p-2 rounded-3xl">
                {/* Glow ring around logo during phase 2 */}
                {phase >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#10B981]/25 via-[#34D399]/30 to-[#0F766E]/25 blur-xl -z-10"
                  />
                )}
                <img
                  src="/logo.png"
                  alt="CodeMentor"
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-[0_10px_25px_rgba(16,185,129,0.35)]"
                />
              </div>
            </motion.div>

            {/* CodeMentor Name & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: phase >= 3 ? 1 : 0,
                y: phase >= 3 ? 0 : 8
              }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="mt-5 text-center"
            >
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2">
                <span>Code</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D399] via-[#10B981] to-[#60A5FA]">
                  Mentor
                </span>
              </h1>
              <p className="text-xs sm:text-sm font-medium text-[#A7F3D0] mt-1 tracking-wide">
                Intelligent Programming Learning Platform
              </p>
            </motion.div>

            {/* Subtle progress indicator line */}
            <div className="w-36 h-0.5 bg-[#043639] rounded-full mt-7 overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: phase >= 3 ? '100%' : phase >= 2 ? '70%' : phase >= 1 ? '30%' : '5%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[#0F766E] via-[#10B981] to-[#34D399] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
