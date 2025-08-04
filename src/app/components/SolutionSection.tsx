"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Users,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const SolutionSection: React.FC = () => {
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

  const beforeAfter = {
    before: [
      "15+ Excel files per project",
      "No version control for project data",
      "5+ different communication channels",
      "Manual daily data updates",
      "Separate systems for each department",
      "No real-time visibility for all stakeholders",
    ],
    after: [
      "Cloud Database for realtime updates and version control for all project data",
      "Real-time collaboration across all teams and departments",
      "Automated data synchronization",
      "Integrated workflows from design to payment",
      "Real-time visibility for all stakeholders",
    ],
  };

  const advantages = [
    {
      icon: Cloud,
      title: "Complete Project Lifecycle Management",
      description:
        "Every precast element tracked from design to installation with real-time visibility for all stakeholders",
    },
    {
      icon: Users,
      title: "Role-Based Team Collaboration",
      description:
        "Design, production, quality control, and site teams work seamlessly with automated workflow triggers",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description:
        "Role-based permissions, complete audit trails, and secure data encryption with backup systems",
    },
    {
      icon: Clock,
      title: "Anywhere, Anytime Access",
      description:
        "Cloud-based platform accessible on any device with offline capability and real-time synchronization",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Design Phase",
      description: "Element registration, technical drawings, revision control",
    },
    {
      step: "02",
      title: "Production Control",
      description: "Mix design, scheduling, quality control workflows",
    },
    {
      step: "03",
      title: "Logistics Coordination",
      description: "Delivery optimization, transporter management, DO system",
    },
    {
      step: "04",
      title: "Site Operations",
      description: "MIR workflows, inspections, installation tracking",
    },
  ];

  return (
    <section className="py-4 sm:py-6 lg:py-8 bg-[#F8F9FA]">
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
              One Platform.{" "}
              <span className="text-forest-sage">Complete Control.</span> Enterprise
              Results.
            </h2>
            <p className="text-lg sm:text-xl font-semibold text-forest-primary/70 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Transform your fragmented legacy systems into a unified, cloud-based, centralized solution with enterprise-grade security and role-based administration
            </p>
          </motion.div>

          {/* Before vs After Comparison */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16"
            variants={itemVariants}
          >
            {/* Before ICS */}
            <div className="bg-white/95 backdrop-blur-sm border border-red-200 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-red-600 font-bold text-lg sm:text-xl">
                    ×
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-forest-primary tracking-wide">
                  Before ICS
                </h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {beforeAfter.before.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-forest-primary/80 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After ICS */}
            <div className="bg-white/95 backdrop-blur-sm border border-forest-sage/30 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-forest-sage/10 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-forest-sage" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-forest-primary tracking-wide">
                  After ICS
                </h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {beforeAfter.after.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-forest-sage rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-forest-primary/80 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ICS Advantages */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-forest-sage/10 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                    <advantage.icon className="w-5 h-5 sm:w-6 sm:h-6 text-forest-sage" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-forest-primary tracking-wide">
                    {advantage.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-forest-primary/70 leading-relaxed font-medium">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Workflow Process */}
          <motion.div
            className="bg-gradient-to-r from-forest-primary to-forest-dark rounded-3xl p-6 sm:p-8 lg:p-12 text-white mb-8 sm:mb-12"
            variants={itemVariants}
          >
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 tracking-wide">
                Integrated Workflow Process
              </h3>
              <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-medium">
                Seamless handoffs between project phases with automated triggers
                and real-time updates
              </p>
            </div>

            <div className="relative">
              {/* Background connector lines for desktop */}
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-[#8EB69B]/30 z-0"></div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    className="text-center relative"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative z-10">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-forest-sage rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-forest-primary font-bold text-lg sm:text-xl">
                        {step.step}
                      </div>
                      <h4 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div className="text-center" variants={itemVariants}>
            <p className="text-base sm:text-lg text-forest-primary/70 mb-4 sm:mb-6 font-medium">
              Ready to experience the ICS transformation?
            </p>
            <motion.button
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-forest-primary text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-forest-dark hover:scale-105 ring-2 ring-forest-primary/20 hover:ring-forest-primary/40 text-sm sm:text-base"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Your Live Demo
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
