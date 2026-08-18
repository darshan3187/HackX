import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Calendar as CalendarIcon,
  Bell,
  Mail
} from 'lucide-react';
import { jwtDecode } from 'jwt-decode';
import StatsCards from '../../components/dashboard/StatsCards';
import ComplaintsTable from '../../components/dashboard/ComplaintsTable';
import { SITE_CONFIG } from '../../constants/siteConfig';

const Dashboard = () => {
  const navigate = useNavigate();

  const [user] = useState(() => {
    const token = localStorage.getItem('access');
    if (!token) return null;
    try {
      return jwtDecode(token);
    } catch {
      return null;
    }
  });

  const username = user?.username || 'Darshan Rajgor';
  const initial = username.charAt(0).toUpperCase();

  // Dynamic formatted date string matching "May 24, 2026 | Sunday, 10:30 AM"
  const formattedDate = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  const formattedTime = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
  }) + ', 10:30 AM';

  return (
    <div className="space-y-8 font-sans pb-12">
      {/* Top Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-2 border-b border-gray-100/60">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-gray-400">Welcome back,</span>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight flex items-center gap-2">
            <span>{username}</span>
            <span>👋</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 font-medium">
            Here's what's happening with your civic reports.
          </p>
        </div>

        {/* Right Header Controls */}
        <div className="flex items-center gap-4">
          {/* Date Widget */}
          <div className="hidden sm:flex items-center gap-3 bg-white border border-gray-100 px-4 py-2 rounded-2xl shadow-xs text-xs font-semibold text-gray-600">
            <CalendarIcon className="w-4 h-4 text-blue-600" />
            <div>
              <p className="font-bold text-gray-900 leading-tight">{formattedDate}</p>
              <p className="text-[10px] text-gray-400 font-medium">{formattedTime}</p>
            </div>
          </div>


          {/* User Avatar Initial */}
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-blue-500/20 border-2 border-white">
            {initial}
          </div>
        </div>
      </div>

      {/* 4 Summary Cards Grid */}
      <StatsCards />

      {/* Main Content & Right Sidebar Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Complaints Table or Empty State */}
        <div className="lg:col-span-8">
          <ComplaintsTable />
        </div>

        {/* Right Column: Recent Activity */}
        <div className="lg:col-span-4 space-y-6">
          {/* Recent Activity Card */}
          <div className="bg-white rounded-3xl border border-gray-100 p-6 space-y-6 shadow-xs">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-extrabold text-gray-900">Recent Activity</h3>
              <Link to="/dashboard" className="text-xs font-bold text-blue-600 hover:underline">
                View All
              </Link>
            </div>

            <div className="py-8 text-center flex flex-col items-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold text-gray-900">No recent activity</p>
              <p className="text-[11px] text-gray-400 font-medium max-w-[200px]">
                Your recent activities will appear here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;