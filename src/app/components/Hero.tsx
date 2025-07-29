"use client";

import React, { useState, useEffect } from "react";
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
} from "lucide-react";
import NeuralNetworkHero from "@/components/ui/neural-network-hero";
import { EnhancedDecorations } from "@/components/ui/enhanced-decorations";

const ForestGradientText: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <span
    className={`bg-gradient-to-r from-forest-500 via-sage-400 to-forest-600 text-transparent bg-clip-text ${className}`}
  >
    {children}
  </span>
);

const StatCard: React.FC<{
  icon: React.ElementType;
  value: string;
  label: string;
  delay: number;
}> = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    className="flex flex-col items-center justify-center space-y-3 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-sage-200/50 hover:shadow-2xl hover:border-forest-300/50 transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, scale: 1.02 }}
  >
    <div className="p-3 bg-gradient-to-br from-forest-500 to-sage-400 rounded-xl shadow-lg">
      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
    </div>
    <div className="text-center">
      <div className="text-2xl sm:text-3xl font-bold text-forest-700 mb-1">
        {value}
      </div>
      <div className="text-sm text-forest-600 font-medium leading-tight">
        {label}
      </div>
    </div>
  </motion.div>
);

const FeatureCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}> = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-sage-200/50 hover:shadow-2xl hover:border-forest-300/50 transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -3, scale: 1.01 }}
  >
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-forest-500 to-sage-400 rounded-xl flex items-center justify-center shadow-lg">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-forest-800 mb-3">{title}</h3>
        <p className="text-forest-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const features = [
    {
      icon: Database,
      title: "Centralized Data Management",
      description:
        "Single source of truth for all project information, eliminating data silos and version conflicts.",
    },
    {
      icon: Cloud,
      title: "Real-time Collaboration",
      description:
        "Teams work together seamlessly with instant updates and shared project visibility.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level security with role-based access control and comprehensive audit trails.",
    },
    {
      icon: Building2,
      title: "Industry-Specific Workflows",
      description:
        "Built specifically for precast concrete with optimized processes and best practices.",
    },
  ];

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 xl:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left pt-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-forest-500/10 border border-forest-500/20 rounded-full text-forest-700 text-sm sm:text-base font-medium mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
              Transform Your Construction Management
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Stop Managing Excel Sheets.
              <br />
              <ForestGradientText>Start Managing Projects.</ForestGradientText>
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base lg:text-lg text-forest-600 mb-4 sm:mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Transform Your Precast Concrete Projects from Excel Chaos to Cloud
              Control
            </motion.p>

            <motion.p
              className="text-sm sm:text-base text-forest-700 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              The complete construction management platform built specifically
              for precast concrete companies. End data fragmentation,
              eliminatemanual errors, and accelerate project delivery with
              proven cloud solution.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-8 sm:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                className="bg-gradient-to-r from-forest-500 to-sage-400 hover:from-forest-600 hover:to-sage-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Your Live Demo
              </motion.button>
              <motion.button
                className="bg-white border border-forest-500 text-forest-600 hover:bg-forest-50 font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Case Study
              </motion.button>
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

        {/* Key Statistics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <StatCard
            icon={TrendingUp}
            value="40%"
            label="Reduction in project administration time"
            delay={0.1}
          />
          <StatCard
            icon={CheckCircle}
            value="90%"
            label="Decrease in data entry errors"
            delay={0.2}
          />
          <StatCard
            icon={Clock}
            value="35%"
            label="Improvement in on-time delivery"
            delay={0.3}
          />
          <StatCard
            icon={BarChart3}
            value="60%"
            label="Faster report generation"
            delay={0.4}
          />
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-8 sm:mb-10"
        >
          <div className="text-center mb-6">
            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-forest-800 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              Why Choose ICS?
            </motion.h2>
            <motion.p
              className="text-forest-600 text-base max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Built specifically for the precast concrete industry with features
              that matter
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={0.1 * (index + 1)}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-lg border border-sage-200 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <div className="text-center">
            <motion.h3
              className="text-xl sm:text-2xl font-bold text-forest-800 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              Ready to Transform Your Construction Management?
            </motion.h3>
            <motion.p
              className="text-forest-600 text-base mb-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              Join leading precast concrete companies who have already
              eliminated Excel chaos and accelerated their project delivery with
              ICS.
            </motion.p>
            <motion.button
              className="bg-gradient-to-r from-forest-500 to-sage-400 hover:from-forest-600 hover:to-sage-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
