"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  Phone,
  MessageSquare,
  Building2,
  Calendar,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Target,
} from "lucide-react";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    projectType: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const successSteps = [
    {
      icon: Calendar,
      title: "Discovery Call",
      description: "30-minute consultation to understand your needs",
    },
    {
      icon: Building2,
      title: "Custom Demo",
      description: "60-minute live demonstration with your use cases",
    },
    {
      icon: Target,
      title: "Implementation",
      description: "Tailored setup and training for your team",
    },
  ];

  return (
    <section
      id="CTA"
      className="w-full py-16 sm:py-20 bg-gradient-to-br from-white via-sage-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Panel - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-800 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your{" "}
                <span className="bg-gradient-to-r from-forest-500 to-sage-400 text-transparent bg-clip-text">
                  Construction Management?
                </span>
              </motion.h2>

              <motion.p
                className="text-lg text-forest-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Take the first step towards eliminating Excel chaos and
                accelerating your project delivery. Our team of construction
                management experts is ready to help you succeed.
              </motion.p>
            </div>

            {/* Success Journey */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-forest-800">
                Your Success Journey
              </h3>
              <div className="space-y-3">
                {successSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-forest-500 to-sage-400 rounded-lg flex items-center justify-center">
                      <step.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-forest-800">
                        {step.title}
                      </h4>
                      <p className="text-sm text-forest-600">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-forest-800">
                Get in Touch
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-forest-500" />
                  <div>
                    <p className="text-sm font-medium text-forest-800">
                      Email Us
                    </p>
                    <p className="text-sm text-forest-600">
                      hammadllk@gmail.com
                    </p>
                    <p className="text-sm text-forest-600">
                      Ahmadabid90345@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-forest-500" />
                  <div>
                    <p className="text-sm font-medium text-forest-800">
                      Call Us
                    </p>
                    <p className="text-sm text-forest-600">+1 (555) ICS-HELP</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Panel - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/95 backdrop-blur-lg border border-sage-200/50 shadow-xl">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl font-bold text-forest-800">
                  Schedule Your Personalized Demo
                </CardTitle>
                <CardDescription className="text-forest-600">
                  See ICS customized for your specific workflows and get
                  accurate ROI projections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-forest-700 font-medium"
                      >
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-sage-300 focus:border-forest-500 focus:ring-forest-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-forest-700 font-medium"
                      >
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-sage-300 focus:border-forest-500 focus:ring-forest-500"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-forest-700 font-medium"
                      >
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-sage-300 focus:border-forest-500 focus:ring-forest-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="company"
                        className="text-forest-700 font-medium"
                      >
                        Company *
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="border-sage-300 focus:border-forest-500 focus:ring-forest-500"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="industry"
                        className="text-forest-700 font-medium"
                      >
                        Industry
                      </Label>
                      <Input
                        id="industry"
                        name="industry"
                        type="text"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="border-sage-300 focus:border-forest-500 focus:ring-forest-500"
                        placeholder="e.g., Precast Concrete"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="projectType"
                        className="text-forest-700 font-medium"
                      >
                        Project Type
                      </Label>
                      <Input
                        id="projectType"
                        name="projectType"
                        type="text"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="border-sage-300 focus:border-forest-500 focus:ring-forest-500"
                        placeholder="e.g., Commercial, Residential"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-forest-700 font-medium"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-sage-300 focus:border-forest-500 focus:ring-forest-500"
                      placeholder="Tell us about your current challenges and goals..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-forest-500 to-sage-400 hover:from-forest-600 hover:to-sage-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Schedule Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>

                {/* Special Offer */}
                <motion.div
                  className="mt-6 p-4 bg-gradient-to-r from-forest-50 to-sage-50 border border-forest-200 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-forest-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-forest-800">
                        Special Offer
                      </h4>
                      <p className="text-sm text-forest-600">
                        Schedule your demo this month and receive a
                        complimentary data migration service worth $5,000
                      </p>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
