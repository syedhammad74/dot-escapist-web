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
  <div className="flex items-center justify-center min-h-screen bg-transparent backdrop-blur-sm">
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Seamless Background Gradients */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        {/* Main gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#DAF1DE] via-white to-[#DAF1DE]"></div>
        
        {/* Floating aesthetic elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#8EB69B]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-96 right-20 w-80 h-80 bg-[#235347]/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-96 left-20 w-64 h-64 bg-[#DAF1DE]/60 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#8EB69B]/12 rounded-full blur-2xl animate-pulse" style={{animationDelay: '6s'}}></div>
        
        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#DAF1DE]/5 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8EB69B]/3 to-transparent"></div>
      </div>

      {/* Perfect Navigation */}
      <Suspense
        fallback={
          <div className="h-20 bg-white/95 backdrop-blur-xl border-b border-[#EBEBEB] relative z-50" />
        }
      >
        <div className="relative z-50">
          <Navbar />
        </div>
      </Suspense>

      {/* Main Content with Perfect Structure */}
      <main className="relative z-10">
        {/* Hero Section - Full Height */}
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>

        {/* Problem Section */}
        <Suspense fallback={<SectionLoader className="bg-transparent" />}>
          <section className="section relative backdrop-blur-sm">
            {/* Subtle section divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#8EB69B]/30 to-transparent"></div>
            <ProblemSection />
          </section>
        </Suspense>

        {/* Features Section */}
        <Suspense fallback={<SectionLoader className="bg-transparent" />}>
          <section className="section relative backdrop-blur-sm">
            {/* Subtle section divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#235347]/20 to-transparent"></div>
            <FeaturesSection />
          </section>
        </Suspense>

        {/* Solution Section */}
        <Suspense fallback={<SectionLoader className="bg-transparent" />}>
          <section className="section relative backdrop-blur-sm">
            {/* Subtle section divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-transparent via-[#8EB69B]/25 to-transparent"></div>
            <SolutionSection />
          </section>
        </Suspense>

        {/* Video Section */}
        <Suspense
          fallback={
            <SectionLoader className="bg-transparent" />
          }
        >
          <div className="relative backdrop-blur-sm">
            <VideoSection />
          </div>
        </Suspense>

        {/* CTA Section */}
        <Suspense fallback={<SectionLoader className="bg-forest-primary" />}>
          <section className="section bg-gradient-to-br from-[#235347] via-[#163832] to-[#235347] relative">
            <div className="relative z-10">
              <CTASection />
            </div>
          </section>
        </Suspense>
      </main>

      {/* Perfect Footer */}
      <Suspense fallback={<div className="h-64 bg-forest-primary relative z-20" />}>
        <div className="relative z-20">
          <Footer />
        </div>
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
