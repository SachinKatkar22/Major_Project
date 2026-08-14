// src/Alldata.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// 1. Create the Context
const DataContext = createContext();

// 2. Create the Provider Component named Alldata
export const Alldata = ({ children }) => {
  const [data, setData] = useState([]);

  const getdata = async () => {
    try {
      const response = await axios.get("https://major-project-dgt0.onrender.com/note");
      setData(response.data.note || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const extractYear = (yearVal) => {
    if (!yearVal) return '';
    return String(yearVal).substring(0, 4);
  };

  const totalPeople = data.length;
  const totalamount = data.reduce((sum, item) => sum + Number(item.amount || 0), 0);

  return (
    <DataContext.Provider value={{ data, getdata, extractYear, totalPeople, totalamount }}>
      {children}
    </DataContext.Provider>
  );
};

// 3. Custom hook to easily use the data anywhere
export const useData = () => useContext(DataContext);
export default Alldata