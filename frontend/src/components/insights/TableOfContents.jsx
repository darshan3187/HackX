import React, { useState, useEffect } from 'react';
import { List, ChevronDown, ChevronUp } from 'lucide-react';

const TableOfContents = ({ items = [] }) => {
  const [activeId, setActiveId] = useState('');
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  useEffect(() => {
    if (!items.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Header offset
      let currentActive = items[0]?.id;

      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            currentActive = item.id;
          }
        }
      }

      if (currentActive) {
        setActiveId(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // Navbar offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
      setIsOpenMobile(false);
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <div>
      {/* Mobile Accordion View */}
      <div className="lg:hidden mb-8 border border-blue-100 bg-blue-50/50 rounded-2xl p-4">
        <button
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="w-full flex items-center justify-between text-left font-bold text-gray-900 text-sm"
        >
          <div className="flex items-center gap-2 text-blue-600">
            <List className="w-4 h-4" />
            <span>On This Page ({items.length} Sections)</span>
          </div>
          {isOpenMobile ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {isOpenMobile && (
          <nav className="mt-3 pt-3 border-t border-blue-100 space-y-1.5 text-xs">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`block py-1.5 px-2 rounded-lg font-medium transition-colors ${
                  activeId === item.id
                    ? 'bg-blue-600 text-white font-bold'
                    : 'text-gray-700 hover:bg-blue-100/60'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <div className="hidden lg:block sticky top-28 bg-white border border-gray-100 rounded-3xl p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-gray-400 pb-3 border-b border-gray-100">
          <List className="w-4 h-4 text-blue-600" />
          <span>On This Page</span>
        </div>

        <nav className="space-y-1 text-xs">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`group flex items-start gap-2.5 py-2 px-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-bold border-l-4 border-blue-600 shadow-xs'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50 font-medium'
                }`}
              >
                <span className={`text-[11px] leading-tight ${isActive ? 'text-blue-600 font-extrabold' : 'text-gray-400 group-hover:text-blue-600'}`}>
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default TableOfContents;
