import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import AdminStatsCards from '../../features/dashboard/components/AdminStatsCards';
import AdminCharts from '../../features/dashboard/components/AdminCharts';
import AdminComplaintsTable from '../../features/complaints/components/AdminComplaintsTable';
import API from '../../services/api';
import PageHeader from '../../components/ui/PageHeader';
import Button from '../../components/ui/Button';

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const fetchComplaints = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("access");
      const response = await API.get("/api/complaints/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setComplaints(response.data);
      setLastUpdated(new Date());
      setError(null);
    } catch (err) {
      console.error("Error fetching complaints:", err);
      setError("Failed to load authority dashboard data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 font-sans">
      <PageHeader
        title="Municipal Authority Dashboard"
        subtitle="Manage, review, and assign city-wide civic issue resolutions."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Authority Portal' },
        ]}
        action={
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 font-medium hidden sm:block">
              Updated: {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
            <Button
              variant="secondary"
              size="sm"
              isLoading={loading}
              onClick={fetchComplaints}
              icon={RefreshCw}
            >
              Refresh Data
            </Button>
          </div>
        }
      />

      {error ? (
        <div className="bg-rose-50 border border-rose-200 text-rose-700 px-6 py-4 rounded-2xl flex items-center justify-between font-medium text-sm">
          <span>{error}</span>
          <Button variant="danger" size="sm" onClick={fetchComplaints}>
            Retry
          </Button>
        </div>
      ) : (
        <>
          <AdminStatsCards complaints={complaints} />
          <AdminCharts complaints={complaints} />
          <AdminComplaintsTable complaints={complaints} />
        </>
      )}

    </div>
  );
};

export default AdminDashboard;