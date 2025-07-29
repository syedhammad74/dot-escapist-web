"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Clock,
  DollarSign,
  CheckCircle,
  BarChart3,
  Users,
  Target,
  Zap,
  ArrowUp,
  Calendar,
  Shield,
  Database,
} from "lucide-react";
import { EnhancedDecorations } from "@/components/ui/enhanced-decorations";

const MetricCard: React.FC<{
  icon: React.ElementType;
  value: string;
  label: string;
  description: string;
  delay: number;
}> = ({ icon: Icon, value, label, description, delay }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg border border-sage-200"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-forest-500 to-sage-400 rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <div className="text-2xl font-bold text-forest-700 mb-1">{value}</div>
        <h3 className="text-lg font-semibold text-forest-800 mb-2">{label}</h3>
        <p className="text-forest-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

const BenefitCard: React.FC<{
  icon: React.ElementType;
  title: string;
  benefits: string[];
  delay: number;
}> = ({ icon: Icon, title, benefits, delay }) => (
  <motion.div
    className="bg-gradient-to-br from-forest-50 to-sage-50 border border-forest-200 p-6 rounded-xl shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex items-center space-x-3 mb-4">
      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-forest-500 to-sage-400 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h3 className="text-lg font-bold text-forest-800">{title}</h3>
    </div>
    <div className="space-y-2">
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: delay + 0.1 * (index + 1) }}
        >
          <CheckCircle className="w-4 h-4 text-forest-500 flex-shrink-0" />
          <span className="text-sm text-forest-700">{benefit}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const ROI = () => {
  const immediateMetrics = [
    {
      icon: Clock,
      value: "60-80%",
      label: "Time Savings",
      description:
        "Reduction in administrative tasks within the first 3 months",
    },
    {
      icon: CheckCircle,
      value: "90%",
      label: "Error Reduction",
      description: "Decrease in manual data entry errors",
    },
    {
      icon: Users,
      value: "100%",
      label: "Process Standardization",
      description: "Consistent workflows across all projects",
    },
    {
      icon: BarChart3,
      value: "Real-time",
      label: "Improved Communication",
      description: "Visibility for all stakeholders",
    },
  ];

  const mediumTermMetrics = [
    {
      icon: TrendingUp,
      value: "40%",
      label: "Project Efficiency",
      description: "Reduction in project administration time",
    },
    {
      icon: Target,
      value: "35%",
      label: "Quality Improvements",
      description: "Improvement in on-time delivery performance",
    },
    {
      icon: DollarSign,
      value: "Optimized",
      label: "Cost Optimization",
      description: "Better resource allocation and utilization",
    },
    {
      icon: Users,
      value: "Enhanced",
      label: "Client Satisfaction",
      description: "Transparency and communication improvements",
    },
  ];

  const longTermBenefits = [
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      benefits: [
        "Support for business expansion without proportional admin growth",
        "Ability to handle multiple projects simultaneously",
        "Efficient resource allocation across projects",
      ],
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      benefits: [
        "Historical analytics for better project planning",
        "Performance insights and trend analysis",
        "Predictive analytics for future projects",
      ],
    },
    {
      icon: Target,
      title: "Competitive Advantage",
      benefits: [
        "Faster project delivery capabilities",
        "Higher quality standards and consistency",
        "Improved client relationships and retention",
      ],
    },
  ];

  const financialImpact = [
    {
      icon: DollarSign,
      value: "150-300%",
      label: "Typical ROI",
      description: "Within the first year of implementation",
    },
    {
      icon: Calendar,
      value: "6-18 months",
      label: "Payback Period",
      description: "Depending on company size and usage",
    },
    {
      icon: TrendingUp,
      value: "Significant",
      label: "Cost Savings",
      description: "Reduced labor costs, fewer errors, faster delivery",
    },
    {
      icon: ArrowUp,
      value: "Increased",
      label: "Revenue Growth",
      description: "Capacity to handle more projects with same resources",
    },
  ];

  return (
    <section
      id="roi"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-roi-pattern overflow-hidden"
    >
      {/* Floating Background Shapes */}
      <div className="floating-shapes">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      <EnhancedDecorations section="roi" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10">
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
            Proven Results.{" "}
            <span className="bg-gradient-to-r from-forest-500 to-sage-400 text-transparent bg-clip-text">
              Measurable Impact.
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-forest-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            See the real impact ICS has on construction companies, from
            immediate time savings to long-term competitive advantages.
          </motion.p>
        </motion.div>

        {/* Immediate Benefits */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-forest-800 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Immediate Benefits (Month 1-3)
            </motion.h3>
            <motion.p
              className="text-forest-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Quick wins that transform your daily operations
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {immediateMetrics.map((metric, index) => (
              <MetricCard
                key={index}
                icon={metric.icon}
                value={metric.value}
                label={metric.label}
                description={metric.description}
                delay={0.1 * (index + 1)}
              />
            ))}
          </div>
        </motion.div>

        {/* Medium Term Gains */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-forest-800 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Medium-Term Gains (Month 4-12)
            </motion.h3>
            <motion.p
              className="text-forest-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Sustained improvements that drive business growth
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mediumTermMetrics.map((metric, index) => (
              <MetricCard
                key={index}
                icon={metric.icon}
                value={metric.value}
                label={metric.label}
                description={metric.description}
                delay={0.1 * (index + 1)}
              />
            ))}
          </div>
        </motion.div>

        {/* Long Term Advantages */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-forest-800 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Long-Term Advantages (Year 2+)
            </motion.h3>
            <motion.p
              className="text-forest-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              Strategic benefits that position your company for long-term
              success
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {longTermBenefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                benefits={benefit.benefits}
                delay={0.1 * (index + 1)}
              />
            ))}
          </div>
        </motion.div>

        {/* Financial Impact */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="text-center mb-8">
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-forest-800 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              Financial Impact
            </motion.h3>
            <motion.p
              className="text-forest-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Real numbers that demonstrate the value of ICS investment
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {financialImpact.map((impact, index) => (
              <MetricCard
                key={index}
                icon={impact.icon}
                value={impact.value}
                label={impact.label}
                description={impact.description}
                delay={0.1 * (index + 1)}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.h3
            className="text-xl sm:text-2xl font-bold text-forest-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            Ready to Achieve These Results?
          </motion.h3>
          <motion.p
            className="text-forest-600 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            Calculate your specific ROI and see how ICS can transform your
            construction management operations.
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-forest-500 to-sage-400 hover:from-forest-600 hover:to-sage-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Calculate Your ROI
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ROI;
