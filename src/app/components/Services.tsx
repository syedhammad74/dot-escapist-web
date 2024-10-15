"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Globe,
  BarChart,
  Zap,
  Layers,
  Share2,
  ChevronDown,
} from "lucide-react";

// Define the type for a service
interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
}

// Define the services array with proper types
const services: Service[] = [
  {
    icon: Cpu,
    title: "AI-Powered Development",
    description: "Cutting-edge AI integration for smarter web solutions",
    details: [
      "Machine learning algorithms for personalized user experiences",
      "Natural language processing for advanced chatbots",
      "Predictive analytics for data-driven decision making",
    ],
  },
  {
    icon: Globe,
    title: "Global SEO Optimization",
    description: "Boost your worldwide digital presence",
    details: [
      "Multi-language keyword research and optimization",
      "International link building strategies",
      "Geo-targeting techniques for local markets",
    ],
  },
  {
    icon: BarChart,
    title: "Data-Driven Marketing",
    description: "Leverage big data for precision targeting",
    details: [
      "Advanced customer segmentation",
      "Real-time campaign performance tracking",
      "Multi-channel attribution modeling",
    ],
  },
  {
    icon: Zap,
    title: "High-Performance Websites",
    description: "Lightning-fast, scalable web applications",
    details: [
      "Server-side rendering for improved load times",
      "Progressive Web App (PWA) development",
      "Content Delivery Network (CDN) integration",
    ],
  },
  {
    icon: Layers,
    title: "Full-Stack Solutions",
    description: "End-to-end development for complex projects",
    details: [
      "Microservices architecture implementation",
      "DevOps practices for continuous integration and deployment",
      "Scalable database design and optimization",
    ],
  },
  {
    icon: Share2,
    title: "Cross-Platform Integration",
    description: "Seamless experiences across all devices",
    details: [
      "Native mobile app development (iOS & Android)",
      "Cross-platform frameworks like React Native",
      "API development for third-party integrations",
    ],
  },
];

// Define types for the component props
interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="relative group h-full"
    >
      <div className="absolute flex justify-center items-center inset-0 bg-white/10 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-300" />
      <div className="relative p-6 bg-gray-900 border border-gray-800 rounded-2xl h-full flex flex-col">
        <div className="w-12 h-12 mb-4 bg-white rounded-full flex items-center justify-center">
          <service.icon className="w-6 h-6 text-gray-900" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">
          {service.title}
        </h3>
        <p className="text-gray-300 mb-4 flex-grow">{service.description}</p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-white hover:text-gray-300 transition-colors duration-200"
          aria-expanded={isExpanded}
        >
          <span className="mr-2">
            {isExpanded ? "Hide Details" : "Show Details"}
          </span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isExpanded ? "transform rotate-180" : ""
            }`}
          />
        </button>
        <AnimatePresence>
          {isExpanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-2 text-gray-400"
            >
              {service.details.map((detail: string, index: number) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="mr-2 mt-1 text-white">•</span>
                  {detail}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function FuturisticServices() {
  return (
    <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-bl from-orange-900 via-black to-gray-900">
      <div className="container px-4 md:px-6 relative z-10 ">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white mb-4">
            Future-Ready Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering your digital presence with cutting-edge solutions. Our
            comprehensive suite of services is designed to propel your business
            into the future of technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-20">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-black font-bold rounded-full text-lg hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            Explore Our Services
          </motion.button>
        </div>
      </div>
    </section>
  );
}
