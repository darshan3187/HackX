import React from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ctaContent } from '../../data/content';
import { fadeUp, viewportOnce } from '../../animations/variants';

const CTA = () => {
  return (
    <section className="py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="bg-[#0B132B] rounded-[36px] p-8 sm:p-12 lg:p-14 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Background Glow Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[130px] rounded-full pointer-events-none" />

          {/* Left Icon & Text */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left z-10">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30 flex-shrink-0">
              <Send className="w-8 h-8" />
            </div>

            <div className="space-y-1.5">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {ctaContent.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-400 font-medium">
                {ctaContent.subtitle}
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="z-10 flex-shrink-0">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/signup"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-blue-600/30 inline-flex items-center gap-2 transition-all cursor-pointer"
              >
                {ctaContent.buttonText} <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default CTA;
