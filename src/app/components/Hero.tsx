"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Zap, Globe, Shield, Cpu, ArrowRight } from "lucide-react";
import NeuralNetworkBackground from "@/components/ui/NeuralNetworkBackground";

const OrangeGradientText: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <span
    className={`bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text ${className}`}
  >
    {children}
  </span>
);

const FeatureItem: React.FC<{ icon: React.ElementType; text: string }> = ({
  icon: Icon,
  text,
}) => (
  <motion.div
    className="flex items-center justify-between space-x-2 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm p-3 lg:w-[16vw] rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    whileHover={{ scale: 1.05 }}
  >
    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
    <span className="text-xs sm:text-sm lg:text-base text-white font-medium">
      {text}
    </span>
  </motion.div>
);

const DotescapistInterface: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Thank you for your interest! We'll contact you at ${email}`);
      setEmail("");
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-orange-900 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJyZ2JhKDI1NSwgMTI1LCAwLCAwLjEpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="hidden lg:block absolute inset-0 z-0">
        <NeuralNetworkBackground />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-4 sm:px-6 md:px-8 lg:px-10 lg:mt-[2vw] lg:mb-6 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-24">
        <motion.div
          className="w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-2xl 2xl:max-w-3xl mx-auto mt-4 sm:mt-8 lg:mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-extrabold leading-tight mb-2 sm:mb-4 lg:mb-6 tracking-tight">
            Escape the 
            <OrangeGradientText className="text-xl ml-3 xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl mt-1 sm:mt-2">
               Ordinary.
            </OrangeGradientText>
            <br />
            Embrace the innovation. 
            <br />
          </h1>

          <motion.p
            className="text-xs xs:text-sm sm:text-base md:text-base lg:text-lg xl:text-xl mb-4 sm:mb-6 lg:mb-8 max-w-prose mx-auto text-white/90 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            We're not just developers, We're architects of your tech escape plan.
          </motion.p>

          <motion.form
            className="flex flex-col xs:flex-col lg:flex-row gap-2 xs:gap-3 mb-6 sm:mb-8 lg:mb-12 mt-2 xs:mt-3 w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white/10 border border-orange-500/50 text-white placeholder-white/70 focus:ring-2 focus:ring-orange-400 rounded-lg px-3 xs:px-4 py-2 xs:py-3 transition-all duration-300 ease-in-out focus:border-orange-600 text-xs xs:text-sm lg:text-base"
            />
            <AnimatePresence mode="wait">
              <motion.button
                key={loading ? "loading" : "submit"}
                type="submit"
                className="w-full xs:w-full lg:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-4 xs:px-6 py-2 xs:py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-400 text-xs xs:text-sm lg:text-base whitespace-nowrap"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 xs:h-5 xs:w-5 animate-spin inline" />
                ) : (
                  <div className="flex items-center justify-center gap-1 xs:gap-2">
                    Join the Escape
                    <Zap className="h-4 w-4 xs:h-5 xs:w-5" />
                  </div>
                )}
              </motion.button>
            </AnimatePresence>
          </motion.form>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 lg:gap-16 w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-6xl xl:max-w-6xl 2xl:max-w-6xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <FeatureItem icon={Globe} text="Global Digital Ecosystem" />
          <FeatureItem icon={Shield} text="Quantum-Secure Networks" />
          <FeatureItem icon={Cpu} text="AI-Powered Innovations" />
          <FeatureItem icon={ArrowRight} text="Future-Proof Solutions" />
        </motion.div>
      </div>
    </div>
  );
};

export default DotescapistInterface;
