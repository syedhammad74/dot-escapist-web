"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  FaDesktop,
  FaNetworkWired,
  FaCloud,
  FaProjectDiagram,
  FaLock,
  FaRobot,
  FaMobileAlt,
  FaChartLine,
} from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import Modal from "react-modal";

if (typeof window !== "undefined") {
  Modal.setAppElement("body");
}

interface Expertise {
  title: string;
  description: string;
  icon: JSX.Element;
  details: string[];
}

const expertiseData: Expertise[] = [
  {
    title: "Front-End & Back-End Development",
    description:
      "Crafting dynamic user interfaces and robust server-side applications for cutting-edge web platforms.",
    icon: <FaDesktop className="h-8 w-8 text-orange-500" />,
    details: [
      "React & Next.js expertise",
      "Node.js & Express mastery",
      "Database integration (SQL & NoSQL)",
      "RESTful API development",
    ],
  },
  {
    title: "Network Architecture & Infrastructure",
    description:
      "Designing and implementing scalable network solutions for seamless connectivity and performance.",
    icon: <FaNetworkWired className="h-8 w-8 text-orange-500" />,
    details: [
      "LAN/WAN design and optimization",
      "Network security protocols",
      "Infrastructure virtualization",
      "Cloud networking solutions",
    ],
  },
  {
    title: "Cloud Computing & DevOps",
    description:
      "Leveraging cloud platforms and DevOps practices to enhance deployment speed and scalability.",
    icon: <FaCloud className="h-8 w-8 text-orange-500" />,
    details: [
      "AWS, Azure, and GCP proficiency",
      "CI/CD pipeline implementation",
      "Infrastructure as Code (Terraform)",
      "Containerization with Docker & Kubernetes",
    ],
  },
  {
    title: "Project Management & Agile Methodologies",
    description:
      "Driving projects to success using agile frameworks and effective leadership.",
    icon: <FaProjectDiagram className="h-8 w-8 text-orange-500" />,
    details: [
      "Scrum and Kanban expertise",
      "Cross-functional team leadership",
      "Project lifecycle management",
      "Risk assessment and mitigation",
    ],
  },
  {
    title: "Cybersecurity & Compliance",
    description:
      "Ensuring robust security measures and compliance with industry standards.",
    icon: <FaLock className="h-8 w-8 text-orange-500" />,
    details: [
      "Penetration testing and vulnerability assessment",
      "Data encryption and protection",
      "Compliance with GDPR, HIPAA, etc.",
      "Security policy development",
    ],
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Implementing intelligent systems that learn and adapt to improve business outcomes.",
    icon: <FaRobot className="h-8 w-8 text-orange-500" />,
    details: [
      "Neural networks and deep learning",
      "Natural Language Processing",
      "Predictive analytics",
      "AI model deployment and monitoring",
    ],
  },
  {
    title: "Mobile Application Development",
    description:
      "Creating seamless mobile experiences across iOS and Android platforms.",
    icon: <FaMobileAlt className="h-8 w-8 text-orange-500" />,
    details: [
      "React Native and Flutter proficiency",
      "User experience (UX) design",
      "API integration",
      "Performance optimization",
    ],
  },
  {
    title: "Data Analytics & Business Intelligence",
    description:
      "Transforming data into actionable insights for strategic decision-making.",
    icon: <FaChartLine className="h-8 w-8 text-orange-500" />,
    details: [
      "Data warehousing and ETL processes",
      "Visualization tools (Tableau, Power BI)",
      "Statistical analysis",
      "Big Data technologies (Hadoop, Spark)",
    ],
  },
];

const HexagonBackground: React.FC = () => (
  <div className="absolute inset-0 z-0 opacity-10">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="hexagons"
          width="50"
          height="43.4"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(2) rotate(15)"
        >
          <path
            d="M25 0L50 14.4v28.9L25 57.7L0 43.3V14.4z"
            fill="none"
            stroke="#ff7700"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagons)" />
    </svg>
  </div>
);

interface ExpertiseCardProps {
  expertise: Expertise;
  index: number;
  onClick: (expertise: Expertise) => void;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  expertise,
  index,
  onClick,
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className="group relative p-6 bg-gray-800 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-orange-500/20 border border-gray-700 overflow-hidden cursor-pointer transform hover:-translate-y-1 hover:scale-105"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1 },
        },
      }}
      initial="hidden"
      animate={controls}
      onClick={() => onClick(expertise)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-900 rounded-full shadow-inner shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all duration-300">
            {expertise.icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-white text-center mb-3 group-hover:text-orange-400 transition-colors duration-300">
          {expertise.title}
        </h3>
        <p className="text-gray-300 text-center text-sm mb-4 line-clamp-3">
          {expertise.description}
        </p>
      </div>
    </motion.div>
  );
};

interface ExpertiseModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  expertise: Expertise | null;
}

const ExpertiseModal: React.FC<ExpertiseModalProps> = ({
  isOpen,
  onRequestClose,
  expertise,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="relative max-w-2xl mx-auto mt-20 bg-gray-800 rounded-xl shadow-lg p-8 transition-all duration-300 border border-gray-700"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center transition-opacity duration-300"
    >
      <button
        onClick={onRequestClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none transition-colors duration-200"
        aria-label="Close modal"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {expertise && (
        <div className="text-left text-gray-200 space-y-6">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                {expertise.icon}
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white">{expertise.title}</h2>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            {expertise.description}
          </p>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Key Expertise
            </h3>
            <ul className="space-y-3 text-gray-300">
              {expertise.details.map((detail, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-2 hover:text-white transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Modal>
  );
};

const Expertise: React.FC = () => {
  const [selectedExpertise, setSelectedExpertise] = useState<Expertise | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (expertise: Expertise) => {
    setSelectedExpertise(expertise);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExpertise(null);
  };

  return (
    <section className="relative top-[-2] py-20 md:py-28 bg-gradient-to-br from-gray-900 via-black to-orange-900 overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <HexagonBackground />

      <motion.div
        className="relative z-10 text-center mb-16 px-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h4 className="uppercase text-sm md:text-md text-orange-500 font-semibold tracking-widest mb-4">
          Cutting-Edge Expertise
        </h4>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Pioneering Solutions for Tomorrow
        </h2>
        <motion.div
          className="w-24 h-1 bg-orange-500 mx-auto mb-6 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Harnessing the power of next-generation technologies to deliver
          unparalleled solutions, our expertise spans multiple domains, ensuring
          your business remains at the forefront of innovation in an
          ever-evolving digital landscape.
        </p>
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mx-20">
        {expertiseData.map((expertise, index) => (
          <ExpertiseCard
            key={index}
            expertise={expertise}
            index={index}
            onClick={openModal}
          />
        ))}
      </div>

      <ExpertiseModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        expertise={selectedExpertise}
      />
    </section>
  );
};

export default Expertise;
