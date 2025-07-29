"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Bell, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/constants/nav";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
    href,
    children,
  }) => (
    <a
      href={href}
      onClick={(e) => handleSmoothScroll(e, href)}
      className="px-3 py-2 text-sm font-medium text-forest-700 hover:text-forest-900 hover:bg-forest-50/80 rounded-lg transition-all duration-200 relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-forest-500 to-forest-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
    </a>
  );

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky
          ? "bg-white/98 backdrop-blur-2xl border-b border-forest-200/60 shadow-lg"
          : "bg-white/95 backdrop-blur-xl border-b border-forest-200/50 shadow-md"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="ICS Logo"
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <div>
              <span className="text-xl font-bold text-forest-900">ICS</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.name} href={item.link}>
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Search Button */}
            <motion.button
              className="relative h-10 w-10 flex items-center justify-center hover:bg-forest-50 text-forest-600 hover:text-forest-700 transition-all duration-200 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="h-5 w-5" />
            </motion.button>

            {/* Notification Button */}
            <motion.button
              className="relative h-10 w-10 flex items-center justify-center hover:bg-forest-50 text-forest-600 hover:text-forest-700 transition-all duration-200 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-forest-500 rounded-full" />
            </motion.button>

            {/* Separator */}
            <div className="h-8 w-px bg-forest-200" />

            {/* Schedule Demo Button */}
            <motion.button
              className="bg-forest-600 hover:bg-forest-700 text-white font-semibold py-2.5 px-5 text-sm transition-all duration-200 rounded-lg shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const element = document.getElementById("CTA");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Schedule Demo
            </motion.button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <motion.button
                className="lg:hidden h-10 w-10 flex items-center justify-center hover:bg-forest-50 text-forest-600 hover:text-forest-700 transition-all duration-200 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Menu className="h-5 w-5" />
              </motion.button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[350px] bg-white/98 backdrop-blur-2xl border-l border-forest-200/60"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/logo.png"
                      alt="ICS Logo"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                    <span className="text-lg font-bold text-forest-900">
                      ICS
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="h-8 w-8 flex items-center justify-center hover:bg-forest-50 rounded-lg transition-colors text-forest-600 hover:text-forest-700"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 space-y-1">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      onClick={(e) => {
                        handleSmoothScroll(e, item.link);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-4 py-3 text-forest-700 hover:text-forest-900 hover:bg-forest-50 rounded-lg transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>

                {/* Mobile Actions */}
                <div className="space-y-4 pt-6 border-t border-forest-200/50">
                  <button
                    className="w-full bg-forest-600 hover:bg-forest-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200"
                    onClick={() => {
                      const element = document.getElementById("CTA");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Schedule Demo
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
