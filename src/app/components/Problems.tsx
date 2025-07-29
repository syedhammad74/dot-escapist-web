"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Clock,
  DollarSign,
  TrendingDown,
  FileText,
  Users,
  BarChart3,
} from "lucide-react";
import { EnhancedDecorations } from "@/components/ui/enhanced-decorations";

const ProblemCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
  impact: string;
  delay: number;
}> = ({ icon: Icon, title, description, impact, delay }) => (
  <motion.div
    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-sage-200/50 hover:shadow-2xl hover:border-forest-300/50 transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -3, scale: 1.01 }}
  >
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-forest-500 to-sage-400 rounded-xl flex items-center justify-center shadow-lg">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-forest-800 mb-3">{title}</h3>
        <p className="text-forest-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="inline-flex items-center gap-2 px-3 py-2 bg-forest-50/80 border border-forest-200/50 rounded-lg backdrop-blur-sm">
          <AlertTriangle className="w-4 h-4 text-forest-500" />
          <span className="text-sm font-medium text-forest-700">{impact}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const CostImpactCard: React.FC<{
  icon: React.ElementType;
  title: string;
  value: string;
  description: string;
  delay: number;
}> = ({ icon: Icon, title, value, description, delay }) => (
  <motion.div
    className="bg-gradient-to-br from-forest-50 to-sage-50 border border-forest-200 p-4 rounded-xl shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-forest-500 to-sage-400 rounded-lg flex items-center justify-center">
        <Icon className="w-4 h-4 text-white" />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-forest-800">{title}</h4>
        <div className="text-lg font-bold text-forest-700">{value}</div>
        <p className="text-xs text-forest-600">{description}</p>
      </div>
    </div>
  </motion.div>
);

const Problems = () => {
  const problems = [
    {
      icon: FileText,
      title: "Excel Chaos & Data Fragmentation",
      description:
        "Critical project data scattered across multiple spreadsheets, leading to version conflicts and outdated information.",
      impact: "High Risk",
    },
    {
      icon: Clock,
      title: "Manual Processes & Time Waste",
      description:
        "Teams spend hours on repetitive data entry and report generation instead of focusing on project delivery.",
      impact: "Medium Risk",
    },
    {
      icon: Users,
      title: "Poor Collaboration & Communication",
      description:
        "Lack of real-time visibility leads to miscommunication, delays, and costly rework.",
      impact: "High Risk",
    },
    {
      icon: BarChart3,
      title: "Inaccurate Reporting & Analytics",
      description:
        "Manual reporting processes result in delayed insights and poor decision-making capabilities.",
      impact: "Medium Risk",
    },
  ];

  const costImpacts = [
    {
      icon: DollarSign,
      title: "Project Delays",
      value: "$50K-200K",
      description: "Per project due to manual processes",
    },
    {
      icon: TrendingDown,
      title: "Productivity Loss",
      value: "25-40%",
      description: "Time wasted on administrative tasks",
    },
    {
      icon: AlertTriangle,
      title: "Error Costs",
      value: "$10K-50K",
      description: "Per error due to manual data entry",
    },
  ];

  return (
    <section
      id="problems"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-sage-50 via-white to-forest-50"
    >
      <EnhancedDecorations section="problems" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
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
            The{" "}
            <span className="bg-gradient-to-r from-forest-500 to-sage-400 text-transparent bg-clip-text">
              Hidden Costs
            </span>{" "}
            of Excel-Based Management
          </motion.h2>
          <motion.p
            className="text-lg text-forest-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Traditional Excel-based construction management creates invisible
            bottlenecks that silently drain your profits and delay project
            delivery.
          </motion.p>
        </motion.div>

        {/* Problems Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              impact={problem.impact}
              delay={0.1 * (index + 1)}
            />
          ))}
        </motion.div>

        {/* Cost Impact Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-10">
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-forest-800 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Real Financial Impact
            </motion.h3>
            <motion.p
              className="text-forest-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              These inefficiencies translate directly to your bottom line
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {costImpacts.map((impact, index) => (
              <CostImpactCard
                key={index}
                icon={impact.icon}
                title={impact.title}
                value={impact.value}
                description={impact.description}
                delay={0.1 * (index + 1)}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
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
            Ready to Eliminate These Hidden Costs?
          </motion.h3>
          <motion.p
            className="text-forest-600 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            See how ICS can transform your construction management and eliminate
            these costly inefficiencies.
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-forest-500 to-sage-400 hover:from-forest-600 hover:to-sage-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            Calculate Your ROI
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Problems;
