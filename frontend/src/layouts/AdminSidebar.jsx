import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LayoutDashboard, ShieldCheck, LogOut } from 'lucide-react';

const AdminSidebar = ({ closeMobileMenu }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Authority Overview', path: '/admin' },
  ];

  return (
    <div className="h-full flex flex-col bg-white font-sans border-r border-gray-100">
      
      {/* Brand Header */}
      <div className="p-6 hidden lg:block border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-black text-gray-900 tracking-tight">CivicTrack</h3>
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Authority Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-1.5 mt-2">
        <div className="px-3 pb-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          Management
        </div>
        {menuItems.map((item) => {
          const IconComp = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMobileMenu}
              end={item.path === '/admin'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 font-semibold text-sm ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                }`
              }
            >
              <IconComp className="w-5 h-5 flex-shrink-0" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-gray-100">
        <Link
          to="/logout"
          onClick={closeMobileMenu}
          className="w-full flex items-center gap-3 px-4 py-3 text-rose-600 hover:bg-rose-50 rounded-2xl transition-all font-semibold text-sm"
        >
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </Link>
      </div>

    </div>
  );
};

export default AdminSidebar;
