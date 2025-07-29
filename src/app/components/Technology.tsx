"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Cloud,
  Shield,
  Globe,
  Zap,
  Layers,
  Cpu,
  Wifi,
  Smartphone,
  Lock,
  RefreshCw,
  BarChart3,
} from "lucide-react";
import { EnhancedDecorations } from "@/components/ui/enhanced-decorations";

const TechCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  delay: number;
}> = ({ icon: Icon, title, description, features, delay }) => (
  <motion.div
    className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-sage-200/50 hover:shadow-2xl hover:border-forest-300/50 transition-all duration-300 group h-full"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, scale: 1.02 }}
  >
    <div className="flex flex-col h-full">
      <div className="flex items-start space-x-4 mb-6">
        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-forest-500 to-sage-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-forest-800 mb-3 leading-tight">
            {title}
          </h3>
          <p className="text-forest-600 text-sm sm:text-base leading-relaxed mb-6">
            {description}
          </p>
        </div>
      </div>

      <div className="flex-1 space-y-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-3"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: delay + 0.1 * (index + 1) }}
          >
            <div className="w-2 h-2 bg-forest-500 rounded-full flex-shrink-0 mt-2" />
            <span className="text-sm sm:text-base text-forest-700 leading-relaxed">
              {feature}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Technology = () => {
  const techStack = [
    {
      icon: Database,
      title: "Cloud-Native Foundation",
      description:
        "Built on enterprise-grade infrastructure with PostgreSQL database and auto-scaling cloud architecture.",
      features: [
        "PostgreSQL Database for reliability",
        "Auto-scaling with 99.9% uptime",
        "Global access with internet connectivity",
        "Mobile responsive across all devices",
      ],
    },
    {
      icon: Cloud,
      title: "Integration Capabilities",
      description:
        "Seamless integration with existing systems through REST API and webhook support.",
      features: [
        "Complete REST API access",
        "Real-time webhook notifications",
        "ERP system integration",
        "Multiple export formats",
      ],
    },
    {
      icon: Smartphone,
      title: "Modern User Experience",
      description:
        "Intuitive interface designed for non-technical users with advanced search and real-time updates.",
      features: [
        "Responsive design for all devices",
        "Intuitive interface design",
        "Advanced search capabilities",
        "Real-time data synchronization",
      ],
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Enterprise-grade security with JWT authentication, encrypted data, and comprehensive audit trails.",
      features: [
        "JWT Token Authentication",
        "Encrypted data in transit and at rest",
        "Automated daily backups",
        "Complete activity logging",
      ],
    },
  ];

  return (
    <section
      id="technology"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 overflow-hidden"
    >
      {/* Technology Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-teal-500/5 to-emerald-500/5" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.08),transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.08),transparent_50%)]" />

      <EnhancedDecorations section="technology" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10">
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
            Built on{" "}
            <span className="bg-gradient-to-r from-forest-500 to-sage-400 text-transparent bg-clip-text">
              Modern, Scalable Architecture
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-forest-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            ICS is built on enterprise-grade technology that ensures
            reliability, security, and scalability for your growing business
            needs.
          </motion.p>
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {techStack.map((tech, index) => (
            <TechCard
              key={index}
              icon={tech.icon}
              title={tech.title}
              description={tech.description}
              features={tech.features}
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
            Ready to Experience Enterprise-Grade Technology?
          </motion.h3>
          <motion.p
            className="text-forest-600 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            See how our modern architecture can transform your construction
            management and scale with your business growth.
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-forest-500 to-sage-400 hover:from-forest-600 hover:to-sage-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            Schedule Technical Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
