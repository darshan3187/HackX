import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Home } from 'lucide-react';
import Button from '../../components/ui/Button';

const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6 font-sans">
      <div className="bg-white border border-gray-100 rounded-3xl p-10 max-w-md w-full text-center space-y-6 shadow-xl shadow-gray-200/50">
        <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mx-auto">
          <ShieldAlert className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">404</h1>
          <h2 className="text-lg font-bold text-gray-800">Page Not Found</h2>
          <p className="text-xs text-gray-500 font-medium">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-2">
          <Link to="/">
            <Button icon={Home} className="w-full">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
