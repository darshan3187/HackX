import React from 'react';
import SignupForm from '../../features/auth/components/SignupForm';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const Signup = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex bg-slate-50 font-sans">
      
      {/* Left Brand Visual Side (Desktop) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#0B132B] text-white p-12 lg:p-16 flex-col justify-between overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

        <div className="relative z-10 space-y-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-xl font-black tracking-tight text-white">CivicTrack</span>
          </div>
        </div>

        <div className="relative z-10 space-y-6 max-w-lg">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full text-blue-400 text-xs font-bold uppercase tracking-wider">
            GET STARTED FOR FREE
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white leading-tight">
            Start reporting issues and driving real change in your neighborhood.
          </h2>

          <ul className="space-y-3 pt-2 text-sm text-slate-300 font-medium">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-blue-400" /> Instant issue submission with photos
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-blue-400" /> Direct connection to municipal authorities
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-blue-400" /> Live resolution tracking & notifications
            </li>
          </ul>
        </div>

        <div className="relative z-10 text-xs text-slate-500 font-medium">
          © 2026 CivicTrack. Empowering citizens everywhere.
        </div>
      </div>

      {/* Right Auth Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="bg-white border border-gray-100 p-8 sm:p-12 rounded-3xl shadow-xl shadow-gray-200/50 w-full max-w-md">
          <SignupForm />
        </div>
      </div>

    </div>
  );
};

export default Signup;