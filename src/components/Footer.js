// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center mr-2">
                <i className="fas fa-brain text-white text-sm"></i>
              </div>
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-ai-purple">
                WasteWatch
              </span>
            </div>
            <p className="text-gray-400 mt-4">
              AI-powered waste management solutions for sustainable cities and
              businesses.
            </p>
            <div className="mt-4 flex space-x-4">
              {["twitter", "linkedin-in", "github"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-sm font-semibold text-light uppercase tracking-wider mb-4">
              Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Smart Cities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Retail & Commercial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Industrial Facilities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Municipalities
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold text-light uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  AI Research
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  API Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Sustainability Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="text-sm font-semibold text-light uppercase tracking-wider mb-4">
              Subscribe to our AI Digest
            </h3>
            <p className="text-gray-400 mb-4">
              Get the latest AI waste management insights and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="glass-effect flex-grow border border-gray-700 text-light py-3 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder-gray-500 transition-all duration-300"
              />
              <button className="gradient-bg text-white px-4 py-3 rounded-r-lg hover:shadow-lg transition-all duration-300">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 WasteWatch Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "AI Ethics"].map(
              (label, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-primary text-sm transition-colors duration-300"
                >
                  {label}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
