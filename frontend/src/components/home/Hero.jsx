import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, MapPin, CheckCircle2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import TrustIndicators from './TrustIndicators';
import { heroContent } from '../../data/content';
import { fadeUp, fadeRight, floatCard } from '../../animations/variants';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50/40 via-white to-white font-sans overflow-hidden pt-8 sm:pt-14 pb-16">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-[550px] bg-blue-100/35 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full"
            >
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-blue-600 uppercase">
                {heroContent.eyebrow}
              </span>
            </motion.div>

            {/* Single H1 Tag for SEO */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.12]"
            >
              {heroContent.headline.line1}<br />
              {heroContent.headline.line2}<br />
              <span className="text-blue-600">{heroContent.headline.line3}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg text-gray-600 max-w-xl font-normal leading-relaxed"
            >
              {heroContent.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link 
                to="/dashboard/report"
                className="bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {heroContent.ctaPrimary} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/dashboard"
                className="bg-white hover:bg-gray-50 active:scale-[0.98] border border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {heroContent.ctaSecondary} <ExternalLink className="w-4 h-4 text-gray-400" />
              </Link>
            </motion.div>

            {/* Trust Indicators / Rating */}
            <TrustIndicators />

          </div>

          {/* Right Column Skyscraper Image & Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            
            {/* Skyscraper Card with Arch Curve */}
            <motion.div 
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-md h-[480px] sm:h-[530px] rounded-[40px] lg:rounded-l-[120px] lg:rounded-r-[40px] overflow-hidden shadow-2xl border-4 border-white"
            >
              <img 
                src={heroContent.heroImage} 
                alt="CivicTrack Modern City Infrastructure Skyscraper" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Card 1: Pothole (Top Left Overlay) */}
            <motion.div
              variants={floatCard}
              animate="animate"
              whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              className="absolute top-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3.5 pr-5 rounded-2xl border border-gray-100 shadow-xl flex items-center gap-3.5 z-20"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Pothole on 5th Street</h4>
                <span className="inline-block mt-0.5 text-[10px] font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full">
                  Under Review
                </span>
              </div>
            </motion.div>

            {/* Floating Card 2: Street Light Out (Middle Left Overlay) */}
            <motion.div
              whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              className="absolute top-36 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 pr-5 rounded-2xl border border-gray-100 shadow-xl flex items-center gap-3.5 z-20"
            >
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Street Light Out</h4>
                <span className="inline-block mt-0.5 text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full">
                  Resolved
                </span>
              </div>
            </motion.div>

            {/* Floating Card 3: Garbage Not Collected (Bottom Left Overlay) */}
            <motion.div
              variants={floatCard}
              animate="animate"
              whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              className="absolute bottom-10 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3.5 pr-5 rounded-2xl border border-gray-100 shadow-xl flex items-center gap-3.5 z-20"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Garbage Not Collected</h4>
                <span className="inline-block mt-0.5 text-[10px] font-semibold text-purple-600 bg-purple-50 border border-purple-100 px-2.5 py-0.5 rounded-full">
                  In Progress
                </span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
