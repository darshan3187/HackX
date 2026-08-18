import React, { useState } from 'react';
import Footer from './Footer';
import UserSidebar from './UserSidebar';
import { Outlet, Link } from 'react-router-dom';
import { X, Menu, ShieldCheck } from 'lucide-react';

const UserLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-gray-900">

      {/* Mobile Header Bar */}
      <div className="lg:hidden bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-xs">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="text-lg font-black text-gray-900 tracking-tight">CivicTrack</span>
        </Link>
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 text-gray-600 hover:text-gray-900 rounded-lg focus:outline-none"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <div className="flex flex-1 w-full relative">

        {/* Sidebar Drawer */}
        <aside className={`
          fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:block lg:w-64 lg:min-h-screen lg:z-30
          ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
        `}>

          <div className="p-4 flex items-center justify-between lg:hidden border-b border-gray-50">
            <span className="font-bold text-gray-900 text-sm">Dashboard Menu</span>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <UserSidebar closeMobileMenu={() => setIsSidebarOpen(false)} />
        </aside>

        {/* Mobile Backdrop */}
        <div
          className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
            isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsSidebarOpen(false)}
        ></div>

        {/* Main Content Viewport */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-hidden">
          <Outlet />
        </main>

      </div>

      <Footer />
    </div>
  );
};

export default UserLayout;