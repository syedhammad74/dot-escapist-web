"use client";

import { useState, Fragment } from "react";
import {
  Database,
  Cloud,
  Globe,
  Smartphone,
  Shield,
  Zap,
  Code,
  Server,
  Lock,
  Activity,
  Download,
  Upload,
  Search,
  Bell,
  Eye,
  CheckCircle,
  TrendingUp,
  Cpu,
  HardDrive,
  Wifi,
  Smartphone as Mobile,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, Transition } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const technologyCategories = [
  {
    title: "Cloud-Native Foundation",
    icon: Cloud,
    description:
      "Built on modern, scalable architecture with enterprise-grade reliability",
    technologies: [
      {
        name: "PostgreSQL Database",
        icon: Database,
        description:
          "Enterprise-grade reliability and performance with advanced query optimization",
        features: [
          "ACID compliance",
          "Advanced indexing",
          "Real-time replication",
          "Automatic backups",
        ],
      },
      {
        name: "Cloud Infrastructure",
        icon: Server,
        description:
          "Auto-scaling with 99.9% uptime guarantee and global distribution",
        features: [
          "Auto-scaling",
          "99.9% uptime",
          "Global CDN",
          "Load balancing",
        ],
      },
      {
        name: "Global Access",
        icon: Globe,
        description:
          "Available anywhere with internet connectivity and optimized performance",
        features: [
          "Global availability",
          "Low latency",
          "Multi-region",
          "Edge computing",
        ],
      },
    ],
  },
  {
    title: "Integration Capabilities",
    icon: Zap,
    description:
      "Seamless connectivity with existing systems and third-party tools",
    technologies: [
      {
        name: "REST API",
        icon: Code,
        description:
          "Complete API access for third-party integrations and custom development",
        features: [
          "RESTful endpoints",
          "JSON responses",
          "Rate limiting",
          "API documentation",
        ],
      },
      {
        name: "Webhook Support",
        icon: Bell,
        description:
          "Real-time notifications and data synchronization across systems",
        features: [
          "Real-time events",
          "Custom webhooks",
          "Retry logic",
          "Event filtering",
        ],
      },
      {
        name: "ERP Integration",
        icon: Database,
        description:
          "Connect with existing accounting and business systems seamlessly",
        features: [
          "SAP integration",
          "Oracle connectivity",
          "QuickBooks sync",
          "Custom adapters",
        ],
      },
    ],
  },
  {
    title: "Modern User Experience",
    icon: Smartphone,
    description:
      "Intuitive interface designed for both technical and non-technical users",
    technologies: [
      {
        name: "Responsive Design",
        icon: Mobile,
        description:
          "Optimized for desktop, tablet, and mobile with consistent experience",
        features: [
          "Mobile-first",
          "Touch optimized",
          "Cross-browser",
          "Progressive web app",
        ],
      },
      {
        name: "Advanced Search",
        icon: Search,
        description:
          "Multi-field search with intelligent filtering and real-time results",
        features: [
          "Full-text search",
          "Smart filters",
          "Search suggestions",
          "Saved searches",
        ],
      },
      {
        name: "Real-Time Updates",
        icon: Activity,
        description:
          "Live data synchronization across all users with instant notifications",
        features: [
          "WebSocket connections",
          "Live updates",
          "Push notifications",
          "Conflict resolution",
        ],
      },
    ],
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    description:
      "Enterprise-grade security protocols and comprehensive compliance features",
    technologies: [
      {
        name: "JWT Authentication",
        icon: Lock,
        description:
          "Enterprise-grade security protocols with token-based authentication",
        features: [
          "JWT tokens",
          "Session management",
          "Multi-factor auth",
          "SSO support",
        ],
      },
      {
        name: "Data Encryption",
        icon: Shield,
        description:
          "All data encrypted in transit and at rest with military-grade algorithms",
        features: [
          "AES-256 encryption",
          "TLS 1.3",
          "At-rest encryption",
          "Key management",
        ],
      },
      {
        name: "Audit Trails",
        icon: Eye,
        description:
          "Complete activity logging for compliance requirements and security monitoring",
        features: [
          "Activity logs",
          "User tracking",
          "Change history",
          "Compliance reports",
        ],
      },
    ],
  },
];

