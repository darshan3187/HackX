import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StatusBadge from "../ui/StatusBadge";
import EmptyState from "../ui/EmptyState";
import { API_BASE_URL } from "../../services/api";

const AdminComplaintsTable = ({ complaints = [] }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(complaints.length / itemsPerPage) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentComplaints = complaints.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  if (complaints.length === 0) {
    return (
      <EmptyState
        title="No complaints registered"
        description="There are currently no complaints in the system matching this criteria."
      />
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col font-sans">

      <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-white">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Complaints Register</h2>
          <p className="text-xs text-gray-500 font-medium mt-0.5">Municipal authority review & resolution portal</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50/60 border-b border-gray-100">
            <tr>
              <th className="px-6 py-3.5 text-xs font-bold text-gray-400 uppercase tracking-wider">Complaint</th>
              <th className="px-6 py-3.5 text-xs font-bold text-gray-400 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3.5 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3.5 text-xs font-bold text-gray-400 uppercase tracking-wider">Date Reported</th>
              <th className="px-6 py-3.5 text-xs font-bold text-gray-400 uppercase tracking-wider">Location</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {currentComplaints.map((item) => (
              <tr
                key={item.id}
                onClick={() => navigate(`/admin/complaint/${item.id}`)}
                className="hover:bg-blue-50/30 transition-colors cursor-pointer group"
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
                      className="w-10 h-10 rounded-xl object-cover border border-gray-100 flex-shrink-0"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=150&auto=format&fit=crop";
                      }}
                    />
                    <div>
                      <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{item.title}</p>
                      <p className="text-xs text-gray-400 font-medium">ID: #{item.id}</p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 text-xs font-semibold text-gray-600">
                  <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-lg">
                    {item.category?.replace(/_/g, " ")}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <StatusBadge status={item.status} />
                </td>

                <td className="px-6 py-4 text-xs font-medium text-gray-400 whitespace-nowrap">
                  {new Date(item.created_at).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                  })}
                </td>

                <td className="px-6 py-4 text-xs font-medium text-gray-500 max-w-[200px] truncate">
                  {item.street}, {item.area}, {item.city}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/40 flex items-center justify-between">
        <span className="text-xs text-gray-500 font-medium">
          Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, complaints.length)} of {complaints.length}
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-white disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-bold text-gray-700 px-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-white disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default AdminComplaintsTable;
