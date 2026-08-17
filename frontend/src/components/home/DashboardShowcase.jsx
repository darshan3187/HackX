import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldAlert } from 'lucide-react';
import { dashboardShowcaseData } from '../../data/content';
import { fadeLeft, fadeRight, viewportOnce } from '../../animations/variants';

const DashboardShowcase = () => {
  return (
    <section className="py-20 bg-[#F8FAFC] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-[40px] border border-gray-100 p-8 sm:p-12 lg:p-16 shadow-xl shadow-gray-200/40 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeLeft}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-100">
              {dashboardShowcaseData.eyebrow}
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              {dashboardShowcaseData.title}
            </h2>
            
            <p className="text-base text-gray-600 font-normal leading-relaxed">
              {dashboardShowcaseData.description}
            </p>

            <ul className="space-y-3.5 pt-2">
              {dashboardShowcaseData.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column Interactive Dashboard Preview */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeRight}
            className="lg:col-span-7 relative flex justify-center items-center"
          >
            
            {/* Phone Mockup Frame */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative z-20 w-[220px] sm:w-[240px] bg-gray-900 p-3 rounded-[38px] shadow-2xl border-4 border-gray-800 transform -rotate-3 transition-transform"
            >
              <div className="bg-white rounded-[28px] overflow-hidden p-4 space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="text-[10px] font-bold text-blue-600">UI Demo Preview</span>
                  <span className="text-xs font-extrabold text-gray-900">Dashboard</span>
                </div>
                
                {/* Donut Chart Mockup */}
                <div className="bg-blue-50/50 rounded-2xl p-4 text-center flex flex-col items-center">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path className="text-blue-100" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <motion.path
                        initial={{ strokeDasharray: "0, 100" }}
                        whileInView={{ strokeDasharray: "75, 100" }}
                        viewport={viewportOnce}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="text-blue-600"
                        strokeWidth="4"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-[9px] text-gray-400 font-medium">Issue Feed</span>
                      <span className="text-xs font-black text-gray-900">Track Live</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-gray-50 p-2 rounded-xl text-[11px]">
                    <span className="font-bold text-gray-700">Resolved Status</span>
                    <span className="font-extrabold text-emerald-600">Verified</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 p-2 rounded-xl text-[11px]">
                    <span className="font-bold text-gray-700">In Progress</span>
                    <span className="font-extrabold text-purple-600">Active</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Desktop Dashboard Window Overlay */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="hidden sm:block absolute top-4 right-0 lg:-right-4 z-10 w-[380px] sm:w-[440px] bg-white rounded-3xl border border-gray-100 shadow-2xl p-6 space-y-5"
            >
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <span className="text-sm font-bold text-gray-900">Application UI Preview</span>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">Demo View</span>
              </div>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-gray-50 p-3 rounded-2xl">
                  <p className="text-[10px] text-gray-500 font-semibold">Resolved</p>
                  <p className="text-sm font-black text-emerald-600">Photo Verified</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-2xl">
                  <p className="text-[10px] text-gray-500 font-semibold">In Progress</p>
                  <p className="text-sm font-black text-purple-600">Assigned</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-2xl">
                  <p className="text-[10px] text-gray-500 font-semibold">Under Review</p>
                  <p className="text-sm font-black text-amber-600">Logged</p>
                </div>
              </div>

              {/* Graph Container */}
              <div className="pt-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-gray-900">Issue Progress Flow</span>
                  <span className="text-[10px] text-gray-400 font-medium">Real-time log</span>
                </div>

                {/* SVG Progressive Line Chart */}
                <div className="h-28 w-full relative flex items-end">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path d="M 0,70 Q 50,40 100,60 T 200,45 T 300,30 L 300,100 L 0,100 Z" fill="url(#chartGradient)" />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={viewportOnce}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      d="M 0,70 Q 50,40 100,60 T 200,45 T 300,30"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="3"
                    />
                    <circle cx="50" cy="53" r="4" fill="#2563eb" />
                    <circle cx="100" cy="60" r="4" fill="#2563eb" />
                    <circle cx="200" cy="45" r="4" fill="#2563eb" />
                    <circle cx="250" cy="20" r="5" fill="#2563eb" stroke="#fff" strokeWidth="2" />
                  </svg>
                </div>
              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default DashboardShowcase;
