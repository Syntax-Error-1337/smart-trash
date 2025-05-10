// src/components/Features.jsx
import React from "react";

const features = [
  {
    icon: "fas fa-network-wired",
    title: "Time-Series Forecasting",
    description:
      "LSTM models forecast fill levels and gas metrics with production-ready accuracy.",
    tags: ["Deep Learning", "Forecasting"],
  },
  {
    icon: "fas fa-eye",
    title: "IoT Sensor Integration",
    description:
      "Real-time data from weight, gas, and ultrasonic sensors for fill and safety monitoring.",
    tags: ["IoT", "Real-time"],
  },
  {
    icon: "fas fa-chart-line",
    title: "Cloud & Fog Analytics",
    description:
      "Serverless pipeline stores sensor data in RDS and delivers 7-day forecasts via Lambda.",
    tags: ["Cloud & Fog", "Trend Analysis"],
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-dark to-gray-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-ai-purple/20 text-primary mb-4 border border-primary/30">
            <i className="fas fa-robot mr-2"></i> AI-POWERED FEATURES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Intelligent Smart Bin Monitoring
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our models learn from sensor data to predict bin fill %, gas hazards, and trigger cloud-based alerts. Learn and adapt to optimize waste collection and recycling processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-2xl hover:neon-shadow transition-all duration-500"
            >
              <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6 text-2xl text-white">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-xl font-semibold text-light mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="ai-chip px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
