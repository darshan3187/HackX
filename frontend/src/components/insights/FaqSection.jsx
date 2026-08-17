import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FaqSection = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-6 pt-8 border-t border-gray-100">
      <div className="flex items-center gap-2 text-gray-900 font-extrabold text-xl sm:text-2xl">
        <HelpCircle className="w-6 h-6 text-blue-600" />
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-gray-200/80 rounded-2xl overflow-hidden transition-all bg-white shadow-xs"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 text-sm sm:text-base hover:bg-gray-50/80 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-sm text-gray-600 font-medium leading-relaxed border-t border-gray-100 bg-gray-50/40">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqSection;
