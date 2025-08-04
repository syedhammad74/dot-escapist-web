"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const Footer: React.FC = () => {
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

  const footerLinks = {
    product: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "API Documentation", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Press", href: "#" },
    ],
    support: [
      { label: "Help Center", href: "#" },
      { label: "Contact Support", href: "#" },
      { label: "Training", href: "#" },
      { label: "Status", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/syed-hammad-shah-19487a12a/", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-white">
      {/* Newsletter Section - White Background */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="mb-6 sm:mb-8" variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 tracking-wide text-forest-primary">
                Stay Updated
              </h3>
              <p className="text-base sm:text-lg text-forest-primary/70 max-w-2xl mx-auto font-medium">
                Get the latest insights on construction management, industry
                trends, and ICS platform updates.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto"
              variants={itemVariants}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-forest-primary/5 border border-forest-primary/20 rounded-xl text-forest-primary placeholder-forest-primary/50 focus:outline-none focus:ring-2 focus:ring-forest-sage focus:border-transparent text-sm sm:text-base"
              />
              <motion.button
                className="px-6 py-3 bg-forest-primary text-white font-bold rounded-xl hover:bg-forest-dark transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content - Green Background */}
      <div className="bg-forest-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Company Info */}
          <motion.div className="sm:col-span-2" variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 bg-forest-sage rounded-lg flex items-center justify-center">
                <span className="text-forest-primary font-bold text-sm sm:text-base">
                  ICS
                </span>
              </div>
              <span className="text-lg sm:text-xl font-bold">
                Integrated Construction Solution
              </span>
            </div>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4 sm:mb-6 font-medium">
              Transforming precast concrete project management from Excel chaos
              to cloud control. Join hundreds of construction companies
              achieving measurable results.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-forest-sage hover:text-forest-primary transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 sm:mb-6 text-sm sm:text-base">
              Product
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-white/80 hover:text-forest-sage transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 sm:mb-6 text-sm sm:text-base">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-white/80 hover:text-forest-sage transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 sm:mb-6 text-sm sm:text-base">
              Support
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-white/80 hover:text-forest-sage transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-forest-sage flex-shrink-0" />
              <a
                href="mailto:hammadllk@gmail.com"
                className="text-sm sm:text-base text-white/80 hover:text-forest-sage transition-colors duration-300 font-medium"
              >
                hammadllk@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-forest-sage flex-shrink-0" />
              <a
                href="https://wa.me/923335239104"
                className="text-sm sm:text-base text-white/80 hover:text-forest-sage transition-colors duration-300 font-medium"
              >
                +92-333-5239104
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          variants={itemVariants}
        >
          <p className="text-xs sm:text-sm text-white/60">
            © 2024 Integrated Construction Solution. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs sm:text-sm text-white/60 hover:text-forest-sage transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
