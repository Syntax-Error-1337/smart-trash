// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-ai-purple/20 text-primary mb-4 border border-primary/30">
            <i className="fas fa-headset mr-2"></i> CONTACT OUR TEAM
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Have questions about our AI solutions? Our team is ready to assist
            you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Form */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-light mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="glass-effect w-full border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-light placeholder-gray-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-light mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    className="glass-effect w-full border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-light placeholder-gray-500 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-light mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  className="glass-effect w-full border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-light placeholder-gray-500 transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-light mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your waste management needs..."
                  className="glass-effect w-full border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-light placeholder-gray-500 transition-all duration-300"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="gradient-bg text-white w-full py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Send Message <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/2 lg:pl-16">
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-light mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {/* Office */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-white">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-light">
                      Our Office
                    </h3>
                    <p className="mt-1 text-gray-400">
                      National Taiwan University Science & Technology,
                      <br />
                      Daan, Taipei 106
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-white">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-light">Phone</h3>
                    <p className="mt-1 text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-sm text-primary mt-1">
                      24/7 AI Support Available
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-white">
                      <i className="fas fa-envelope"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-light">Email</h3>
                    <p className="mt-1 text-gray-400">info@wastewatch.com</p>
                    <p className="text-sm text-primary mt-1">
                      Average response time: 2 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
