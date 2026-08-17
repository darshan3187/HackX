import React from 'react';
import LoginForm from '../../features/auth/components/LoginForm';
import { ShieldCheck, Star } from 'lucide-react';

const Login = () => {
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
            TRANSPARENT CIVIC GOVERNANCE
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white leading-tight">
            Building accountable, cleaner, and safer cities together.
          </h2>

          <p className="text-slate-300 text-sm font-normal leading-relaxed">
            Join over 10,000+ active citizens reporting potholes, street lights, and municipal issues with real-time status updates.
          </p>

          <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
            <div className="flex -space-x-2">
              <img className="w-9 h-9 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" alt="User" />
              <img className="w-9 h-9 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" alt="User" />
              <img className="w-9 h-9 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="User" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-white ml-1">4.8/5</span>
              </div>
              <p className="text-xs text-slate-400">Trusted by citizens nationwide</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-xs text-slate-500 font-medium">
          © 2026 CivicTrack. Empowering citizens everywhere.
        </div>
      </div>

      {/* Right Auth Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="bg-white border border-gray-100 p-8 sm:p-12 rounded-3xl shadow-xl shadow-gray-200/50 w-full max-w-md">
          <LoginForm />
        </div>
      </div>

    </div>
  );
};

export default Login;