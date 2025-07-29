"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { EnhancedDecorations } from "@/components/ui/enhanced-decorations";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const faqData: FAQItem[] = [
    // Implementation & Setup
    {
      question: "How long does implementation typically take?",
      answer:
        "Implementation timeline depends on customization level. Basic setup takes 2-4 weeks, while complex customizations may require 6-12 weeks. We work with your schedule to minimize disruption.",
      category: "implementation",
    },
    {
      question: "Can you migrate our existing Excel data?",
      answer:
        "Yes, our data migration service handles Excel files of any size. We clean, validate, and import your historical data to ensure nothing is lost in the transition.",
      category: "implementation",
    },
    {
      question: "What training do you provide?",
      answer:
        "We offer comprehensive training including role-specific sessions, hands-on workshops, documentation, and video tutorials. Training continues until your team is confident and productive.",
      category: "implementation",
    },
    // Technical & Security
    {
      question: "Is our data secure in the cloud?",
      answer:
        "Absolutely. We use enterprise-grade security including encrypted data transmission and storage, regular backups, and role-based access controls. Your data is more secure than local storage.",
      category: "technical",
    },
    {
      question: "Can ICS integrate with our existing systems?",
      answer:
        "Yes, ICS offers robust integration capabilities. We can connect with most ERP systems, accounting software, and other business tools through our API or custom integrations.",
      category: "technical",
    },
    {
      question: "What if we lose internet connectivity?",
      answer:
        "ICS includes offline capabilities for critical functions. Data syncs automatically when connectivity returns, ensuring no work is lost.",
      category: "technical",
    },
    // Pricing & Support
    {
      question: "How is ICS priced?",
      answer:
        "Pricing is customized based on your specific requirements, number of users, and level of customization. We offer flexible models including per-user, per-project, and enterprise licenses.",
      category: "pricing",
    },
    {
      question: "What ongoing support is provided?",
      answer:
        "We provide 24/7 technical support, regular system updates, user training refreshers, and dedicated customer success management to ensure your continued success.",
      category: "pricing",
    },
    {
      question: "Can we start with a pilot project?",
      answer:
        "Yes, we often recommend starting with a pilot project to demonstrate value before full implementation. This allows you to see results quickly and plan the broader rollout.",
      category: "pricing",
    },
  ];

  const categories = [
    { id: "all", name: "All Questions" },
    { id: "implementation", name: "Implementation & Setup" },
    { id: "technical", name: "Technical & Security" },
    { id: "pricing", name: "Pricing & Support" },
  ];

  const filteredFAQs = faqData.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      id="faq"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-sage-50 to-white"
    >
      <EnhancedDecorations section="faq" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Common Questions.{" "}
            <span className="bg-gradient-to-r from-forest-500 to-sage-400 text-transparent bg-clip-text">
              Clear Answers.
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-forest-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Get answers to the most frequently asked questions about ICS
            implementation, security, and support.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-forest-500 text-white shadow-lg"
                  : "bg-white text-forest-600 border border-sage-200 hover:bg-forest-50"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {filteredFAQs.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-sage-200 rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-forest-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-forest-800 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-forest-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-forest-500" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-forest-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.h3
            className="text-xl sm:text-2xl font-bold text-forest-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            Still Have Questions?
          </motion.h3>
          <motion.p
            className="text-forest-600 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Our team is here to help. Contact us for personalized answers to
            your specific questions about ICS implementation.
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-forest-500 to-sage-400 hover:from-forest-600 hover:to-sage-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
