"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  AlertTriangle,
  Clock,
  Shield,
  Users,
  Database,
} from "lucide-react";

const ProblemSection: React.FC = () => {
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

  const problems = [
    {
      icon: FileSpreadsheet,
      title: "Excel Sheet Chaos",
      description:
        "Multiple versions floating across different teams with no real-time collaboration",
      issues: [
        "Manual data entry consuming hours every day",
        "Version control nightmares leading to costly mistakes",
        "Wait for files to be updated and shared",
        "No centralized source of truth",
      ],
    },
    {
      icon: Database,
      title: "Data Fragmentation Crisis",
      description:
        "Critical information scattered across disconnected systems and departments",
      issues: [
        "Design team works in isolation from production",
        "Quality control data stored separately from project files",
        "Delivery schedules disconnected from production reality",
        "Payment tracking happens in different systems",
      ],
    },
    {
      icon: Shield,
      title: "Security & Integrity Risks",
      description:
        "Sensitive project data exposed to unauthorized access and potential loss",
      issues: [
        "Sensitive project data shared via email and OneDrive",
        "No user role management - everyone sees everything",
        "No audit trails for quality control decisions",
        "Data loss risks with local file storage",
      ],
    },
    {
      icon: Clock,
      title: "Time Waste Reality",
      description: "Teams spend more time managing data than managing projects",
      issues: [
        "14+ hours per week per employee on non-productive activities",
        "Teams constantly searching for the latest project information",
        "End-of-day data compilation taking 2-3 hours",
        "Recreating reports because files can't be found",
      ],
    },
  ];

  const costImpact = [
    {
      metric: "25-40%",
      label: "Project Delays",
      description: "Manual processes causing timeline extensions",
    },
    {
      metric: "High",
      label: "Quality Issues",
      description: "Miscommunication leading to rework and client complaints",
    },
    {
      metric: "Significant",
      label: "Resource Waste",
      description: "Teams working from outdated information",
    },
    {
      metric: "Limited",
      label: "Growth Potential",
      description: "Unable to scale operations efficiently",
    },
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
              Your Current Reality: The{" "}
              <span className="text-forest-sage">Hidden Costs</span> of
              Fragmented Project Management
            </h2>
            <p className="text-lg sm:text-xl font-semibold text-forest-primary/70 max-w-3xl mx-auto leading-relaxed tracking-wide">
              The daily struggle your teams face with Excel-based project
              management is costing you more than you realize
            </p>
          </motion.div>

          {/* Problems Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                className="bg-white/95 backdrop-blur-sm border border-forest-sage/20 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                {/* Icon */}
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-forest-sage/10 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                    <problem.icon className="w-5 h-5 sm:w-6 sm:h-6 text-forest-sage" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-forest-primary tracking-wide">
                    {problem.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-forest-primary/70 mb-4 sm:mb-6 leading-relaxed font-medium">
                  {problem.description}
                </p>

                {/* Issues List */}
                <ul className="space-y-2 sm:space-y-3">
                  {problem.issues.map((issue, issueIndex) => (
                    <li key={issueIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-forest-sage rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-forest-primary/80 leading-relaxed font-medium">
                        {issue}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Cost Impact Section */}
          <motion.div
            className="bg-gradient-to-r from-forest-primary to-forest-dark rounded-3xl p-6 sm:p-8 lg:p-12 text-white"
            variants={itemVariants}
          >
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 tracking-wide">
                The True Cost Impact
              </h3>
              <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-medium">
                These fragmented processes are directly affecting your bottom
                line and project success
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {costImpact.map((impact, index) => (
                <motion.div
                  key={impact.label}
                  className="text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-sage mb-1 sm:mb-2">
                    {impact.metric}
                  </div>
                  <div className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">
                    {impact.label}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                    {impact.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-8 sm:mt-12"
            variants={itemVariants}
          >
            <p className="text-base sm:text-lg text-forest-primary/70 mb-4 sm:mb-6 font-medium">
              Ready to break free from the Excel nightmare?
            </p>
            <motion.button
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-forest-primary text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-forest-dark hover:scale-105 ring-2 ring-forest-primary/20 hover:ring-forest-primary/40 text-sm sm:text-base"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              See How ICS Solves These Problems
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
