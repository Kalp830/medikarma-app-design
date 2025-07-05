// src/components/LoginScreen.js
import React, { useEffect, useState } from 'react';

const LoginScreen = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f0f4f8] to-white dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364] px-4 transition-colors duration-500">
      <div className="w-full max-w-xs text-gray-800 dark:text-white">

        {/* Dark Mode Toggle */}
        <div className="flex justify-end text-sm opacity-60 mb-6 cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
          <span className="flex space-x-2">
            <span>{darkMode ? '🌙' : '☀️'}</span>
            <span>{darkMode ? 'Dark mode' : 'Light mode'}</span>
          </span>
        </div>

        {/* App Logo */}
        <div className="flex justify-center mb-10">
          <div className="w-28 h-28 bg-gradient-to-br from-blue-400 to-pink-500 rounded-full flex items-center justify-center text-xl font-bold shadow-md text-white">
            YourApp
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username/Email"
            className="w-full bg-transparent border-b border-gray-400 dark:border-white placeholder-gray-500 dark:placeholder-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent border-b border-gray-400 dark:border-white placeholder-gray-500 dark:placeholder-white focus:outline-none"
          />

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm mt-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-pink-500" />
              <span>Remember me</span>
            </label>
            <button className="text-xs text-purple-500 dark:text-purple-300 hover:underline">
              Forgot Password?
            </button>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            Sign In
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-sm mt-4">
            Need an account?{' '}
            <span className="text-purple-600 dark:text-purple-400 hover:underline cursor-pointer">
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
