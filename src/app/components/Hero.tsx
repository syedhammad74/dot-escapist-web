"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Clock,
  CheckCircle,
  BarChart3,
  Building2,
  Shield,
  Database,
  Cloud,
  Zap,
  Play,
} from "lucide-react";
import NeuralNetworkHero from "@/components/ui/neural-network-hero";
import { EnhancedDecorations } from "@/components/ui/enhanced-decorations";

const HeroSection: React.FC = () => {
  const scrollToVideo = () => {
    const videoSection = document.getElementById("video-demo");
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    {
      icon: TrendingUp,
      value: "40%",
      label: "Reduction",
      description: "in project administration time",
    },
    {
      icon: CheckCircle,
      value: "90%",
      label: "Decrease",
      description: "in data entry errors",
    },
    {
      icon: BarChart3,
      value: "35%",
      label: "Improvement",
      description: "in on-time delivery",
    },
    {
      icon: Clock,
      value: "60%",
      label: "Faster",
      description: "report generation",
    },
  ];

  const features = [
    {
      icon: Building2,
      title: "Complete Project Lifecycle",
      description: "Track every precast element from design to installation",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Role-based permissions with complete audit trails",
    },
    {
      icon: Database,
      title: "Real-time Data",
      description: "Live synchronization across all teams and devices",
    },
    {
      icon: Cloud,
      title: "Cloud Platform",
      description: "Access anywhere with 99.9% uptime guarantee",
    },
  ];

  const StatCard: React.FC<{
    icon: React.ElementType;
    value: string;
    label: string;
    description: string;
  }> = ({ icon: Icon, value, label, description }) => (
    <motion.div
      className="flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl border border-teal-200/50 hover:border-teal-300/50 transition-all duration-300"
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <div className="text-2xl font-bold text-teal-900">
          {value} <span className="text-teal-600">{label}</span>
        </div>
        <div className="text-sm text-blue-700">{description}</div>
      </div>
    </motion.div>
  );

  const FeatureCard: React.FC<{
    icon: React.ElementType;
    title: string;
    description: string;
  }> = ({ icon: Icon, title, description }) => (
    <motion.div
      className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl border border-teal-200/50 hover:border-teal-300/50 transition-all duration-300"
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-teal-900 mb-1">{title}</h3>
          <p className="text-blue-700 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-hero-pattern pt-24 sm:pt-28 lg:pt-32 overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="floating-shapes">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>
      <EnhancedDecorations section="hero" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-20 xl:gap-24 items-center">
          {/* Left Content - Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tag */}
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-teal-500/10 to-blue-400/10 border border-teal-500/20 rounded-full text-sm sm:text-base font-medium text-teal-700 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-teal-500" />
              <span>Transform Your Construction Management</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-teal-900 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Stop Managing{" "}
              <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                Excel Sheets
              </span>
              . Start Managing{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Projects
              </span>
              .
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-lg sm:text-xl text-blue-700 max-w-2xl leading-relaxed mb-10 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              The complete construction management platform built specifically
              for precast concrete companies. End data fragmentation, eliminate
              manual errors, and accelerate project delivery with our proven
              cloud solution.
            </motion.p>

            {/* Demo Button */}
            <motion.button
              onClick={scrollToVideo}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5 mr-2" />
              Watch live demo
            </motion.button>

            {/* Statistics */}
            <motion.div
              className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </motion.div>

            {/* Features */}
            <motion.div
              className="grid gap-6 lg:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Neural Network Animation */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <NeuralNetworkHero />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
