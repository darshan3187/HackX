import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const Navbar = ({ onMenuClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  // Scroll driven header styling
  const navBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.96)"]
  );
  const navShadow = useTransform(
    scrollY,
    [0, 50],
    ["none", "0 4px 20px -2px rgba(0, 0, 0, 0.06)"]
  );
  const navHeight = useTransform(scrollY, [0, 50], ["80px", "68px"]);

  const [user] = useState(() => {
    const token = localStorage.getItem("access");
    if (!token) return null;
    try {
      return jwtDecode(token);
    } catch {
      return null;
    }
  });

  const isDashboard = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/admin');

  const navItems = [
    { name: 'Features', path: '/features' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      style={{
        backgroundColor: navBg,
        boxShadow: navShadow,
        height: navHeight,
      }}
      className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-100/80 font-sans flex items-center transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center w-full">

          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 cursor-pointer group">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-2xl font-black text-gray-900 tracking-tight">CivicTrack</span>
          </Link>

          {/* Desktop Navigation Links */}
          {!isDashboard && (
            <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-gray-600">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative py-1 transition-colors group ${
                      isActive ? 'text-blue-600 font-bold' : 'hover:text-blue-600'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          )}

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center gap-3">
                <Link
                  to={user.role === 'AUTHORITY' ? '/admin' : '/dashboard'}
                  className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20"
                >
                  Go to Dashboard
                </Link>
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold border border-blue-200">
                  {user?.username?.charAt(0).toUpperCase() || 'U'}
                </div>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-5 py-2.5 rounded-xl font-semibold text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  Log In
                </Link>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/signup"
                    className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 block"
                  >
                    Get Started Free
                  </Link>
                </motion.div>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={isDashboard ? onMenuClick : () => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && !isDashboard && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl px-4 pt-3 pb-6 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-blue-600 font-bold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              {user ? (
                <Link
                  to={user.role === 'AUTHORITY' ? '/admin' : '/dashboard'}
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-blue-600 text-white px-4 py-2.5 rounded-xl font-semibold shadow-md"
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center px-4 py-2.5 font-semibold text-gray-700 border border-gray-200 rounded-xl"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center bg-blue-600 text-white px-4 py-2.5 rounded-xl font-semibold shadow-md"
                  >
                    Get Started Free
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
