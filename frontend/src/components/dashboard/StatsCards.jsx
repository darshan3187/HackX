import React, { useState, useEffect } from 'react';
import { FileText, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { complaintService } from '../../services/complaints';

const StatsCards = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const data = await complaintService.getComplaints();
        setComplaints(data);
      } catch (error) {
        console.error("Error fetching complaints:", error.response?.data);
      }
    };

    fetchComplaints();
  }, []);

  const total = complaints.length;
  const normalize = (status) => status?.toLowerCase().replace(" ", "_");

  const inProgress = complaints.filter(c => normalize(c.status) === "in_progress" || normalize(c.status) === "under_review").length;
  const resolved = complaints.filter(c => normalize(c.status) === "closed" || normalize(c.status) === "resolved").length;
  const pending = complaints.filter(c => normalize(c.status) === "pending" || normalize(c.status) === "reopened").length;

  const cards = [
    {
      title: 'Total Reported',
      value: total,
      subtitle: 'All your civic issues',
      icon: FileText,
      iconBg: 'bg-blue-600 text-white',
      cardBg: 'bg-blue-50/40 border-blue-100/80',
      sparklineColor: '#2563eb',
      sparklinePath: 'M 0,25 Q 20,20 40,15 T 80,5',
    },
    {
      title: 'Under Review / Progress',
      value: inProgress,
      subtitle: 'Currently being reviewed',
      icon: Clock,
      iconBg: 'bg-purple-600 text-white',
      cardBg: 'bg-purple-50/40 border-purple-100/80',
      sparklineColor: '#9333ea',
      sparklinePath: 'M 0,20 Q 20,25 40,10 T 80,12',
    },
    {
      title: 'Resolved Issues',
      value: resolved,
      subtitle: 'Successfully resolved',
      icon: CheckCircle2,
      iconBg: 'bg-emerald-600 text-white',
      cardBg: 'bg-emerald-50/40 border-emerald-100/80',
      sparklineColor: '#059669',
      sparklinePath: 'M 0,22 Q 20,15 40,18 T 80,5',
    },
    {
      title: 'Pending Action',
      value: pending,
      subtitle: 'Awaiting action',
      icon: AlertCircle,
      iconBg: 'bg-amber-600 text-white',
      cardBg: 'bg-amber-50/40 border-amber-100/80',
      sparklineColor: '#ea580c',
      sparklinePath: 'M 0,24 Q 20,18 40,22 T 80,8',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 font-sans">
      {cards.map((card, index) => {
        const IconComp = card.icon;
        return (
          <div
            key={index}
            className={`rounded-3xl p-5 border ${card.cardBg} flex flex-col justify-between space-y-4 relative overflow-hidden transition-all duration-200 hover:shadow-sm`}
          >
            {/* Header & Icon */}
            <div className="flex items-center justify-between">
              <div className={`w-9 h-9 rounded-xl ${card.iconBg} flex items-center justify-center shadow-xs`}>
                <IconComp className="w-5 h-5" />
              </div>
            </div>

            {/* Title & Count */}
            <div className="space-y-1">
              <p className="text-xs font-bold text-gray-700">{card.title}</p>
              <h3 className="text-3xl font-black text-gray-900 leading-none">{card.value}</h3>
            </div>

            {/* Subtitle & Sparkline Graph */}
            <div className="flex items-end justify-between pt-1">
              <span className="text-[11px] text-gray-400 font-medium">{card.subtitle}</span>

              {/* Sparkline SVG */}
              <div className="w-20 h-7 flex items-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 80 30">
                  <path
                    d={card.sparklinePath}
                    fill="none"
                    stroke={card.sparklineColor}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
