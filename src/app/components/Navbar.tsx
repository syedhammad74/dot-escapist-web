"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { navItems } from "@/constants/nav";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > lastScrollY && currentScrollPos > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

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
    <AnimatePresence mode="wait">
      <motion.header
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 20 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className={cn(
          "flex max-w-5xl mx-auto fixed top-4 inset-x-0 opacity-100 bg-white shadow-lg z-50 px-6 py-3 items-center justify-between rounded-full"
        )}
      >
        <Link href="/" className="flex items-center gap-4" aria-label="Home">
          <Image
            src={logo}
            alt="Dot Escapist Logo"
            className="w-[90px] sm:w-[110px] transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
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
                "relative transition-all duration-300 hover:text-[#E72C0D] group",
                "text-neutral-800 hover:text-[#E72C0D]"
              )}
            >
              <span className="text-base font-medium tracking-wide">
                {navItem.name}
              </span>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#E72C0D] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          {/* Contact Us Button */}
          <Link
            href="#pricing"
            onClick={(e) => handleSmoothScroll(e, "pricing")}
            className="relative items-center justify-start inline-block px-4 py-2 lg:px-5 lg:py-2 overflow-hidden font-bold rounded-full group"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[#E72C0D] opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#E72C0D] opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-[0.9rem] lg:text-[0.95rem] text-gray-800 transition-colors duration-200 ease-in-out group-hover:text-white font-semibold">
              Contact Us
            </span>
            <span className="absolute inset-0 border-2 border-[#E72C0D] rounded-full"></span>
          </Link>
        </div>

        <button
          aria-label="Open Menu"
          className="md:hidden ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line
              x1="3"
              y1="6"
              x2="21"
              y2="6"
              className={`origin-center transition-all duration-500 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            />
            <line
              x1="3"
              y1="12"
              x2="21"
              y2="12"
              className={`transition-opacity duration-500 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <line
              x1="3"
              y1="18"
              x2="21"
              y2="18"
              className={`origin-center transition-all duration-500 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            />
          </svg>
        </button>

        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          >
            <div className="fixed top-0 left-0 w-[70%] max-w-[300px] h-screen bg-white shadow-lg transition-transform duration-500 ease-in-out z-50 mobile-menu rounded-r-lg">
              <div className="p-8">
                <nav className="grid gap-6">
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
                      className="text-base font-medium text-gray-800 hover:text-red-600 transition-colors duration-200 ease-in-out"
                    >
                      {navItem.name}
                    </Link>
                  ))}
                  <Link
                    href="#pricing"
                    onClick={(e) => handleSmoothScroll(e, "pricing")}
                    className="text-base font-medium text-gray-800 hover:text-red-600 transition-colors duration-200 ease-in-out"
                  >
                    Contact Us
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        )}
      </motion.header>
    </AnimatePresence>
  );
}
