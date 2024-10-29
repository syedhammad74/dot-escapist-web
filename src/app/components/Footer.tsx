"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
} from "lucide-react";

export default function Footer() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-gray-300 py-16 overflow-hidden">
      {/* Background Pattern with Animated Circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-black to-orange-900"></div>

        {/* Animated Circles */}
        <div className="absolute w-80 h-80 bg-white opacity-10 rounded-full top-10 left-10 animate-bounce-slow  transform-translate-x-1/2"></div>
        <div className="absolute w-64 h-64 bg-white opacity-10 rounded-full top-32 left-1/2 transform -translate-x-1/2 animate-bounce-slow"></div>
        <div className="absolute w-72 h-72 bg-white opacity-10 rounded-full bottom-20 right-10 animate-bounce-slow"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Description */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white tracking-tight">
              Futuristic<span className="text-orange-500">Co</span>
            </h2>
            <p className="text-base leading-relaxed text-gray-400">
              Pioneering tomorrow's innovations today. Join us in crafting a
              future beyond imagination.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-5 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500 transition duration-200 text-base font-medium shadow-md"
            >
              Explore Our Vision
              <ExternalLink className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", icon: Globe },
                { name: "About", icon: Shield },
                { name: "Services", icon: Zap },
                { name: "Portfolio", icon: Cpu },
                { name: "Careers", icon: ChevronRight },
              ].map(({ name, icon: Icon }) => (
                <li key={name}>
                  <Link
                    href="#"
                    className="text-base text-gray-400 hover:text-white transition-colors duration-150 flex items-center"
                  >
                    <Icon className="w-5 h-5 mr-2 text-orange-500" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Innovations */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">
              Latest Innovations
            </h3>
            <ul className="space-y-3">
              {[
                "Quantum AI Integration",
                "Sustainable Nanotech",
                "Neural Interface Systems",
                "Holographic Displays",
                "Autonomous Ecosystems",
              ].map((post) => (
                <li key={post}>
                  <Link
                    href="#"
                    className="text-base text-gray-400 hover:text-white transition-colors duration-150 block"
                  >
                    {post}
                    <span className="text-sm text-orange-500 opacity-0 hover:opacity-100 transition-opacity duration-150 ml-1">
                      Discover More
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">
              Stay Ahead of the Curve
            </h3>
            <p className="text-base text-gray-400">
              Subscribe for exclusive insights into the future of technology.
            </p>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Welcome to the future! You're now subscribed.");
              }}
            >
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-gray-800 text-white px-5 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 text-base"
                  aria-label="Email for newsletter"
                  required
                />
                <Mail className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-5 py-2.5 rounded-lg hover:bg-orange-500 transition duration-200 text-base font-medium"
                aria-label="Subscribe to newsletter"
              >
                Join the Future
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            &copy; {currentYear} FuturisticCo. All rights reserved. Shaping the
            future, one innovation at a time.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <Link
                key={index}
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-150"
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
