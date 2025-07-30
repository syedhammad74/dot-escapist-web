"use client";

import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";

// Lazy load components for better performance
const Hero = lazy(() => import("./components/Hero"));
const VideoSection = lazy(() => import("./components/VideoSection"));
const ProblemSection = lazy(() => import("./components/ProblemSection"));
const SolutionSection = lazy(() => import("./components/SolutionSection"));
const FeaturesSection = lazy(() => import("./components/FeaturesSection"));
const CTASection = lazy(() => import("./components/CTASection"));
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));

// Perfect Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-forest-sage/20 border-t-forest-sage rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-forest-sage/30 rounded-full animate-ping"></div>
    </div>
  </div>
);

// Perfect Section Loading Component
const SectionLoader = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse ${className}`}>
    <div className="container mx-auto px-4 py-20">
      <div className="space-y-8">
        <div className="h-8 bg-[#EBEBEB] rounded-lg w-1/3 mx-auto"></div>
        <div className="h-4 bg-[#EBEBEB] rounded w-1/2 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-[#EBEBEB] rounded-2xl"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Optimized page component with perfect layout
const HomePage: React.FC = React.memo(() => {
  return (
    <div className="min-h-screen bg-white">
      {/* Perfect Navigation */}
      <Suspense
        fallback={
          <div className="h-20 bg-white/95 backdrop-blur-xl border-b border-[#EBEBEB]" />
        }
      >
        <Navbar />
      </Suspense>

      {/* Main Content with Perfect Structure */}
      <main className="relative overflow-hidden">
        {/* Hero Section - Full Height */}
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>

        {/* Video Section */}
        <Suspense
          fallback={
            <SectionLoader className="bg-gradient-to-br from-[#DAF1DE] via-white to-[#DAF1DE]" />
          }
        >
          <VideoSection />
        </Suspense>

        {/* Problem Section */}
        <Suspense fallback={<SectionLoader className="bg-white" />}>
          <section className="section bg-white relative">
            <ProblemSection />
          </section>
        </Suspense>

        {/* Solution Section */}
        <Suspense fallback={<SectionLoader className="bg-[#F8F9FA]" />}>
          <section className="section bg-[#F8F9FA] relative">
            <SolutionSection />
          </section>
        </Suspense>

        {/* Features Section */}
        <Suspense fallback={<SectionLoader className="bg-white" />}>
          <section className="section bg-white relative">
            <FeaturesSection />
          </section>
        </Suspense>

        {/* CTA Section */}
        <Suspense fallback={<SectionLoader className="bg-forest-primary" />}>
          <section className="section bg-forest-primary relative">
            <CTASection />
          </section>
        </Suspense>
      </main>

      {/* Perfect Footer */}
      <Suspense fallback={<div className="h-64 bg-forest-primary" />}>
        <Footer />
      </Suspense>

      {/* Perfect Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-forest-sage text-forest-primary rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </div>
  );
});

HomePage.displayName = "HomePage";

export default HomePage;
