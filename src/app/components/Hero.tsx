"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, CheckCircle } from "lucide-react";
import NeuralNetworkHero from "@/components/ui/neural-network-hero";

const Hero: React.FC = () => {
  const scrollToVideo = () => {
    const videoSection = document.getElementById("video-demo");
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
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
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { value: "45%", label: "Faster ROI", icon: CheckCircle },
    { value: "30%", label: "Cost Reduction", icon: CheckCircle },
    { value: "60%", label: "Time Savings", icon: CheckCircle },
    { value: "95%", label: "Accuracy", icon: CheckCircle },
  ];

  const features = [
    "Real-time project tracking",
    "Automated reporting",
    "Team collaboration",
    "Resource optimization",
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-forest-50 via-white to-forest-50 overflow-hidden">
      {/* Perfect Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern bg-[length:20px_20px] opacity-30" />

      {/* Decorative Elements with Mathematical Positioning */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-32 h-32 bg-gradient-to-br from-forest-500/10 to-teal-500/10 rounded-full blur-3xl"
          style={{ top: "15%", left: "10%" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-24 h-24 bg-gradient-to-br from-teal-500/10 to-forest-500/10 rounded-full blur-2xl"
          style={{ top: "25%", right: "15%" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute w-40 h-40 bg-gradient-to-br from-forest-500/5 to-teal-500/5 rounded-full blur-3xl"
          style={{ bottom: "20%", left: "20%" }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 lg:py-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Perfect Content Section */}
          <motion.div
            className="flex-1 max-w-2xl lg:max-w-3xl space-y-8 lg:space-y-10"
            variants={itemVariants}
          >
            {/* Perfect Typography Hierarchy - Smaller Text */}
            <div className="space-y-6">
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                variants={itemVariants}
              >
                <span className="text-forest-900">Stop Managing</span>
                <br />
                <span className="text-forest-600">Excel Sheets.</span>
                <br />
                <span className="text-forest-700">Start Managing</span>
                <br />
                <span className="text-forest-800">Projects.</span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-3xl"
                variants={itemVariants}
              >
                Transform your construction management with our AI-powered
                platform. Streamline workflows, reduce costs, and deliver
                projects on time with unprecedented precision and efficiency.
              </motion.p>
            </div>

            {/* Perfect CTA Section */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 lg:gap-6"
              variants={itemVariants}
            >
              <motion.button
                onClick={scrollToVideo}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-forest-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-forest-700 hover:scale-105"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Watch Live Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-forest-600 text-forest-600 font-semibold rounded-xl hover:bg-forest-600 hover:text-white transition-all duration-300 hover:scale-105"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>

            {/* Perfect Stats Grid */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-8 lg:pt-12"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center space-y-2"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 mx-auto bg-forest-100 rounded-xl">
                    <stat.icon className="w-6 h-6 text-forest-600" />
                  </div>
                  <div className="text-xl lg:text-2xl font-bold text-forest-900">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-neutral-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Perfect Features List */}
            <motion.div className="pt-8 lg:pt-12" variants={itemVariants}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center space-x-3"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-5 h-5 bg-forest-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-neutral-700 font-medium text-sm lg:text-base">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Perfect Visual Section */}
          <motion.div
            className="flex-1 w-full max-w-2xl lg:max-w-none mt-12 lg:mt-0"
            variants={itemVariants}
          >
            <div className="relative w-full h-[400px] lg:h-[600px]">
              <NeuralNetworkHero />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
