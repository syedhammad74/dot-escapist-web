"use client";

import React, { useState, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  FaNetworkWired,
  FaCloud,
  FaProjectDiagram,
  FaLock,
  FaPython,
  FaJs,
  FaNode,
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaVuejs,
  FaBootstrap,
  FaDatabase,
  FaDocker,
  FaJenkins,
  FaAws,
  FaMicrosoft,
  FaGoogle,
  FaDigitalOcean,
  FaGithub,
  FaServer,
  FaStream,
} from "react-icons/fa";
import {
  SiDjango,
  SiFastapi,
  SiFlask,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiMariadb,
  SiApachekafka,
  SiRabbitmq,
  SiGraphql,
  SiGo,
} from "react-icons/si";

interface ExpertiseDetail {
  name: string;
  icon: JSX.Element;
  description: string;
}

interface Expertise {
  title: string;
  description: string;
  icon: JSX.Element;
  details: ExpertiseDetail[];
}

const expertiseData: Expertise[] = [
  {
    title: "Programming Languages & Frameworks",
    description:
      "Expertise in various programming languages and frameworks for full-stack development.",
    icon: <FaJs className="h-6 w-6 xs:h-8 xs:w-8 text-yellow-400" />,
    details: [
      {
        name: "Python",
        icon: <FaPython className="text-blue-500" />,
        description:
          "Versatile programming language used in web development and data analysis.",
      },
      {
        name: "Django",
        icon: <SiDjango className="text-green-600" />,
        description: "High-level Python framework for rapid development.",
      },
      {
        name: "Flask",
        icon: <SiFlask className="text-black" />,
        description:
          "Lightweight Python web framework for small to medium-sized applications.",
      },
      {
        name: "FastAPI",
        icon: <SiFastapi className="text-teal-500" />,
        description: "Modern web framework for building APIs with Python.",
      },
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400" />,
        description: "Popular language for web development.",
      },
      {
        name: "Node.js",
        icon: <FaNode className="text-green-500" />,
        description: "JavaScript runtime for scalable network applications.",
      },
      {
        name: "React",
        icon: <FaReact className="text-blue-400" />,
        description: "JavaScript library for building user interfaces.",
      },
      {
        name: "Angular",
        icon: <FaAngular className="text-red-600" />,
        description: "Framework for building dynamic web applications.",
      },
      {
        name: "Next.js",
        icon: <FaReact className="text-black" />,
        description: "React framework for server-side rendering.",
      },
      {
        name: "HTML",
        icon: <FaHtml5 className="text-orange-500" />,
        description: "Fundamental technology for web page structure.",
      },
      {
        name: "CSS",
        icon: <FaCss3Alt className="text-blue-500" />,
        description: "Styling language for web page design.",
      },
      {
        name: "Vue.js",
        icon: <FaVuejs className="text-green-500" />,
        description: "Progressive framework for building user interfaces.",
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="text-purple-500" />,
        description: "CSS framework for responsive development.",
      },
      {
        name: "Golang",
        icon: <SiGo className="text-blue-300" />,
        description: "Scalable and efficient language for software systems.",
      },
    ],
  },
  {
    title: "Cloud Platforms",
    description:
      "Leveraging cloud platforms to build scalable and resilient systems.",
    icon: <FaCloud className="h-6 w-6 xs:h-8 xs:w-8 text-blue-300" />,
    details: [
      {
        name: "AWS",
        icon: <FaAws className="text-orange-500" />,
        description:
          "Comprehensive cloud services including computing and storage.",
      },
      {
        name: "Microsoft Azure",
        icon: <FaMicrosoft className="text-blue-500" />,
        description: "Integration with Microsoft products for cloud computing.",
      },
      {
        name: "Google Cloud Platform",
        icon: <FaGoogle className="text-red-500" />,
        description: "Data analytics and machine learning capabilities.",
      },
      {
        name: "IBM Cloud",
        icon: <FaCloud className="text-blue-600" />,
        description: "AI, blockchain, and data analytics solutions.",
      },
      {
        name: "Oracle Cloud",
        icon: <FaCloud className="text-red-600" />,
        description:
          "Focus on database management and enterprise applications.",
      },
      {
        name: "DigitalOcean",
        icon: <FaDigitalOcean className="text-blue-500" />,
        description: "Simple cloud infrastructure popular with developers.",
      },
      {
        name: "Atlantic.Net",
        icon: <FaCloud className="text-blue-400" />,
        description:
          "Managed cloud solutions including VPS and HIPAA-compliant hosting.",
      },
    ],
  },
  {
    title: "DevOps & Infrastructure Tools",
    description:
      "Tools and platforms used for containerization, orchestration, and CI/CD.",
    icon: <FaNetworkWired className="h-6 w-6 xs:h-8 xs:w-8 text-green-500" />,
    details: [
      {
        name: "Docker",
        icon: <FaDocker className="text-blue-500" />,
        description:
          "Container platform for developing and running applications.",
      },
      {
        name: "Kubernetes",
        icon: <SiKubernetes className="text-blue-600" />,
        description: "Orchestrating containerized applications.",
      },
      {
        name: "Jenkins",
        icon: <FaJenkins className="text-red-500" />,
        description: "Automation server for CI/CD.",
      },
      {
        name: "GitHub Actions",
        icon: <FaGithub className="text-gray-700" />,
        description: "Automate workflows in GitHub repositories.",
      },
      {
        name: "Terraform",
        icon: <SiTerraform className="text-purple-600" />,
        description:
          "Infrastructure as Code (IaC) for data center provisioning.",
      },
      {
        name: "Ansible",
        icon: <SiAnsible className="text-red-600" />,
        description: "Configuration management and task automation tool.",
      },
    ],
  },
  {
    title: "Database Technologies",
    description:
      "Expertise in SQL and NoSQL databases for robust and scalable data management.",
    icon: <FaDatabase className="h-6 w-6 xs:h-8 xs:w-8 text-blue-400" />,
    details: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500" />,
        description: "NoSQL database for unstructured data storage.",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-blue-500" />,
        description:
          "Open-source relational database known for its reliability.",
      },
      {
        name: "MySQL",
        icon: <SiMysql className="text-blue-600" />,
        description: "Relational database management system using SQL.",
      },
      {
        name: "Redis",
        icon: <SiRedis className="text-red-500" />,
        description: "In-memory key-value store used for caching.",
      },
      {
        name: "MariaDB",
        icon: <SiMariadb className="text-brown-500" />,
        description: "Fork of MySQL with improved performance.",
      },
    ],
  },
  {
    title: "Messaging & API Frameworks",
    description:
      "Designing communication between services using messaging frameworks and APIs.",
    icon: <FaStream className="h-6 w-6 xs:h-8 xs:w-8 text-purple-500" />,
    details: [
      {
        name: "REST API",
        icon: <FaServer className="text-gray-500" />,
        description: "Architectural style using HTTP requests to access data.",
      },
      {
        name: "GraphQL",
        icon: <SiGraphql className="text-pink-600" />,
        description:
          "Query language for APIs, providing specific data as requested.",
      },
      {
        name: "Apache Kafka",
        icon: <SiApachekafka className="text-black" />,
        description: "Distributed event streaming platform for real-time data.",
      },
      {
        name: "RabbitMQ",
        icon: <SiRabbitmq className="text-orange-500" />,
        description:
          "Message broker for communication between different parts of an application.",
      },
      {
        name: "gRPC",
        icon: <FaProjectDiagram className="text-blue-500" />,
        description:
          "High-performance RPC framework for cross-language services.",
      },
    ],
  },
  {
    title: "Cybersecurity & Compliance",
    description:
      "Ensuring security measures and compliance with industry standards.",
    icon: <FaLock className="h-6 w-6 xs:h-8 xs:w-8 text-red-500" />,
    details: [
      {
        name: "Penetration Testing",
        icon: <FaLock className="text-yellow-500" />,
        description: "Identifying and exploiting vulnerabilities in systems.",
      },
      {
        name: "Data Encryption",
        icon: <FaLock className="text-green-500" />,
        description:
          "Protecting sensitive information through encryption techniques.",
      },
      {
        name: "GDPR Compliance",
        icon: <FaLock className="text-blue-500" />,
        description: "Ensuring adherence to EU data protection regulations.",
      },
      {
        name: "HIPAA Compliance",
        icon: <FaLock className="text-red-500" />,
        description:
          "Maintaining compliance with healthcare data privacy standards.",
      },
      {
        name: "Security Policy Development",
        icon: <FaLock className="text-purple-500" />,
        description: "Creating comprehensive security policies and procedures.",
      },
    ],
  },
];

