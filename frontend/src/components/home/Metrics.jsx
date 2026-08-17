import React from 'react';
import { motion } from 'framer-motion';
import { FileText, TrendingUp, Users, Building2 } from 'lucide-react';
import { metricsData } from '../../data/content';
import { fadeUp, staggerContainer, viewportOnce } from '../../animations/variants';

const iconComponents = {
  FileText: { icon: FileText, bg: "bg-blue-50", text: "text-blue-600" },
  TrendingUp: { icon: TrendingUp, bg: "bg-emerald-50", text: "text-emerald-600" },
  Users: { icon: Users, bg: "bg-purple-50", text: "text-purple-600" },
  Building2: { icon: Building2, bg: "bg-amber-50", text: "text-amber-600" },
};

const Metrics = () => {
  return (
    <section className="relative z-30 -mt-10 sm:-mt-14 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-gray-200/50 border border-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center max-w-6xl mx-auto"
      >
        {metricsData.map((metric, idx) => {
          const config = iconComponents[metric.icon] || iconComponents.FileText;
          const IconComp = config.icon;

          return (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="flex items-center gap-4 group p-2"
            >
              <div className={`w-12 h-12 rounded-2xl ${config.bg} ${config.text} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                <IconComp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-gray-900 leading-tight">
                  {metric.label}
                </h3>
                <p className="text-xs font-medium text-gray-500 mt-0.5">{metric.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Metrics;
