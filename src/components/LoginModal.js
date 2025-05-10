// src/components/LoginModal.jsx
import React, { useState } from "react";

const LoginModal = ({ show, onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div
      className={`fixed inset-0 z-50 ${
        show ? "flex" : "hidden"
      } items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm`}
    >
      <div className="glass-effect rounded-2xl shadow-xl max-w-md w-full p-8 mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-light"
        >
          <i className="fas fa-times text-xl"></i>
        </button>
        <div className="text-center mb-6">
          <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl text-white">
            <i className="fas fa-lock"></i>
          </div>
          <h2 className="text-2xl font-bold text-light">Access WasteWatch Dashboard</h2>
          <p className="text-gray-400 mt-2">
            Sign in to your Smart Waste Monitoring portal
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="loginEmail"
              className="block text-sm font-medium text-light mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="loginEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="glass-effect w-full border border-gray-700 rounded-lg py-3 px-4 text-light placeholder-gray-500"
              placeholder="Enter 123"
            />
          </div>
          <div>
            <label
              htmlFor="loginPassword"
              className="block text-sm font-medium text-light mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="loginPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="glass-effect w-full border border-gray-700 rounded-lg py-3 px-4 text-light placeholder-gray-500"
              placeholder="Enter 123"
            />
          </div>
          <button
            type="submit"
            className="gradient-bg text-white w-full py-3 px-4 rounded-lg text-lg font-semibold hover:shadow-lg transform hover:scale-[1.02]"
          >
            <i className="fas fa-sign-in-alt mr-2"></i> Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
