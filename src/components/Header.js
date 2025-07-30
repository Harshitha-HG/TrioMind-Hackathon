import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Function to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white text-gray-700 p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
      {/* ✅ Logo on the Left */}
      <div className="flex items-center flex-1">
        <img src="/images/logo.jpg" alt="Logo" className="ml-4 md:ml-12 h-9" />
        <img src="/images/text.png" alt="Text Logo" className="ml-4 h-9" />
      </div>

      {/* ✅ Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 items-center mr-8">
        <Link
          to="/"
          className={`text-lg font-medium ${
            isActive("/") ? "text-orange-500" : "text-gray-700 hover:text-orange-400"
          }`}
        >
          Home
        </Link>
        <Link
          to="/features"
          className={`text-lg font-medium ${
            isActive("/features") ? "text-orange-500" : "text-gray-700 hover:text-orange-400"
          }`}
        >
          Features
        </Link>
        <Link
          to="/trends"
          className={`text-lg font-medium ${
            isActive("/trends") ? "text-orange-500" : "text-gray-700 hover:text-orange-400"
          }`}
        >
          Trends
        </Link>
        <Link
          to="/education"
          className={`text-lg font-medium ${
            isActive("/education") ? "text-orange-500" : "text-gray-700 hover:text-orange-400"
          }`}
        >
          Education
        </Link>
        <Link
          to="/about"
          className={`text-lg font-medium ${
            isActive("/about") ? "text-orange-500" : "text-gray-700 hover:text-orange-400"
          }`}
        >
          About
        </Link>
        <Link
          to="/login"
          className="text-lg font-medium border-2 border-green-300 bg-green-300 text-gray-700 hover:bg-orange-600 hover:text-white focus:bg-orange-600 py-1 px-4 rounded-3xl transition-all"
        >
          Login/Register
        </Link>
      </nav>

      {/* ✅ Mobile Menu Button */}
      <button
        className="md:hidden px-2 py-1 border rounded text-gray-700 border-gray-300"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* ✅ Mobile Navigation */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col items-start p-4 space-y-2">
            <Link to="/" onClick={() => setMenuOpen(false)} className={`text-lg font-medium ${isActive("/") ? "text-orange-500" : "text-gray-700 hover:text-orange-400"}`}>
              Home
            </Link>
            <Link to="/features" onClick={() => setMenuOpen(false)} className={`text-lg font-medium ${isActive("/features") ? "text-orange-500" : "text-gray-700 hover:text-orange-400"}`}>
              Features
            </Link>
            <Link to="/trends" onClick={() => setMenuOpen(false)} className={`text-lg font-medium ${isActive("/trends") ? "text-orange-500" : "text-gray-700 hover:text-orange-400"}`}>
              Trends
            </Link>
            <Link to="/education" onClick={() => setMenuOpen(false)} className={`text-lg font-medium ${isActive("/education") ? "text-orange-500" : "text-gray-700 hover:text-orange-400"}`}>
              Education
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className={`text-lg font-medium ${isActive("/about") ? "text-orange-500" : "text-gray-700 hover:text-orange-400"}`}>
              About
            </Link>
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium hover:text-green-500"
            >
              Login/Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
