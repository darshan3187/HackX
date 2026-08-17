import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import Card from '../../components/ui/Card';
import CTA from '../../components/home/CTA';
import { ShieldCheck, User, Code2, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../../constants/siteConfig';

const AboutPage = () => {
  return (
    <div className="space-y-16 py-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <PageHeader
          title="About CivicTrack"
          subtitle="An independent civic technology project focused on transparent issue reporting and status tracking."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us' },
          ]}
        />

        {/* Project Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-extrabold border border-blue-100">
              INDEPENDENT CIVIC TECH PROJECT
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
              Making civic reporting clearer, accessible, and transparent.
            </h2>

            <div className="space-y-4 text-gray-600 text-sm leading-relaxed font-medium">
              <p>
                <strong>CivicTrack</strong> is an independent civic technology project built by <strong>{SITE_CONFIG.developer}</strong> as a solo developer project.
              </p>
              <p>
                The project was created to address a common problem in community governance: when citizens encounter broken streetlights, road potholes, or uncollected waste in their neighborhoods, reporting and following up on resolution status often lacks transparency.
              </p>
              <p>
                CivicTrack provides a clean digital interface where residents can submit geotagged complaints with photo evidence, monitor status milestones as tickets move through evaluation stages, and verify completed work.
              </p>
            </div>

            {/* Developer Identity Card */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50/60 border border-blue-100 rounded-3xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 text-sm">{SITE_CONFIG.developer}</h3>
                  <p className="text-xs text-blue-600 font-bold">{SITE_CONFIG.developerRole}</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 font-medium leading-relaxed">
                "CivicTrack was designed to demonstrate how modern web technologies can make civic issue tracking open, structured, and easy for everyday citizens to use."
              </p>
              <p className="text-xs text-gray-500 font-semibold">
                Contact: <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-blue-600 hover:underline">{SITE_CONFIG.contactEmail}</a>
              </p>
            </div>
          </div>

          {/* Right Column: Principles & Functional Scope */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="space-y-4 border-blue-100 bg-white">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span>What CivicTrack Does</span>
              </h3>
              <ul className="space-y-2.5 text-xs text-gray-600 font-medium leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Allows citizens to register, submit issues, and attach geotagged location markers and photos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Provides real-time application status updates as tickets progress through review stages.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Displays a public dashboard feed for transparent neighborhood issue visibility.</span>
                </li>
              </ul>
            </Card>

            <Card className="space-y-4 border-amber-200/80 bg-amber-50/40">
              <h3 className="text-lg font-bold text-amber-900 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <span>Scope & Disclaimer</span>
              </h3>
              <ul className="space-y-2.5 text-xs text-amber-950 font-medium leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>CivicTrack is an <strong>independent project</strong> and is not a government body or official municipal portal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>For life-threatening emergencies (fire, medical, police), always contact your local emergency services (e.g. 100 / 112 / 911).</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Mandatory Independence Banner */}
        <div className="p-6 bg-gray-50 border border-gray-200 rounded-3xl text-center space-y-2">
          <p className="text-xs text-gray-600 font-medium max-w-3xl mx-auto">
            {SITE_CONFIG.disclaimer}
          </p>
        </div>
      </div>

      <CTA />
    </div>
  );
};

export default AboutPage;
