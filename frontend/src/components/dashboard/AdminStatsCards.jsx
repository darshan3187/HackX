import React from "react";
import { FileText, Clock, TrendingUp, CheckCircle2 } from "lucide-react";
import Card from "../ui/Card";

const AdminStatsCards = ({ complaints = [] }) => {
  const stats = [
    {
      label: "Total Complaints",
      value: complaints.length,
      icon: FileText,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "Pending Review",
      value: complaints.filter(c => c.status === "PENDING").length,
      icon: Clock,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      label: "In Progress",
      value: complaints.filter(c => c.status === "IN_PROGRESS" || c.status === "UNDER_REVIEW").length,
      icon: TrendingUp,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      label: "Resolved",
      value: complaints.filter(c => ["RESOLVED_BY_AUTHORITY", "CLOSED", "RESOLVED"].includes(c.status)).length,
      icon: CheckCircle2,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
      {stats.map((stat, index) => {
        const IconComp = stat.icon;
        return (
          <Card key={index} hoverable className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                {stat.label}
              </p>
              <h3 className="text-3xl font-black text-gray-900 leading-none">
                {stat.value}
              </h3>
            </div>
            <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center flex-shrink-0`}>
              <IconComp className="w-6 h-6" />
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default AdminStatsCards;
