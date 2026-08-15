import React from 'react'
import { Link } from 'react-router-dom';
import logoImage from '../assets/images.jpeg';
import headerImage from '../assets/header_img.jpg';
const Header = () => {
  return (
    <div>
      <nav className="fixed w-full z-50 p-6 flex justify-around items-center text-black bg-white shadow-sm">
        
        <div className="flex items-center space-x-3">
          {/* Replace the src with your uploaded logo link or local asset */}
          <img 
            src={logoImage} 
            alt="Logo" 
            className="w-10 h-10 object-cover rounded-full border border-gray-200" 
          />
          <div className="text-2xl font-bold tracking-tight">EMN</div>
        </div>
        <div className="space-x-6 font-medium">
          <Link to='/' className="hover:text-green-600 transition">
          <i className="ri-home-4-line text-lg"></i> Home</Link>
          <Link to='/about' className="hover:text-green-600 transition">
          <i className="ri-information-line text-lg"></i> About</Link> 
          <Link to='/contact' className="hover:text-green-600 transition">
          <i className="ri-contacts-book-line text-lg"></i> Contact</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;