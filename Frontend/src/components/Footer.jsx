import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 font-sans pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* Column 1: Brand Info */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-extrabold tracking-tight text-white">EMN</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Ekta Mandal Narayanpur. Empowering our community through unity, transparent contributions, and collective growth.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-base mb-4 tracking-wide">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </li>
            <li>
              <Link to="/moredetail" className="hover:text-white transition-colors">Supporter Records</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Community & Support */}
        <div>
          <h4 className="text-white font-semibold text-base mb-4 tracking-wide">Resources</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/login" className="hover:text-white transition-colors">Admin Portal</Link>
            </li>
            <li>
              <span className="text-slate-500 cursor-not-allowed">Transparency Reports</span>
            </li>
            <li>
              <span className="text-slate-500 cursor-not-allowed">Community Guidelines</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Location */}
        <div>
          <h4 className="text-white font-semibold text-base mb-4 tracking-wide">Get in Touch</h4>
          <p className="text-sm text-slate-400 mb-2">
            <span className="font-medium text-slate-300">Location:</span> Narayanpur,Nandura, India
          </p>
          <p className="text-sm text-slate-400 mb-2">
            <span className="font-medium text-slate-300">Phone:</span> +91 83296 94272
          </p>
          <p className="text-sm text-slate-400">
            <span className="font-medium text-slate-300">Email:</span> contact@ektamandal.org
          </p>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Ekta Mandal Narayanpur. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Designed & Developed with precision.</p>
      </div>
    </footer>
  );
};

export default Footer;