import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, subtitle, breadcrumbs = [], action }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-gray-100 font-sans">
      <div className="space-y-1">
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-1" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-blue-600 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gray-600 font-bold">{crumb.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && <span>/</span>}
              </React.Fragment>
            ))}
          </nav>
        )}
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">{title}</h1>
        {subtitle && <p className="text-sm text-gray-500 font-medium">{subtitle}</p>}
      </div>

      {action && <div className="flex items-center gap-3">{action}</div>}
    </div>
  );
};

export default PageHeader;
