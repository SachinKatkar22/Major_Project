// src/components/UserFriendlyLogin.jsx
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
 const Navigate=useNavigate()
  const handleSubmit = (e) => {
    
    e.preventDefault();
    if(name=="SachinK" && password=="Narayanpur"){
         console.log("Logging in with:", { name, password })
         Navigate('/addpeople')
    }
    else{
     
  alert("Invalid username or password. Please try again.");

    }
   
  };

  return (
    <div className="min-h-screen from-indigo-50 via-white to-cyan-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      
      {/* Main Container Card */}
      <div className="bg-white w-full mt-10 max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-100 p-8 sm:p-10">
        
        {/* Header / Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 mb-4 font-bold text-xl">
            👋
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Welcome Back!
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Please enter your details to Login
          </p>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email / Username Field */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
              User Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                </svg>
              </span>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter User Name"
                className="block w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all duration-200"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="block w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all duration-200"
              />
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm py-1">
            <label className="flex items-center text-gray-600 cursor-pointer">
              <input 
                type="checkbox" 
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer" 
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#forgot" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login 
          </button>

        </form>

        {/* Footer Link for Sign Up */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Don't have an account yet?{' '}
          <a href="#signup" className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors">
            Create an account
          </a>
        </div>

      </div>
    </div>
  );
};

export default Login;