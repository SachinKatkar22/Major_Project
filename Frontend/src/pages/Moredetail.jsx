// src/components/Moredetail.jsx
import React, { useState } from 'react';
import { useData } from '../components/Alldata';

const Moredetail = () => {
  // Grab state, functions, and variables directly from Alldata context
  const { data, getdata, extractYear } = useData();
  
  const [selectedYear, setSelectedYear] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique, clean 4-digit years dynamically from the context data
  const years = ['All', ...new Set(data.map((item) => extractYear(item.year)))].filter(Boolean).sort().reverse();

  // Filter data based on selected year and search query (first name only)
  const filteredData = data.filter((item) => {
    const itemYear = extractYear(item.year);
    const matchesYear = selectedYear === 'All' || itemYear === String(selectedYear);
    const matchesSearch = item.firstName.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return matchesYear && matchesSearch;
  });

  // Calculate total amount from filtered data and store in totalamount variable
  const totalamount = filteredData.reduce((sum, item) => sum + Number(item.amount || 0), 0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans">
      
      {/* Left Sidebar: Clean Year Filters Only */}
      <aside className="w-full md:w-64 mt-20 bg-white border-r border-gray-200 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">Select Year</h2>
          <div className="flex flex-col space-y-2">
            {years.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`text-left px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedYear === yr
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {yr === 'All' ? 'All Years' : yr}
              </button>
            ))}
          </div>
        </div>

        {/* Refresh / Check Button */}
        <div className="pt-6 border-t border-gray-100 mt-6">
          <button 
            onClick={getdata}
            className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm transition-all shadow-sm"
          >
            Refresh Data
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 mt-20 p-6 md:p-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Banner, Total Amount Box & Search Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900">Supporter Records</h1>
              <p className="text-gray-500 text-sm mt-1">
                Filter: <span className="font-semibold text-blue-600">{selectedYear === 'All' ? 'All Years' : selectedYear}</span>
              </p>
            </div>

            {/* Total Amount Box Positioned Between Title and Search Box */}
            <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">Total Collection</p>
                <h3 className="text-xl font-extrabold text-emerald-600">₹{totalamount.toLocaleString()}</h3>
              </div>
            </div>

            {/* Search Input for First Name */}
            <div className="relative w-full md:w-72">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                🔍
              </span>
              <input
                type="text"
                placeholder="Search by first name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 shadow-sm transition"
              />
            </div>
          </div>

          {/* Cards Grid Layout */}
          {filteredData.length === 0 ? (
            <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-12 text-center">
              <p className="text-gray-400 font-medium text-lg">No records found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map((ele) => (
                <div 
                  key={ele._id} 
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Name & Year Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 capitalize">
                          {ele.firstName} {ele.lastName}
                        </h3>
                        <p className="text-xs text-gray-400 mt-0.5">ID: {ele._id.slice(-6)}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-1 rounded-full">
                        {extractYear(ele.year)}
                      </span>
                    </div>

                    {/* Details Info */}
                    <div className="space-y-2 border-t border-gray-100 pt-4 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Mobile:</span>
                        <span className="font-medium text-gray-800">{ele.mobileNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Amount:</span>
                        <span className="font-bold text-emerald-600">₹{ele.amount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </main>

    </div>
  );
};

export default Moredetail;