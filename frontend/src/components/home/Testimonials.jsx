import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '../../data/content';
import { fadeUp, staggerContainer, viewportOnce } from '../../animations/variants';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonialsData.items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-white font-sans relative">
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
            {testimonialsData.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Trusted by <span className="text-blue-600">communities that care.</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonialsData.items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.08)", borderColor: "rgba(37, 99, 235, 0.2)" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`bg-white border p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between space-y-6 relative ${
                activeIndex === idx ? "border-blue-200 shadow-md" : "border-gray-100 shadow-sm"
              }`}
            >
              <div className="space-y-4">
                <span className="text-blue-500 font-serif text-5xl leading-none opacity-40 select-none block" aria-hidden="true">
                  “
                </span>
                <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-50">
                <img 
                  src={item.avatar} 
                  alt={`${item.name} from ${item.city}`} 
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-gray-100" 
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
                  <p className="text-xs font-medium text-gray-400">{item.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Controls & Keyboard Accessible Pagination */}
        <div className="flex justify-between items-center max-w-xs mx-auto pt-12">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial slides">
            {testimonialsData.items.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={activeIndex === i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === i ? "w-6 h-2 bg-blue-600" : "w-2 h-2 bg-gray-200 hover:bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
