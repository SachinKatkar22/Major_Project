import React, { useContext } from 'react'
import { useData } from './Alldata';
const Infobox = () => {

  const { totalPeople, totalamount } = useData();
  return (
    <div>
      <div>
        {/* Three Boxes Stats Section (Overlapping / Positioned Below) */}
        <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-10">
          
          {/* Last Year Data Header in Center */}
          <div className="text-center mb-6">
            <span className="bg-blue-100 text-blue-800 text-sm font-bold px-4 py-1.5 rounded-full shadow-sm">
              Last Year Data Overview
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          
            {/* Box 1: Number of People */}
            <div className="text-center p-4 border-b md:border-b-0 md:border-r border-gray-200">
              <p className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-1">Total People</p>
              <h3 className="text-3xl font-extrabold text-gray-900">{totalPeople}</h3>
            </div>

            {/* Box 2: Amount */}
            <div className="text-center p-4 border-b md:border-b-0 md:border-r border-gray-200">
              <p className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-1">Total Amount</p>
              <h3 className="text-3xl font-extrabold text-emerald-600">₹{totalamount}</h3>
            </div>

            {/* Box 3: Remaining Amount */}
            <div className="text-center p-4">
              <p className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-1">Remaining Amount</p>
              <h3 className="text-3xl font-extrabold text-amber-600">₹4500</h3>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Infobox