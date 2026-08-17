import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { API_BASE_URL } from '../../../services/api';
import { complaintService } from '../../../services/complaints';
import { formatDate } from '../../../utils/date';
import StatusBadge from '../../../components/ui/StatusBadge';
import { TableSkeleton } from '../../../components/ui/SkeletonLoader';

const ComplaintsTable = () => {
  const navigate = useNavigate();
  const [allComplaints, setAllComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const data = await complaintService.getComplaints();
        setAllComplaints(data);
      } catch (error) {
        console.error("Error fetching complaints:", error.response?.data);
      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  if (loading) {
    return <TableSkeleton rows={4} />;
  }

  if (allComplaints.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-14 text-center flex flex-col items-center justify-center space-y-6 shadow-xs min-h-[380px] font-sans">
        
        {/* Custom Clipboard & Magnifying Glass Illustration */}
        <div className="relative w-36 h-36 flex items-center justify-center">
          {/* Subtle Background City Skyline Dots */}
          <div className="absolute inset-0 bg-blue-50/50 rounded-full blur-xl -z-10" />
          
          <svg className="w-32 h-32 text-blue-500" viewBox="0 0 120 120" fill="none">
            {/* Clipboard Body */}
            <rect x="35" y="25" width="50" height="65" rx="8" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="3" />
            <rect x="47" y="18" width="26" height="12" rx="4" fill="#3B82F6" />
            <circle cx="60" cy="24" r="3" fill="white" />
            {/* Paper Lines */}
            <rect x="45" y="42" width="30" height="3" rx="1.5" fill="#BFDBFE" />
            <rect x="45" y="50" width="22" height="3" rx="1.5" fill="#BFDBFE" />
            <rect x="45" y="58" width="26" height="3" rx="1.5" fill="#BFDBFE" />
            {/* Magnifying Glass Overlay */}
            <circle cx="70" cy="72" r="16" fill="white" stroke="#2563EB" strokeWidth="4" />
            <line x1="82" y1="84" x2="96" y2="98" stroke="#2563EB" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Text */}
        <div className="space-y-2 max-w-md">
          <h3 className="text-xl font-black text-gray-900 tracking-tight">No issues reported yet</h3>
          <p className="text-xs text-gray-500 font-medium leading-relaxed">
            You haven't submitted any civic complaints yet. Report your first issue to help improve your community.
          </p>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate('/dashboard/report')}
          className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs px-6 py-3 rounded-2xl shadow-md shadow-blue-500/20 flex items-center gap-2 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Report First Issue</span>
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-xs overflow-hidden font-sans">
      <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Your Civic Reports</h2>
          <p className="text-xs text-gray-500 font-medium mt-0.5">Track real-time updates on submitted complaints</p>
        </div>
        <button
          onClick={() => navigate('/dashboard/report')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-1.5 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Report New Issue</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50/60 border-b border-gray-100">
            <tr>
              <th className="px-6 py-3.5 text-xs font-bold text-gray-400 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3.5 text-xs font-bold text-gray-400 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3.5 text-xs font-bold text-gray-400 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3.5 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3.5 text-xs font-bold text-gray-400 uppercase tracking-wider">Reported Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {allComplaints.map((item) => (
              <tr
                key={item.id}
                onClick={() => navigate(`/dashboard/complaint/${item.id}`)}
                className="hover:bg-blue-50/30 transition-colors group cursor-pointer"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={
                        item.image?.startsWith("http")
                          ? item.image
                          : `${API_BASE_URL}${item.image}`
                      }
                      alt={item.title}
                      className="w-11 h-11 rounded-xl object-cover border border-gray-100 shadow-2xs"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=150&auto=format&fit=crop";
                      }}
                    />
                    <div>
                      <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{item.title}</p>
                      <p className="text-xs text-gray-400 font-medium">by {item.user}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-semibold text-gray-600">
                  <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-lg">
                    {item.category?.replace("_", " ").toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4 text-xs text-gray-500 font-medium max-w-[220px] truncate">
                  {item.street}, {item.area}, {item.city}
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={item.status} />
                </td>
                <td className="px-6 py-4 text-xs font-medium text-gray-400 whitespace-nowrap">
                  {formatDate(item.created_at)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComplaintsTable;