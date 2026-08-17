import React from 'react';

const Card = ({ children, className = '', hoverable = false, ...props }) => {
  return (
    <div
      className={`bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-xs ${
        hoverable ? 'hover:shadow-md hover:-translate-y-1 transition-all duration-300' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
