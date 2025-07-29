"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileSpreadsheet,
  AlertTriangle,
  Clock,
  Shield,
  Users,
  TrendingDown,
  Database,
  MessageSquare,
  Calendar,
  DollarSign,
} from "lucide-react";

// Custom Components
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
    className={`p-4 rounded-xl shadow-elegant border border-sage-200/50 backdrop-blur-lg bg-white/90 hover:shadow-luxury transition-all duration-300 ${className}`}
    whileHover={{ y: -5, scale: 1.02 }}
  >
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-base font-bold text-forest-800 mb-2">{title}</h3>
        <p className="text-forest-600 text-sm leading-relaxed mb-2">
          {description}
        </p>
        {stats && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-2">
            <p className="text-red-700 font-semibold text-xs">{stats}</p>
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const CostImpactCard = ({
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
  <motion.div
    className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-xl p-4 text-center"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-lg font-bold text-forest-800 mb-2">{title}</h3>
    <div className="text-2xl font-extrabold text-red-600 mb-2">{value}</div>
    <p className="text-forest-600 text-sm">{description}</p>
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

const costImpacts = [
  {
    title: "Project Delays",
    value: "25-40%",
    description: "Timeline extensions due to manual processes",
    icon: Calendar,
  },
  {
    title: "Quality Issues",
    value: "35%",
    description: "Improvement needed in on-time delivery",
    icon: AlertTriangle,
  },
  {
    title: "Resource Waste",
    value: "60%",
    description: "Time spent on non-productive activities",
    icon: Users,
  },
  {
    title: "Financial Impact",
    value: "$50K+",
    description: "Annual cost per project in inefficiencies",
    icon: DollarSign,
  },
];

export default function ProblemsSection() {
  const [activeProblem, setActiveProblem] = useState(0);
  const problemsRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (problemsRef.current) {
          const rect = problemsRef.current.getBoundingClientRect();
          setIsInView(rect.top < window.innerHeight);
        }
      };
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

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
            className="uppercase text-sm sm:text-base text-red-500 font-semibold tracking-widest mb-3"
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-red-600">
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
            className="w-16 sm:w-24 h-1 bg-gradient-to-r from-red-500 to-forest-500 mx-auto mb-4 rounded-full"
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
            costly errors, and frustrated teams. Here's what's really happening
            in your organization.
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
          className="mb-8"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-800 mb-3">
              The True Cost Impact
            </h2>
            <p className="text-forest-600 text-lg max-w-2xl mx-auto">
              These inefficiencies translate directly to your bottom line
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {costImpacts.map((impact, index) => (
              <CostImpactCard
                key={index}
                title={impact.title}
                value={impact.value}
                description={impact.description}
                icon={impact.icon}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-50 to-forest-50 border border-red-200/50 rounded-2xl p-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-forest-800 mb-3">
              Ready to Break Free from the Excel Nightmare?
            </h3>
            <p className="text-forest-600 text-lg mb-4">
              It's time to transform your construction management from chaos to
              control. Discover how ICS can eliminate these problems and
              accelerate your project delivery.
            </p>
            <motion.button
              className="bg-gradient-to-r from-forest-500 to-sage-400 hover:from-forest-600 hover:to-sage-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See the Solution
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
