import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LayoutDashboard, FilePlus2, LogOut, ShieldCheck } from 'lucide-react';
import { jwtDecode } from "jwt-decode";

const UserSidebar = ({ closeMobileMenu }) => {
  const [user] = React.useState(() => {
    const token = localStorage.getItem("access");
    if (!token) return null;
    try {
      return jwtDecode(token);
    } catch {
      return null;
    }
  });

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard Overview', path: '/dashboard' },
    { icon: FilePlus2, label: 'Report New Issue', path: '/dashboard/report' },
  ];

  return (
    <div className="h-full flex flex-col bg-white font-sans border-r border-gray-100">
      
      {/* Mobile Profile Header */}
      <div className="p-4 border-b border-gray-100 block lg:hidden space-y-2">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold border border-blue-200">
            {user?.username?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 capitalize">{user?.username || 'Citizen'}</h3>
            <p className="text-xs text-gray-400 font-medium">{user?.email || 'citizen@civictrack.org'}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1.5 mt-2">
        <div className="px-3 pb-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          Citizen Portal
        </div>
        {menuItems.map((item) => {
          const IconComp = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMobileMenu}
              end={item.path === '/dashboard'}
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

export default UserSidebar;