import React from 'react';
import { Zap, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const KeyFeatures = () => {
  return (
    <section id="features" className="bg-[#0B132B] text-white py-24 relative overflow-hidden font-sans">
      
      {/* Background Decorative Mesh / Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs font-bold tracking-widest text-cyan-400 uppercase">
            WHY CIVICTRACK?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Powerful features for <span className="text-blue-400">transparent governance</span>
          </h2>
        </div>

        {/* 3 Dark Glass Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Real-time Tracking</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Track your complaint in real-time with live updates at every step of the resolution process.
                </p>
              </div>
            </div>
            <div className="pt-6">
              <Link to="/dashboard" className="inline-flex items-center text-xs font-semibold text-slate-300 hover:text-blue-400 transition-colors gap-1.5">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-emerald-600/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Transparent Process</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Complete visibility into the resolution process with direct access to assigned municipal departments.
                </p>
              </div>
            </div>
            <div className="pt-6">
              <Link to="/dashboard" className="inline-flex items-center text-xs font-semibold text-slate-300 hover:text-emerald-400 transition-colors gap-1.5">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl hover:border-purple-500/50 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-purple-600/20 border border-purple-500/30 rounded-2xl flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Verified Resolution</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Photo proof and citizen feedback ensure strict accountability before issues are marked complete.
                </p>
              </div>
            </div>
            <div className="pt-6">
              <Link to="/dashboard" className="inline-flex items-center text-xs font-semibold text-slate-300 hover:text-purple-400 transition-colors gap-1.5">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default KeyFeatures;