const HexagonBackground = ({ className = "" }) => (
  <div className={cn("absolute inset-0 z-0 opacity-10", className)}>
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
            stroke="#235347"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagons)" />
    </svg>
  </div>
);

const TechnologyCard = ({
  category,
}: {
  category: {
    title: string;
    icon: React.ElementType;
    description: string;
    technologies: Array<{
      name: string;
      icon: React.ElementType;
      description: string;
      features: string[];
    }>;
  };
}) => (
  <div className="bg-white/90 backdrop-blur-md rounded-lg p-8 h-full flex flex-col justify-between border border-sage-200/50 transition-all duration-300 hover:border-forest-500 hover:shadow-xl hover:shadow-forest-500/10 shadow-elegant">
    <div className="flex flex-col h-full">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-forest-500 to-sage-400 rounded-full flex items-center justify-center shadow-lg mr-4">
          <category.icon className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-forest-800">
            {category.title}
          </h3>
          <p className="text-forest-600 text-sm">{category.description}</p>
        </div>
      </div>

      <div className="space-y-4 flex-grow">
        {category.technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-sage-50 border border-sage-200/50 rounded-lg p-4"
          >
            <div className="flex items-center mb-2">
              <tech.icon className="w-5 h-5 text-forest-500 mr-2" />
              <h4 className="font-semibold text-forest-700">{tech.name}</h4>
            </div>
            <p className="text-forest-600 text-sm mb-2">{tech.description}</p>
            <div className="flex flex-wrap gap-1">
              {tech.features.slice(0, 2).map((feature, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-forest-100 text-forest-700 px-2 py-1 rounded"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TechSpecCard = ({
  title,
  value,
  description,
  icon: Icon,
}: {
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
}) => (
  <div className="bg-gradient-to-br from-forest-50 to-sage-50 border border-forest-200/50 rounded-xl p-6 text-center">
    <div className="w-16 h-16 bg-gradient-to-br from-forest-500 to-sage-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold text-forest-800 mb-2">{title}</h3>
    <div className="text-3xl font-extrabold text-forest-600 mb-2">{value}</div>
    <p className="text-forest-600 text-sm">{description}</p>
  </div>
);

const techSpecs = [
  {
    title: "Uptime Guarantee",
    value: "99.9%",
    description: "Enterprise-grade reliability",
    icon: Shield,
  },
  {
    title: "Data Encryption",
    value: "AES-256",
    description: "Military-grade security",
    icon: Lock,
  },
  {
    title: "Global Access",
    value: "24/7",
    description: "Available worldwide",
    icon: Globe,
  },
  {
    title: "API Response",
    value: "<100ms",
    description: "Lightning-fast performance",
    icon: Zap,
  },
];

export default function TechnologiesSection() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section
      id="technologies"
      className="relative w-full bg-gradient-to-tr from-white via-sage-50 to-white py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <HexagonBackground />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-10 xs:mb-16">
          <div className="flex justify-center items-center mb-4">
            <div className="h-[2px] w-12 xs:w-16 md:w-20 lg:w-32 bg-forest-500 rounded-full"></div>
          </div>

          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-forest-800 mb-6">
            Technology Stack
          </h2>

          <div className="flex justify-center items-center mt-2 mb-4">
            <div className="h-[2px] w-12 xs:w-16 md:w-20 lg:w-32 bg-forest-500 rounded-full"></div>
          </div>

          <p className="text-sm xs:text-base md:text-lg lg:text-xl text-forest-600 max-w-lg xs:max-w-2xl md:max-w-3xl mx-auto mt-4">
            Built on Modern, Scalable Architecture
          </p>
        </div>

        {/* Technology Specifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {techSpecs.map((spec, index) => (
            <TechSpecCard
              key={index}
              title={spec.title}
              value={spec.value}
              description={spec.description}
              icon={spec.icon}
            />
          ))}
        </div>

        {/* Technology Categories */}
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper w-full max-w-6xl"
        >
          {technologyCategories.map((category, index) => (
            <SwiperSlide key={index} className="h-auto">
              <TechnologyCard category={category} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-12 lg:mt-16">
          <Button className="bg-gradient-to-r from-forest-500 to-sage-400 hover:from-forest-600 hover:to-sage-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl text-base">
            Explore Integration Options
          </Button>
        </div>
      </div>
    </section>
  );
}
