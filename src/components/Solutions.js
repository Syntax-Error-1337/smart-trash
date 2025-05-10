// src/components/Solutions.jsx
import React from "react";

const solutionPoints = [
  {
    icon: "fas fa-brain",
    title: "Multi-Sensor Monitoring",
    description:
      "Combined weight, gas, and ultrasonic sensors feed AWS IoT Core for live insights.",
  },
  {
    icon: "fas fa-route",
    title: "Predictive Pickup Scheduling",
    description:
      "Fill-level forecasts automatically schedule pickups only when bins reach 90%.",
  },
  {
    icon: "fas fa-recycle",
    title: "Safety & Sustainability",
    description:
      "Gas-level alerts and fill-level forecasts ensure timely service and a greener city.",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-ai-purple/20 text-primary mb-4 border border-primary/30">
            <i className="fas fa-cogs mr-2"></i> AI IN ACTION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            How WasteWatch Transforms Waste Collection
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            A complete Cloud & Fog IoT solution for real-time bin monitoring, predictive routing, and automated alerts.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Image + Preview card */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 relative">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse" />
              <div className="glass-effect p-6 rounded-2xl mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-400 mr-2 animate-pulse" />
                  <span className="text-xs font-medium text-light">
                    AI PROCESSING DATA
                  </span>
                </div>
                <div className="bg-dark/80 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">
                      Bin #42 - Downtown
                    </span>
                    <span className="text-xs px-2 py-1 bg-yellow-400/20 text-yellow-400 rounded-full">
                      82% full
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-yellow-400 h-2 rounded-full"
                      style={{ width: "82%" }}
                    />
                  </div>
                  <div className="mt-3 text-xs text-gray-400">
                    <p>AI prediction: Collection needed in 2.3 hours</p>
                    <p className="mt-1">
                      Optimal route calculated with 3 other bins
                    </p>
                  </div>
                </div>
              </div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png"
                alt="AI analyzing waste"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>

          {/* Bullet points */}
          <div className="lg:w-1/2 lg:pl-16">
            <div className="space-y-8">
              {solutionPoints.map((point, index) => (
                <div key={index} className="flex group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-xl gradient-bg text-white font-bold text-lg group-hover:rotate-6 transition-transform duration-300">
                      <i className={point.icon}></i>
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-medium text-light group-hover:text-primary transition-colors duration-300">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-gray-400">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Extra Feature */}
            <div className="mt-12 glass-effect p-6 rounded-2xl">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-ai-purple flex items-center justify-center text-white">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-light">
                    Cloud & Fog Dashboard
                  </h4>
                  <p className="mt-1 text-sm text-gray-400">
                    Visualize historical and forecasted bin data via serverless APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
