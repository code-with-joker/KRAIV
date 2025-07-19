import React from 'react';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactBanner from './components/ContactBanner';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
      <ContactBanner />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;