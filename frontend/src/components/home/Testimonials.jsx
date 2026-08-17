import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { platformGuaranteesData } from '../../data/content';
import { fadeUp, staggerContainer, viewportOnce } from '../../animations/variants';

const iconComponents = {
  ShieldCheck: ShieldCheck,
  FileText: FileText,
  CheckCircle2: CheckCircle2,
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-white font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <p className="text-xs font-bold tracking-widest text-blue-600 uppercase">
            {platformGuaranteesData.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Built for transparency. <span className="text-blue-600">Engineered for citizens.</span>
          </h2>
          <p className="text-sm text-gray-500 font-medium">
            {platformGuaranteesData.description}
          </p>
        </motion.div>

        {/* Principles Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {platformGuaranteesData.principles.map((item, idx) => {
            const IconComp = iconComponents[item.icon] || ShieldCheck;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-gray-50/70 border border-gray-100 p-8 rounded-3xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-xs text-gray-600 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
