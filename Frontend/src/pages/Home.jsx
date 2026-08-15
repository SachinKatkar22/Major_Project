import React from 'react';
import { Link } from 'react-router-dom';
import Page1 from '../components/Page1';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Page1 contains the Image Slider and the Infobox Stats Component */}
      <Page1 />

      {/* ==================== SECTION: ABOUT OUR COMMUNITY ==================== */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs bg-blue-50 px-3 py-1 rounded-full">
              About Ekta Mandal
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">
              Building a Stronger, United Narayanpur Together
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Ekta Mandal Narayanpur is dedicated to fostering social harmony, community welfare, and cultural preservation. Through collective effort and transparent contributions, we organize local programs, support families, and drive regional growth.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <h4 className="font-bold text-gray-900 text-lg mb-1">100% Transparency</h4>
                <p className="text-xs text-gray-500">Every single rupee accounted for and publicly displayed.</p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <h4 className="font-bold text-gray-900 text-lg mb-1">Community First</h4>
                <p className="text-xs text-gray-500">Driven by the people, for the welfare of the people.</p>
              </div>
            </div>
          </div>

          {/* Right: Modern Visual Card */}
          <div className="relative">
            <div className="absolute -inset-2 bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl blur-lg opacity-20"></div>
            <div className="relative bg-linear-to-br from-gray-900 to-blue-950 p-8 md:p-12 rounded-3xl text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Our Core Vision</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                "To unite every household of Narayanpur under a single banner of trust, mutual support, and progressive social work."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/30 flex items-center justify-center font-bold text-blue-400 border border-blue-500/30">
                  EMN
                </div>
                <div>
                  <h4 className="font-bold text-sm">Committee Members</h4>
                  <p className="text-xs text-gray-400">Narayanpur, India</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== SECTION: CORE PILLARS ==================== */}
      <section className="py-20 bg-gray-50 px-6 md:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs bg-blue-100/60 px-3 py-1 rounded-full">
            Our Initiatives
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">What We Focus On</h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-2 text-sm md:text-base">
            Dedicated efforts directed toward cultural events, community development, and welfare support.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
              🤝
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Community Welfare</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Supporting local families and managing community initiatives with active involvement from members.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
              📊
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Funds</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Real-time records of collection data, contributors, and targets ensuring complete accountability.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
              🎉
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Festivals & Events</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Organizing grand local functions and traditional celebrations to bring everyone together.
            </p>
          </div>

        </div>
      </section>

     

      <Footer />
    </div>
  );
};

export default Home;