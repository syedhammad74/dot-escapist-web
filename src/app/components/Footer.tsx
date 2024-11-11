"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"
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
    <footer className="relative text-gray-300 py-4 tsm:py-8 tmd:py-12 lsm:py-16 overflow-hidden min-w-[200px]">
      {/* Background Pattern with Animated Circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-black to-orange-900"></div>

        {/* Animated Circles */}
        <div className="absolute w-20 tsm:w-32 tmd:w-40 lg:w-60 lsm:w-80 h-20 tsm:h-32 tmd:h-40 lg:h-60 lsm:h-80 bg-white opacity-10 rounded-full top-2 tsm:top-6 lg:top-8 lsm:top-10 left-2 tsm:left-6 lg:left-8 lsm:left-10 animate-bounce-slow transform-translate-x-1/2"></div>
        <div className="absolute w-16 tsm:w-24 tmd:w-32 lg:w-48 lsm:w-64 h-16 tsm:h-24 tmd:h-32 lg:h-48 lsm:h-64 bg-white opacity-10 rounded-full top-8 tsm:top-12 lg:top-16 lsm:top-32 left-1/2 transform -translate-x-1/2 animate-bounce-slow"></div>
        <div className="absolute w-24 tsm:w-36 tmd:w-48 lg:w-60 lsm:w-72 h-24 tsm:h-36 tmd:h-48 lg:h-60 lsm:h-72 bg-white opacity-10 rounded-full bottom-4 tsm:bottom-8 lg:bottom-16 lsm:bottom-20 right-2 tsm:right-6 lg:right-8 lsm:right-10 animate-bounce-slow"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-2 tsm:px-4 tmd:px-6 lsm:px-8 relative z-10">
        <div className="grid grid-cols-1 tsm:grid-cols-2 lsm:grid-cols-4 gap-4 tsm:gap-6 tmd:gap-8 lg:gap-10 mb-4 tsm:mb-8 lg:mb-10 lsm:mb-12">
          {/* Company Description */}
          <div className="space-y-2 tsm:space-y-4 tmd:space-y-5 lg:space-y-6">
            <h2 className="text-2xl tsm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              <Image
                src={"/logowhite.png"}
                alt="logo"
                width={500}
                height={500}
                className="w-60 h-10 "
              />
            </h2>
            <Link
              href="#"
              className="inline-flex items-center px-3 tsm:px-4 lg:px-5 py-1.5 tsm:py-2 lg:py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-500 transition duration-200 text-xs tsm:text-sm lg:text-base font-medium shadow-md"
            >
              Explore Our Vision
              <ExternalLink className="ml-1.5 lg:ml-2 w-3 h-3 lg:w-4 lg:h-4" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 tsm:space-y-4 tmd:space-y-5 lg:space-y-6">
            <h3 className="text-lg tsm:text-xl font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-1.5 tsm:space-y-2 tmd:space-y-2.5 lg:space-y-3">
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
                    className="text-xs tsm:text-sm tmd:text-base text-gray-400 hover:text-white transition-colors duration-150 flex items-center"
                  >
                    <Icon className="w-3 h-3 tsm:w-4 tmd:h-5 lg:w-5 lg:h-5 mr-1.5 lg:mr-2 text-orange-500" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Innovations */}
          <div className="space-y-2 tsm:space-y-4 tmd:space-y-5 lg:space-y-6">
            <h3 className="text-lg tsm:text-xl font-semibold text-white">
              Latest Innovations
            </h3>
            <ul className="space-y-1.5 tsm:space-y-2 tmd:space-y-2.5 lg:space-y-3">
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
                    className="text-xs tsm:text-sm tmd:text-base text-gray-400 hover:text-white transition-colors duration-150 block"
                  >
                    {post}
                    <span className="text-[10px] tsm:text-xs tmd:text-sm text-orange-500 opacity-0 hover:opacity-100 transition-opacity duration-150 ml-1">
                      Discover More
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-2 tsm:space-y-4 tmd:space-y-5 lg:space-y-6">
            <h3 className="text-lg tsm:text-xl font-semibold text-white">
              Stay Ahead of the Curve
            </h3>
            <p className="text-xs tsm:text-sm tmd:text-base text-gray-400">
              Subscribe for exclusive insights into the future of technology.
            </p>
            <form
              className="space-y-2 tsm:space-y-3 tmd:space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Welcome to the future! You're now subscribed.");
              }}
            >
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-gray-800 text-white px-3 tsm:px-4 lg:px-5 py-1.5 tsm:py-2 lg:py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 text-xs tsm:text-sm lg:text-base"
                  aria-label="Email for newsletter"
                  required
                />
                <Mail className="absolute top-1/2 right-2 lg:right-4 transform -translate-y-1/2 w-3 h-3 lg:w-5 lg:h-5 text-gray-500" />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-3 tsm:px-4 lg:px-5 py-1.5 tsm:py-2 lg:py-2.5 rounded-lg hover:bg-orange-500 transition duration-200 text-xs tsm:text-sm lg:text-base font-medium"
                aria-label="Subscribe to newsletter"
              >
                Join the Future
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-4 tsm:pt-5 lg:pt-6 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-[10px] tsm:text-xs tmd:text-sm text-gray-500 text-center lg:text-left mb-2 lg:mb-0">
            &copy; {currentYear} FuturisticCo. All rights reserved. Shaping the
            future, one innovation at a time.
          </p>
          <div className="flex space-x-3 tsm:space-x-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <Link
                key={index}
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-150"
              >
                <Icon className="w-3 h-3 tsm:w-4 lg:w-5 lg:h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
