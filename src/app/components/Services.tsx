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
import { EnhancedDecorations } from "@/components/ui/enhanced-decorations";

const ServiceCard: React.FC<{
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
          <p className="text-forest-600 text-sm sm:text-base leading-relaxed">
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
            <CheckCircle className="w-4 h-4 text-forest-500 flex-shrink-0 mt-0.5" />
            <span className="text-sm sm:text-base text-forest-700 leading-relaxed">
              {feature}
            </span>
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
      title: "Project Management Hub",
      description:
        "Multi-project dashboard, client portal, stakeholder management, and project templates for accelerated setup.",
      features: [
        "Multi-Project Dashboard",
        "Client Portal with real-time updates",
        "Stakeholder Management",
        "Project Templates",
      ],
    },
    {
      icon: Database,
      title: "Intelligent Element Lifecycle Management",
      description:
        "Complete tracking from design to installation with technical specifications, production control, and quality workflows.",
      features: [
        "Design Phase Management",
        "Production Control",
        "Quality Control Workflows",
        "Logistics Coordination",
      ],
    },
    {
      icon: BarChart3,
      title: "Advanced Reporting & Analytics",
      description:
        "Professional report generation with dual-language support, multiple export formats, and automated distribution.",
      features: [
        "Technical Transmittal Reports",
        "Production Reports",
        "Delivery & Logistics Reports",
        "Financial Reports",
      ],
    },
    {
      icon: Shield,
      title: "Advanced User Management",
      description:
        "Department-based permission structure with role-specific dashboards and complete audit trails.",
      features: [
        "Department-based Permissions",
        "Role-specific Dashboards",
        "Complete Audit Trails",
        "Secure Authentication",
      ],
    },
    {
      icon: Cloud,
      title: "Data Integration Engine",
      description:
        "Bulk Excel import capabilities with intelligent field mapping, validation, and template systems.",
      features: [
        "Bulk Excel Import",
        "Intelligent Field Mapping",
        "Error Detection",
        "Template Systems",
      ],
    },
    {
      icon: Users,
      title: "Role-Based Team Collaboration",
      description:
        "Design, production, quality control, and site teams work together with seamless handoffs between phases.",
      features: [
        "Design Team Focus",
        "Production Management",
        "Quality Control",
        "Site Operations",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden"
    >
      {/* Services Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.08),transparent_50%)]" />

      <EnhancedDecorations section="services" />
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
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