function HexagonBackground() {
  return (
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
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-orange-500"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
}

interface ExpertiseCardProps {
  expertise: Expertise;
  index: number;
  onClick: (expertise: Expertise) => void;
}

function ExpertiseCard({ expertise, index, onClick }: ExpertiseCardProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className="group relative p-4 sm:p-6 bg-gray-800/80 backdrop-blur rounded-xl shadow-lg transition-all duration-500 hover:shadow-orange-500/20 border border-gray-700 overflow-hidden cursor-pointer hover:-translate-y-2 hover:scale-105"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 },
        },
      }}
      initial="hidden"
      animate={controls}
      onClick={() => onClick(expertise)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <motion.div
          className="flex items-center justify-center mb-4"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gray-900 rounded-full shadow-inner shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all duration-500">
            {expertise.icon}
          </div>
        </motion.div>
        <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-2 group-hover:text-orange-400 transition-colors duration-500">
          {expertise.title}
        </h3>
        <p className="text-gray-300 text-center text-sm sm:text-base mb-4 line-clamp-3">
          {expertise.description}
        </p>
      </div>
    </motion.div>
  );
}

interface ExpertiseModalProps {
  isOpen: boolean;
  onClose: () => void;
  expertise: Expertise | null;
}

function ExpertiseModal({ isOpen, onClose, expertise }: ExpertiseModalProps) {
  return (
    <AnimatePresence>
      {isOpen && expertise && (
        <Transition.Root show={isOpen} as={React.Fragment}>
          <Dialog
            as={motion.div}
            className="fixed inset-0 z-50 overflow-y-auto"
            open={isOpen}
            onClose={onClose}
            static
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={motion.div}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                enter="ease-out duration-300"
                leave="ease-in duration-200"
              />
              <motion.div
                className="inline-block w-full max-w-md sm:max-w-lg lg:max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 rounded-3xl shadow-2xl border border-gray-800 text-white"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <div className="text-left text-gray-300 space-y-6 max-h-[65vh] overflow-y-auto pr-3">
                  <div className="flex items-center space-x-6">
                    <motion.div
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center shadow-lg">
                        {expertise.icon}
                      </div>
                    </motion.div>
                    <Dialog.Title className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                      {expertise.title}
                    </Dialog.Title>
                  </div>
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400">
                    {expertise.description}
                  </p>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                      Key Expertise
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {expertise.details.map((detail, index) => (
                        <motion.li
                          key={detail.name}
                          className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-2xl">{detail.icon}</span>
                            <span className="text-lg font-semibold text-white">
                              {detail.name}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400">
                            {detail.description}
                          </p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                <motion.button
                  className="top-4 right-10 absolute text-gray-400 hover:text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none transition-colors duration-200"
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close dialog"
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
                </motion.button>
              </motion.div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </AnimatePresence>
  );
}

export default function Component() {
  const [selectedExpertise, setSelectedExpertise] = useState<Expertise | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (expertise: Expertise) => {
    setSelectedExpertise(expertise);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExpertise(null);
  };

  return (
    <section
      id="expertise"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-black to-orange-900 overflow-hidden min-h-screen flex flex-col items-center justify-center"
    >
      <HexagonBackground />

      <motion.div
        className="relative z-10 text-center mb-10 sm:mb-16 px-4 sm:px-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h4
          className="uppercase text-sm sm:text-base text-orange-500 font-semibold tracking-widest mb-3 sm:mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Cutting-Edge Expertise
        </motion.h4>
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Our Expertise
        </motion.h2>
        <motion.div
          className="w-16 sm:w-24 h-1 bg-orange-500 mx-auto mb-4 sm:mb-6 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.p
          className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl sm:max-w-3xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          The Cutting-Edge Tools and Techniques We Use to Craft Your Perfect
          Escape Experience
        </motion.p>
      </motion.div>

      <motion.div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 mx-4 lg:mx-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        {expertiseData.map((expertise, index) => (
          <ExpertiseCard
            key={expertise.title}
            expertise={expertise}
            index={index}
            onClick={openModal}
          />
        ))}
      </motion.div>

      <ExpertiseModal
        isOpen={isModalOpen}
        onClose={closeModal}
        expertise={selectedExpertise}
      />
    </section>
  );
}
