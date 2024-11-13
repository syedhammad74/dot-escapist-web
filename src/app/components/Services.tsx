"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  Cpu,
  Globe,
  Cloud,
  Settings,
  Brush,
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
    title: "Full Stack Development",
    description:
      "Comprehensive development across both frontend and backend layers",
    details: [
      "Customized, secure, and scalable solutions built with the latest technologies",
      "Complete development services from frontend to backend for smooth, reliable user experiences.",
      "Crafting seamless integration between powerful APIs and dynamic databases.",
    ],
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Development of responsive and dynamic web applications",
    details: [
      "React, Angular, and Vue.js for dynamic user interfaces",
      "Next.js for server-side rendering and static site generation",
      "Progressive Web Apps (PWA) for enhanced user experience",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description: "Cloud solutions for scalable and secure infrastructure",
    details: [
      "Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP)",
      "Cloud architecture design and deployment",
      "Serverless computing and container orchestration",
    ],
  },
  {
    icon: Settings,
    title: "DevOps",
    description:
      "Efficient development and deployment through DevOps practices",
    details: [
      "Continuous Integration and Continuous Deployment (CI/CD)",
      "Tools like Docker, Kubernetes, Jenkins, and GitHub Actions",
      "Infrastructure as Code with Terraform and Ansible",
    ],
  },
  {
    icon: Stethoscope,
    title: "Healthcare Compliance Experts",
    description:
      "HIPAA, HL7, HITECH—we handle the toughest compliance needs, so you don’t have to.",
    details: [
      "Extensive Health Care Certifications in HIPPA, CERHT, HL7, HITECH",
      "Integration with third-party services",
      "User-friendly interfaces for non-technical users",
    ],
  },
  {
    icon: Brush,
    title: "Designing",
    description: "Creative design solutions for web and mobile applications",
    details: [
      "UI/UX design for enhanced user experiences",
      "Graphic design for branding and marketing",
      "Custom, creative, and brand-focused designs.",
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
      <div className="relative p-4 sm:p-6 md:p-8 bg-gray-900 border border-gray-800 rounded-2xl h-full flex flex-col">
        <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 bg-white rounded-full flex items-center justify-center">
          <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
          {service.title}
        </h3>
        <p className="text-gray-300 mb-4 flex-grow text-sm sm:text-base">
          {service.description}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-white hover:text-gray-300 transition-colors duration-200 text-sm sm:text-base"
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
              {service.details.map((detail, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start text-sm sm:text-base"
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
    <section
      id="services"
      className="w-full flex justify-center items-center py-10 xs:py-16 tmd:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-bl from-orange-900 via-black to-gray-900"
    >
      <div className="container px-4 xs:px-6 tsm:px-8 tmd:px-10 relative z-10">
        <div className="text-center mb-10 xs:mb-16">
          {/* Decorative line above the heading */}
          <div className="flex justify-center items-center mb-4">
            <div className="h-[2px] w-12 xs:w-16 md:w-20 lg:w-32 bg-orange-500 rounded-full"></div>
          </div>

          {/* Main heading with serious and impactful effect */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Our Escape Routes
          </h2>

          {/* Decorative line below the heading */}
          <div className="flex justify-center items-center mt-2 mb-4">
            <div className="h-[2px] w-12 xs:w-16 md:w-20 lg:w-32 bg-orange-500 rounded-full"></div>
          </div>

          <p className="text-sm xs:text-base md:text-lg lg:text-xl text-gray-300 max-w-lg xs:max-w-2xl md:max-w-3xl mx-auto mt-4">
            Escaping Norms with Every Service We Offer
          </p>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 xs:gap-8 md:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
