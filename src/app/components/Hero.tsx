"use client";

import type React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Download, CheckCircle } from "lucide-react";

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    {
      value: "40%",
      label: "Admin Time Saved",
      description: "Streamlined workflows",
    },
    {
      value: "90%",
      label: "Fewer Errors",
      description: "Automated validation",
    },
    {
      value: "35%",
      label: "Faster Delivery",
      description: "Real-time coordination",
    },
    {
      value: "60%",
      label: "Quick Reports",
      description: "Instant insights",
    },
  ];

  return (
    <section className="relative min-h-screen sm:pt-28 bg-gradient-to-br from-[#DAF1DE] via-white to-[#DAF1DE] overflow-hidden flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pt-24">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#8EB69B] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#235347] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex items-center pt-20 sm:pt-24 lg:pt-0">
        <motion.div
          className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center flex-1">
            {/* Left Column - Content */}
            <motion.div
              className="space-y-3 sm:space-y-4 lg:space-y-6 text-center lg:text-left flex flex-col justify-center"
              variants={itemVariants}
            >
              {/* Headline */}
              <motion.h1
                className="text-3xl text-left sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#235347] leading-tight px-2 sm:px-0"
                variants={itemVariants}
              >
                Accelerate Your Workflows from{" "}
                <span className="text-[#8EB69B]">Excel Chaos to</span> {" "}
                <span className="text-[#8EB69B]">Cloud Control</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                className="text-sm text-left sm:text-sm md:text-base lg:text-lg text-[#235347]/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"
                variants={itemVariants}
              >
                Complete construction management platform for Construction
                Companies, Logistics, and Warehousing Management Companies. End data fragmentation and accelerate delivery.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                variants={itemVariants}
              >
                <motion.a
                  href="#video-section"
                  className="hidden md:inline-flex group items-center justify-center px-6 py-3 bg-[#235347] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#163832] hover:scale-105 text-sm"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Watch Live Demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex flex-col text-left sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-xs text-[#235347]/70"
                variants={itemVariants}
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-[#8EB69B] flex-shrink-0" />
                  <span>Customizable Workflows</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-[#8EB69B] flex-shrink-0" />
                  <span>Expert Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-[#8EB69B] flex-shrink-0" />
                  <span>Cloud Integration</span>
                </div>
              </motion.div>

              {/* Mobile Hero Text - Shows under text on mobile */}
              <motion.div
                className="lg:hidden bg-white/90 backdrop-blur-md border border-[#8EB69B]/30 rounded-2xl p-6 shadow-xl"
                variants={itemVariants}
              >
                <div className="w-16 h-16 bg-[#8EB69B] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#235347] font-bold text-xl">ICS</span>
                </div>
                <h3 className="text-lg font-bold text-[#235347] mb-2">
                  All-in-One Platform
                </h3>
                <p className="text-sm text-[#235347]/70 leading-relaxed">
                  Manage projects, track progress, and collaborate seamlessly
                  with our integrated construction solution.
                </p>
              </motion.div>

              {/* Stats Cards - Mobile (under text) */}
              <div className="lg:hidden grid grid-cols-2 gap-2 sm:gap-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-white/90 backdrop-blur-md border border-[#8EB69B]/30 rounded-xl p-3 sm:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-xl sm:text-2xl font-bold text-[#235347] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#235347] mb-1 leading-tight">
                      {stat.label}
                    </div>
                    <div className="text-xs text-[#235347]/60 leading-tight">
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Desktop Only */}
            <motion.div
              className="relative hidden lg:block flex flex-col justify-center"
              variants={itemVariants}
            >
              {/* Hero Visual - Desktop */}
              <motion.div
                className="relative mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="relative w-full h-56 bg-gradient-to-br from-[#8EB69B]/20 to-[#235347]/10 rounded-2xl overflow-hidden backdrop-blur-sm border border-[#8EB69B]/30">
                  {/* Floating Elements */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-[#8EB69B]/30 rounded-xl animate-bounce"></div>
                  <div
                    className="absolute top-8 right-8 w-8 h-8 bg-[#235347]/20 rounded-lg animate-bounce"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute bottom-6 left-8 w-16 h-16 bg-[#8EB69B]/25 rounded-2xl animate-bounce"
                    style={{ animationDelay: "2s" }}
                  ></div>

                  {/* Central Platform Visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-24 h-24 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl border border-[#8EB69B]/20 flex items-center justify-center">
                        <div className="text-2xl font-bold text-[#235347]">
                          ICS
                        </div>
                      </div>
                      {/* Connection Lines */}
                      <div className="absolute -top-2 -left-2 w-3 h-3 bg-[#8EB69B] rounded-full animate-pulse"></div>
                      <div
                        className="absolute -top-2 -right-2 w-3 h-3 bg-[#8EB69B] rounded-full animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#8EB69B] rounded-full animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                      <div
                        className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#8EB69B] rounded-full animate-pulse"
                        style={{ animationDelay: "1.5s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Stats Cards - Desktop */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-white/90 backdrop-blur-md border border-[#8EB69B]/30 rounded-xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-[#235347] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-[#235347] mb-1 leading-tight">
                      {stat.label}
                    </div>
                    <div className="text-xs text-[#235347]/60 leading-tight">
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section - Video Preview */}
          <motion.div
            className="hidden md:block mt-4 sm:mt-6 lg:mt-8 text-center"
            variants={itemVariants}
          >
            <motion.a
              href="#video-section"
              className="inline-flex items-center space-x-3 text-[#235347] hover:text-[#8EB69B] transition-colors duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
             
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
