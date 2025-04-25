// src/components/Testimonials.jsx
import React from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "City Sustainability Manager",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    rating: 5,
    quote:
      "EcoAI's predictive algorithms reduced our collection costs by 45% while improving service levels. The AI insights are game-changing for municipal waste management.",
    stat: "AI Route Optimization saved $220k annually",
  },
  {
    name: "Michael Chen",
    role: "Facility Director",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    quote:
      "The computer vision waste sorting increased our recycling rate from 28% to 63% in just 3 months. The AI learns and improves continuously - incredible technology.",
    stat: "AI Sorting achieved 95% accuracy",
  },
  {
    name: "Emma Rodriguez",
    role: "Retail Chain COO",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4.5,
    quote:
      "Managing waste across 200+ locations is now effortless with EcoAI's centralized dashboard. The neural network predictions help us allocate resources optimally.",
    stat: "AI reduced missed collections by 92%",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900/50 to-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-ai-purple/20 text-primary mb-4 border border-primary/30">
            <i className="fas fa-quote-left mr-2"></i> TRUSTED BY INDUSTRY
            LEADERS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Organizations worldwide are transforming their waste management with
            EcoAI's artificial intelligence solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-2xl hover:neon-shadow transition-all duration-500"
            >
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-light">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-primary">{testimonial.role}</p>
                </div>
                <div className="ml-auto text-yellow-400">
                  {Array.from({ length: Math.floor(testimonial.rating) }).map(
                    (_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    )
                  )}
                  {testimonial.rating % 1 !== 0 && (
                    <i className="fas fa-star-half-alt"></i>
                  )}
                </div>
              </div>
              <p className="text-gray-400 italic">"{testimonial.quote}"</p>
              <div className="mt-4 flex items-center">
                <i className="fas fa-robot text-primary mr-2"></i>
                <span className="text-xs text-gray-400">
                  {testimonial.stat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
