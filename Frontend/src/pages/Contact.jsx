// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
            Contact Us
          </h1>
          <p className="text-gray-500 text-base mt-2 max-w-xl mx-auto">
            Have questions or want to connect with our team? Reach out to us directly.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Profile / Image Section */}
          <div className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-md border-4 border-white mb-4 bg-blue-100 flex items-center justify-center">
              {/* Replace the src with your actual photo URL or imported image */}
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUL_EXTZuMoTIfc8DF89_UsXRi5_mhLiW8dbw67-yAMw&s" 
                alt="Sachin Katkar" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Sachin Katkar</h3>
            <p className="text-sm text-blue-600 font-medium mt-0.5">Developer & Administrator</p>
            <p className="text-xs text-gray-400 mt-2">Ekta Mandal Narayanpur</p>
          </div>

          {/* Contact Details Section */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition">
              <div className="text-2xl">📞</div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Phone Number</p>
                <p className="text-gray-800 font-medium mt-0.5">+91 83296 94272</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition">
              <div className="text-2xl">✉️</div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Email Address</p>
                <p className="text-gray-800 font-medium mt-0.5">sachinkatkar1976@example.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition">
              <div className="text-2xl">📍</div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Location</p>
                <p className="text-gray-800 font-medium mt-0.5">Narayanpur, India</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;