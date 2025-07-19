import React from 'react';
import { Instagram, Youtube, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Mobile-First Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                KRAIV
              </span>
            </h3>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base max-w-md">
              Your trusted digital partner for affordable design solutions. 
              We help startups, influencers, and political teams build powerful online presence.
            </p>
            
            {/* Mobile-Enhanced Social Links */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all duration-300"
              >
                <Youtube className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
              <a
                href="mailto:contact@kraiv.com"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all duration-300"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
            </div>

            {/* Mobile WhatsApp CTA */}
            <a
              href="https://wa.me/918210683124?text=Hi%20KRAIV%20Team%2C%20I%20want%20to%20book%20a%20design%20or%20digital%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white text-sm sm:text-base font-bold rounded-xl hover:bg-green-700 active:scale-95 transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              📱 WhatsApp Us
            </a>
          </div>

          {/* Mobile-Optimized Services */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">Website Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">Graphic Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">Video Editing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">Social Media</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">Lead Generation</a></li>
            </ul>
          </div>

          {/* Mobile-Enhanced Contact */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Contact</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm sm:text-base">Delhi, India</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Serving clients worldwide</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+918210683124" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                  +91 82106 83124
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:contact@kraiv.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                  contact@kraiv.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-Enhanced Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            © 2025 KRAIV. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm">
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>

        {/* Mobile Trust Badge */}
        <div className="mt-6 sm:mt-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
            <span className="text-green-400 text-sm sm:text-base font-semibold">✅ Trusted by 500+ Clients</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;