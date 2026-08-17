import React from 'react';

export const CardSkeleton = () => {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 space-y-4 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 bg-gray-100 rounded-2xl" />
        <div className="w-20 h-6 bg-gray-100 rounded-full" />
      </div>
      <div className="h-6 bg-gray-100 rounded-lg w-3/4" />
      <div className="h-4 bg-gray-100 rounded-lg w-1/2" />
    </div>
  );
};

export const TableSkeleton = ({ rows = 5 }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 space-y-4 animate-pulse">
      <div className="h-8 bg-gray-100 rounded-xl w-full" />
      {[...Array(rows)].map((_, i) => (
        <div key={i} className="flex items-center justify-between gap-4 py-3 border-b border-gray-50">
          <div className="flex items-center gap-3 w-1/3">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex-shrink-0" />
            <div className="h-4 bg-gray-100 rounded w-full" />
          </div>
          <div className="h-4 bg-gray-100 rounded w-1/6" />
          <div className="h-4 bg-gray-100 rounded w-1/6" />
          <div className="h-6 bg-gray-100 rounded-full w-20" />
        </div>
      ))}
    </div>
  );
};
