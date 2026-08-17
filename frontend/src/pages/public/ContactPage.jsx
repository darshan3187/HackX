import React, { useState } from 'react';
import PageHeader from '../../components/ui/PageHeader';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Mail, User, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../../constants/siteConfig';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 font-sans">
      {/* Page Header */}
      <PageHeader
        title="Contact CivicTrack"
        subtitle="Have questions about CivicTrack or feedback on the platform? Reach out directly."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info Column */}
        <div className="space-y-6">
          <Card>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-gray-900">Direct Email</h4>
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="text-xs text-blue-600 font-bold hover:underline mt-0.5 block"
                >
                  {SITE_CONFIG.contactEmail}
                </a>
                <p className="text-xs text-gray-400 mt-1">Primary contact inbox</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-gray-900">Developer</h4>
                <p className="text-xs text-gray-700 font-bold mt-0.5">{SITE_CONFIG.developer}</p>
                <p className="text-xs text-gray-400 mt-1">{SITE_CONFIG.developerRole}</p>
              </div>
            </div>
          </Card>

          <div className="p-5 bg-blue-50/60 border border-blue-100 rounded-2xl text-xs text-gray-600 space-y-1">
            <strong className="font-extrabold text-blue-900 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Project Note
            </strong>
            <p className="font-medium leading-relaxed">
              CivicTrack is an independent project. Inquiries are handled directly by the developer.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="lg:col-span-2">
          {submitted ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Message Received!</h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto font-medium">
                Thank you for your message. Your feedback has been sent directly to {SITE_CONFIG.developer}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900">Send a message</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-gray-700">Your Name</label>
                  <input required type="text" placeholder="Enter your name" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-blue-600 focus:outline-none text-gray-900" />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-gray-700">Email Address</label>
                  <input required type="email" placeholder="name@example.com" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-blue-600 focus:outline-none text-gray-900" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-700">Message</label>
                <textarea required rows="4" placeholder="How can we help you or improve CivicTrack?" className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm focus:border-blue-600 focus:outline-none resize-none text-gray-900" />
              </div>

              <Button type="submit" icon={Send} className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
