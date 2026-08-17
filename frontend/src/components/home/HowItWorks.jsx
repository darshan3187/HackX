import React from 'react';
import { motion } from 'framer-motion';
import { FilePlus2, ListFilter, Award, Users2 } from 'lucide-react';
import { howItWorksData } from '../../data/content';
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../../animations/variants';

const iconConfig = [
  { icon: FilePlus2, bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100" },
  { icon: ListFilter, bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100" },
  { icon: Award, bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-100" },
  { icon: Users2, bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100" },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto space-y-3 mb-20"
        >
          <p className="text-xs font-bold tracking-widest text-blue-600 uppercase">
            {howItWorksData.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Simple steps. <span className="text-blue-600">Real impact.</span>
          </h2>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          
          {/* Animated Connecting Line on Desktop (Left -> Right) */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-[2px] overflow-hidden -z-0">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={viewportOnce}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              className="h-full border-t-2 border-dashed border-blue-200"
            />
          </div>

          {/* Desktop & Mobile Steps Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
          >
            {howItWorksData.steps.map((step, idx) => {
              const cfg = iconConfig[idx] || iconConfig[0];
              const IconComp = cfg.icon;

              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="relative z-10 flex flex-col items-center text-center space-y-4 group"
                >
                  {/* Step Icon Container */}
                  <motion.div
                    variants={scaleIn}
                    className={`w-20 h-20 rounded-full ${cfg.bg} ${cfg.text} border-2 ${cfg.border} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComp className="w-9 h-9" />
                  </motion.div>

                  {/* Step Number */}
                  <span className="text-sm font-black text-gray-900 tracking-wider">
                    {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-extrabold text-gray-900">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-500 max-w-xs leading-relaxed font-medium">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
