import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import Dashboard from "./components/Dashboard";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Members from "./components/Member";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulated login logic
  const handleLogin = (email, password) => {
    if (email === "123" && password === "123") {
      setIsLoggedIn(true);
      setIsLoginOpen(false);
    } else {
      alert("Invalid credentials. Try 123 / 123");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsLoginOpen(false);
  };

  // If logged in, render dashboard
  if (isLoggedIn) {
    return <Dashboard onLogout={handleLogout} />;
  }

  // Otherwise show landing page
  return (
    <div className="font-sans bg-dark text-light antialiased">
      <Navbar onLoginClick={() => setIsLoginOpen(true)} />
      <Hero onLoginClick={() => setIsLoginOpen(true)} />
      <Features />
      <Solutions />
      <Testimonials />
      <CTA />
      <Members/>
      <Contact />
      <Footer />
      <LoginModal
        show={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}

export default App;
