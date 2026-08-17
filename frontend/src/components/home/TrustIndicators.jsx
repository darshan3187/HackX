import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, FileText } from 'lucide-react';
import { staggerContainer, fadeUp } from '../../animations/variants';

const TrustIndicators = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-100/80 max-w-lg text-xs font-semibold text-gray-600"
    >
      <motion.div variants={fadeUp} className="flex items-center gap-1.5 bg-blue-50/80 text-blue-700 px-3 py-1.5 rounded-xl border border-blue-100 font-bold">
        <ShieldCheck className="w-4 h-4 text-blue-600" />
        <span>Independent Civic Project</span>
      </motion.div>

      <motion.div variants={fadeUp} className="flex items-center gap-1.5 bg-emerald-50/80 text-emerald-700 px-3 py-1.5 rounded-xl border border-emerald-100 font-bold">
        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
        <span>Open Issue Tracking</span>
      </motion.div>

      <motion.div variants={fadeUp} className="flex items-center gap-1.5 bg-purple-50/80 text-purple-700 px-3 py-1.5 rounded-xl border border-purple-100 font-bold">
        <FileText className="w-4 h-4 text-purple-600" />
        <span>Photo Proof Support</span>
      </motion.div>
    </motion.div>
  );
};

export default TrustIndicators;
