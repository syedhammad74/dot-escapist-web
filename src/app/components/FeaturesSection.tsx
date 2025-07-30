"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  Shield,
  Truck,
  Code,
  FileText,
  Users,
  Settings,
  Zap,
  Globe,
  Smartphone,
  Lock,
  Cloud,
} from "lucide-react";

const FeaturesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

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

  const tabs = [
    {
      id: 0,
      title: "Project",
      icon: BarChart3,
      features: [
        {
          title: "Multi-Project Dashboard",
          description:
            "Monitor all active projects from one comprehensive screen with real-time updates",
        },
        {
          title: "Client Portal",
          description:
            "Dedicated access for clients with real-time project updates and transparent communication",
        },
        {
          title: "Stakeholder Management",
          description:
            "Track all project participants and their roles with automated notifications",
        },
        {
          title: "Project Templates",
          description:
            "Accelerate setup with predefined workflows and best practice templates",
        },
      ],
    },
    {
      id: 1,
      title: "Lifecycle",
      icon: Database,
      features: [
        {
          title: "Element Registration",
          description:
            "Unique identification and registration of every precast element with technical specifications",
        },
        {
          title: "Production Scheduling",
          description:
            "Advanced mix design laboratory with formula management and production tracking",
        },
        {
          title: "Quality Control Workflows",
          description:
            "Digital approval processes with multi-stage inspections and compliance tracking",
        },
        {
          title: "Installation Tracking",
          description:
            "Zone installation mapping and progress tracking with real-time updates",
        },
      ],
    },
    {
      id: 2,
      title: "Reporting",
      icon: FileText,
      features: [
        {
          title: "Technical Transmittal Reports",
          description:
            "Automatically generated reports with professional formatting and dual-language support",
        },
        {
          title: "Production Analytics",
          description:
            "Date range analysis with performance metrics and trend identification",
        },
        {
          title: "Delivery & Logistics Reports",
          description:
            "Performance metrics and optimization insights for transportation management",
        },
        {
          title: "Financial Reports",
          description:
            "Payment status tracking and cash flow analysis with automated invoicing",
        },
      ],
    },
    {
      id: 3,
      title: "Technology",
      icon: Shield,
      features: [
        {
          title: "PostgreSQL Database",
          description:
            "Enterprise-grade reliability and performance with advanced query optimization",
        },
        {
          title: "JWT Authentication",
          description:
            "Enterprise-grade security protocols with role-based access controls",
        },
        {
          title: "Mobile Responsive",
          description:
            "Full functionality across all devices with offline capability",
        },
        {
          title: "API Integration",
          description:
            "Complete REST API access for third-party integrations and custom workflows",
        },
      ],
    },
  ];

  const techStack = [
    { icon: Database, name: "PostgreSQL", description: "Enterprise Database" },
    {
      icon: Cloud,
      name: "Cloud Native",
      description: "Auto-scaling Infrastructure",
    },
    {
      icon: Globe,
      name: "Global Access",
      description: "99.9% Uptime Guarantee",
    },
    {
      icon: Smartphone,
      name: "Mobile First",
      description: "Responsive Design",
    },
    { icon: Code, name: "REST API", description: "Complete Integration" },
    { icon: Lock, name: "JWT Auth", description: "Enterprise Security" },
  ];

  return (
    <section className="py-4 sm:py-6 lg:py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-8 sm:mb-12"
            variants={itemVariants}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-forest-primary mb-4 sm:mb-6 tracking-wide">
              Everything You Need.{" "}
              <span className="text-forest-sage">Nothing You Don't.</span>
            </h2>
            <p className="text-lg sm:text-xl font-semibold text-forest-primary/70 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Comprehensive features designed specifically for precast concrete
              project management
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8"
            variants={itemVariants}
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeTab === tab.id
                    ? "bg-forest-primary text-white shadow-xl"
                    : "bg-white/95 backdrop-blur-sm border border-forest-sage/20 text-forest-primary/70 hover:bg-forest-sage/5 hover:border-forest-sage/40 shadow-lg"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{tab.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8 sm:mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {tabs[activeTab].features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white/95 backdrop-blur-sm border border-forest-sage/20 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-forest-primary mb-3 sm:mb-4 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-forest-primary/70 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            className="bg-gradient-to-r from-forest-primary to-forest-dark rounded-3xl p-6 sm:p-8 lg:p-12 text-white"
            variants={itemVariants}
          >
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 tracking-wide">
                Built on Modern, Scalable Architecture
              </h3>
              <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-medium">
                Enterprise-grade technology stack ensuring reliability,
                security, and performance
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-forest-sage/20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <tech.icon className="w-6 h-6 sm:w-8 sm:h-8 text-forest-sage" />
                  </div>
                  <div className="font-semibold mb-1 text-sm sm:text-base">
                    {tech.name}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 font-medium">
                    {tech.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
