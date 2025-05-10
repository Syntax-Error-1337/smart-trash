// src/components/Navbar.jsx
import React from "react";

const Navbar = ({ onLoginClick }) => {
  return (
    <nav className="fixed w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-3">
                <i className="fas fa-brain text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-ai-purple">
                WasteWatch Smart Bin
              </span>
            </div>
            <div className="hidden lg:ml-10 lg:flex lg:space-x-8">
              <a
                href="#home"
                className="text-light hover:text-primary px-3 py-2 text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#features"
                className="text-light hover:text-primary px-3 py-2 text-sm font-medium"
              >
                AI Insights
              </a>
              <a
                href="#solutions"
                className="text-light hover:text-primary px-3 py-2 text-sm font-medium"
              >
                Use Cases
              </a>
              <a
                href="#contact"
                className="text-light hover:text-primary px-3 py-2 text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center">
            <button
              onClick={onLoginClick}
              className="ml-8 gradient-bg text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transform hover:scale-105"
            >
              Launch Dashboard <i className="fas fa-arrow-right ml-1"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
