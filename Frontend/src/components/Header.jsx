import React from 'react'
import { Link } from 'react-router-dom';
import logoImage from '../assets/images.jpeg';

const Header = () => {
  return (
    <div>
      <nav className="back_header fixed w-full z-50 px-4 py-3 sm:px-8 sm:py-5 flex justify-between items-center text-black shadow-sm">
        
        {/* Logo and Title */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img 
            src={logoImage} 
            alt="Logo" 
            className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full border border-gray-200" 
          />
          <div className="text-xl sm:text-2xl font-bold tracking-tight">EMN</div>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-3 sm:space-x-5 font-medium text-sm sm:text-base">
          <Link to='/' className="hover:text-white transition flex items-center gap-1">
            <i className="ri-home-4-line text-base sm:text-lg"></i> 
            <span className="hidden xs:inline">Home</span>
          </Link>
          <Link to='/about' className="hover:text-white transition flex items-center gap-1">
            <i className="ri-information-line text-base sm:text-lg"></i> 
            <span className="hidden xs:inline">About</span>
          </Link> 
          <Link to='/contact' className="hover:text-white transition flex items-center gap-1">
            <i className="ri-contacts-book-line text-base sm:text-lg"></i> 
            <span className="hidden xs:inline">Contact</span>
          </Link>
           
        </div>
      </nav>
    </div>
  );
}

export default Header;