"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Database,
  Cloud,
  Shield,
  BarChart3,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Container, Grid, Stack } from "@/components/ui/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServiceCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  delay: number;
}> = ({ icon: Icon, title, description, features, delay }) => (
  <motion.div
    className="group h-full"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
  >
    <Card className="h-full bg-white/95 backdrop-blur-xl border-neutral-200/50 hover:border-primary-300/50 hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] overflow-hidden">
      <CardContent className="p-6 lg:p-8">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start space-x-4 mb-6">
            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-neutral-900 mb-3 leading-tight">
                {title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Features List */}
          <div className="flex-1 space-y-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3 group/feature"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: delay + 0.1 * (index + 1) }}
                whileHover={{ x: 4 }}
              >
                <div className="flex-shrink-0 w-5 h-5 bg-success-100 rounded-full flex items-center justify-center group-hover/feature:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-3 h-3 text-success-600" />
                </div>
                <span className="text-sm text-neutral-700 leading-relaxed font-medium">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Project Management Hub",
      description:
        "Multi-project dashboard, client portal, stakeholder management, and project templates for accelerated setup.",
      features: [
        "Multi-Project Dashboard",
        "Client Portal with real-time updates",
        "Stakeholder Management",
        "Project Templates",
      ],
    },
    {
      icon: Database,
      title: "Intelligent Element Lifecycle Management",
      description:
        "Complete tracking from design to installation with technical specifications, production control, and quality workflows.",
      features: [
        "Design Phase Management",
        "Production Control",
        "Quality Control Workflows",
        "Logistics Coordination",
      ],
    },
    {
      icon: BarChart3,
      title: "Advanced Reporting & Analytics",
      description:
        "Professional report generation with dual-language support, multiple export formats, and automated distribution.",
      features: [
        "Technical Transmittal Reports",
        "Production Reports",
        "Delivery & Logistics Reports",
        "Financial Reports",
      ],
    },
    {
      icon: Shield,
      title: "Advanced User Management",
      description:
        "Department-based permission structure with role-specific dashboards and complete audit trails.",
      features: [
        "Department-based Permissions",
        "Role-specific Dashboards",
        "Complete Audit Trails",
        "Secure Authentication",
      ],
    },
    {
      icon: Cloud,
      title: "Data Integration Engine",
      description:
        "Bulk Excel import capabilities with intelligent field mapping, validation, and template systems.",
      features: [
        "Bulk Excel Import",
        "Intelligent Field Mapping",
        "Error Detection",
        "Template Systems",
      ],
    },
    {
      icon: Users,
      title: "Role-Based Team Collaboration",
      description:
        "Design, production, quality control, and site teams work together with seamless handoffs between phases.",
      features: [
        "Design Team Focus",
        "Production Management",
        "Quality Control",
        "Site Operations",
      ],
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-white via-primary-50/30 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-full blur-3xl"
          style={{ top: "5%", left: "5%" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-br from-secondary-500/5 to-primary-500/5 rounded-full blur-2xl"
          style={{ bottom: "10%", right: "10%" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        <motion.div
          className="absolute w-48 h-48 bg-gradient-to-br from-primary-500/3 to-secondary-500/3 rounded-full blur-xl"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
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
              Complete{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
                Construction Management
              </span>{" "}
              Platform
            </motion.h2>
            <motion.p
              className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Everything you need to manage your precast concrete projects
              efficiently, from initial planning to final delivery.
            </motion.p>
          </motion.div>
        </Stack>

        {/* Services Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Grid cols={3} gap="lg">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delay={0.1 * (index + 1)}
              />
            ))}
          </Grid>
        </motion.div>

        {/* Bottom CTA */}
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
              Ready to Experience the Full Platform?
            </motion.h3>
            <motion.p
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              See all these features in action with a personalized demo tailored
              to your specific workflows.
            </motion.p>
          </Stack>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Button size="lg" className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Schedule Full Platform Demo
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;
