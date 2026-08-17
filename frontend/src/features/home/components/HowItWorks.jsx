import React from 'react';
import { FilePlus2, ListFilter, Award, Users2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Report Issue",
      description: "Submit your civic complaint with photos and location details instantly.",
      icon: FilePlus2,
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-100",
    },
    {
      number: "02",
      title: "Track Progress",
      description: "Monitor real-time updates as your issue moves towards resolution.",
      icon: ListFilter,
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-100",
    },
    {
      number: "03",
      title: "Verify & Rate",
      description: "Confirm resolution and rate the quality of service provided.",
      icon: Award,
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      borderColor: "border-purple-100",
    },
    {
      number: "04",
      title: "Stronger Community",
      description: "Your feedback helps build accountable and better communities.",
      icon: Users2,
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
      borderColor: "border-amber-100",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-20">
          <p className="text-xs font-bold tracking-widest text-blue-600 uppercase">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Simple steps. <span className="text-blue-600">Real impact.</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Connecting Dotted Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[2px] border-t-2 border-dashed border-gray-200 -z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center space-y-4 group">
                
                {/* Icon Container */}
                <div className={`w-20 h-20 rounded-full ${step.bgColor} ${step.textColor} border-2 ${step.borderColor} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-9 h-9" />
                </div>

                {/* Step Number */}
                <span className="text-sm font-black text-gray-900 tracking-wider">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="text-lg font-extrabold text-gray-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-500 max-w-xs leading-relaxed font-medium">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;