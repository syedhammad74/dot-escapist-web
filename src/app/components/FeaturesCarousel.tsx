"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FeaturesCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      id: "admin-panel",
      title: "Command Center Administration",
      headline: "Centralized Control for Enterprise Operations",
      description: "Unified dashboard providing complete oversight of all projects, teams, and operations. Replace scattered Excel files with a single source of truth that administrators can control, monitor, and secure across your entire organization.",
      imagePlaceholder: "admin-panel-screenshot.png"
    },
    {
      id: "employee-management",
      title: "Workforce Intelligence System",
      headline: "Smart Employee Management Across Multiple Sites",
      description: "Advanced employee management with role-based permissions, department allocation, and performance tracking. Eliminate the chaos of managing hundreds of team members across different projects with centralized, cloud-based workforce administration.",
      imagePlaceholder: "employee-management-screenshot.png"
    },
    {
      id: "elements-management",
      title: "Element Lifecycle Orchestration",
      headline: "Track 100,000+ Elements with Precision",
      description: "Complete element management from design to installation. Handle complex relationships, dependencies, and statuses across massive construction projects. Say goodbye to Excel spreadsheets that break with large datasets.",
      imagePlaceholder: "elements-management-screenshot.png"
    },
    {
      id: "reports-management",
      title: "Professional Reporting Engine",
      headline: "Automated Reports That Save Engineers Hours",
      description: "Generate professional, branded reports automatically with multi-language support. No more spending hours after work updating Excel sheets. Create executive summaries, technical reports, and client presentations with one click.",
      imagePlaceholder: "reports-management-screenshot.png"
    },
    {
      id: "roles-permissions",
      title: "Enterprise Security Framework",
      headline: "Granular Access Control & Data Security",
      description: "Sophisticated role-based permissions with department-level controls and audit trails. Secure your sensitive construction data with enterprise-grade access management that legacy systems simply cannot provide.",
      imagePlaceholder: "roles-permissions-screenshot.png"
    },
    {
      id: "dashboards",
      title: "Real-Time Intelligence Hub",
      headline: "Live Data Across All Projects & Teams",
      description: "Dynamic dashboards with real-time updates across multiple sites and projects. Monitor KPIs, track progress, and make data-driven decisions with live analytics that connect all your construction operations.",
      imagePlaceholder: "dashboards-screenshot.png"
    },
    {
      id: "import-export",
      title: "Data Migration & Integration",
      headline: "Seamless Legacy System Transformation",
      description: "Powerful import/export capabilities that migrate your existing Excel, Google Sheets, and MS Access data. Bulk processing of thousands of records with intelligent mapping and validation ensures smooth transition to cloud-based management.",
      imagePlaceholder: "import-export-screenshot.png"
    },
    {
      id: "collaboration",
      title: "Multi-Site Collaboration Platform",
      headline: "Real-Time Coordination Across Enterprise",
      description: "Connect teams across multiple construction sites with instant communication, shared workflows, and synchronized data. Eliminate the delays and errors caused by fragmented communication channels and outdated file sharing.",
      imagePlaceholder: "collaboration-screenshot.png"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative">
      {/* Main Carousel Container */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
        
        {/* Left Side - Content (2 columns) */}
        <motion.div 
          className="order-2 lg:order-1 lg:col-span-2 flex flex-col justify-center"
          key={currentSlide}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="space-y-6 min-h-[400px] lg:min-h-[450px] flex flex-col justify-center">
            {/* Feature Title */}
            <div className="space-y-3">
              <div className="inline-flex items-center px-3 py-1 bg-forest-sage/10 rounded-full">
                <span className="text-sm font-semibold text-forest-sage">
                  Feature {currentSlide + 1} of {features.length}
                </span>
              </div>
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-primary leading-tight">
                {features[currentSlide].headline}
              </h4>
            </div>

            {/* Feature Subtitle */}
            <h5 className="text-lg sm:text-xl font-semibold text-forest-sage">
              {features[currentSlide].title}
            </h5>

            {/* Feature Description */}
            <p className="text-base sm:text-lg text-forest-primary/80 leading-relaxed">
              {features[currentSlide].description}
            </p>
          </div>
        </motion.div>

        {/* Right Side - Image Carousel (3 columns) */}
        <div className="order-1 lg:order-2 lg:col-span-3 relative">
          {/* Image Container with 16:10 Aspect Ratio */}
          <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-forest-sage/10 to-forest-primary/10 rounded-2xl overflow-hidden shadow-2xl border border-forest-sage/20">
            
            {/* Placeholder for Screenshots */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Screenshot Placeholder */}
                <div className="w-full h-full bg-white/95 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-forest-sage/30">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-forest-sage/20 rounded-xl flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-forest-sage">
                        {currentSlide + 1}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-forest-primary">
                        Screenshot Placeholder
                      </p>
                      <p className="text-sm text-forest-primary/60 max-w-xs mx-auto">
                        Drop your <strong>{features[currentSlide].imagePlaceholder}</strong> here
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Future: Actual Image Implementation */}
                {/* 
                <img 
                  src={`/screenshots/${features[currentSlide].imagePlaceholder}`}
                  alt={features[currentSlide].title}
                  className="w-full h-full object-cover rounded-2xl"
                />
                */}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
              aria-label="Previous feature"
            >
              <ChevronLeft className="w-5 h-5 text-forest-primary group-hover:text-forest-sage transition-colors" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
              aria-label="Next feature"
            >
              <ChevronRight className="w-5 h-5 text-forest-primary group-hover:text-forest-sage transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Dots - Below entire section */}
      <div className="flex items-center justify-center space-x-3 mt-8 lg:mt-12">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-forest-sage scale-125"
                : "bg-forest-sage/30 hover:bg-forest-sage/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile Navigation (Below on mobile) */}
      <div className="lg:hidden mt-6 flex justify-center space-x-4">
        <button
          onClick={prevSlide}
          className="flex items-center justify-center px-4 py-2 bg-forest-primary text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-forest-dark"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </button>
        <button
          onClick={nextSlide}
          className="flex items-center justify-center px-4 py-2 bg-forest-primary text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-forest-dark"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default FeaturesCarousel;