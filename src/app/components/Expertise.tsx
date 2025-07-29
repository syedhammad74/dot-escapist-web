"use client";

import React, { useState, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  Settings,
  Shield,
  Database,
  Zap,
  Globe,
  Smartphone,
  Workflow,
  CheckCircle,
  Calendar,
  Truck,
  MapPin,
  ClipboardCheck,
  TrendingUp,
  Download,
  Upload,
  Search,
  Bell,
  Lock,
  Eye,
  Activity,
} from "lucide-react";

interface FeatureDetail {
  name: string;
  icon: JSX.Element;
  description: string;
}

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
  details: FeatureDetail[];
  benefits: string[];
}

const featuresData: Feature[] = [
  {
    title: "Project Management Hub",
    description: "Complete project oversight with multi-project dashboards and client portals for real-time collaboration.",
    icon: <LayoutDashboard className="h-6 w-6 xs:h-8 xs:w-8 text-forest-500" />,
    details: [
      {
        name: "Multi-Project Dashboard",
        icon: <BarChart3 className="text-forest-500" />,
        description: "Monitor all active projects from one comprehensive screen with real-time updates and status tracking.",
      },
      {
        name: "Client Portal",
        icon: <Users className="text-sage-500" />,
        description: "Dedicated access for clients with real-time project updates, progress tracking, and communication tools.",
      },
      {
        name: "Stakeholder Management",
        icon: <Users className="text-forest-500" />,
        description: "Track all project participants and their roles with permission-based access and activity monitoring.",
      },
      {
        name: "Project Templates",
        icon: <FileText className="text-sage-500" />,
        description: "Accelerate setup with predefined workflows and standardized project structures for consistency.",
      },
    ],
    benefits: [
      "Real-time project visibility",
      "Improved client communication",
      "Streamlined stakeholder coordination",
      "Faster project setup"
    ]
  },
  {
    title: "Element Lifecycle Management",
    description: "Track every precast element from design to installation with intelligent workflow automation.",
    icon: <Workflow className="h-6 w-6 xs:h-8 xs:w-8 text-forest-500" />,
    details: [
      {
        name: "Design Phase",
        icon: <FileText className="text-forest-500" />,
        description: "Unique element identification, technical drawing management, revision control with complete change history.",
      },
      {
        name: "Production Control",
        icon: <Settings className="text-sage-500" />,
        description: "Advanced mix design laboratory, production scheduling, quality control workflows with digital approvals.",
      },
      {
        name: "Logistics Coordination",
        icon: <Truck className="text-forest-500" />,
        description: "Delivery optimization with route planning, transporter management, and digital delivery order system.",
      },
      {
        name: "Site Operations",
        icon: <MapPin className="text-sage-500" />,
        description: "Material inspection reports, multi-stage inspection processes, and zone installation mapping.",
      },
    ],
    benefits: [
      "Complete element tracking",
      "Automated workflow triggers",
      "Quality control integration",
      "Real-time production analytics"
    ]
  },
  {
    title: "Advanced Reporting & Analytics",
    description: "Professional report generation with dual-language support and automated distribution capabilities.",
    icon: <BarChart3 className="h-6 w-6 xs:h-8 xs:w-8 text-forest-500" />,
    details: [
      {
        name: "Technical Transmittal Reports",
        icon: <FileText className="text-forest-500" />,
        description: "Automatic numbering and professional formatting with company branding and dual-language support.",
      },
      {
        name: "Production Reports",
        icon: <TrendingUp className="text-sage-500" />,
        description: "Date range analysis with performance metrics and production efficiency tracking.",
      },
      {
        name: "Delivery & Logistics Reports",
        icon: <Truck className="text-forest-500" />,
        description: "Performance metrics with route optimization and delivery tracking analytics.",
      },
      {
        name: "Financial Reports",
        icon: <BarChart3 className="text-sage-500" />,
        description: "Payment status tracking, cash flow analysis, and financial performance insights.",
      },
    ],
    benefits: [
      "60% faster report generation",
      "Professional formatting",
      "Multiple export formats",
      "Automated distribution"
    ]
  },
  {
    title: "User Management & Security",
    description: "Enterprise-grade security with role-based permissions and complete audit trails for compliance.",
    icon: <Shield className="h-6 w-6 xs:h-8 xs:w-8 text-forest-500" />,
    details: [
      {
        name: "Department-Based Permissions",
        icon: <Users className="text-forest-500" />,
        description: "Role-specific dashboard views and access controls based on organizational hierarchy.",
      },
      {
        name: "Activity Audit Trails",
        icon: <Activity className="text-sage-500" />,
        description: "Complete user activity logging with timestamp tracking and compliance reporting.",
      },
      {
        name: "Secure Authentication",
        icon: <Lock className="text-forest-500" />,
        description: "JWT token authentication with session management and secure login protocols.",
      },
      {
        name: "Data Encryption",
        icon: <Shield className="text-sage-500" />,
        description: "All data encrypted in transit and at rest with automated backup systems.",
      },
    ],
    benefits: [
      "Role-based access control",
      "Complete audit trails",
      "Enterprise-grade security",
      "Compliance ready"
    ]
  },
  {
    title: "Data Integration Engine",
    description: "Bulk Excel import capabilities with intelligent field mapping and error detection workflows.",
    icon: <Database className="h-6 w-6 xs:h-8 xs:w-8 text-forest-500" />,
    details: [
      {
        name: "Bulk Excel Import",
        icon: <Upload className="text-forest-500" />,
        description: "Import large datasets from Excel files with intelligent field mapping and validation.",
      },
      {
        name: "Error Detection",
        icon: <CheckCircle className="text-sage-500" />,
        description: "Automated error detection and correction workflows with data validation rules.",
      },
      {
        name: "Template System",
        icon: <FileText className="text-forest-500" />,
        description: "Standardized import templates for consistent data structure and formatting.",
      },
      {
        name: "Data Validation",
        icon: <CheckCircle className="text-sage-500" />,
        description: "Real-time data validation with error reporting and correction suggestions.",
      },
    ],
    benefits: [
      "Faster data migration",
      "Reduced import errors",
      "Standardized processes",
      "Data integrity assurance"
    ]
  },
  {
    title: "Mobile & Cloud Access",
    description: "Anywhere, anytime access with mobile-responsive design and offline capabilities for field operations.",
    icon: <Smartphone className="h-6 w-6 xs:h-8 xs:w-8 text-forest-500" />,
    details: [
      {
        name: "Mobile Responsive",
        icon: <Smartphone className="text-forest-500" />,
        description: "Full functionality across all devices with optimized mobile interface for field operations.",
      },
      {
        name: "Offline Capability",
        icon: <Globe className="text-sage-500" />,
        description: "Critical functions available offline with automatic synchronization when connectivity returns.",
      },
      {
        name: "Real-Time Sync",
        icon: <Zap className="text-forest-500" />,
        description: "Live data synchronization across all users with instant updates and notifications.",
      },
      {
        name: "Cloud Infrastructure",
        icon: <Globe className="text-sage-500" />,
        description: "99.9% uptime guarantee with auto-scaling and global accessibility.",
      },
    ],
    benefits: [
      "Field-ready mobile access",
      "Offline functionality",
      "Real-time collaboration",
      "Global accessibility"
    ]
  },
];

function HexagonBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="hexagons"
            width="50"
            height="43.4"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(2) rotate(15)"
          >
            <path
              d="M25 0L50 14.4v28.9L25 57.7L0 43.3V14.4z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-forest-500"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
  onClick: (feature: Feature) => void;
}

function FeatureCard({ feature, index, onClick }: FeatureCardProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className="group relative p-6 bg-white/90 backdrop-blur-md rounded-xl shadow-elegant hover:shadow-luxury transition-all duration-500 hover:shadow-forest-500/20 border border-sage-200/50 overflow-hidden cursor-pointer hover:-translate-y-2 hover:scale-105"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 },
        },
      }}
      initial="hidden"
      animate={controls}
      onClick={() => onClick(feature)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-forest-500/10 to-sage-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <motion.div
          className="flex items-center justify-center mb-4"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-forest-500 to-sage-400 rounded-full shadow-inner shadow-forest-500/20 group-hover:shadow-forest-500/40 transition-all duration-500">
            {feature.icon}
          </div>
        </motion.div>
        <h3 className="text-lg sm:text-xl font-bold text-forest-700 text-center mb-2 group-hover:text-forest-600 transition-colors duration-500">
          {feature.title}
        </h3>
        <p className="text-forest-600 text-center text-sm sm:text-base mb-4 line-clamp-3">
          {feature.description}
        </p>
        <div className="space-y-2">
          {feature.benefits.slice(0, 2).map((benefit, idx) => (
            <div key={idx} className="flex items-center text-xs text-forest-600">
              <CheckCircle className="w-3 h-3 text-forest-500 mr-2" />
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: Feature | null;
}

function FeatureModal({ isOpen, onClose, feature }: FeatureModalProps) {
  return (
    <AnimatePresence>
      {isOpen && feature && (
        <Transition.Root show={isOpen} as={React.Fragment}>
          <Dialog
            as={motion.div}
            className="fixed inset-0 z-50 overflow-y-auto"
            open={isOpen}
            onClose={onClose}
            static
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={motion.div}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                enter="ease-out duration-300"
                leave="ease-in duration-200"
              />
              <motion.div
                className="inline-block w-full max-w-md sm:max-w-lg lg:max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-3xl shadow-2xl border border-sage-200/50 text-forest-800"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <div className="text-left text-forest-600 space-y-6 max-h-[70vh] overflow-y-auto pr-3">
                  <div className="flex items-center space-x-6">
                    <motion.div
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-12 sm:w-16 sm:h-16 bg-gradient-to-br from-forest-500 to-sage-400 rounded-full flex items-center justify-center shadow-lg">
                        {feature.icon}
                      </div>
                    </motion.div>
                    <Dialog.Title className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-forest-800">
                      {feature.title}
                    </Dialog.Title>
                  </div>
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-forest-600">
                    {feature.description}
                  </p>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-forest-800 mb-4">
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                      {feature.details.map((detail, index) => (
                        <motion.li
                          key={detail.name}
                          className="bg-sage-50 p-4 rounded-lg hover:bg-sage-100 transition-colors duration-300 border border-sage-200/50"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-2xl">{detail.icon}</span>
                            <span className="text-lg font-semibold text-forest-700">
                              {detail.name}
                            </span>
                          </div>
                          <p className="text-sm text-forest-600">
                            {detail.description}
                          </p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-forest-800 mb-4">
                      Benefits
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {feature.benefits.map((benefit, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center space-x-3 bg-forest-50 p-3 rounded-lg border border-forest-200/50"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <CheckCircle className="w-5 h-5 text-forest-500 flex-shrink-0" />
                          <span className="text-forest-700 font-medium">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                <motion.button
                  className="top-4 right-10 absolute text-forest-400 hover:text-forest-600 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none transition-colors duration-200"
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close dialog"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </AnimatePresence>
  );
}

export default function FeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (feature: Feature) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFeature(null);
  };

  return (
    <section
      id="features"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-white via-sage-50 to-white overflow-hidden min-h-screen flex flex-col items-center justify-center"
    >
      <HexagonBackground />

      <motion.div
        className="relative z-10 text-center mb-10 sm:mb-16 px-4 sm:px-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h4
          className="uppercase text-sm sm:text-base text-forest-500 font-semibold tracking-widest mb-3 sm:mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Core Features Showcase
        </motion.h4>
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-forest-800 mb-4 sm:mb-6 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Everything You Need. Nothing You Don't.
        </motion.h2>
        <motion.div
          className="w-16 sm:w-24 h-1 bg-forest-500 mx-auto mb-4 sm:mb-6 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.p
          className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl sm:max-w-3xl mx-auto text-forest-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Comprehensive construction management features designed specifically for precast concrete companies. 
          From project oversight to detailed analytics, every tool you need to succeed.
        </motion.p>
      </motion.div>

      <motion.div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 mx-4 lg:mx-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            feature={feature}
            index={index}
            onClick={openModal}
          />
        ))}
      </motion.div>

      <FeatureModal
        isOpen={isModalOpen}
        onClose={closeModal}
        feature={selectedFeature}
      />
    </section>
  );
}
