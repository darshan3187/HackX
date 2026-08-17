import React, { useState } from 'react';
import { Link2, Check, Linkedin, Twitter, MessageCircle, Share2 } from 'lucide-react';

const ShareBar = ({ title, url }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const encodedTitle = encodeURIComponent(title || 'CivicTrack Article');
  const encodedUrl = encodeURIComponent(shareUrl);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-6 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-semibold text-gray-600">
      <div className="flex items-center gap-2">
        <Share2 className="w-4 h-4 text-blue-600" />
        <span className="text-gray-900 font-bold">Share this article</span>
      </div>

      <div className="flex items-center gap-2">
        {/* Copy Link Button */}
        <button
          onClick={handleCopy}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all ${
            copied
              ? 'bg-emerald-600 text-white border-emerald-600'
              : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-100'
          }`}
          title="Copy Article Link"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Link Copied!</span>
            </>
          ) : (
            <>
              <Link2 className="w-3.5 h-3.5" />
              <span>Copy Link</span>
            </>
          )}
        </button>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white border border-gray-200 rounded-xl text-gray-700 hover:text-blue-600 hover:border-blue-200 transition-colors"
          title="Share on LinkedIn"
        >
          <Linkedin className="w-3.5 h-3.5" />
        </a>

        {/* X / Twitter */}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white border border-gray-200 rounded-xl text-gray-700 hover:text-blue-600 hover:border-blue-200 transition-colors"
          title="Share on X (Twitter)"
        >
          <Twitter className="w-3.5 h-3.5" />
        </a>

        {/* WhatsApp */}
        <a
          href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white border border-gray-200 rounded-xl text-gray-700 hover:text-emerald-600 hover:border-emerald-200 transition-colors"
          title="Share on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export default ShareBar;
