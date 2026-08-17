import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "CivicTrack made it so easy to report and track issues in my area. Love the transparency!",
      name: "Priya Sharma",
      location: "Gurugram",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    },
    {
      quote: "Finally, a platform that actually keeps us updated. Our city is changing for the better.",
      name: "Ravi Patel",
      location: "Ahmedabad",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
    {
      quote: "The photo updates and real-time tracking build so much trust between citizens and authorities.",
      name: "Neha Verma",
      location: "Pune",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-white font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs font-bold tracking-widest text-blue-600 uppercase">
            WHAT CITIZENS SAY
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Trusted by <span className="text-blue-600">communities that care.</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                {/* Quote Icon */}
                <span className="text-blue-500 font-serif text-5xl leading-none opacity-40 select-none block">
                  “
                </span>
                <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-50">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-gray-100" 
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
                  <p className="text-xs font-medium text-gray-400">{item.location}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2 pt-12">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 cursor-pointer" />
          <span className="w-2 h-2 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300" />
          <span className="w-2 h-2 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300" />
          <span className="w-2 h-2 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300" />
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
