// src/components/BackButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Backbutton = ({ className = "" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`inline-flex z-1 items-center mt-23 absolute ml-5 gap-2 bg-white text-gray-800 font-semibold px-5 py-2.5 rounded-full shadow-md hover:bg-gray-100 hover:shadow-lg transition-all border border-gray-200 ${className}`}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5 text-gray-600" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <span>Back</span>
    </button>
  );
};

export default Backbutton;