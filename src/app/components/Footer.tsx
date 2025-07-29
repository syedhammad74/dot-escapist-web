"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  ExternalLink,
  Globe,
  Zap,
  Shield,
  Cpu,
  Building2,
  Database,
  Users,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-forest-800 py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-forest-50/50 via-white to-forest-50/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(35,83,71,0.05)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="ICS Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div>
                <h2 className="text-2xl font-bold text-forest-900">ICS</h2>
                <p className="text-sm text-forest-600">
                  Integrated Construction Solutions
                </p>
              </div>
            </div>
            <p className="text-sm text-forest-600 leading-relaxed">
              Transform your precast concrete projects from Excel chaos to cloud
              control. The complete construction management platform built for
              modern construction companies.
            </p>
            <Link
              href="#CTA"
              className="inline-flex items-center px-4 py-2 bg-forest-600 hover:bg-forest-700 text-white rounded-lg transition duration-200 text-sm font-medium shadow-md hover:shadow-lg"
            >
              Schedule Demo
              <ExternalLink className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-forest-900">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Problems", icon: Building2, link: "#problems" },
                { name: "Solutions", icon: Shield, link: "#solutions" },
                { name: "Features", icon: Zap, link: "#features" },
                { name: "Technologies", icon: Cpu, link: "#technologies" },
                { name: "Portfolio", icon: Database, link: "#work" },
              ].map(({ name, icon: Icon, link }) => (
                <li key={name}>
                  <Link
                    href={link}
                    className="text-forest-600 hover:text-forest-800 transition-colors duration-150 flex items-center group"
                  >
                    <Icon className="w-4 h-4 mr-2 text-forest-500 group-hover:text-forest-600" />
                    <span className="text-sm">{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Features */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-forest-900">
              Core Features
            </h3>
            <ul className="space-y-3">
              {[
                "Project Management Hub",
                "Element Lifecycle Tracking",
                "Advanced Reporting",
                "Cloud-Based Platform",
                "Real-Time Collaboration",
              ].map((feature) => (
                <li key={feature}>
                  <Link
                    href="#features"
                    className="text-sm text-forest-600 hover:text-forest-800 transition-colors duration-150 block hover:translate-x-1 transform"
                  >
                    {feature}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-forest-900">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-forest-600 hover:text-forest-700 transition-colors">
                <Mail className="w-4 h-4 mr-2 text-forest-500" />
                <a href="mailto:info@ics-construction.com">
                  info@ics-construction.com
                </a>
              </div>
              <div className="flex items-center text-sm text-forest-600 hover:text-forest-700 transition-colors">
                <Globe className="w-4 h-4 mr-2 text-forest-500" />
                <a
                  href="https://ics-construction.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.ics-construction.com
                </a>
              </div>
              <div className="flex items-center text-sm text-forest-600">
                <Users className="w-4 h-4 mr-2 text-forest-500" />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-forest-200 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-forest-600">
              © {currentYear} ICS - Integrated Construction Solutions. All
              rights reserved.
            </div>
            <div className="flex space-x-6">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" },
              ].map(({ icon: Icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  className="text-forest-500 hover:text-forest-700 transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
