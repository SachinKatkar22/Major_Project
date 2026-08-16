import React, { useState, useEffect } from 'react';
import Infobox from './Infobox';
import { Link } from 'react-router-dom';

const slides = [
  { 
    title: "Ekta Mandal Narayanpur", 
    subtitle: "Welcome to our community portal. Crafted with precision using React & Tailwind.",
    image: "https://t3.ftcdn.net/jpg/20/14/06/34/360_F_2014063447_cKdqjrrGh9T3QP5qanlv4WXF59cYna43.jpg" 
  },
  { 
    title: "Empowering Youth & Society", 
    subtitle: "Together we can bring positive change and growth to Narayanpur.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1920&auto=format&fit=crop" 
  },
  { 
    title: "Join Our Mission", 
    subtitle: "Be a part of upcoming events, social work, and community programs.",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1920&auto=format&fit=crop" 
  }
];

const Page1 = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-2">
      {/* Slider Section */}
      <div 
        className="relative h-[85vh] flex items-center justify-center text-white bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      >
        {/* Dark overlay so the white text remains easily readable over any photo */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{slides[current].title}</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">{slides[current].subtitle}</p>
          
          {/* Two Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to='/login' className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-lg w-full sm:w-auto">
             <i className="ri-user-add-fill"></i> Add People
            </Link>
            <Link to='/moredetail' className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition w-full sm:w-auto">
              <i className="ri-more-fill"></i> More Details
            </Link>
             <Link to='/gallery' className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition w-full sm:w-auto">
              <i className="ri-multi-image-line"></i> Gallery
            </Link>
          </div>
        </div>
      </div>

      <Infobox/>
    </div>
  );
};

export default Page1;