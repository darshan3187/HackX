import React from 'react';
import PageLoader from '../../components/common/PageLoader';
import Hero from '../../components/home/Hero';
import Metrics from '../../components/home/Metrics';
import Features from '../../components/home/Features';
import HowItWorks from '../../components/home/HowItWorks';
import DashboardShowcase from '../../components/home/DashboardShowcase';
import Testimonials from '../../components/home/Testimonials';
import CTA from '../../components/home/CTA';

const Home = () => {
  return (
    <>
      {/* 600ms Initial Page Load Reveal */}
      <PageLoader />

      {/* Main Semantic Landmark Container */}
      <main id="home-page" className="w-full overflow-hidden font-sans bg-white">
        <Hero />
        <Metrics />
        <Features />
        <HowItWorks />
        <DashboardShowcase />
        <Testimonials />
        <CTA />
      </main>
    </>
  );
};

export default Home;