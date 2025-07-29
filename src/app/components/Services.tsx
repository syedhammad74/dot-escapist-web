"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Database,
  Cloud,
  Shield,
  BarChart3,
  Users,
  Clock,
  Target,
  CheckCircle,
  Zap,
  Layers,
  Globe,
} from "lucide-react";

const ServiceCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  delay: number;
}> = ({ icon: Icon, title, description, features, delay }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg border border-sage-200"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="relative">
      <div className="flex items-start space-x-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-forest-500 to-sage-400 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-forest-800 mb-2">{title}</h3>
          <p className="text-forest-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: delay + 0.1 * (index + 1) }}
          >
            <CheckCircle className="w-4 h-4 text-forest-500 flex-shrink-0" />
            <span className="text-sm text-forest-700">{feature}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Project Management",
      description:
        "Complete lifecycle management for precast concrete projects with real-time tracking and collaboration.",
      features: [
        "Real-time project tracking",
        "Team collaboration tools",
        "Automated workflows",
        "Progress monitoring",
      ],
    },
    {
      icon: Database,
      title: "Data Management",
      description:
        "Centralized data storage with advanced search, version control, and automated backups.",
      features: [
        "Centralized data storage",
        "Version control",
        "Advanced search",
        "Automated backups",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Platform",
      description:
        "Secure cloud-based platform accessible from anywhere with enterprise-grade security.",
      features: [
        "24/7 accessibility",
        "Enterprise security",
        "Automatic updates",
        "Scalable infrastructure",
      ],
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Bank-level security with role-based access control and comprehensive audit trails.",
      features: [
        "Role-based access",
        "Audit trails",
        "Data encryption",
        "Compliance ready",
      ],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Powerful reporting and analytics tools for data-driven decision making.",
      features: [
        "Custom dashboards",
        "Real-time reports",
        "Performance metrics",
        "Predictive analytics",
      ],
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Seamless collaboration tools for teams across different locations and time zones.",
      features: [
        "Real-time messaging",
        "File sharing",
        "Task assignment",
        "Mobile access",
      ],
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 bg-gradient-to-br from-white via-sage-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Complete{" "}
            <span className="bg-gradient-to-r from-forest-500 to-sage-400 text-transparent bg-clip-text">
              Construction Management
            </span>{" "}
            Platform
          </motion.h2>
          <motion.p
            className="text-lg text-forest-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Everything you need to manage your precast concrete projects
            efficiently, from initial planning to final delivery.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={0.1 * (index + 1)}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.h3
            className="text-xl sm:text-2xl font-bold text-forest-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Ready to Experience the Full Platform?
          </motion.h3>
          <motion.p
            className="text-forest-600 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            See all these features in action with a personalized demo tailored
            to your specific workflows.
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-forest-500 to-sage-400 hover:from-forest-600 hover:to-sage-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            Schedule Full Platform Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
