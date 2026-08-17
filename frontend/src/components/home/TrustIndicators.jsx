import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { heroContent } from '../../data/content';
import { staggerContainer, fadeUp } from '../../animations/variants';

const TrustIndicators = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex items-center gap-4 pt-4 border-t border-gray-100/80 max-w-md"
    >
      {/* Overlapping User Avatars with staggered entrance */}
      <div className="flex -space-x-2.5 overflow-hidden">
        {heroContent.avatars.map((src, i) => (
          <motion.img
            key={i}
            variants={fadeUp}
            className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
            src={src}
            alt={`Active citizen user ${i + 1}`}
          />
        ))}
      </div>

      {/* Ratings & Citizen Counter */}
      <motion.div variants={fadeUp} className="flex flex-col">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
          <span className="text-sm font-bold text-gray-900 ml-1">{heroContent.ratingScore}</span>
        </div>
        <p className="text-xs text-gray-500 font-medium">{heroContent.ratingText}</p>
      </motion.div>
    </motion.div>
  );
};

export default TrustIndicators;
