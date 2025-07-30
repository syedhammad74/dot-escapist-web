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
      label: "Reduction in Admin Time",
      description: "Streamlined workflows eliminate manual processes",
    },
    {
      value: "90%",
      label: "Fewer Data Errors",
      description: "Automated validation prevents costly mistakes",
    },
    {
      value: "35%",
      label: "Faster Delivery",
      description: "Real-time coordination accelerates projects",
    },
    {
      value: "60%",
      label: "Faster Reporting",
      description: "Instant insights replace manual compilation",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#DAF1DE] via-white to-[#DAF1DE] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#8EB69B] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#235347] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-7xl mx-auto pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              className="space-y-3 sm:space-y-4 lg:space-y-6"
              variants={itemVariants}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-[#8EB69B]/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#235347]"
                variants={itemVariants}
              >
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#8EB69B]" />
                <span>Trusted by 500+ Construction Companies</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#235347] leading-tight"
                variants={itemVariants}
              >
                Transform Your Precast Projects from{" "}
                <span className="text-[#8EB69B]">Excel Chaos</span> to{" "}
                <span className="text-[#8EB69B]">Cloud Control</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                className="text-sm sm:text-base md:text-lg text-[#235347]/80 leading-relaxed max-w-2xl"
                variants={itemVariants}
              >
                The complete construction management platform built specifically
                for precast concrete companies. End data fragmentation,
                eliminate manual errors, and accelerate project delivery with
                our proven cloud solution.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
                variants={itemVariants}
              >
                <motion.button
                  className="group inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 lg:py-3 bg-[#235347] text-white font-bold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#163832] hover:scale-105 text-sm sm:text-base"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule Live Demo
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
                <motion.button
                  className="group inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 lg:py-3 border-2 border-[#235347] text-[#235347] font-semibold rounded-xl sm:rounded-2xl hover:bg-[#235347] hover:text-white transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm text-sm sm:text-base"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Download Case Study
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-[#235347]/70 pt-2"
                variants={itemVariants}
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#8EB69B] flex-shrink-0" />
                  <span>30-Day Free Trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#8EB69B] flex-shrink-0" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#8EB69B] flex-shrink-0" />
                  <span>24/7 Support</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Hero Visual & Stats Cards */}
            <motion.div
              className="relative order-first lg:order-last"
              variants={itemVariants}
            >
              {/* Hero Visual */}
              <motion.div
                className="relative mb-6 sm:mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="relative w-full h-32 sm:h-40 md:h-48 lg:h-56 bg-gradient-to-br from-[#8EB69B]/20 to-[#235347]/10 rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-sm border border-[#8EB69B]/30">
                  {/* Floating Elements */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-[#8EB69B]/30 rounded-xl sm:rounded-2xl animate-bounce"></div>
                  <div
                    className="absolute top-4 right-4 sm:top-8 sm:right-8 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-[#235347]/20 rounded-lg sm:rounded-xl animate-bounce"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8 w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#8EB69B]/25 rounded-2xl sm:rounded-3xl animate-bounce"
                    style={{ animationDelay: "2s" }}
                  ></div>

                  {/* Central Platform Visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl border border-[#8EB69B]/20 flex items-center justify-center">
                        <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#235347]">
                          ICS
                        </div>
                      </div>
                      {/* Connection Lines */}
                      <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-[#8EB69B] rounded-full animate-pulse"></div>
                      <div
                        className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-[#8EB69B] rounded-full animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-[#8EB69B] rounded-full animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                      <div
                        className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-[#8EB69B] rounded-full animate-pulse"
                        style={{ animationDelay: "1.5s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-white/90 backdrop-blur-md border border-[#8EB69B]/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#235347] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#235347] mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-[#235347]/60 leading-relaxed">
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section - Video Preview */}
          <motion.div
            className="mt-8 sm:mt-12 lg:mt-16 text-center"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center space-x-3 text-[#235347] hover:text-[#8EB69B] transition-colors duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#8EB69B] rounded-full flex items-center justify-center shadow-lg">
                <Play className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-white ml-0.5" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm sm:text-base">
                  See ICS in Action
                </div>
                <div className="text-xs sm:text-sm opacity-70">
                  2-minute platform overview
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
