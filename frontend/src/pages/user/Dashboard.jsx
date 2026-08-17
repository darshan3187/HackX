import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import StatsCards from '../../features/dashboard/components/StatsCards';
import ComplaintsTable from '../../features/dashboard/components/ComplaintsTable';

const Dashboard = () => {
  return (
    <div className="space-y-8 font-sans">
      <PageHeader
        title="Citizen Dashboard"
        subtitle="Monitor and track the real-time resolution status of your civic complaints."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Dashboard' },
        ]}
      />

      <StatsCards />

      <ComplaintsTable />
    </div>
  );
};

export default Dashboard;