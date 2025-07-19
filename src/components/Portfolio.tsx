import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Star, Eye } from 'lucide-react';

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const projects = [
    {
      title: "Political Campaign Website",
      category: "Web Design",
      description: "Complete campaign website with voter engagement features",
      image: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: "50K+ Visitors"
    },
    {
      title: "Instagram Growth Campaign",
      category: "Social Media",
      description: "500% follower growth in 3 months for lifestyle influencer",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: "500% Growth"
    },
    {
      title: "Startup Brand Identity",
      category: "Graphic Design",
      description: "Complete brand package including logo, colors, and guidelines",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: "Full Rebrand"
    },
    {
      title: "Political Campaign Videos",
      category: "Video Editing",
      description: "Series of campaign videos with 2M+ total views",
      image: "https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: "2M+ Views"
    },
    {
      title: "E-commerce Growth",
      category: "Lead Generation",
      description: "300% increase in sales through targeted campaigns",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: "300% Sales ↗"
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Political Leader",
      content: "KRAIV helped us win the election with their amazing campaign videos and social media strategy. Professional team!",
      rating: 5,
      location: "Delhi"
    },
    {
      name: "Priya Singh",
      role: "Lifestyle Influencer",
      content: "My Instagram followers grew from 5K to 50K in just 4 months. Their content strategy is incredible!",
      rating: 5,
      location: "Mumbai"
    },
    {
      name: "Tech Startup CEO",
      role: "Startup Founder",
      content: "The website they built for us converted 40% better than our old one. ROI was amazing!",
      rating: 5,
      location: "Bangalore"
    },
    {
      name: "Maya Patel",
      role: "Content Creator",
      content: "Best video editing team! My YouTube channel growth skyrocketed after working with KRAIV.",
      rating: 5,
      location: "Pune"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-First Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            See how we've helped clients achieve their digital goals with our creative solutions.
          </p>
        </div>

        {/* Mobile-Optimized Portfolio Carousel */}
        <div className="mb-16 sm:mb-20">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative group">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                      
                      {/* Mobile-Enhanced Project Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                        <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                          <span className="inline-block px-2 sm:px-3 py-1 bg-blue-500 text-white text-xs sm:text-sm font-semibold rounded-full">
                            {project.category}
                          </span>
                          <span className="inline-block px-2 sm:px-3 py-1 bg-green-500 text-white text-xs sm:text-sm font-semibold rounded-full">
                            {project.stats}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">{project.title}</h3>
                        <p className="text-gray-300 text-sm sm:text-base">{project.description}</p>
                      </div>
                      
                      {/* Mobile Play Button */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-60 scale-125"></div>
                          <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                          <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile-Friendly Navigation Buttons */}
            <button 
              onClick={prevProject}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 active:scale-95 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <button 
              onClick={nextProject}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 active:scale-95 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Enhanced Mobile Dots Indicator */}
            <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentProject ? 'bg-blue-500 scale-125' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile-Enhanced Testimonials */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">What Our Clients Say</h3>
          <div className="relative max-w-2xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white/10 sm:bg-white/5 backdrop-blur-md border border-white/20 sm:border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center mx-2 sm:mx-0">
                      {/* Mobile Star Rating */}
                      <div className="flex justify-center mb-3 sm:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      {/* Mobile Testimonial Content */}
                      <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      
                      {/* Mobile Client Info */}
                      <div>
                        <h4 className="text-white font-bold text-lg sm:text-xl">{testimonial.name}</h4>
                        <p className="text-blue-400 text-sm sm:text-base">{testimonial.role}</p>
                        <p className="text-gray-500 text-xs sm:text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Testimonial Navigation */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 active:scale-95 transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 active:scale-95 transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>

            {/* Mobile Testimonial Dots */}
            <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-500 scale-125' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Portfolio CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Want to See Your Project Here?</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Let's create something amazing together</p>
            <a
              href="https://wa.me/918210683124?text=Hi%20KRAIV%20Team%2C%20I%20want%20to%20book%20a%20design%20or%20digital%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg sm:text-xl font-bold rounded-2xl sm:rounded-full hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
            >
              <span className="text-xl mr-2">✨</span>
              Start Your Success Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;