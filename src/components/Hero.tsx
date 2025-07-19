import React from 'react';
import { Monitor, Palette, Video, Instagram, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
  const services = [
    { icon: Monitor, label: 'Web Design', delay: '0s' },
    { icon: Palette, label: 'Graphics', delay: '0.5s' },
    { icon: Video, label: 'Video Edit', delay: '1s' },
    { icon: Instagram, label: 'Social Media', delay: '1.5s' },
    { icon: TrendingUp, label: 'Growth', delay: '2s' },
    { icon: Users, label: 'Lead Gen', delay: '2.5s' },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Simplified Background for Mobile */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Mobile Background - Static */}
      <div className="absolute inset-0 sm:hidden">
        <div className="absolute top-10 left-5 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-5 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"></div>
      </div>

      {/* Desktop Only Floating Icons */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {/* Enhanced 3D Floating Elements */}
        <div className="absolute top-20 left-20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}>
          <div className="relative transform rotate-12 hover:rotate-45 transition-transform duration-1000">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl blur-xl opacity-40 transform scale-110"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="w-8 h-8 bg-white/30 rounded-xl"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-40 right-32 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}>
          <div className="relative transform -rotate-12 hover:rotate-12 transition-transform duration-1000">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-xl opacity-40 transform scale-125"></div>
            <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full shadow-2xl flex items-center justify-center">
              <div className="w-10 h-10 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-32 left-32 animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '4.5s' }}>
          <div className="relative transform rotate-45 hover:-rotate-12 transition-transform duration-1000">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl blur-xl opacity-40 transform scale-110"></div>
            <div className="relative w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="w-6 h-6 bg-white/30 rounded-lg"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-20 right-20 animate-bounce" style={{ animationDelay: '3s', animationDuration: '3s' }}>
          <div className="relative transform -rotate-45 hover:rotate-90 transition-transform duration-1000">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full blur-xl opacity-40 transform scale-120"></div>
            <div className="relative w-18 h-18 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full shadow-2xl flex items-center justify-center">
              <div className="w-8 h-8 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>

        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.label}
              className="absolute animate-bounce"
              style={{
                top: `${15 + (index % 3) * 20}%`,
                left: `${5 + (index % 4) * 22}%`,
                animationDelay: service.delay,
                animationDuration: '3s',
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-40 transform rotate-12 scale-110"></div>
                <div className="relative bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-2xl transform hover:scale-110 hover:rotate-12 transition-all duration-500">
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile-First Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Fixed Mobile Headlines */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-3 sm:mb-6 leading-tight">
            We Are{' '}
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              KRAIV
            </span>
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            You Think, We Build.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Affordable design & digital power for startups and creators.
          </p>
          
          {/* Fixed Mobile CTA Button */}
          <a
            href="https://wa.me/918210683124?text=Hi%20KRAIV%20Team%2C%20I%20want%20to%20book%20a%20design%20or%20digital%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-base sm:text-lg font-bold rounded-xl sm:rounded-full hover:from-green-600 hover:to-green-700 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl mb-4 sm:mb-6"
          >
            <span className="text-lg mr-2">📞</span>
            Talk to Us on WhatsApp
          </a>

          {/* Fixed Phone Number Display */}
          <div className="text-base sm:text-lg font-bold text-green-300 mb-6 sm:mb-8">
            +91 82106 83124
          </div>

          {/* Fixed Mobile Service Grid */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-lg sm:max-w-2xl mx-auto">
            {services.map((service) => (
              <div key={service.label} className="text-center group">
                <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <p className="text-white text-xs sm:text-sm font-medium leading-tight">{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Only Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;