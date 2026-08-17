import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { logoVariants, overlayVariants } from '../../animations/pageTransitions';

const PageTransitionLoader = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const prevPathname = useRef(location.pathname);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Initial page load or route change to a new pathname
    if (isLoading || location.pathname !== prevPathname.current) {
      setIsLoading(true);
      prevPathname.current = location.pathname;

      // Keep loader visible for minimum 750ms to create a smooth, unhurried transition
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 750);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="global-page-loader"
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center pointer-events-none select-none font-sans"
          aria-live="polite"
          aria-busy="true"
        >
          <div className="flex flex-col items-center justify-center">
            {/* Logo Entrance */}
            <motion.div
              variants={prefersReducedMotion ? {} : logoVariants}
              initial="initial"
              animate="animate"
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <span className="text-3xl font-black text-gray-900 tracking-tight">CivicTrack</span>
            </motion.div>

            {/* Animated Blue Progress Line (approx 135px width, 4px height, rounded) */}
            <div className="w-[135px] h-1 bg-blue-100/70 rounded-full overflow-hidden mt-6 relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0.5 }
                    : {
                        repeat: Infinity,
                        duration: 2.5,
                        ease: [0.4, 0, 0.2, 1 , 1.2 , 1.5],
                      }
                }
                className="w-full h-full bg-blue-600 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransitionLoader;
