// src/components/CTA.jsx
import React from "react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-dark to-ai-purple/10 opacity-70"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,...')] bg-repeat"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-light mb-6">
          Ready to Revolutionize Bin Monitoring with WasteWatch?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Harness real-time IoT data and AI forecasts for smarter, greener cities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
            Request  Demo <i className="fas fa-chevron-right ml-2"></i>
          </button>
          <button className="border-2 border-primary/30 text-light px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/10 transition-all duration-300 flex items-center justify-center">
            <i className="fas fa-comment-dots mr-2"></i> Talk to Our WasteWatch Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
