"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Bell, Menu, X, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/constants/nav";
import CustomLogo from "@/components/ui/custom-logo";

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
      className="px-3 py-2 text-sm font-medium text-teal-700 hover:text-teal-600 hover:bg-teal-50/80 rounded-lg transition-all duration-200 relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
    </a>
  );

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky
          ? "bg-white/98 backdrop-blur-2xl border-b border-teal-200/60 shadow-2xl"
          : "bg-white/95 backdrop-blur-xl border-b border-teal-200/50 shadow-lg"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-6 sm:px-8 lg:px-10 py-4 h-16 sm:h-18">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.05, y: -1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-teal-500/20 rounded-full blur-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <CustomLogo size="md" />
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
              className="relative h-10 w-10 flex items-center justify-center hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 hover:text-teal-600 transition-all duration-300 rounded-xl border border-transparent hover:border-teal-200/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="h-5 w-5" />
            </motion.button>

            {/* Notification Button */}
            <motion.button
              className="relative h-10 w-10 flex items-center justify-center hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 hover:text-teal-600 transition-all duration-300 rounded-xl border border-transparent hover:border-teal-200/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell className="h-5 w-5" />
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-teal-500 to-blue-400 rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.button>

            {/* Separator */}
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-teal-300 to-transparent" />

            {/* Schedule Demo Button */}
            <motion.button
              className="bg-gradient-to-r from-teal-500 via-blue-400 to-teal-600 hover:from-teal-600 hover:via-blue-500 hover:to-teal-700 text-white font-semibold py-3 px-6 text-sm transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl border border-teal-400/20"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
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
                className="lg:hidden h-10 w-10 flex items-center justify-center hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 hover:text-teal-600 transition-all duration-300 rounded-xl border border-transparent hover:border-teal-200/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Menu className="h-5 w-5" />
              </motion.button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[350px] bg-white/98 backdrop-blur-2xl border-l border-teal-200/60"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <CustomLogo size="sm" />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="h-8 w-8 flex items-center justify-center hover:bg-teal-50 rounded-lg transition-colors"
                  >
                    <X className="h-4 w-4 text-teal-700" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      onClick={(e) => {
                        handleSmoothScroll(e, item.link);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-4 py-3 text-teal-700 hover:bg-teal-50 rounded-lg transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>

                {/* Mobile Actions */}
                <div className="space-y-4 pt-8 border-t border-teal-200/50">
                  <button
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-400 hover:from-teal-600 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
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
