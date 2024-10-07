"use client"; // Ensure this is a client component

import {
  FaDesktop,
  FaNetworkWired,
  FaCloud,
  FaProjectDiagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Expertise data
const expertiseData = [
  {
    title: "Front-End & Back-End Development",
    description:
      "Developing dynamic user interfaces and robust server-side applications for web platforms.",
    icon: <FaDesktop className="h-12 w-12 text-orange-500" />,
  },
  {
    title: "API Integration & Microservices",
    description:
      "Designing and integrating APIs for efficient communication and building scalable microservices architectures.",
    icon: <FaNetworkWired className="h-12 w-12 text-orange-500" />,
  },
  {
    title: "Cloud Infrastructure & Deployment",
    description:
      "Architecting, deploying, and managing cloud infrastructure to meet business needs with scalability and security.",
    icon: <FaCloud className="h-12 w-12 text-orange-500" />,
  },
  {
    title: "Agile Project Leadership",
    description:
      "Coordinating projects using Agile methodologies to deliver results efficiently and adapt to changing requirements.",
    icon: <FaProjectDiagram className="h-12 w-12 text-orange-500" />,
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative py-20 bg-gray-100 overflow-hidden h-screen flex items-center"
    >
      {/* Enhanced Background Elements */}
      <motion.div className="absolute inset-0 z-0">
        {/* Large Diagonal Gradient Shape */}
        <motion.div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-yellow-300 via-orange-500 to-red-500 opacity-20 rotate-45"></motion.div>

        {/* Polygonal Shape - Subtle */}
        <motion.div
          className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-gradient-to-br from-red-400 to-yellow-300 opacity-20"
          style={{
            clipPath: "polygon(50% 0%, 100% 25%, 75% 75%, 25% 75%, 0% 25%)",
          }}
        ></motion.div>

        {/* Horizontal Line */}
        <motion.div className="absolute top-[60%] left-[10%] w-[80%] h-1 bg-gradient-to-r from-orange-300 to-red-500 opacity-50"></motion.div>

        {/* Wave at the bottom */}
        <motion.div className="absolute bottom-0 left-0 w-[800px] h-[200px] opacity-30">
          <svg
            viewBox="0 0 1440 320"
            className="fill-current text-orange-300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillOpacity="1"
              d="M0,32L48,53.3C96,75,192,117,288,138.7C384,160,480,160,576,144C672,128,768,96,864,96C960,96,1056,128,1152,160C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </motion.div>
      </motion.div>

      {/* Split Layout with Heading on the Left and Cards on the Right */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-6">
        {/* Left Side: Heading and Description */}
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <div className="uppercase text-sm text-orange-500 font-semibold tracking-wide">
              Expertise
            </div>
            <h2 className="mt-2 text-5xl font-extrabold text-black">
              Our Professional Skills
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Leveraging cutting-edge technologies to deliver exceptional
              solutions.
            </p>
          </div>
        </div>

        {/* Right Side: Expertise Cards in Two Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {expertiseData.map((expertise, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-xl shadow-lg transition-all duration-300 ease-out hover:shadow-2xl"
            >
              {/* Icon Section */}
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full shadow-inner">
                  {expertise.icon}
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-2xl font-bold text-black mb-4 text-center">
                {expertise.title}
              </h3>
              <p className="text-gray-600 text-center">
                {expertise.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
