import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import ReportIssueForm from '../../features/complaints/components/ReportIssueForm';

const ReportIssue = () => {
  return (
    <div className="space-y-8 font-sans">
      <PageHeader
        title="Report a Civic Issue"
        subtitle="Submit a complaint to your local authority for real-time tracking and resolution."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Report Issue' },
        ]}
      />

      <ReportIssueForm />
    </div>
  );
};

export default ReportIssue;