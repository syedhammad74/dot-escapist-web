"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
  Mail,
  ExternalLink,
  Globe,
  Zap,
  Shield,
  Cpu,
  Building2,
  Database,
  Cloud,
  Users,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-forest-800 py-4 tsm:py-8 tmd:py-12 lsm:py-16 overflow-hidden min-w-[200px] bg-gradient-to-tr from-forest-50 via-white to-sage-50">
      {/* Background Pattern with Animated Circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-forest-100/50 via-white to-sage-100/50"></div>

        {/* Animated Circles */}
        <div className="absolute w-20 tsm:w-32 tmd:w-40 lg:w-60 lsm:w-80 h-20 tsm:h-32 tmd:h-40 lg:h-60 lsm:h-80 bg-forest-500 opacity-5 rounded-full top-2 tsm:top-6 lg:top-8 lsm:top-10 left-2 tsm:left-6 lg:left-8 lsm:left-10 animate-bounce-slow transform translate-x-1/2"></div>
        <div className="absolute w-16 tsm:w-24 tmd:w-32 lg:w-48 lsm:w-64 h-16 tsm:h-24 tmd:h-32 lg:h-48 lsm:h-64 bg-sage-500 opacity-5 rounded-full top-8 tsm:top-12 lg:top-16 lsm:top-32 left-1/2 transform -translate-x-1/2 animate-bounce-slow"></div>
        <div className="absolute w-24 tsm:w-36 tmd:w-48 lg:w-60 lsm:w-72 h-24 tsm:h-36 tmd:h-48 lg:h-60 lsm:h-72 bg-forest-600 opacity-5 rounded-full bottom-4 tsm:bottom-8 lg:bottom-16 lsm:bottom-20 right-2 tsm:right-6 lg:right-8 lsm:right-10 animate-bounce-slow"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-2 tsm:px-4 tmd:px-6 lsm:px-8 relative z-10">
        <div className="grid grid-cols-1 tsm:grid-cols-2 lsm:grid-cols-4 gap-4 tsm:gap-6 tmd:gap-8 lg:gap-10 mb-4 tsm:mb-8 lg:mb-10 lsm:mb-12">
          {/* Company Description */}
          <div className="space-y-2 tsm:space-y-4 tmd:space-y-5 lg:space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src={"/logo.png"}
                alt="ICS - Integrated Construction Solutions Logo"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <div>
                <h2 className="text-2xl tsm:text-3xl lg:text-4xl font-bold text-forest-800 tracking-tight">
                  ICS
                </h2>
                <p className="text-sm text-forest-600">
                  Integrated Construction Solutions
                </p>
              </div>
            </div>
            <p className="text-sm tsm:text-base text-forest-600 leading-relaxed">
              Transform your precast concrete projects from Excel chaos to cloud
              control. The complete construction management platform built for
              modern construction companies.
            </p>
            <Link
              href="#CTA"
              className="inline-flex items-center px-3 tsm:px-4 lg:px-5 py-1.5 tsm:py-2 lg:py-2.5 bg-gradient-to-r from-forest-500 to-sage-400 text-white rounded-lg hover:from-forest-600 hover:to-sage-500 transition duration-200 text-xs tsm:text-sm lg:text-base font-medium shadow-md"
            >
              Schedule Demo
              <ExternalLink className="ml-1.5 lg:ml-2 w-3 h-3 lg:w-4 lg:h-4" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 tsm:space-y-4 tmd:space-y-5 lg:space-y-6">
            <h3 className="text-lg tsm:text-xl font-semibold text-forest-800">
              Quick Links
            </h3>
            <ul className="space-y-1.5 tsm:space-y-2 tmd:space-y-2.5 lg:space-y-3">
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
                    className="text-xs tsm:text-sm tmd:text-base text-forest-600 hover:text-forest-800 transition-colors duration-150 flex items-center"
                  >
                    <Icon className="w-3 h-3 tsm:w-4 tmd:h-5 lg:w-5 lg:h-5 mr-1.5 lg:mr-2 text-forest-500" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Features */}
          <div className="space-y-2 tsm:space-y-4 tmd:space-y-5 lg:space-y-6">
            <h3 className="text-lg tsm:text-xl font-semibold text-forest-800">
              Core Features
            </h3>
            <ul className="space-y-1.5 tsm:space-y-2 tmd:space-y-2.5 lg:space-y-3">
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
                    className="text-xs tsm:text-sm tmd:text-base text-forest-600 hover:text-forest-800 transition-colors duration-150 block"
                  >
                    {feature}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-2 tsm:space-y-4 tmd:space-y-5 lg:space-y-6">
            <h3 className="text-lg tsm:text-xl font-semibold text-forest-800">
              Contact Us
            </h3>
            <div className="space-y-1.5 tsm:space-y-2 tmd:space-y-2.5 lg:space-y-3">
              <div className="flex items-center text-xs tsm:text-sm tmd:text-base text-forest-600">
                <Mail className="w-3 h-3 tsm:w-4 tmd:h-5 lg:w-5 lg:h-5 mr-1.5 lg:mr-2 text-forest-500" />
                <span>info@ics-construction.com</span>
              </div>
              <div className="flex items-center text-xs tsm:text-sm tmd:text-base text-forest-600">
                <Globe className="w-3 h-3 tsm:w-4 tmd:h-5 lg:w-5 lg:h-5 mr-1.5 lg:mr-2 text-forest-500" />
                <span>www.ics-construction.com</span>
              </div>
              <div className="flex items-center text-xs tsm:text-sm tmd:text-base text-forest-600">
                <Users className="w-3 h-3 tsm:w-4 tmd:h-5 lg:w-5 lg:h-5 mr-1.5 lg:mr-2 text-forest-500" />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-forest-200/50 pt-4 tsm:pt-6 tmd:pt-8 lg:pt-10">
          <div className="flex flex-col tsm:flex-row justify-between items-center space-y-2 tsm:space-y-0">
            <div className="text-xs tsm:text-sm text-forest-600">
              © {currentYear} ICS - Integrated Construction Solutions. All
              rights reserved.
            </div>
            <div className="flex space-x-4 tsm:space-x-6">
              <Link
                href="#"
                className="text-forest-600 hover:text-forest-800 transition-colors duration-150"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 tsm:w-5 tsm:h-5" />
              </Link>
              <Link
                href="#"
                className="text-forest-600 hover:text-forest-800 transition-colors duration-150"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 tsm:w-5 tsm:h-5" />
              </Link>
              <Link
                href="#"
                className="text-forest-600 hover:text-forest-800 transition-colors duration-150"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 tsm:w-5 tsm:h-5" />
              </Link>
              <Link
                href="#"
                className="text-forest-600 hover:text-forest-800 transition-colors duration-150"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 tsm:w-5 tsm:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
