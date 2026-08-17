import React from 'react';

export const Input = React.forwardRef(({ label, error, helperText, className = '', icon: Icon, ...props }, ref) => {
  return (
    <div className="w-full space-y-1.5 font-sans">
      {label && <label className="block text-xs font-bold text-gray-700 tracking-wide">{label}</label>}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          ref={ref}
          className={`w-full bg-white border border-gray-200 rounded-xl text-sm text-gray-900 font-medium placeholder-gray-400 ${
            Icon ? 'pl-10' : 'px-4'
          } py-2.5 transition-all focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 disabled:bg-gray-50 disabled:cursor-not-allowed ${
            error ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20' : ''
          } ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-xs font-semibold text-rose-500 mt-1">{error}</p>}
      {helperText && !error && <p className="text-xs text-gray-400 mt-1">{helperText}</p>}
    </div>
  );
});

export const Select = React.forwardRef(({ label, error, children, className = '', ...props }, ref) => {
  return (
    <div className="w-full space-y-1.5 font-sans">
      {label && <label className="block text-xs font-bold text-gray-700 tracking-wide">{label}</label>}
      <select
        ref={ref}
        className={`w-full bg-white border border-gray-200 rounded-xl text-sm text-gray-900 font-medium px-4 py-2.5 transition-all focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 ${
          error ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20' : ''
        } ${className}`}
        {...props}
      >
        {children}
      </select>
      {error && <p className="text-xs font-semibold text-rose-500 mt-1">{error}</p>}
    </div>
  );
});

export const Textarea = React.forwardRef(({ label, error, className = '', ...props }, ref) => {
  return (
    <div className="w-full space-y-1.5 font-sans">
      {label && <label className="block text-xs font-bold text-gray-700 tracking-wide">{label}</label>}
      <textarea
        ref={ref}
        className={`w-full bg-white border border-gray-200 rounded-xl text-sm text-gray-900 font-medium p-4 transition-all focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 ${
          error ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20' : ''
        } ${className}`}
        {...props}
      />
      {error && <p className="text-xs font-semibold text-rose-500 mt-1">{error}</p>}
    </div>
  );
});
