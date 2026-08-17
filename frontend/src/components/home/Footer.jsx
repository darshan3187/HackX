import React from 'react';
import { ShieldCheck, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { footerData } from '../../data/content';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-100">
          
          {/* Logo & Tagline Column */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-gray-900 tracking-tight">CivicTrack</span>
            </Link>

            <p className="text-sm text-gray-500 max-w-sm font-medium leading-relaxed">
              {footerData.tagline}
            </p>
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
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-xs font-medium text-gray-500">
              {footerData.resources.map((res, idx) => (
                <li key={idx}>
                  <Link to={res.href} className="hover:text-blue-600 transition-colors">{res.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons Column */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Follow Us</h4>
            <div className="flex items-center gap-3 text-gray-600">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow CivicTrack on X (Twitter)" className="hover:text-blue-600 transition-colors p-1.5 rounded-lg hover:bg-gray-50">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow CivicTrack on Facebook" className="hover:text-blue-600 transition-colors p-1.5 rounded-lg hover:bg-gray-50">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow CivicTrack on Instagram" className="hover:text-blue-600 transition-colors p-1.5 rounded-lg hover:bg-gray-50">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Follow CivicTrack on LinkedIn" className="hover:text-blue-600 transition-colors p-1.5 rounded-lg hover:bg-gray-50">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center text-xs font-medium text-gray-400">
          {footerData.copyright}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
