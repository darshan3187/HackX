import React from 'react';
import { ShieldCheck, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { footerData } from '../data/content';
import { SITE_CONFIG } from '../constants/siteConfig';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-100">
          
          {/* Logo & Tagline Column */}
          <div className="md:col-span-6 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-gray-900 tracking-tight">CivicTrack</span>
            </Link>

            <p className="text-sm text-gray-500 max-w-md font-medium leading-relaxed">
              {footerData.tagline}
            </p>

            <div className="pt-2 text-xs text-gray-500 font-medium flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>Contact Developer: </span>
              <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-blue-600 font-bold hover:underline">
                {SITE_CONFIG.contactEmail}
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs font-medium text-gray-500">
              {footerData.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="hover:text-blue-600 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Topic Resources</h4>
            <ul className="space-y-2 text-xs font-medium text-gray-500">
              {footerData.resources.map((res, idx) => (
                <li key={idx}>
                  <Link to={res.href} className="hover:text-blue-600 transition-colors">{res.name}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-center">
          <p className="text-[11px] text-gray-400 font-medium max-w-4xl mx-auto leading-relaxed">
            {footerData.disclaimer}
          </p>
          <div className="text-xs font-bold text-gray-400">
            {footerData.copyright}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;