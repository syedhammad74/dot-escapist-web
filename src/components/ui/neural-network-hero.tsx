"use client";

import React from "react";
import { motion } from "framer-motion";

const NeuralNetworkHero: React.FC = () => {
  // Define node positions for a balanced neural network layout
  const nodes = [
    { id: 1, x: "20%", y: "25%", delay: 0 },
    { id: 2, x: "35%", y: "15%", delay: 0.2 },
    { id: 3, x: "50%", y: "30%", delay: 0.4 },
    { id: 4, x: "65%", y: "20%", delay: 0.6 },
    { id: 5, x: "80%", y: "35%", delay: 0.8 },
    { id: 6, x: "25%", y: "45%", delay: 1.0 },
    { id: 7, x: "40%", y: "55%", delay: 1.2 },
    { id: 8, x: "55%", y: "45%", delay: 1.4 },
    { id: 9, x: "70%", y: "50%", delay: 1.6 },
    { id: 10, x: "85%", y: "60%", delay: 1.8 },
  ];

  // Define connections between nodes
  const connections = [
    { from: 1, to: 2 },
    { from: 1, to: 6 },
    { from: 2, to: 3 },
    { from: 2, to: 7 },
    { from: 3, to: 4 },
    { from: 3, to: 8 },
    { from: 4, to: 5 },
    { from: 4, to: 9 },
    { from: 5, to: 10 },
    { from: 6, to: 7 },
    { from: 7, to: 8 },
    { from: 8, to: 9 },
    { from: 9, to: 10 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 5 },
    { from: 6, to: 8 },
    { from: 7, to: 9 },
  ];

  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-500/5 via-sage-400/3 to-transparent rounded-3xl" />
      
      {/* Neural Network Container */}
      <div className="relative w-full h-full">
        {/* Connection Lines */}
        {connections.map((connection, index) => {
          const fromNode = nodes.find(n => n.id === connection.from);
          const toNode = nodes.find(n => n.id === connection.to);
          
          if (!fromNode || !toNode) return null;

          return (
            <motion.div
              key={`connection-${index}`}
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
            >
              {/* Static connection line */}
              <div
                className="absolute bg-gradient-to-r from-forest-500/20 to-sage-400/20 h-px"
                style={{
                  left: fromNode.x,
                  top: fromNode.y,
                  width: `calc(${toNode.x} - ${fromNode.x})`,
                  transform: `rotate(${Math.atan2(
                    parseFloat(toNode.y) - parseFloat(fromNode.y),
                    parseFloat(toNode.x) - parseFloat(fromNode.x)
                  ) * 180 / Math.PI}deg)`,
                  transformOrigin: '0 0',
                }}
              />
              
              {/* Animated data flow */}
              <motion.div
                className="absolute h-0.5 bg-gradient-to-r from-forest-400 via-sage-300 to-forest-400 rounded-full"
                style={{
                  left: fromNode.x,
                  top: fromNode.y,
                  width: `calc(${toNode.x} - ${fromNode.x})`,
                  transform: `rotate(${Math.atan2(
                    parseFloat(toNode.y) - parseFloat(fromNode.y),
                    parseFloat(toNode.x) - parseFloat(fromNode.x)
                  ) * 180 / Math.PI}deg)`,
                  transformOrigin: '0 0',
                }}
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3 + Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          );
        })}

        {/* Neural Nodes */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute"
            style={{ left: node.x, top: node.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: node.delay }}
          >
            {/* Node Core */}
            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: node.delay,
                ease: "easeInOut",
              }}
            >
              {/* Outer ring */}
              <motion.div
                className="absolute -inset-3 rounded-full border border-forest-500/30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: node.delay + 1,
                  ease: "easeInOut",
                }}
              />
              
              {/* Middle ring */}
              <motion.div
                className="absolute -inset-2 rounded-full border border-sage-400/40"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.2, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: node.delay + 0.5,
                  ease: "easeInOut",
                }}
              />
              
              {/* Inner core */}
              <motion.div
                className="w-4 h-4 rounded-full bg-gradient-to-br from-forest-400 to-sage-300 shadow-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 10px rgba(35, 83, 71, 0.3)",
                    "0 0 20px rgba(35, 83, 71, 0.6)",
                    "0 0 10px rgba(35, 83, 71, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: node.delay,
                  ease: "easeInOut",
                }}
              />
              
              {/* Data particles */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  delay: node.delay,
                  ease: "linear",
                }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-sage-300 rounded-full"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `rotate(${i * 120}deg) translateY(-8px)`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: node.delay + i * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}

        {/* Floating data streams */}
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={`stream-${index}`}
            className="absolute w-1 h-8 bg-gradient-to-b from-forest-400/60 via-sage-300/80 to-transparent rounded-full"
            style={{
              left: `${20 + index * 15}%`,
              top: `${30 + index * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scaleY: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              delay: index * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Ambient glow effects */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-forest-500/10 to-sage-400/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-sage-400/10 to-forest-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </div>
  );
};

export default NeuralNetworkHero; 