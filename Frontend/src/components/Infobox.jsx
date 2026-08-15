import React, { useContext } from 'react';
import { useData } from './Alldata';

const Infobox = () => {
  const { totalPeople, totalamount } = useData();
  
  // Historical & Calculated values
  const last_year_totalpeople = 40;
  const last_year_totalamount = 17576;
  const last_year_remaining = 4500;

  // Current year specific calculations
  const current_people = totalPeople - last_year_totalpeople;
  const current_amount = totalamount - last_year_totalamount;

  return (
    <div className="relative z-10 max-w-6xl mx-auto px-4 -mt-20">
      {/* 3 Distinct Modern Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* ==================== CARD 1: LAST YEAR ARCHIVE ==================== */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                Archive
              </span>
              <span className="text-xs font-semibold text-slate-400">Previous Cycle</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-4">Last Year's Record</h3>
            
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500 font-medium">People Contributed</span>
                <span className="text-base font-bold text-slate-800">{last_year_totalpeople}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500 font-medium">Total Amount</span>
                <span className="text-base font-bold text-slate-800">₹{last_year_totalamount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500 font-medium">Remaining Balance</span>
                <span className="text-base font-bold text-slate-800">₹{last_year_remaining}</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-3 border-t border-slate-50 text-[11px] text-slate-400 font-medium text-center">
            Successfully Completed Target
          </div>
        </div>

        {/* ==================== CARD 2: CURRENT YEAR GROWTH (Highlighted) ==================== */}
        <div className="bg-linear-to-br from-indigo-900 to-blue-950 text-white rounded-3xl p-6 shadow-2xl border border-indigo-800/50 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-950/30 relative overflow-hidden">
          {/* Decorative glow element */}
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-200 bg-blue-500/20 px-3 py-1 rounded-full backdrop-blur-md">
                Active Now
              </span>
              <span className="text-xs font-semibold text-indigo-300">This Year's Progress</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight mb-4">Current Campaign</h3>
            
            <div className="space-y-3 pt-2 border-t border-indigo-800/60">
              <div className="flex justify-between items-center">
                <span className="text-sm text-indigo-200 font-medium">New Members</span>
                <span className="text-base font-extrabold text-blue-400">+{current_people}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-indigo-200 font-medium">Total Amount</span>
                <span className="text-base font-extrabold text-emerald-400">₹{current_amount+(4500)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-indigo-200 font-medium">Remaining Balance</span>
                <span className="text-base font-extrabold text-amber-400">Not Available</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-3 border-t border-indigo-800/40 text-[11px] text-indigo-300 font-medium text-center">
            Active community contribution phase
          </div>
        </div>

        {/* ==================== CARD 3: TOTAL OVERALL (TILL NOW) ==================== */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                Cumulative
              </span>
              <span className="text-xs font-semibold text-slate-400">All-Time Milestone</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-4">Total Till Now</h3>
            
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500 font-medium">Total People</span>
                <span className="text-base font-bold text-slate-900">{totalPeople}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500 font-medium">Total Amount</span>
                <span className="text-base font-bold text-emerald-600">₹{totalamount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500 font-medium">Overall Status</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">On Track</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-3 border-t border-slate-50 text-[11px] text-slate-400 font-medium text-center">
            Combined historical & current stats
          </div>
        </div>

      </div>
    </div>
  );
};

export default Infobox;