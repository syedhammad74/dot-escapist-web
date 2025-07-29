"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Data for the timeline projects
const timelineData = [
  {
    title: "Cancer Clarity",
    description:
      "This project involves building a scalable and responsive web application with React and Node.js.",
    date: "2023",
    image: "/cancer_clarity.png", // Use your actual image paths
  },
  {
    title: "ICS",
    description: "An API integration project to streamline business workflows.",
    date: "2022",
    image: "/ics.png",
  },
  {
    title: "Revolution Cancer",
    description:
      "A cloud engineering project aimed at high scalability and performance.",
    date: "2021",
    image: "/revolution_cancer.png",
  },
  {
    title: "KNCT",
    description:
      "Led a project management effort to deliver a large-scale enterprise application on time and within budget.",
    date: "2020",
    image: "/knct.png",
  },
];

// Main Timeline Component
export default function Timeline() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden h-full flex flex-col items-center justify-between">
      {/* Background Elements */}
      <motion.div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated Shapes */}
        <motion.div
          className="absolute top-[20%] left-0 w-[500px] h-[300px] bg-gradient-to-r from-orange-300 to-yellow-200 opacity-40 rounded-[30%] blur-lg"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-[20%] right-0 w-[400px] h-[250px] bg-gradient-to-r from-blue-300 to-cyan-300 opacity-30 rounded-[50%] blur-lg"
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        ></motion.div>
      </motion.div>

      {/* Heading and Introduction */}
      <div className="relative z-10 text-center mb-16">
        <h4 className="uppercase text-sm text-orange-500 font-semibold tracking-wide mb-4">
          Our Journey
        </h4>
        <h2 className="text-5xl font-extrabold text-gray-900 mb-2 leading-tight">
          Our Project Milestones
        </h2>
        {/* Decorative Line Below Heading */}
        <div className="w-16 h-1 bg-orange-500 mb-6 mx-auto"></div>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Key projects that define our path to excellence.
        </p>
      </div>

      {/* Timeline Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-3 max-w-6xl px-6">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            {/* Content */}
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <p className="text-sm text-orange-500 font-semibold">{item.date}</p>
          </motion.div>
        ))}
      </div>

      {/* Wave Element at the Bottom */}
      <motion.div className="absolute bottom-0 right-0 w-full h-[180px] opacity-40">
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
    </section>
  );
}
