import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import Features from '../../components/home/Features';
import CTA from '../../components/home/CTA';

const FeaturesPage = () => {
  return (
    <div className="space-y-16 py-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Platform Features"
          subtitle="Explore the civic tools enabling transparent issue reporting and status tracking."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Features' },
          ]}
        />
      </div>

      <Features />
      <CTA />
    </div>
  );
};

export default FeaturesPage;
