"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { navItems } from "@/constants/nav";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Navbar Visibility on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(currentScrollPos <= lastScrollY || currentScrollPos < 50);
      setLastScrollY(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Smooth Scroll
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "fixed top-4 inset-x-0 z-50 max-w-5xl mx-auto px-4 py-3 bg-white shadow-lg rounded-full flex items-center justify-between",
          "w:px-2 w:py-2 xs:px-4 xs:py-2 sm:px-6 sm:py-3"
        )}
      >
        <Link href="/" className="flex items-center gap-4" aria-label="Home">
          <Image
            src={logo}
            alt="Dot Escapist Logo"
            className="w-[50px] xs:w-[60px] sm:w-[70px] md:w-[90px] lg:w-[110px] hover:scale-105 transition-transform duration-200 ease-in-out"
            loading="lazy"
          />
        </Link>

        <nav className="hidden lsm:flex items-center gap-4 md:gap-6 lg:gap-8 text-sm font-medium">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              onClick={(e) => {
                if (navItem.link.startsWith("#")) {
                  handleSmoothScroll(e, navItem.link.substring(1));
                }
              }}
              className={cn(
                "relative transition-all duration-200 ease-in-out group",
                "text-neutral-800 hover:text-[#E72C0D]"
              )}
            >
              <span className="text-base font-medium tracking-wide">
                {navItem.name}
              </span>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#E72C0D] transition-all duration-400 ease-in-out group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden lsm:flex items-center gap-4 md:gap-6 lg:gap-8">
          {/* Contact Us Button */}
          <Link
            href="#CTA"
            onClick={(e) => handleSmoothScroll(e, "CTA")}
            className="relative items-center inline-block px-3 py-2 lg:px-5 lg:py-3 rounded-full font-bold overflow-hidden group"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[#e7760d] opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-gradient-to-r from-orange-400 to-orange-600 opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-[0.85rem] lg:text-[1rem] text-gray-800 group-hover:text-white transition-colors duration-200 ease-in-out font-semibold">
              Contact Us
            </span>
            <span className="absolute inset-0 border-[2px] border-[#e7760d] rounded-full"></span>
          </Link>
        </div>

        <button
          aria-label="Open Menu"
          className="lsm:hidden ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 xs:w-8 xs:h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              rotate: menuOpen ? 45 : 0,
              scale: menuOpen ? 1.1 : 1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <line
              x1="3"
              y1="6"
              x2="21"
              y2="6"
              className={`origin-center transition-all duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-[8px] stroke-[#E72C0D]" : ""
              }`}
            />
            <line
              x1="3"
              y1="12"
              x2="21"
              y2="12"
              className={`transition-opacity duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <line
              x1="3"
              y1="18"
              x2="21"
              y2="18"
              className={`origin-center transition-all duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-[8px] stroke-[#E72C0D]" : ""
              }`}
            />
          </motion.svg>
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-[1px] z-40"
            >
              <motion.div
                key="mobile-menu"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "-100%" }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 15,
                  duration: 0.5,
                }}
                className="fixed top-0 left-0 w-[75%] max-w-[320px] h-screen bg-gradient-to-bl from-gray-800 to-black shadow-lg z-50 mobile-menu rounded-r-lg"
              >
                <div className="p-6 xs:p-8 relative">
                  <button
                    className="absolute top-4 right-4 text-white text-lg"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close Menu"
                  >
                    ✕
                  </button>
                  <nav className="grid gap-4 xs:gap-6 mt-8">
                    {navItems.map((navItem, idx) => (
                      <Link
                        key={`mobile-link-${idx}`}
                        href={navItem.link}
                        onClick={(e) => {
                          if (navItem.link.startsWith("#")) {
                            handleSmoothScroll(e, navItem.link.substring(1));
                          }
                          setMenuOpen(false);
                        }}
                        className="text-sm xs:text-base font-medium text-gray-100 hover:text-red-500 transition-colors duration-200 ease-in-out"
                      >
                        {navItem.name}
                      </Link>
                    ))}
                    <Link
                      href="#CTA"
                      onClick={(e) => handleSmoothScroll(e, "#CTA")}
                      className="text-sm xs:text-base font-medium text-gray-100 hover:text-red-500 transition-colors duration-200 ease-in-out"
                    >
                      Contact Us
                    </Link>
                  </nav>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
}
