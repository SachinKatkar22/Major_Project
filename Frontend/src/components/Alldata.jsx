// src/Alldata.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

export const Alldata = ({ children }) => {
  const [data, setData] = useState([]);
  const [moneyHistory, setMoneyHistory] = useState([]);

  // Fetch /note data
  const getdata = async () => {
    try {
      const response = await axios.get("https://major-project-dgt0.onrender.com/note");
      setData(response.data.note || []);
    } catch (error) {
      console.error("Error fetching note data:", error);
    }
  };

  // Fetch /money history data
  const getMoneyHistory = async () => {
    try {
      const response = await axios.get("https://major-project-dgt0.onrender.com/money");
      setMoneyHistory(response.data || []);
    } catch (error) {
      console.error("Error fetching money history data:", error);
    }
  };

  useEffect(() => {
    getdata();
    getMoneyHistory();
  }, []);

  const extractYear = (yearVal) => {
    if (!yearVal) return '';
    return String(yearVal).substring(0, 4);
  };

  const totalPeople = data.length;
  const totalamount = data.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const totalMoneyHistoryAmount = moneyHistory.reduce((sum, item) => sum + Number(item.amount || 0), 0);

  return (
    <DataContext.Provider 
      value={{ 
        data, 
        getdata, 
        moneyHistory, 
        getMoneyHistory, 
        extractYear, 
        totalPeople, 
        totalamount, 
        totalMoneyHistoryAmount 
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
export default Alldata;