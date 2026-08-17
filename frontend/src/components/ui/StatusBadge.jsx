import React from 'react';

const statusConfig = {
  RESOLVED: {
    label: "Resolved",
    bg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dot: "bg-emerald-500",
  },
  "IN PROGRESS": {
    label: "In Progress",
    bg: "bg-purple-50 text-purple-700 border-purple-200",
    dot: "bg-purple-500",
  },
  IN_PROGRESS: {
    label: "In Progress",
    bg: "bg-purple-50 text-purple-700 border-purple-200",
    dot: "bg-purple-500",
  },
  "UNDER REVIEW": {
    label: "Under Review",
    bg: "bg-blue-50 text-blue-700 border-blue-200",
    dot: "bg-blue-500",
  },
  UNDER_REVIEW: {
    label: "Under Review",
    bg: "bg-blue-50 text-blue-700 border-blue-200",
    dot: "bg-blue-500",
  },
  PENDING: {
    label: "Pending",
    bg: "bg-amber-50 text-amber-700 border-amber-200",
    dot: "bg-amber-500",
  },
  REJECTED: {
    label: "Rejected",
    bg: "bg-rose-50 text-rose-700 border-rose-200",
    dot: "bg-rose-500",
  },
};

const StatusBadge = ({ status = "PENDING" }) => {
  const normalizedKey = String(status).toUpperCase().trim();
  const config = statusConfig[normalizedKey] || {
    label: status,
    bg: "bg-gray-50 text-gray-700 border-gray-200",
    dot: "bg-gray-400",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border shadow-2xs ${config.bg}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  );
};

export default StatusBadge;
