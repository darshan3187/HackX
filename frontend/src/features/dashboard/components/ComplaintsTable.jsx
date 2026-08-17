import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { API_BASE_URL } from '../../../services/api';
import { complaintService } from '../../../services/complaints';
import { formatDate } from '../../../utils/date';
import StatusBadge from '../../../components/ui/StatusBadge';
import Button from '../../../components/ui/Button';
import EmptyState from '../../../components/ui/EmptyState';
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

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden font-sans">
      
      {/* Table Header */}
      <div className="p-6 sm:p-8 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Recent Complaints</h2>
          <p className="text-xs text-gray-500 font-medium mt-0.5">Latest civic issues reported in your area</p>
        </div>
        <Button
          onClick={() => navigate('/dashboard/report')}
          variant="secondary"
          size="sm"
          icon={Plus}
        >
          Report New Issue
        </Button>
      </div>

      {/* Complaints Table or Empty State */}
      {allComplaints.length === 0 ? (
        <EmptyState
          title="No issues reported yet"
          description="You haven't submitted any civic complaints yet. Report your first issue to track its resolution status."
          actionText="Report First Issue"
          onAction={() => navigate('/dashboard/report')}
        />
      ) : (
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
                        className="w-11 h-11 rounded-xl object-cover shadow-2xs border border-gray-100"
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
      )}

    </div>
  );
};

export default ComplaintsTable;