import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  isDisabled = false,
  className = '',
  icon: Icon,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none disabled:cursor-not-allowed cursor-pointer';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/25 border border-transparent',
    secondary: 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-2xs',
    dark: 'bg-[#0B132B] hover:bg-slate-900 text-white shadow-md border border-slate-800',
    danger: 'bg-rose-600 hover:bg-rose-700 text-white shadow-sm border border-transparent',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 border border-transparent',
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5',
  };

  return (
    <button
      disabled={isDisabled || isLoading}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          {children}
          {Icon && <Icon className="w-4 h-4 flex-shrink-0" />}
        </>
      )}
    </button>
  );
};

export default Button;
