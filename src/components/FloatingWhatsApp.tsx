import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after 3 seconds on mobile, 5 seconds on desktop
      const tooltipDelay = window.innerWidth < 768 ? 2000 : 5000;
      setTimeout(() => setShowTooltip(true), tooltipDelay);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile-First Floating WhatsApp */}
      <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50">
        {/* Fixed Mobile Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-12 sm:bottom-16 right-0 mb-2">
            <div className="relative bg-white rounded-lg shadow-xl p-2 sm:p-3 max-w-xs border border-gray-200">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute -top-1 -right-1 w-5 h-5 bg-gray-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-gray-600 active:scale-95 transition-all duration-200"
              >
                <X className="w-2 h-2" />
              </button>
              <p className="text-gray-800 text-xs sm:text-sm font-semibold mb-1">Need help? 💬</p>
              <p className="text-gray-600 text-xs">Chat with us on WhatsApp!</p>
              <div className="absolute bottom-0 right-3 transform translate-y-1">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
              </div>
            </div>
          </div>
        )}

        {/* Fixed Mobile WhatsApp Button */}
        <a
          href="https://wa.me/918210683124?text=Hi%20KRAIV%20Team%2C%20I%20want%20to%20book%20a%20design%20or%20digital%20service"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 active:scale-95 transition-all duration-300"
        >
          {/* Enhanced Pulse Animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-300/30 to-green-600/30 rounded-full blur-sm"></div>
          
          {/* Icon */}
          <div className="relative z-10">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-sm"></div>
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white relative" />
          </div>
          
          {/* Fixed Badge */}
          <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        </a>
      </div>

      {/* Fixed Mobile Call Button */}
      <div className="fixed bottom-4 left-4 z-50 sm:hidden">
        <a
          href="tel:+918210683124"
          className="relative w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-300/30 to-blue-600/30 rounded-full blur-sm"></div>
          <Phone className="w-5 h-5 text-white" />
        </a>
      </div>
    </>
  );
};

export default FloatingWhatsApp;