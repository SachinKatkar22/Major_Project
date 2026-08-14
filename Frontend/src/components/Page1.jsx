import React from 'react'
import { useState,useEffect } from 'react';
import Infobox from './Infobox';
import { Link } from 'react-router-dom';
const slides = [
  { title: "Ekta Mandal Narayanpur", bg: "bg-blue-600" },
  { title: "Ekta Mandal Narayanpur", bg: "bg-gray-800" },
  { title: "Ekta Mandal Narayanpur", bg: "bg-indigo-700" }
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
      <div className={`relative h-[85vh] flex items-center justify-center text-white transition-all duration-700 ${slides[current].bg}`}>
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{slides[current].title}</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">Crafted with precision using React & Tailwind.</p>
          
          {/* Two Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* <button className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-lg w-full sm:w-auto">
              Add People
            </button> */}
             <Link to='/login' className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-lg w-full sm:w-auto">
              Add People
            </Link>
            {/* <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition w-full sm:w-auto">
              More Details
            </button> */}
             <Link to='/moredetail' className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition w-full sm:w-auto">
              More Details
            </Link>
          </div>
        </div>
      </div>

      <Infobox/>
    </div>
  );
}

export default Page1
