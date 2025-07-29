"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/constants/nav";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Search, Bell, Globe } from "lucide-react";

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="relative"
    >
      <Link
        href={href}
        className={cn(
          "px-3 py-2 text-sm font-medium transition-all duration-300 relative",
          "hover:text-forest-500 hover:bg-forest-500/5 rounded-lg",
          "text-forest-700"
        )}
      >
        {label}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              layoutId="navIndicator"
              className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-forest-500 to-sage-400 rounded-full"
              style={{ bottom: "-2px" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>
      </Link>
    </motion.div>
  );
};

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    setIsSticky(currentScrollPos > 50);
    setVisible(currentScrollPos <= lastScrollY || currentScrollPos < 50);
    setLastScrollY(currentScrollPos);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -50) {
      setMenuOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed top-0 inset-x-0 z-50 w-full px-4 pt-4"
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
              "max-w-6xl mx-auto",
              "bg-white/95 backdrop-blur-xl border border-sage-200/50",
              "rounded-2xl shadow-lg",
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
            <div className="px-6 py-3">
              <div className="flex items-center justify-between h-14">
                {/* Logo */}
                <Link
                  href="/"
                  className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200 ease-in-out"
                  aria-label="Home"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="relative">
                      <Image
                        src="/ics.png"
                        alt="ICS - Integrated Construction Solutions Logo"
                        width={36}
                        height={36}
                        className="w-9 h-9"
                        loading="lazy"
                      />
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-forest-500 to-sage-400 rounded-full opacity-20 blur-sm"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.2, 0.3, 0.2],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-lg font-bold text-forest-800">
                        ICS
                      </div>
                      <div className="text-xs text-forest-600 -mt-1">
                        Integrated Construction Solutions
                      </div>
                    </div>
                  </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-1">
                  {navItems.map((navItem, index) => (
            <motion.div
                      key={`link-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      <NavLink href={navItem.link} label={navItem.name} />
                    </motion.div>
                  ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center space-x-2">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-forest-700 hover:bg-forest-500/10 hover:text-forest-500 transition-all duration-200"
                      aria-label="Search"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-forest-700 hover:bg-forest-500/10 hover:text-forest-500 relative transition-all duration-200"
                      aria-label="Notifications"
                    >
                      <Bell className="h-4 w-4" />
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
                    </Button>
                  </motion.div>

                  <motion.div
                    className="h-5 w-px bg-sage-200"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />

                  <motion.div
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Button
                      className="bg-gradient-to-r from-forest-500 to-sage-400 hover:from-forest-600 hover:to-sage-500 text-white font-medium py-2 px-4 text-sm transition-all duration-200"
                      onClick={(e) => handleSmoothScroll(e, "CTA")}
                    >
                      Schedule Demo
                    </Button>
                  </motion.div>
                </div>

                {/* Mobile Menu */}
                <div className="lg:hidden">
                  <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                    <SheetTrigger asChild>
                      <motion.div
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-forest-700 hover:bg-forest-500/10 transition-all duration-200"
                          aria-label="Open menu"
                        >
                          <AnimatePresence mode="wait">
                            {menuOpen ? (
                              <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <X className="h-4 w-4" />
              </motion.div>
                            ) : (
                              <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Menu className="h-4 w-4" />
            </motion.div>
          )}
        </AnimatePresence>
                        </Button>
                      </motion.div>
                    </SheetTrigger>
                    <SheetContent
                      side="right"
                      className="w-[280px] sm:w-[320px] bg-white/95 backdrop-blur-xl border-l border-sage-200"
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
                          <div className="flex items-center gap-3">
                            <Image
                              src="/ics.png"
                              alt="ICS Logo"
                              width={28}
                              height={28}
                              className="w-7 h-7"
                            />
                            <div>
                              <div className="text-base font-bold text-forest-800">
                                ICS
                              </div>
                              <div className="text-xs text-forest-600">
                                Integrated Construction Solutions
                              </div>
                            </div>
                          </div>
                        </motion.div>
                        <nav className="flex-1">
                          <div className="space-y-2">
                            {navItems.map((navItem, index) => (
                              <motion.div
                                key={`mobile-link-${index}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: 0.2 + index * 0.1,
                                }}
                              >
                                <Link
                                  href={navItem.link}
                                  onClick={(e) => {
                                    if (navItem.link.startsWith("#")) {
                                      handleSmoothScroll(
                                        e,
                                        navItem.link.substring(1)
                                      );
                                    }
                                  }}
                                  className="block px-3 py-2 text-sm font-medium text-forest-700 hover:bg-forest-500/10 hover:text-forest-500 rounded-md transition-all duration-200"
                                >
                                  {navItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </nav>
                        <motion.div
                          className="border-t border-sage-200 pt-4 space-y-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.05, y: -1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          >
                            <Button
                              className="w-full bg-gradient-to-r from-forest-500 to-sage-400 hover:from-forest-600 hover:to-sage-500 text-white font-medium transition-all duration-200"
                              onClick={(e) => {
                                handleSmoothScroll(e, "CTA");
                                setMenuOpen(false);
                              }}
                            >
                              Schedule Demo
                            </Button>
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
}
