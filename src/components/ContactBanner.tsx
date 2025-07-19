import React from 'react';
import { MessageCircle, Clock, Shield, Phone } from 'lucide-react';

const ContactBanner = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-green-600 via-green-500 to-blue-600 relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/15 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-300/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-blue-300/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Fixed Headlines */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4 leading-tight">
            Ready to Build Your
            <span className="block text-yellow-300">
              Brand?
            </span>
          </h2>
          
          <h3 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-6">
            Let's Talk!
          </h3>

          <p className="text-base sm:text-lg text-green-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Book Your Work Directly on WhatsApp!
          </p>

          {/* Fixed CTA Button */}
          <a
            href="https://wa.me/918210683124?text=Hi%20KRAIV%20Team%2C%20I%20want%20to%20book%20a%20design%20or%20digital%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-green-600 text-base sm:text-lg font-black rounded-xl sm:rounded-full hover:bg-gray-100 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl mb-4 sm:mb-6"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            <span className="text-base mr-1">📱</span>
            Chat Now on WhatsApp
          </a>

          {/* Fixed Phone Number */}
          <div className="text-base sm:text-lg font-bold text-white mb-6 sm:mb-8 flex items-center justify-center">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            +91 82106 83124
          </div>

          {/* Fixed Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-2 bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-center">
                <p className="text-white font-bold text-sm sm:text-base">Quick Response</p>
                <p className="text-green-100 text-xs sm:text-sm">Reply within 2 hours</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-center">
                <p className="text-white font-bold text-sm sm:text-base">No Advance</p>
                <p className="text-green-100 text-xs sm:text-sm">For small orders</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-center">
                <p className="text-white font-bold text-sm sm:text-base">Direct Contact</p>
                <p className="text-green-100 text-xs sm:text-sm">No middlemen</p>
              </div>
            </div>
          </div>

          {/* Fixed Subtext */}
          <p className="text-sm sm:text-base text-green-100 mt-6 sm:mt-8 max-w-2xl mx-auto leading-relaxed px-4">
            Join 500+ satisfied clients who chose KRAIV for their digital transformation. 
            <span className="font-bold block"> Let's discuss your project today!</span>
          </p>

          {/* Fixed Secondary CTA */}
          <div className="mt-4 sm:mt-6">
            <a
              href="tel:+918210683124"
              className="inline-flex items-center justify-center w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm sm:text-base font-bold rounded-xl sm:rounded-full hover:bg-white/30 transform hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;