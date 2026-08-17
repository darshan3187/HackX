import React, { useState, useEffect } from 'react';
import { FileText, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import API from '../../../services/api';
import Card from '../../../components/ui/Card';

const StatsCards = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const token = localStorage.getItem("access");
        const response = await API.get("/api/complaints/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setComplaints(response.data);
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

  const stats = [
    { label: 'Total Reported', value: total, icon: FileText, bg: 'bg-blue-50', text: 'text-blue-600' },
    { label: 'Under Review / Progress', value: inProgress, icon: Clock, bg: 'bg-purple-50', text: 'text-purple-600' },
    { label: 'Resolved Issues', value: resolved, icon: CheckCircle2, bg: 'bg-emerald-50', text: 'text-emerald-600' },
    { label: 'Pending Action', value: pending, icon: AlertCircle, bg: 'bg-amber-50', text: 'text-amber-600' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
      {stats.map((stat, index) => {
        const IconComp = stat.icon;
        return (
          <Card key={index} hoverable className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-3xl font-black text-gray-900 leading-none">{stat.value}</h3>
            </div>
            <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.text} flex items-center justify-center flex-shrink-0`}>
              <IconComp className="w-6 h-6" />
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsCards;
