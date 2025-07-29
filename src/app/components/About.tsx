"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  Database,
  Shield,
  Clock,
  MessageSquare,
  TrendingDown,
  Calendar,
  AlertTriangle,
  DollarSign,
  BarChart3,
} from "lucide-react";

const ProblemCard = ({
  icon: Icon,
  title,
  description,
  stats,
  className = "",
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  stats?: string;
  className?: string;
}) => (
  <motion.div
    className={`bg-white p-6 rounded-xl shadow-lg border border-sage-200 ${className}`}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-forest-500 to-sage-400 rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-forest-800 mb-2">{title}</h3>
        <p className="text-forest-600 text-sm leading-relaxed mb-3">
          {description}
        </p>
        {stats && (
          <div className="inline-flex items-center gap-1 px-2 py-1 bg-forest-50 border border-forest-200 rounded-md">
            <BarChart3 className="w-3 h-3 text-forest-500" />
            <span className="text-xs font-medium text-forest-700">{stats}</span>
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const problemsData = [
  {
    icon: FileSpreadsheet,
    title: "Excel Sheet Chaos",
    description:
      "Multiple versions floating across different teams with no real-time collaboration. Manual data entry consuming hours every day with version control nightmares leading to costly mistakes.",
    stats: "15+ Excel files per project",
  },
  {
    icon: Database,
    title: "Data Fragmentation Crisis",
    description:
      "Design team works in isolation from production. Quality control data stored separately from project files. Delivery schedules disconnected from production reality.",
    stats: "5+ different communication channels",
  },
  {
    icon: Shield,
    title: "Security & Integrity Risks",
    description:
      "Sensitive project data shared via email and OneDrive. No user role management - everyone sees everything. No audit trails for quality control decisions.",
    stats: "No centralized security controls",
  },
  {
    icon: Clock,
    title: "Time Waste Reality",
    description:
      "Teams constantly searching for the latest project information. End-of-day data compilation taking 2-3 hours. Recreating reports because files can't be found.",
    stats: "14+ hours per week per employee on non-productive activities",
  },
  {
    icon: MessageSquare,
    title: "Communication Breakdown",
    description:
      "Information silos between departments. Delayed updates causing project delays. Inconsistent data across teams leading to rework.",
    stats: "25-40% timeline extensions due to manual processes",
  },
  {
    icon: TrendingDown,
    title: "Growth Limitations",
    description:
      "Unable to scale operations efficiently. Manual processes don't scale with business growth. Limited visibility into project performance.",
    stats: "Unable to handle multiple projects simultaneously",
  },
];

export default function ProblemsSection() {
  const problemsRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="problems"
      className="w-full text-forest-800 bg-gradient-to-tr from-white via-sage-50 to-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.h4
            className="uppercase text-sm sm:text-base text-forest-500 font-semibold tracking-widest mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            The Excel Nightmare
          </motion.h4>
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-sage-500">
              Your Current Reality
            </span>
          </motion.h1>
          <motion.p
            className="text-xl sm:text-xl lg:text-2xl text-forest-600 font-semibold mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            The Hidden Costs of Fragmented Project Management
          </motion.p>
          <motion.div
            className="w-16 sm:w-24 h-1 bg-gradient-to-r from-forest-500 to-sage-400 mx-auto mb-4 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-forest-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Every day, your teams struggle with disconnected systems, manual
            processes, and data fragmentation. The result? Delayed projects,
            costly errors, and frustrated teams. Here&apos;s what&apos;s really
            happening in your organization.
          </motion.p>
        </motion.div>

        <motion.div
          ref={problemsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            {problemsData.map((problem, index) => (
              <ProblemCard
                key={index}
                icon={problem.icon}
                title={problem.title}
                description={problem.description}
                stats={problem.stats}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-forest-50 to-sage-50 border border-forest-200 rounded-2xl p-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-forest-800 mb-3">
              Ready to Break Free from the Excel Nightmare?
            </h3>
            <p className="text-forest-600 text-lg mb-4">
              It&apos;s time to transform your construction management from
              chaos to control. Discover how ICS can eliminate these problems
              and accelerate your project delivery.
            </p>
            <motion.button
              className="bg-gradient-to-r from-forest-500 to-sage-400 hover:from-forest-600 hover:to-sage-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              See the Solution
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
