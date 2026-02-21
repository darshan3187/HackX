import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// This component acts as a wrapper ("boilerplate")
const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      {/* Navbar always stays at the top */}
      <Navbar />
      
      {/* "children" is where the specific page content (like Home or Report) will go */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer always stays at the bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;