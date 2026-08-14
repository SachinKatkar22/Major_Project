// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            About Us
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
            Ekta Mandal Narayanpur
          </h1>
          <p className="text-gray-500 text-base mt-2 max-w-xl mx-auto">
            Empowering our community through unity, transparent contributions, and collective growth.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-gray-600 leading-relaxed">
          
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h2>
            <p>
              Our mission is to maintain transparent records of community events, supporter details, and financial contributions. By bringing everything onto a digital platform, we ensure accuracy, accessibility, and trust among all members.
            </p>
          </div>

          {/* Location & Organization Details Section */}
          <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Location & Background</h2>
            <p className="mb-4">
              <strong>Ekta Mandal Narayanpur</strong> is an active community organization based in Narayanpur. Dedicated to fostering harmony, social welfare, and cultural engagement, the Mandal brings residents together for community celebrations and developmental initiatives.
            </p>
            <div className="flex items-center space-x-2 text-sm text-blue-700 font-semibold">
              <span>📍</span>
              <span>Based in Narayanpur</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-100 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Transparent Tracking</h3>
              <p className="text-sm">
                Every contribution and member record is securely logged and updated dynamically across all years, keeping our community informed.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community Driven</h3>
              <p className="text-sm">
                Built by the community, for the community. We strive to strengthen our bonds through collaborative teamwork and shared goals.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;