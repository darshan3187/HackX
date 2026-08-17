import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    const timer = setTimeout(() => {
      navigate('/login');
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans p-4">
      <div className="bg-white border border-gray-100 rounded-3xl p-8 max-w-sm w-full text-center space-y-4 shadow-xl shadow-gray-200/50">
        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
          <ShieldCheck className="w-7 h-7" />
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-black text-gray-900">Signed Out</h2>
          <p className="text-xs text-gray-500 font-medium">You have been safely logged out of CivicTrack.</p>
        </div>
        <p className="text-[11px] text-gray-400">Redirecting to login page...</p>
      </div>
    </div>
  );
};

export default Logout;
