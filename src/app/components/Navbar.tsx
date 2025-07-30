"use client";

import { Button } from "@/components/ui/button";
import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Play } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

// Define navigation items directly to avoid hydration issues
interface NavItem {
  name: string;
  link: string;
}

const navItems: NavItem[] = [
  { name: "Home", link: "/" },
  { name: "Problems", link: "#problems" },
  { name: "Services", link: "#services" },
  { name: "Technology", link: "#technology" },
  { name: "ROI", link: "#roi" },
  { name: "Success Stories", link: "#success-stories" },
  { name: "FAQ", link: "#faq" },
  { name: "Contact", link: "#CTA" },
  { name: "Watch Live Demo", link: "#video-section" }
];

const NavLink = ({ link, name }: { link: string; name: string }) => {
  return (
    <motion.div
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="relative"
    >
      <a
        href={link}
        className={cn(
          "px-3 py-2 text-sm font-medium transition-all duration-300 relative",
          "hover:text-[#8EB69B] hover:bg-[#8EB69B]/5 rounded-lg",
          "text-[#235347] whitespace-nowrap"
        )}
      >
        {name}
      </a>
    </motion.div>
  );
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setIsScrolled(currentY > 20);

          // Always show header near top
          if (currentY < 50) {
            setIsVisible(true);
            lastY = currentY;
            ticking = false;
            return;
          }

          const delta = currentY - lastY;

          // Hide header if scrolled down significantly
          if (delta > 5 && currentY > 100) {
            setIsVisible(false);
          }
          // Show header if scrolled up
          else if (delta < -5) {
            setIsVisible(true);
          }

          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 w-full px-2 sm:px-4 pt-2 sm:pt-4 lg:pt-6"
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
          <motion.nav
            className={cn(
              "w-full sm:w-fit sm:mx-auto",
              "bg-white/95 backdrop-blur-xl border border-[#EBEBEB]/50",
              "rounded-2xl sm:rounded-full shadow-lg",
              isScrolled ? "shadow-xl" : "shadow-md"
            )}
            style={{
              WebkitBackdropFilter: "blur(16px)",
              backdropFilter: "blur(16px)",
            }}
            animate={isScrolled ? { scale: 0.98 } : { scale: 1 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
              type: "spring",
              stiffness: 400,
              damping: 40,
            }}
          >
            <div className="px-3 sm:px-4 lg:px-6 xl:px-8">
              <div className="flex items-center justify-between h-12 sm:h-14 lg:h-16">
                {/* Logo */}
                <motion.div
                  className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-[#8EB69B] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#235347] font-bold text-sm sm:text-base lg:text-lg">
                      ICS
                    </span>
                  </div>

                  <div className="sm:hidden">
                    <span className="text-base font-bold text-[#235347]">
                      ICS
                    </span>
                  </div>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-1">
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
                      <NavLink link={item.link} name={item.name} />
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Menu */}
                <div className="lg:hidden">
                  <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <SheetTrigger asChild>
                      <motion.div
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-9 w-9 sm:h-10 sm:w-10 text-[#235347] hover:bg-[#F2F2F2] transition-all duration-200 rounded-xl"
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
                                <X className="h-5 w-5 sm:h-6 sm:w-6" />
                              </motion.div>
                            ) : (
                              <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </Button>
                      </motion.div>
                    </SheetTrigger>
                    <SheetContent
                      side="right"
                      className="w-[280px] sm:w-[320px] bg-white/95 backdrop-blur-xl border-l border-[#EBEBEB]"
                    >
                      <motion.div
                        className="p-6 h-full flex flex-col"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Mobile Menu Header */}
                        <div className="flex items-center space-x-3 mb-8 pb-4 border-b border-[#EBEBEB]">
                          <div className="w-8 h-8 bg-[#8EB69B] rounded-lg flex items-center justify-center">
                            <span className="text-[#235347] font-bold text-sm">
                              ICS
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#235347]">
                              Menu
                            </div>
                            <div className="text-xs text-[#8EB69B]">
                              Navigation
                            </div>
                          </div>
                        </div>

                        <nav className="flex-1">
                          <div className="space-y-1">
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
                                  onClick={() => setIsMenuOpen(false)}
                                  className="flex items-center px-4 py-3 text-base font-medium text-[#235347] hover:bg-[#F2F2F2] hover:text-[#8EB69B] rounded-xl transition-all duration-200"
                                >
                                  {item.name === "Watch Live Demo" && (
                                    <Play className="w-4 h-4 mr-3 text-[#8EB69B]" />
                                  )}
                                  {item.name}
                                </a>
                              </motion.div>
                            ))}
                          </div>
                        </nav>

                        {/* Mobile Menu Footer */}
                        <div className="pt-4 border-t border-[#EBEBEB]">
                          <div className="text-xs text-[#235347]/60 text-center">
                            © 2024 ICS Platform
                          </div>
                        </div>
                      </motion.div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
