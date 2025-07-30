"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Clock,
  DollarSign,
  TrendingDown,
  FileText,
  Database,
  Shield,
  XCircle,
  AlertCircle,
  Zap,
} from "lucide-react";
import { Container, Grid, Stack } from "@/components/ui/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProblemCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
  impact: string;
  delay: number;
}> = ({ icon: Icon, title, description, impact, delay }) => (
  <motion.div
    className="group"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -3 }}
  >
    <Card className="h-full bg-white/95 backdrop-blur-xl border-neutral-200/50 hover:border-primary-300/50 hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 space-y-3">
            <h3 className="text-lg font-bold text-neutral-900 leading-tight">{title}</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              {description}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-error-50/80 border border-error-200/50 rounded-lg backdrop-blur-sm">
              <AlertTriangle className="w-4 h-4 text-error-500" />
              <span className="text-sm font-medium text-error-700">{impact}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
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
    className="group"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -2 }}
  >
    <Card className="bg-gradient-to-br from-neutral-50 to-primary-50/30 border-neutral-200/50 hover:border-primary-300/50 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
      <CardContent className="p-4">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center shadow-md">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 space-y-1">
            <h4 className="text-sm font-semibold text-neutral-800">{title}</h4>
            <div className="text-xl font-bold text-primary-700">{value}</div>
            <p className="text-xs text-neutral-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const Problems = () => {
  const problems = [
    {
      icon: FileText,
      title: "Excel Sheet Chaos",
      description:
        "Multiple versions floating across different teams with no real-time collaboration and manual data entry consuming hours every day.",
      impact: "Version control nightmares leading to costly mistakes",
    },
    {
      icon: Database,
      title: "Data Fragmentation Crisis",
      description:
        "Design team works in isolation from production, quality control data stored separately from project files, delivery schedules disconnected from production reality.",
      impact: "Payment tracking happens in different systems",
    },
    {
      icon: Shield,
      title: "Security & Integrity Risks",
      description:
        "Sensitive project data shared via email and OneDrive with no user role management, no audit trails for quality control decisions.",
      impact: "Data loss risks with local file storage",
    },
    {
      icon: Clock,
      title: "Time Waste Reality",
      description:
        "14+ hours per week per employee on non-productive activities with teams constantly searching for the latest project information.",
      impact: "End-of-day data compilation taking 2-3 hours",
    },
  ];

  const costImpacts = [
    {
      icon: AlertTriangle,
      title: "Project Delays",
      value: "25-40%",
      description: "Manual processes causing timeline extensions",
    },
    {
      icon: XCircle,
      title: "Quality Issues",
      value: "High",
      description: "Miscommunication leading to rework and client complaints",
    },
    {
      icon: DollarSign,
      title: "Resource Waste",
      value: "Significant",
      description: "Teams working from outdated information",
    },
    {
      icon: TrendingDown,
      title: "Growth Limitations",
      value: "Critical",
      description: "Unable to scale operations efficiently",
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-5" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-full blur-3xl"
          style={{ top: "10%", right: "10%" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-48 h-48 bg-gradient-to-br from-secondary-500/5 to-primary-500/5 rounded-full blur-2xl"
          style={{ bottom: "20%", left: "5%" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <Container size="xl" className="relative z-10">
        <Stack spacing="xl" className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
                Hidden Costs
              </span>{" "}
              of Excel-Based Management
            </motion.h2>
            <motion.p
              className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Traditional Excel-based construction management creates invisible
              bottlenecks that silently drain your profits and delay project
              delivery.
            </motion.p>
          </motion.div>
        </Stack>

        {/* Problems Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Grid cols={2} gap="lg">
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
          </Grid>
        </motion.div>

        {/* Cost Impact Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Stack spacing="lg" className="text-center mb-12">
            <motion.h3
              className="text-3xl sm:text-4xl font-bold text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Real Financial Impact
            </motion.h3>
            <motion.p
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              These inefficiencies translate directly to your bottom line
            </motion.p>
          </Stack>

          <Grid cols={4} gap="md">
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
          </Grid>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Stack spacing="md" className="mb-8">
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Ready to Eliminate These Hidden Costs?
            </motion.h3>
            <motion.p
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              See how ICS can transform your construction management and eliminate
              these costly inefficiencies.
            </motion.p>
          </Stack>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Button size="lg" className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Zap className="w-5 h-5 mr-2" />
              Calculate Your ROI
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Problems;
