// src/pages/MoneyHistory.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useData } from '../components/Alldata';

const MoneyHistory = () => {
  const { moneyHistory, getMoneyHistory } = useData();
  
  const [selectedYear, setSelectedYear] = useState('All');
  const [yearInput, setYearInput] = useState('2026');
  const [textInput, setTextInput] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [loading, setLoading] = useState(false);

  const availableYears = Array.from({ length: 16 }, (_, i) => String(2020 + i));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!yearInput || !textInput || !amountInput) return alert("Please fill all fields.");

    const password = prompt("Enter admin password to add history:");
    if (!password) return;
    if (password !== "832969") {
      return alert("Incorrect password! Action cancelled.");
    }

    setLoading(true);
    try {
      await axios.post("https://major-project-dgt0.onrender.com/money/add", {
        year: yearInput,
        text: textInput,
        amount: Number(amountInput)
      });
      alert("Added successfully!");
      setTextInput('');
      setAmountInput('');
      getMoneyHistory(); 
    } catch (err) {
      alert("Failed to add entry.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const password = prompt("Enter admin password to delete:");
    if (!password) return;

    try {
      await axios.delete(`https://major-project-dgt0.onrender.com/money/${id}`, {
        data: { password }
      });
      alert("Deleted successfully!");
      getMoneyHistory(); 
    } catch (err) {
      alert(err.response?.data?.error || "Deletion failed.");
    }
  };

  const filterYears = ['All', ...new Set(moneyHistory.map(item => item.year))];
  const filteredList = selectedYear === 'All' ? moneyHistory : moneyHistory.filter(item => item.year === selectedYear);
  const totalAmount = filteredList.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="max-w-4xl mx-auto px-6 py-40 font-sans">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Money & Investment History</h2>

      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 mb-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Select Year</label>
              <select 
                value={yearInput} 
                onChange={(e) => setYearInput(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg bg-white"
                required
              >
                {availableYears.map(yr => (
                  <option key={yr} value={yr}>{yr}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Description / Text</label>
              <input 
                type="text" 
                placeholder="Enter description" 
                value={textInput} 
                onChange={(e) => setTextInput(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required 
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Amount (₹)</label>
              <input 
                type="number" 
                placeholder="Enter amount" 
                value={amountInput} 
                onChange={(e) => setAmountInput(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required 
              />
            </div>
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition mt-2"
          >
            {loading ? "Adding..." : "Submit Record"}
          </button>
        </form>
      </div>

      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        {filterYears.map(yr => (
          <button
            key={yr}
            onClick={() => setSelectedYear(yr)}
            className={`px-4 py-2 rounded-full font-medium transition ${selectedYear === yr ? 'bg-blue-600 text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {yr}
          </button>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl mb-6 flex justify-between items-center">
        <span className="font-semibold text-blue-900">Total Investment ({selectedYear}):</span>
        <span className="text-xl font-bold text-blue-700">₹{totalAmount.toLocaleString()}</span>
      </div>

      <div className="space-y-3">
        {filteredList.map(item => (
          <div key={item._id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">{item.text}</p>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">{item.year}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold text-green-600">₹{item.amount.toLocaleString()}</span>
              <button 
                onClick={() => handleDelete(item._id)}
                className="text-red-500 hover:text-red-700 text-xs font-semibold px-2.5 py-1 border border-red-200 rounded hover:bg-red-50 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoneyHistory;