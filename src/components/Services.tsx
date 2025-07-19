import React from 'react';
import { Monitor, Palette, Video, Instagram, TrendingUp, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Website Design",
      description: "Modern, responsive websites that convert visitors into customers. Perfect for startups and businesses.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"]
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Eye-catching logos, thumbnails, posters, and political graphics that make your brand stand out.",
      features: ["Logo Design", "Social Media Graphics", "Political Posters", "Thumbnails"]
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing for reels, shorts, and political campaign videos that engage audiences.",
      features: ["Instagram Reels", "YouTube Videos", "Campaign Ads", "Motion Graphics"]
    },
    {
      icon: Instagram,
      title: "Account Management",
      description: "Complete Instagram and political account handling to grow your online presence effectively.",
      features: ["Content Planning", "Daily Posting", "Engagement Growth", "Analytics"]
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Data-driven social media growth strategies that increase followers and engagement rates.",
      features: ["Audience Analysis", "Content Strategy", "Hashtag Research", "Growth Hacking"]
    },
    {
      icon: Users,
      title: "Lead Generation",
      description: "Powerful lead generation systems for businesses and creators to convert followers into customers.",
      features: ["Sales Funnels", "Email Marketing", "Conversion Optimization", "ROI Tracking"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-First Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            Comprehensive digital solutions designed to elevate your brand and accelerate your growth.
          </p>
        </div>

        {/* Fixed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group h-full">
                <div className="relative h-full">
                  {/* Fixed Mobile Card */}
                  <div className="relative h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 hover:bg-white/15 transition-all duration-300">
                    {/* Fixed Icon Container */}
                    <div className="relative mb-4">
                      <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-30 transform rotate-6"></div>
                      <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                    </div>

                    {/* Fixed Content */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Fixed Features */}
                    <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-400 text-xs sm:text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Fixed CTA Button */}
                    <a
                      href="https://wa.me/918210683124?text=Hi%20KRAIV%20Team%2C%20I%20want%20to%20book%20a%20design%20or%20digital%20service"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2 sm:py-3 px-3 sm:px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg text-sm"
                    >
                      <span className="inline-block mr-1">📱</span>
                      Contact for Work
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fixed Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-gradient-to-r from-blue-500/15 to-purple-500/15 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm">Choose any service and let's discuss your project requirements</p>
            <a
              href="https://wa.me/918210683124?text=Hi%20KRAIV%20Team%2C%20I%20want%20to%20book%20a%20design%20or%20digital%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-4 sm:px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-base sm:text-lg font-bold rounded-xl sm:rounded-full hover:from-green-600 hover:to-green-700 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
            >
              <span className="text-base mr-2">🚀</span>
              Start Your Project Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;