import React, { useState } from 'react';
import PageHeader from '../../components/ui/PageHeader';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 font-sans">
      <PageHeader
        title="Contact CivicTrack"
        subtitle="Have questions, partnership inquiries, or need support? We're here to help."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          <Card>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-gray-900">Email Us</h4>
                <p className="text-xs text-gray-500 font-medium mt-0.5">support@civictrack.org</p>
                <p className="text-xs text-gray-400 mt-1">24/7 dedicated support</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-gray-900">Call Us</h4>
                <p className="text-xs text-gray-500 font-medium mt-0.5">+1 (800) 555-CIVIC</p>
                <p className="text-xs text-gray-400 mt-1">Mon-Fri 8am to 6pm</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-gray-900">Headquarters</h4>
                <p className="text-xs text-gray-500 font-medium mt-0.5">Civic Technology Hub</p>
                <p className="text-xs text-gray-400 mt-1">100 Innovation Way, Suite 400</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="lg:col-span-2">
          {submitted ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Message Received!</h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Thank you for reaching out. A CivicTrack team member will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900">Send us a message</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-gray-700">Full Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-blue-600 focus:outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-gray-700">Email Address</label>
                  <input required type="email" placeholder="name@example.com" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-blue-600 focus:outline-none" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-700">Message</label>
                <textarea required rows="4" placeholder="How can we help you?" className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm focus:border-blue-600 focus:outline-none resize-none" />
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
