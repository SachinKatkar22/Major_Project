// src/components/Addpeople.jsx
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Addpeople = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [year, setYear] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      mobileNumber, 
      amount,
      year
    };

    try {
      const response = await axios.post("https://major-project-dgt0.onrender.com/note", data, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(response.data);
      setFirstName('');
      setLastName('');
      setAmount('');
      setMobileNumber('');
      setYear('');
      alert("Data submitted successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit data. Please check your connection.");
    }
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8 font-sans">
     
      <div className="bg-white mt-15 w-full max-w-4xl rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 border border-gray-100">
        
        {/* Left Information Panel */}
        <div className="md:col-span-4 bg-blue-700 p-10 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight mb-5 leading-tight">
              Add New Supporter
            </h2>
            <p className="text-blue-100 text-lg leading-normal mb-10">
              Fill in the details below to add a new person to our database and record their contribution.
            </p>
          </div>
          <div className="bg-blue-800 p-5 rounded-2xl border border-blue-900">
            <p className="text-sm text-blue-200 mb-2">Need help?</p>
            <a href="#" className="text-white font-semibold hover:underline">
              Contact Admin Support
            </a>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="md:col-span-8 p-10 md:p-16">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900">Supporter Information</h1>
            <p className="text-gray-500 mt-2">Please provide the required information.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition"
                />
              </div>
            </div>

            {/* Mobile Number Field */}
            <div>
              <label htmlFor="mobileNumber" className="block text-sm font-semibold text-gray-700 mb-1.5">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                required
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="+91 9876543210"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition"
              />
            </div>

            {/* Contribution Amount (Rupees) & Year */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="amount" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Contribution Amount (₹) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500">₹</span>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    required
                    min="1"
                    step="1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="5000"
                    className="w-full pl-9 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="year" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Select Contribution Year <span className="text-red-500">*</span>
                </label>
                <select
                  id="year"
                  name="year"
                  required
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition bg-white"
                >
                  <option value="" disabled>-- Choose Year --</option>
                  {years.map((yr) => (
                    <option key={yr} value={yr}>
                      {yr}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 flex gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md shadow-blue-500/30 text-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                Add Supporter to Database
              </button>
            </div>
            
         

          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Addpeople;