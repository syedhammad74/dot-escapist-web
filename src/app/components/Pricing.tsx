"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";

const plans = [
  {
    name: "Custom Cloud Solutions",
    price: "$4,999",
    period: "per month",
    description:
      "Tailored cloud architecture and API solutions for growing businesses.",
    features: [
      "Custom cloud architecture (AWS/Azure/GCP)",
      "API development & integration",
      "Scalable microservices architecture",
      "DevOps & CI/CD implementation",
      "Cloud security & compliance",
      "24-hour support response time",
      "Unlimited revisions",
    ],
    cta: "Get Started",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
  },
  {
    name: "Full-Stack Development",
    price: "$6,999",
    period: "per month",
    description:
      "Comprehensive full-stack development with cloud integration for startups and enterprises.",
    features: [
      "React / Next.js development",
      "Custom API development",
      "Cloud integration (AWS/Azure/GCP)",
      "Scalable infrastructure design",
      "SEO optimization",
      "Continuous delivery & support",
      "7-10 days turnaround time",
    ],
    cta: "Select Plan",
    highlighted: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    name: "Enterprise DevOps Solutions",
    price: "$15,000+",
    period: "starting at",
    description:
      "Advanced DevOps automation and multi-cloud infrastructure for large-scale enterprises.",
    features: [
      "Multi-cloud architecture",
      "Advanced DevOps automation",
      "Comprehensive cloud security",
      "Infrastructure as Code (IaC)",
      "24/7 monitoring & alerting",
      "AI-driven cloud optimization",
      "Custom SLAs & support",
    ],
    cta: "Contact Us",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
];

export default function ProfessionalOrangeBlackGrayPricing() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-tl from-black via-gray-900 to-orange-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold text-orange-400 tracking-widest uppercase"
          >
            Pricing Plans
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-200"
          >
            Invest in Your Digital Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-xl mx-auto text-xl text-gray-300"
          >
            Choose the perfect plan to elevate your web presence and dominate in
            the digital landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-orange-600 to-amber-700 shadow-xl shadow-orange-500/50 scale-105"
                  : "bg-gray-800/50 backdrop-blur-xl hover:scale-105 hover:shadow-lg hover:shadow-orange-400/40"
              }`}
            >
              <div className="p-8 space-y-6 h-full flex flex-col justify-between relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      className={`p-3 rounded-full transition-all duration-300 ${
                        plan.highlighted
                          ? "bg-amber-100"
                          : "bg-orange-500 hover:bg-orange-600"
                      }`}
                    >
                      {plan.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">
                      {plan.name}
                    </h3>
                  </div>
                  <div className="flex items-baseline text-white">
                    <span className="text-4xl font-extrabold tracking-tight">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-xl font-medium text-gray-300">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-gray-300">
                    <em>
                      {plan.description.split(" ").map((word, i) =>
                        i % 5 === 0 ? (
                          <span key={i} className="text-orange-400">
                            {word}{" "}
                          </span>
                        ) : (
                          `${word} `
                        )
                      )}
                    </em>
                  </p>
                </div>
                <ul className="space-y-4 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <motion.div whileHover={{ scale: 1.2 }}>
                        <Check
                          className={`h-6 w-6 ${
                            plan.highlighted
                              ? "text-amber-200"
                              : "text-orange-400"
                          } mr-2 flex-shrink-0 transition-transform duration-300 hover:scale-110`}
                        />
                      </motion.div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.highlighted
                      ? "bg-amber-100 text-orange-600 hover:bg-amber-200"
                      : "bg-orange-600 text-white hover:bg-orange-500"
                  }`}
                >
                  {plan.cta}
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 animate-pulse" />
                </motion.button>
              </div>
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-600/20 pointer-events-none"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
