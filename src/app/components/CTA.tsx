"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaBuilding, FaUserTie } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    position: "",
    message: "",
    interest: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formState.firstName.trim() &&
      formState.lastName.trim() &&
      formState.email.trim() &&
      formState.message.trim()
    ) {
      setIsSubmitting(true);
      try {
        // Send email to the website owner if any interest is selected
        if (formState.interest) {
          await emailjs.send(
            "service_so7rk5a", // Replace with your EmailJS service ID
            "template_c3whuhf", // Replace with your EmailJS template ID for the web owner
            {
              email: formState.email,
              message: `${formState.firstName} ${formState.lastName} is interested in ${formState.interest}. Email: ${formState.email}`,
              firstName: formState.firstName,
              lastName: formState.lastName,
              interest: formState.interest,
            },
            "pLae-yYMcZWglDNeTAndE" // Replace with your EmailJS user ID
          );
        }

        // Send email to the user
        await emailjs.send(
          "service_au6x3sg", // Replace with your EmailJS service ID
          "template_41bx6gt", // Replace with your EmailJS template ID
          {
            firstName: formState.firstName,
            lastName: formState.lastName,
            email: formState.email,
            message: formState.message,
            company: formState.company,
            position: formState.position,
            interest: formState.interest,
          },
          "wcTCzjqMgcp8fWUU_" // Replace with your EmailJS user ID
        );

        alert("Thank you for reaching out! We'll get back to you shortly.");
        setFormState({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          position: "",
          message: "",
          interest: "",
        });
      } catch (error) {
        console.error("Failed to send email:", error);
        alert("Something went wrong. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      alert("Please fill in all required fields before submitting.");
    }
  };

  return (
    <div
      id="CTA"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-orange-900 text-gray-100 px-4 py-8"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-col justify-center mt-10 lg:mt-40 space-y-6"
        >
          <h2 className="text-lg font-semibold text-teal-400 uppercase tracking-wider">
            Get in Touch
          </h2>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug">
            Let’s Plan Your Escape
          </h2>
          <p className="text-base text-gray-300 leading-relaxed">
            Have a question or eager to collaborate? Connect with the Escapers
            team using our contact form or reach out directly through the
            information below. Rest assured, your details are safe with us in
            line with our data protection policy.
            <a href="#" className="text-teal-400 underline ml-1">
              data protection policy
            </a>
            .
          </p>
          <div className="text-gray-300 space-y-4">
            <p className="flex items-center space-x-4">
              <FaEnvelope className="text-teal-400 text-2xl" />
              <span className="font-medium text-lg">hs.escapist@gmail.com</span>
            </p>
            <p className="flex items-center space-x-4">
              <FaPhoneAlt className="text-teal-400 text-2xl" />
              <span className="font-medium text-lg">+92 325 181-0101</span>
            </p>
          </div>
        </motion.div>

        {/* Right Section (Form) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 p-6 rounded-lg shadow-2xl border border-gray-700 w-full"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-base font-medium text-gray-300"
                >
                  First name *
                </label>
                <div className="relative mt-2">
                  <FaUserTie className="absolute left-3 top-3 text-gray-500" />
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleInputChange}
                    required
                    className="pl-10 pr-4 py-3 h-10 w-full border border-gray-600 rounded-lg shadow-sm bg-gray-900 text-gray-100 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-300"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-base font-medium text-gray-300"
                >
                  Last name *
                </label>
                <div className="relative mt-2">
                  <FaUserTie className="absolute left-3 top-3 text-gray-500" />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleInputChange}
                    required
                    className="pl-10 pr-4 py-3 h-10 w-full border border-gray-600 rounded-lg shadow-sm bg-gray-900 text-gray-100 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-300"
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium text-gray-300"
              >
                Email address *
              </label>
              <div className="relative mt-2">
                <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  className="pl-10 pr-4 py-3 h-10 w-full border border-gray-600 rounded-lg shadow-sm bg-gray-900 text-gray-100 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-300"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="company"
                  className="block text-base font-medium text-gray-300"
                >
                  Company name
                </label>
                <div className="relative mt-2">
                  <FaBuilding className="absolute left-3 top-3 text-gray-500" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleInputChange}
                    className="pl-10 pr-4 py-3 h-10 w-full border border-gray-600 rounded-lg shadow-sm bg-gray-900 text-gray-100 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-300"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="position"
                  className="block text-base font-medium text-gray-300"
                >
                  Position
                </label>
                <div className="relative mt-2">
                  <FaUserTie className="absolute left-3 top-3 text-gray-500" />
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formState.position}
                    onChange={handleInputChange}
                    className="pl-10 pr-4 py-3 h-10 w-full border border-gray-600 rounded-lg shadow-sm bg-gray-900 text-gray-100 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-300"
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-base font-medium text-gray-300"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formState.message}
                onChange={handleInputChange}
                required
                className="mt-2 w-full pl-4 h-20 pr-4 py-3 border border-gray-600 rounded-lg shadow-sm bg-gray-900 text-gray-100 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-300"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="interest"
                className="block text-base font-medium text-gray-300"
              >
                What are you interested in? (optional)
              </label>
              <select
                id="interest"
                name="interest"
                value={formState.interest}
                onChange={handleInputChange}
                className="mt-2 w-full pl-4 h-12 pr-4 py-3 border border-gray-600 rounded-lg shadow-sm bg-gray-900 text-gray-100 focus:ring-teal-400 focus:border-teal-400 transition-all ease-in-out duration-300"
              >
                <option value="">Select an option</option>
                <option value="consulting">Consulting</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="fullstack">Full Stack Development</option>
                <option value="cloud">Cloud Services</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                className="h-4 w-4 text-teal-400 border-gray-600 rounded focus:ring-teal-400"
              />
              <label htmlFor="newsletter" className="text-base text-gray-300">
                I would like to receive the newsletter and stay updated.
              </label>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg shadow-md text-base font-medium text-white bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-teal-400 transition-transform ease-in-out duration-300 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </motion.button>
          </form>
          <p className="mt-6 text-sm text-gray-400">
            By clicking Submit, you agree that Futuristic Dev can process your
            personal data as required for the information request. You have read
            the
            <a href="#" className="text-teal-400 underline ml-1">
              data protection policy
            </a>
            .
          </p>
        </motion.div>
      </div>
    </div>
  );
}
