// src/components/Features.jsx
import React from "react";

const members = [
  {
    title: "Satya Adhiyaksa Ardy",
    description:
      "Specializes in firmware development and sensor integration on microcontrollers, enabling accurate real-time data collection from gas, weight, and distance sensors.",
    tags: ["Embedded Systems Engineers"],
  },
  {
    title: "Himanshu Tiwari",
    description:
      "Architects and deploys cloud infrastructure for seamless real-time monitoring, ensuring secure and scalable data flow from edge devices to dashboards.",
    tags: ["Cloud Architects"],
  },
  {
    title: "Gerald Wijaya Tanubrata",
    description:
      "Designs and manages data pipelines using AWS Lambda and RDS to enable automated processing, storage, and trend forecasting of sensor data.",
    tags: ["Data Analysts"],
  },
  {
    title: "李書帆 Lee ShuFan",
    description:
      "Develops and fine-tunes AI models, including LSTM networks, to accurately predict bin fill levels and gas risks based on historical sensor trends.",
    tags: ["AI/ML Engineers"],
  },
];

const Members = () => {
  return (
    <section
      id="members"
      className="py-20 bg-gradient-to-b from-dark to-gray-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-ai-purple/20 text-primary mb-4 border border-primary/30">
            <i className="fas fa-robot mr-2"></i> Meet our members
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Meet the Team Behind Our Project
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our team combines expertise in IoT, AI, and cloud systems to build a
            smart waste monitoring platform that learns from sensor data and
            automates bin tracking and alerts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {members.map((feature, index) => (
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

export default Members;
