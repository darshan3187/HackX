import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import HowItWorks from '../../components/home/HowItWorks';
import CTA from '../../components/home/CTA';

const HowItWorksPage = () => {
  return (
    <div className="space-y-16 py-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="How CivicTrack Works"
          subtitle="Four simple steps to transform civic complaints into verified neighborhood improvements."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'How It Works' },
          ]}
        />
      </div>

      <HowItWorks />
      <CTA />
    </div>
  );
};

export default HowItWorksPage;
