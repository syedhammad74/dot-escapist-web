"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  CheckCircle,
  Clock,
  BarChart3,
  Quote,
  Star,
  Building2,
  Users,
} from "lucide-react";
import { EnhancedDecorations } from "@/components/ui/enhanced-decorations";

const SuccessMetricCard: React.FC<{
  icon: React.ElementType;
  value: string;
  label: string;
  delay: number;
}> = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-sage-200/50 hover:shadow-2xl hover:border-forest-300/50 transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -3, scale: 1.02 }}
  >
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-forest-500 to-sage-400 rounded-xl flex items-center justify-center shadow-lg">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <div className="text-2xl font-bold text-forest-700 mb-1">{value}</div>
        <div className="text-sm text-forest-600">{label}</div>
      </div>
    </div>
  </motion.div>
);

const TestimonialCard: React.FC<{
  quote: string;
  author: string;
  role: string;
  delay: number;
}> = ({ quote, author, role, delay }) => (
  <motion.div
    className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-sage-200/50 hover:shadow-2xl hover:border-forest-300/50 transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -3, scale: 1.01 }}
  >
    <div className="flex items-start space-x-3 mb-4">
      <Quote className="w-6 h-6 text-forest-500 flex-shrink-0 mt-1" />
      <div className="flex-1">
        <p className="text-forest-700 text-sm sm:text-base leading-relaxed italic">
          "{quote}"
        </p>
      </div>
    </div>
    <div className="flex items-center justify-between">
      <div>
        <div className="font-semibold text-forest-800">{author}</div>
        <div className="text-sm text-forest-600">{role}</div>
      </div>
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>
    </div>
  </motion.div>
);

const SuccessStories = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const successMetrics = [
    {
      icon: TrendingUp,
      value: "40%",
      label: "Reduction in project administration time",
    },
    {
      icon: CheckCircle,
      value: "90%",
      label: "Decrease in data entry errors",
    },
    {
      icon: Clock,
      value: "35%",
      label: "Improvement in on-time delivery performance",
    },
    {
      icon: BarChart3,
      value: "60%",
      label: "Faster report generation and distribution",
    },
  ];

  const testimonials = [
    {
      quote: "ICS has transformed our construction management processes. We now have complete visibility into all our projects and can make data-driven decisions that improve our bottom line.",
      author: "Construction Company Executive",
      role: "Executive Leadership",
    },
    {
      quote: "The reporting capabilities alone have saved us 20+ hours per week. The system pays for itself just in administrative savings.",
      author: "Project Manager",
      role: "Project Management",
    },
    {
      quote: "Moving from Excel to ICS was the best business decision we've made. Our clients love the transparency, and our teams are more efficient than ever.",
      author: "Operations Director",
      role: "Operations",
    },
  ];

  return (
    <section
      id="success-stories"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 overflow-hidden"
    >
      {/* Success Stories Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-rose-500/5" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(168,85,247,0.08),transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(244,63,94,0.08),transparent_50%)]" />
      
      <EnhancedDecorations section="success-stories" />
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
            Real Companies.{" "}
            <span className="bg-gradient-to-r from-forest-500 to-sage-400 text-transparent bg-clip-text">
              Real Results.
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-forest-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Success metrics from current implementations showing measurable impact
            on construction management efficiency and project delivery.
          </motion.p>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {successMetrics.map((metric, index) => (
            <SuccessMetricCard
              key={index}
              icon={metric.icon}
              value={metric.value}
              label={metric.label}
              delay={0.1 * (index + 1)}
            />
          ))}
        </motion.div>

        {/* Client Testimonials */}
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
              Client Testimonials
            </motion.h3>
            <motion.p
              className="text-forest-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Hear from construction professionals who have transformed their
              operations with ICS
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
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
            Ready to Join These Success Stories?
          </motion.h3>
          <motion.p
            className="text-forest-600 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            See how ICS can transform your construction management and deliver
            similar results for your business.
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-forest-500 to-sage-400 hover:from-forest-600 hover:to-sage-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            Schedule Your Success Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories; 