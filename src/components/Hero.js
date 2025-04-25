// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/90 to-dark"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,...')] bg-repeat"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-ai-purple/20 text-primary mb-4 border border-primary/30">
              <span className="mr-2">AI-POWERED WASTE MANAGEMENT</span>
              <i className="fas fa-bolt"></i>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="ai-gradient-text">Smart Waste</span>
              <br />
              <span className="text-light">For Sustainable Cities</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              EcoAI's neural networks optimize waste collection routes, predict
              fill levels, and reduce environmental impact with real-time AI
              analytics.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="gradient-bg text-white px-6 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center">
                Get Started <i className="fas fa-chevron-right ml-2"></i>
              </button>
              <button className="border-2 border-primary/30 text-light px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary/10 transition-all duration-300 flex items-center">
                <i className="fas fa-play-circle mr-2"></i> Watch Demo
              </button>
            </div>

            {/* Trust Badge */}
            <div className="mt-8 flex items-center space-x-6">
              <div className="flex -space-x-2">
                <img
                  className="w-10 h-10 rounded-full border-2 border-dark"
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  alt=""
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-dark"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt=""
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-dark"
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt=""
                />
              </div>
              <div className="text-sm text-gray-400">
                <p>Trusted by 500+ organizations</p>
                <div className="flex items-center mt-1">
                  <i className="fas fa-star text-yellow-400 mr-1"></i>
                  <i className="fas fa-star text-yellow-400 mr-1"></i>
                  <i className="fas fa-star text-yellow-400 mr-1"></i>
                  <i className="fas fa-star text-yellow-400 mr-1"></i>
                  <i className="fas fa-star text-yellow-400 mr-1"></i>
                  <span className="ml-1">4.9/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-lg">
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-ai-purple/20 blur-3xl animate-pulse animation-delay-2000"></div>
              <div className="relative z-10">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png"
                  alt="AI Smart Trash Bin"
                  className="w-full max-w-md mx-auto animate-float"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 glass-effect p-4 rounded-2xl shadow-lg w-48">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                  <span className="text-xs font-medium">AI ACTIVE</span>
                </div>
                <p className="text-xs text-gray-300">
                  Neural network analyzing waste patterns in real-time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
