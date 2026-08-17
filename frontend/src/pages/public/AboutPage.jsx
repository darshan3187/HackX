import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import Card from '../../components/ui/Card';
import CTA from '../../components/home/CTA';
import { ShieldCheck, Target, HeartHandshake, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="space-y-16 py-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <PageHeader
          title="About CivicTrack"
          subtitle="Empowering communities with digital accountability, transparency, and public trust."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us' },
          ]}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-extrabold uppercase">
              OUR MISSION
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
              Bridging the gap between citizens and municipal authorities.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              CivicTrack was created to make city maintenance seamless, accountable, and transparent. By turning public issues into tracked digital tickets with SLA monitoring, we help municipalities respond faster and citizens see visible results in their neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center p-6 bg-blue-50/50 border-blue-100">
              <ShieldCheck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="text-2xl font-black text-gray-900">100%</h4>
              <p className="text-xs text-gray-500 font-medium">Transparent Audits</p>
            </Card>

            <Card className="text-center p-6 bg-emerald-50/50 border-emerald-100">
              <Target className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <h4 className="text-2xl font-black text-gray-900">98%</h4>
              <p className="text-xs text-gray-500 font-medium">Resolution Accuracy</p>
            </Card>

            <Card className="text-center p-6 bg-purple-50/50 border-purple-100">
              <HeartHandshake className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h4 className="text-2xl font-black text-gray-900">10k+</h4>
              <p className="text-xs text-gray-500 font-medium">Active Citizens</p>
            </Card>

            <Card className="text-center p-6 bg-amber-50/50 border-amber-100">
              <Award className="w-8 h-8 text-amber-600 mx-auto mb-2" />
              <h4 className="text-2xl font-black text-gray-900">120+</h4>
              <p className="text-xs text-gray-500 font-medium">Partner Wards</p>
            </Card>
          </div>
        </div>
      </div>

      <CTA />
    </div>
  );
};

export default AboutPage;
