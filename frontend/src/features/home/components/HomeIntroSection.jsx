import React from 'react';
import { ArrowRight, ExternalLink, MapPin, CheckCircle2, Clock, FileText, TrendingUp, Users, Building2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeIntroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50/40 via-white to-white font-sans overflow-hidden">
      
      {/* Background Subtle Grid & Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-blue-100/40 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-blue-600 uppercase">
                Smarter Communities. Stronger Cities.
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.12]">
              Report Issues.<br />
              Track Resolution.<br />
              <span className="text-blue-600">Build Better Together.</span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-gray-600 max-w-xl font-normal leading-relaxed">
              CivicTrack is a transparent digital platform that helps citizens report civic issues, track real-time progress, and ensure accountability in their communities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link 
                to="/dashboard/report"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
              >
                Report an Issue <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/dashboard"
                className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all"
              >
                View Live Dashboard <ExternalLink className="w-4 h-4 text-gray-400" />
              </Link>
            </div>

            {/* Ratings & Social Proof */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100/80 max-w-md">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" alt="User 1" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" alt="User 2" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="User 3" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" alt="User 4" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm font-bold text-gray-900 ml-1">4.8/5</span>
                </div>
                <p className="text-xs text-gray-500 font-medium">Trusted by 10,000+ active citizens</p>
              </div>
            </div>

          </div>

          {/* Right Hero Skyscraper Image & Floating Status Cards */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Skyscraper Card with Arch Curve */}
            <div className="relative w-full max-w-md h-[500px] sm:h-[540px] rounded-[40px] lg:rounded-l-[120px] lg:rounded-r-[40px] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" 
                alt="City Skyscraper" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            {/* Floating Card 1: Pothole (Top Left Overlay) */}
            <div className="absolute top-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3.5 pr-5 rounded-2xl border border-gray-100 shadow-xl flex items-center gap-3.5 z-20 animate-bounce-subtle">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Pothole on 5th Street</h4>
                <span className="inline-block mt-0.5 text-[10px] font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
                  Under Review
                </span>
              </div>
            </div>

            {/* Floating Card 2: Street Light Out (Middle Left Overlay) */}
            <div className="absolute top-36 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 pr-5 rounded-2xl border border-gray-100 shadow-xl flex items-center gap-3.5 z-20">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Street Light Out</h4>
                <span className="inline-block mt-0.5 text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                  Resolved
                </span>
              </div>
            </div>

            {/* Floating Card 3: Garbage Not Collected (Bottom Left Overlay) */}
            <div className="absolute bottom-10 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3.5 pr-5 rounded-2xl border border-gray-100 shadow-xl flex items-center gap-3.5 z-20">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Garbage Not Collected</h4>
                <span className="inline-block mt-0.5 text-[10px] font-semibold text-purple-600 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-full">
                  In Progress
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Floating Stat Metric Bar */}
        <div className="mt-16 sm:mt-24">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-gray-200/50 border border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center max-w-6xl mx-auto">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">1,247</p>
                <p className="text-xs font-medium text-gray-500">Issues Resolved</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">3.2</p>
                <p className="text-xs font-medium text-gray-500">Days Avg. Response</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">98%</p>
                <p className="text-xs font-medium text-gray-500">Citizen Satisfaction</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">120+</p>
                <p className="text-xs font-medium text-gray-500">Cities Empowered</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeIntroSection;