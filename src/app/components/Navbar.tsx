"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Bell, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/constants/nav";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(href);
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsActive(rect.top <= 100 && rect.bottom >= 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [href]);

  return (
    <motion.div
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="relative"
    >
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className={cn(
          "px-4 py-3 text-sm font-medium transition-all duration-300 relative",
          "hover:text-forest-500 hover:bg-forest-50/80 rounded-lg",
          isActive
            ? "text-forest-800 font-semibold bg-forest-100/80"
            : "text-forest-700"
        )}
      >
        {label}
        <AnimatePresence>
          {isActive && (
            <motion.div
              layoutId="activeIndicator"
              className="absolute left-0 right-0 h-0.5 bg-forest-500 rounded-full"
              style={{ bottom: "-5px" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>
      </a>
    </motion.div>
  );
};

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollDelta, setScrollDelta] = useState(0);
  const [lockout, setLockout] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setIsSticky(currentY > 12);

          // Always show header near top
          if (currentY < 50) {
            setIsVisible(true);
            setScrollDelta(0);
            lastY = currentY;
            ticking = false;
            return;
          }

          // Debounce lockout to prevent rapid toggling
          if (lockout) {
            lastY = currentY;
            ticking = false;
            return;
          }

          const delta = currentY - lastY;
          const newDelta = scrollDelta + delta;

          // Hide header if scrolled down more than 32px
          if (delta > 0 && newDelta > 32 && isVisible) {
            setIsVisible(false);
            setScrollDelta(0);
            setLockout(true);
            setTimeout(() => setLockout(false), 300);
          }
          // Show header if scrolled up more than 16px
          else if (delta < 0 && Math.abs(newDelta) > 16 && !isVisible) {
            setIsVisible(true);
            setScrollDelta(0);
            setLockout(true);
            setTimeout(() => setLockout(false), 300);
          } else {
            setScrollDelta(newDelta);
          }

          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, lockout, scrollDelta]);

  // Ensure header is visible when at top of page
  useEffect(() => {
    if (window.scrollY < 50) {
      setIsVisible(true);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="sticky top-0 left-0 right-0 z-50 w-full h-20 px-4 pt-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <motion.header
            className={cn(
              "w-auto mx-auto",
              "bg-white/95 backdrop-blur-xl border border-forest-200/50",
              "rounded-full shadow-lg",
              isSticky ? "shadow-xl" : "shadow-md"
            )}
            style={{
              WebkitBackdropFilter: "blur(16px)",
              backdropFilter: "blur(16px)",
            }}
            animate={isSticky ? { scale: 0.98 } : { scale: 1 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
              type: "spring",
              stiffness: 400,
              damping: 40,
            }}
          >
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <motion.a
                  href="#"
                  className="flex items-center space-x-2 sm:space-x-1"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center space-x-1 sm:space-x-3">
                    <Image
                      src="/logo.png"
                      alt="ICS Logo"
                      width={32}
                      height={32}
                      className="h-6 w-auto sm:h-8"
                    />
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-forest-900">
                      ICS
                    </span>
                  </div>
                </motion.a>

                {/* Desktop Navigation */}
                <nav className="hidden xl:flex items-center space-x-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      <NavLink href={item.link} label={item.name} />
                    </motion.div>
                  ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <button
                      className="h-10 w-10 flex items-center justify-center text-forest-700 hover:bg-forest-50 hover:text-forest-600 transition-all duration-200 rounded-lg"
                      aria-label="Search"
                    >
                      <Search className="h-5 w-5" />
                    </button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <button
                      className="h-10 w-10 flex items-center justify-center text-forest-700 hover:bg-forest-50 hover:text-forest-600 relative transition-all duration-200 rounded-lg"
                      aria-label="Notifications"
                    >
                      <Bell className="h-5 w-5" />
                      <motion.span
                        className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-forest-500 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </button>
                  </motion.div>

                  <motion.div
                    className="h-6 w-px bg-forest-200"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />

                  <motion.div
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <button
                      onClick={() => {
                        const element = document.getElementById("CTA");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="bg-forest-600 text-white hover:bg-forest-700 font-medium px-6 py-2 rounded-lg transition-all duration-200"
                    >
                      Schedule Demo
                    </button>
                  </motion.div>
                </div>

                {/* Mobile Menu */}
                <div className="lg:hidden">
                  <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <SheetTrigger asChild>
                      <motion.div
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        <button
                          className="h-10 w-10 flex items-center justify-center text-forest-700 hover:bg-forest-50 transition-all duration-200 rounded-lg"
                          aria-label="Open menu"
                        >
                          <AnimatePresence mode="wait">
                            {isMenuOpen ? (
                              <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <X className="h-5 w-5" />
                              </motion.div>
                            ) : (
                              <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Menu className="h-5 w-5" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </button>
                      </motion.div>
                    </SheetTrigger>
                    <SheetContent
                      side="right"
                      className="w-[300px] sm:w-[350px] bg-white/95 backdrop-blur-xl border-l border-forest-200"
                    >
                      <motion.div
                        className="p-6 h-full flex flex-col"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="mb-6"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                        >
                          <div className="flex items-center space-x-3">
                            <Image
                              src="/logo.png"
                              alt="ICS Logo"
                              width={32}
                              height={32}
                              className="w-8 h-8 object-contain"
                            />
                            <span className="text-xl font-bold text-forest-900">
                              ICS
                            </span>
                          </div>
                        </motion.div>
                        <nav className="flex-1">
                          <div className="space-y-2">
                            {navItems.map((item, index) => (
                              <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: 0.2 + index * 0.1,
                                }}
                              >
                                <a
                                  href={item.link}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.querySelector(
                                      item.link
                                    );
                                    if (element) {
                                      element.scrollIntoView({
                                        behavior: "smooth",
                                      });
                                    }
                                    setIsMenuOpen(false);
                                  }}
                                  className="block px-3 py-2 text-base font-medium text-forest-700 hover:bg-forest-50 hover:text-forest-600 rounded-md transition-all duration-200"
                                >
                                  {item.name}
                                </a>
                              </motion.div>
                            ))}
                          </div>
                        </nav>
                        <motion.div
                          className="border-t border-forest-200 pt-4 space-y-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.05, y: -1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          >
                            <button
                              className="w-full bg-forest-600 text-white hover:bg-forest-700 font-medium px-6 py-3 rounded-lg transition-all duration-200"
                              onClick={() => {
                                const element = document.getElementById("CTA");
                                if (element) {
                                  element.scrollIntoView({
                                    behavior: "smooth",
                                  });
                                }
                                setIsMenuOpen(false);
                              }}
                            >
                              Schedule Demo
                            </button>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </motion.header>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
