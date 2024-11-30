"use client";

import React, { useState } from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

// Define Product interface to match the HeroParallax expectations
interface Product {
  id: number;
  title: string;
  link: string;
  thumbnail: string;
  description: string;
  features: string[];
  technologies: string[];
  startDate: string;
  endDate: string;
  status: "Completed" | "In Progress" | "Planned";
}

export default function HeroParallaxDemo() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleThumbnailClick = (product: Product) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div id="work">
      <HeroParallax
        products={products} // Pass the products array here
      />
    </div>
  );
}

export const products: Product[] = [
  {
    id: 1,
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    description:
      "A versatile product designed to help you build amazing projects.",
    features: [
      "Feature 1: Cross-platform integration.",
      "Feature 2: Real-time analytics.",
    ],
    technologies: ["JavaScript", "React", "Node.js"],
    startDate: "2023-01-01",
    endDate: "2023-06-01",
    status: "Completed",
  },
  {
    id: 2,
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    description: "Cursor helps you navigate complex projects efficiently.",
    features: [
      "Feature 1: Interactive tutorials.",
      "Feature 2: Lightweight and responsive.",
    ],
    technologies: ["Python", "Django"],
    startDate: "2023-03-01",
    endDate: "2023-07-01",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    description: "Rogue is designed for developers to explore and innovate.",
    features: [
      "Feature 1: Real-time multi-user support.",
      "Feature 2: Advanced security features.",
    ],
    technologies: ["Ruby on Rails", "PostgreSQL"],
    startDate: "2023-04-01",
    endDate: "2023-08-01",
    status: "Planned",
  },
  {
    id: 4,
    title: "Nimbus",
    link: "https://nimbusapp.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/nimbus.png",
    description: "Nimbus helps you organize your notes and projects.",
    features: [
      "Feature 1: Cloud synchronization.",
      "Feature 2: Note sharing capabilities.",
    ],
    technologies: ["Vue.js", "Firebase"],
    startDate: "2023-05-01",
    endDate: "2023-09-01",
    status: "In Progress",
  },
  {
    id: 5,
    title: "Aether",
    link: "https://getaether.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aether.png",
    description: "Aether is a project management tool with real-time updates.",
    features: [
      "Feature 1: Real-time collaboration.",
      "Feature 2: Task management dashboard.",
    ],
    technologies: ["Angular", "Express.js"],
    startDate: "2023-02-15",
    endDate: "2023-07-15",
    status: "Completed",
  },
  {
    id: 6,
    title: "Spark",
    link: "https://getspark.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/spark.png",
    description: "Spark is an email client for productivity enthusiasts.",
    features: [
      "Feature 1: Smart inbox organization.",
      "Feature 2: Email scheduling.",
    ],
    technologies: ["Swift", "Kotlin"],
    startDate: "2023-06-01",
    endDate: "2023-10-01",
    status: "In Progress",
  },
  {
    id: 7,
    title: "Zenith",
    link: "https://zenithtools.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/zenith.png",
    description: "Zenith helps you track productivity with ease.",
    features: [
      "Feature 1: Time tracking.",
      "Feature 2: Daily productivity reports.",
    ],
    technologies: ["React Native", "Node.js"],
    startDate: "2023-07-01",
    endDate: "2023-11-01",
    status: "Planned",
  },
  {
    id: 8,
    title: "Orbit",
    link: "https://orbitapp.io",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/orbit.png",
    description:
      "Orbit allows you to manage customer relationships effectively.",
    features: [
      "Feature 1: Customer segmentation.",
      "Feature 2: Lead tracking.",
    ],
    technologies: ["PHP", "Laravel", "MySQL"],
    startDate: "2023-08-01",
    endDate: "2023-12-01",
    status: "In Progress",
  },
  {
    id: 9,
    title: "Pulse",
    link: "https://getpulse.io",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pulse.png",
    description:
      "Pulse helps you monitor your website's health and performance.",
    features: [
      "Feature 1: Uptime monitoring.",
      "Feature 2: Performance metrics.",
    ],
    technologies: ["Golang", "Grafana"],
    startDate: "2023-09-01",
    endDate: "2024-01-01",
    status: "Planned",
  },
  {
    id: 10,
    title: "Flare",
    link: "https://flaretools.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/flare.png",
    description: "Flare provides tools to enhance your team's communication.",
    features: [
      "Feature 1: Real-time messaging.",
      "Feature 2: Video conferencing support.",
    ],
    technologies: ["JavaScript", "Socket.IO", "WebRTC"],
    startDate: "2023-03-15",
    endDate: "2023-08-15",
    status: "Completed",
  },
  {
    id: 11,
    title: "Vortex",
    link: "https://vortexsuite.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/vortex.png",
    description: "Vortex is a suite of developer tools for cloud services.",
    features: [
      "Feature 1: Cloud integration testing.",
      "Feature 2: API monitoring.",
    ],
    technologies: ["Python", "Flask", "AWS"],
    startDate: "2023-04-01",
    endDate: "2023-09-01",
    status: "In Progress",
  },
  {
    id: 12,
    title: "Prism",
    link: "https://prismdesign.io",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/prism.png",
    description: "Prism helps designers collaborate on projects visually.",
    features: [
      "Feature 1: Real-time design feedback.",
      "Feature 2: Collaborative drawing tools.",
    ],
    technologies: ["JavaScript", "HTML5 Canvas", "Node.js"],
    startDate: "2023-05-01",
    endDate: "2023-10-01",
    status: "Planned",
  },
  {
    id: 13,
    title: "Nova",
    link: "https://novaplatform.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/nova.png",
    description: "Nova provides a platform for building and scaling web apps.",
    features: [
      "Feature 1: Full-stack deployment.",
      "Feature 2: Serverless support.",
    ],
    technologies: ["Next.js", "Firebase"],
    startDate: "2023-06-15",
    endDate: "2023-11-15",
    status: "In Progress",
  },
  {
    id: 14,
    title: "Phoenix",
    link: "https://phoenixlabs.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/phoenix.png",
    description: "Phoenix is an automation tool for testing workflows.",
    features: [
      "Feature 1: Automated testing scripts.",
      "Feature 2: Integration with CI/CD pipelines.",
    ],
    technologies: ["Python", "Selenium", "Jenkins"],
    startDate: "2023-07-01",
    endDate: "2023-12-01",
    status: "Planned",
  },
  {
    id: 15,
    title: "Luna",
    link: "https://lunatech.io",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/luna.png",
    description: "Luna is an AI assistant for boosting productivity.",
    features: [
      "Feature 1: Natural language understanding.",
      "Feature 2: Automated task management.",
    ],
    technologies: ["Python", "TensorFlow", "Keras"],
    startDate: "2023-08-15",
    endDate: "2024-01-15",
    status: "In Progress",
  },
  {
    id: 16,
    title: "Titan",
    link: "https://titansuite.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/titan.png",
    description:
      "Titan offers a comprehensive suite for enterprise resource planning.",
    features: [
      "Feature 1: Inventory management.",
      "Feature 2: Financial tracking.",
    ],
    technologies: ["Java", "Spring Boot", "Oracle DB"],
    startDate: "2023-09-01",
    endDate: "2024-03-01",
    status: "Planned",
  },
  {
    id: 17,
    title: "Blaze",
    link: "https://blazetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/blaze.png",
    description: "Blaze is a powerful tool for managing marketing campaigns.",
    features: [
      "Feature 1: Campaign analytics.",
      "Feature 2: Social media integration.",
    ],
    technologies: ["JavaScript", "MongoDB", "Express.js"],
    startDate: "2023-10-01",
    endDate: "2024-02-01",
    status: "In Progress",
  },
];
