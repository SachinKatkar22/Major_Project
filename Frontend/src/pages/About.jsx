// src/pages/About.jsx
import React from 'react';

const About = () => {
  const highlights = [
    {
      year: "2025",
      title: "Foundation & Setup",
      desc: "Initiated systematic digital records, established the core administrative structure, and united local volunteers for regional events."
    },
    {
      year: "2026",
      title: "Platform Expansion",
      desc: "Rolled out real-time transparent tracking, interactive member directories, and streamlined public reporting for all households."
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-cyan-50/20 to-blue-50/40 pt-32 pb-24 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-linear-to-r from-cyan-600 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md shadow-blue-500/20">
            Our Journey & Growth
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 tracking-tight">
            How Ekta Mandal Evolved
          </h1>
          <p className="text-gray-600 text-lg">
            A look back at how our commitment to unity, transparency, and modern organization shaped Narayanpur's community network.
          </p>
        </div>

        {/* Milestone Timeline Grid - 2 Columns for 2025 and 2026 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {highlights.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-gray-100 relative group hover:-translate-y-2 transition-all duration-300">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-blue-600 mb-2">
                {item.year}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;