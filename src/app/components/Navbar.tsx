"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import logo from "../../../public/logo.png";
import { navItems } from "@/constants/nav";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > scrollPosition && currentScrollPos > 10) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      if (currentScrollPos > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  // Function to handle smooth scroll to sections based on anchor ID
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

  // Close menu on outside click (click outside mobile menu)
  const handleOutsideClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".mobile-menu") === null) {
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`py-2 sm:py-4 sticky top-0 z-50 w-full flex items-center bg-transparent transition-transform duration-500 backdrop-blur-lg ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${isScrolled ? "bg-white/90 shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex h-16 lg:max-w-[950px] xl:max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <Image
            src={logo}
            alt="Dot Escapist Logo"
            className="w-[110px] sm:w-[130px] md:w-[140px] lg:w-[150px] transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </Link>

        {/* Full Navigation Links (for large screens) */}
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((nav: any) => (
            <Link
              key={nav.name}
              href={nav.link}
              onClick={(e) => {
                if (nav.link.startsWith("#")) {
                  handleSmoothScroll(e, nav.link.substring(1)); // Handle smooth scroll for anchor links
                }
              }}
              className={`relative text-[17px] font-medium transition-all duration-300 hover:text-[#E72C0D] ${
                pathName === nav.link ? "text-[#E72C0D]" : "text-gray-700"
              } group`}
            >
              {nav.name}

              {/* Animated Line Underneath the Link */}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#E72C0D] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* CTA Button */}
          <div className="hidden md:flex mt-1">
            <Link
              href="#pricing"
              onClick={(e) => handleSmoothScroll(e, "pricing")} // Smooth scroll for "Contact Us"
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

          {/* Mobile Menu Icon */}
          <Button
            aria-label="Open Menu"
            variant="ghost"
            size="icon"
            className="md:hidden"
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
          </Button>

          {/* Sliding Mobile Menu from Left */}
          {menuOpen && (
            <div
              onClick={handleOutsideClick}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
            >
              <div
                className={`fixed top-0 left-0 w-[75%] max-w-[300px] h-screen bg-white shadow-lg transition-transform duration-500 ease-in-out z-40 mobile-menu ${
                  menuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <div className="p-6">
                  <nav className="grid gap-6">
                    {navItems.map((nav: any) => (
                      <Link
                        key={nav.name}
                        href={nav.link}
                        onClick={(e) => {
                          if (nav.link.startsWith("#")) {
                            handleSmoothScroll(e, nav.link.substring(1)); // Handle smooth scroll in mobile menu
                          }
                          setMenuOpen(false); // Close menu on link click
                        }}
                        className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors duration-200 ease-in-out"
                      >
                        {nav.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
