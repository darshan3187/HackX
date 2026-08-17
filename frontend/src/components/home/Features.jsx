import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuresData } from '../../data/content';
import { fadeUp, staggerContainer, viewportOnce } from '../../animations/variants';

const iconMap = {
  tracking: { icon: Zap, bg: "bg-blue-600/20", border: "border-blue-500/30", text: "text-blue-400", hoverBorder: "hover:border-blue-500/50", hoverText: "hover:text-blue-400" },
  process: { icon: ShieldCheck, bg: "bg-emerald-600/20", border: "border-emerald-500/30", text: "text-emerald-400", hoverBorder: "hover:border-emerald-500/50", hoverText: "hover:text-emerald-400" },
  resolution: { icon: CheckCircle2, bg: "bg-purple-600/20", border: "border-purple-500/30", text: "text-purple-400", hoverBorder: "hover:border-purple-500/50", hoverText: "hover:text-purple-400" },
};

const Features = () => {
  return (
    <section id="features" className="bg-[#0B132B] text-white py-24 relative overflow-hidden font-sans">
      
      {/* React-Bits Style Dot Grid Background (Ultra low opacity) */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <p className="text-xs font-bold tracking-widest text-cyan-400 uppercase">
            {featuresData.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Powerful features for <span className="text-blue-400">transparent governance</span>
          </h2>
        </motion.div>

        {/* 3 Dark Glass Feature Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featuresData.items.map((item) => {
            const config = iconMap[item.id] || iconMap.tracking;
            const IconComponent = config.icon;

            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 25px 30px -5px rgba(0, 0, 0, 0.4)" }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl ${config.hoverBorder} transition-all duration-300 group flex flex-col justify-between`}
              >
                <div className="space-y-6">
                  <div className={`w-14 h-14 ${config.bg} border ${config.border} rounded-2xl flex items-center justify-center ${config.text} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    to="/features"
                    className={`inline-flex items-center text-xs font-semibold text-slate-300 ${config.hoverText} transition-colors gap-1.5`}
                  >
                    {item.linkText} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
