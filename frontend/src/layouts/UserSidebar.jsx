import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  LayoutGrid,
  FilePlus2,
  LogOut,
  ShieldCheck
} from 'lucide-react';
import { jwtDecode } from "jwt-decode";
import { SITE_CONFIG } from '../constants/siteConfig';

const UserSidebar = ({ closeMobileMenu }) => {
  const [user] = useState(() => {
    const token = localStorage.getItem("access");
    if (!token) return null;
    try {
      return jwtDecode(token);
    } catch {
      return null;
    }
  });

  const menuItems = [
    { icon: LayoutGrid, label: 'Dashboard', path: '/dashboard' },
    { icon: FilePlus2, label: 'Report New Issue', path: '/dashboard/report' },
  ];

  return (
    <div className="h-full flex flex-col bg-white font-sans border-r border-gray-100/80 p-5 space-y-6">
      
      {/* Brand Header */}
      <Link to="/" className="flex items-center gap-3 px-2 pt-2 cursor-pointer group">
        <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-500/20">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <span className="text-xl font-black text-gray-900 tracking-tight">CivicTrack</span>
      </Link>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-1.5 overflow-y-auto">
        {menuItems.map((item) => {
          const IconComp = item.icon;
          return (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={closeMobileMenu}
              end={item.path === '/dashboard' && item.label === 'Dashboard'}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-200 font-semibold text-sm ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 font-bold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                }`
              }
            >
              <div className="flex items-center gap-3">
                <IconComp className="w-4 h-4 flex-shrink-0" />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-extrabold flex items-center justify-center shadow-xs">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Sign Out Button */}
      <div className="pt-3 border-t border-gray-100">
        <Link
          to="/logout"
          onClick={closeMobileMenu}
          className="w-full flex items-center justify-center gap-2.5 px-4 py-3 text-red-500 border border-red-100 bg-red-50/40 hover:bg-red-50 rounded-2xl transition-all font-bold text-xs"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </Link>
      </div>

    </div>
  );
};

export default UserSidebar;
