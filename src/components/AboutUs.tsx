import React from 'react';
import { Users, Target, Lightbulb, DollarSign, Award, Zap } from 'lucide-react';

const AboutUs = () => {
  const team = [
    { name: "Alex Kumar", role: "Creative Director & Founder", specialty: "Brand Strategy" },
    { name: "Priya Sharma", role: "Lead Designer", specialty: "UI/UX & Graphics" },
    { name: "Rohit Singh", role: "Video Editor", specialty: "Political Campaigns" },
    { name: "Maya Patel", role: "Social Media Manager", specialty: "Growth Hacking" },
    { name: "Arjun Mehta", role: "Web Developer", specialty: "Frontend Magic" },
    { name: "Sneha Gupta", role: "Content Strategist", specialty: "Lead Generation" }
  ];

  const whyChoose = [
    { icon: Users, title: "Trusted Team", desc: "6 experts with proven track record" },
    { icon: Lightbulb, title: "Creative Excellence", desc: "Innovative solutions that stand out" },
    { icon: Target, title: "Political Expertise", desc: "Specialized in campaign management" },
    { icon: DollarSign, title: "Budget Friendly", desc: "Quality work at affordable prices" },
    { icon: Award, title: "Quality Assured", desc: "100% satisfaction guarantee" },
    { icon: Zap, title: "Quick Turnaround", desc: "Fast delivery without compromise" }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-First Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">KRAIV</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            We're a passionate team of digital creators helping startups, influencers, and political teams 
            build powerful online presence through affordable, high-quality services.
          </p>
        </div>

        {/* Fixed Team Section */}
        <div className="mb-10 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">Meet Our Team</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 hover:bg-white/15 transition-all duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center shadow-lg">
                    <span className="text-sm sm:text-lg font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white text-center mb-1">{member.name}</h4>
                  <p className="text-blue-400 text-center mb-1 font-semibold text-xs sm:text-sm">{member.role}</p>
                  <p className="text-gray-400 text-center text-xs">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fixed Why Choose KRAIV */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">Why Choose KRAIV?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group">
                  <div className="relative bg-gradient-to-br from-blue-500/15 to-purple-500/15 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:border-blue-400/50 transition-all duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-3 flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fixed CTA Section */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="https://wa.me/918210683124?text=Hi%20KRAIV%20Team%2C%20I%20want%20to%20book%20a%20design%20or%20digital%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto px-4 sm:px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-base sm:text-lg font-bold rounded-xl sm:rounded-full hover:from-green-600 hover:to-green-700 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
          >
            <span className="text-base mr-2">💬</span>
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;