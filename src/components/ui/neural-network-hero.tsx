"use client";

import React, { useMemo, useCallback } from "react";
import { motion } from "framer-motion";

const NeuralNetworkHero: React.FC = React.memo(() => {
  // Memoized node positions for better performance
  const nodes = useMemo(() => [
    { id: 1, x: "15%", y: "20%", delay: 0, type: "input" },
    { id: 2, x: "30%", y: "15%", delay: 0.1, type: "hidden" },
    { id: 3, x: "45%", y: "25%", delay: 0.2, type: "hidden" },
    { id: 4, x: "60%", y: "18%", delay: 0.3, type: "hidden" },
    { id: 5, x: "75%", y: "30%", delay: 0.4, type: "hidden" },
    { id: 6, x: "90%", y: "22%", delay: 0.5, type: "output" },
    { id: 7, x: "20%", y: "45%", delay: 0.6, type: "input" },
    { id: 8, x: "35%", y: "55%", delay: 0.7, type: "hidden" },
    { id: 9, x: "50%", y: "50%", delay: 0.8, type: "hidden" },
    { id: 10, x: "65%", y: "60%", delay: 0.9, type: "hidden" },
    { id: 11, x: "80%", y: "55%", delay: 1.0, type: "hidden" },
    { id: 12, x: "95%", y: "65%", delay: 1.1, type: "output" },
    { id: 13, x: "25%", y: "70%", delay: 1.2, type: "input" },
    { id: 14, x: "40%", y: "80%", delay: 1.3, type: "hidden" },
    { id: 15, x: "55%", y: "75%", delay: 1.4, type: "hidden" },
    { id: 16, x: "70%", y: "85%", delay: 1.5, type: "hidden" },
    { id: 17, x: "85%", y: "80%", delay: 1.6, type: "output" },
  ], []);

  // Memoized connections for better performance
  const connections = useMemo(() => [
    // Input layer connections
    { from: 1, to: 2, weight: 0.8, type: "strong" },
    { from: 1, to: 3, weight: 0.6, type: "medium" },
    { from: 7, to: 8, weight: 0.9, type: "strong" },
    { from: 7, to: 9, weight: 0.7, type: "medium" },
    { from: 13, to: 14, weight: 0.8, type: "strong" },
    { from: 13, to: 15, weight: 0.5, type: "weak" },
    
    // Hidden layer connections
    { from: 2, to: 4, weight: 0.7, type: "medium" },
    { from: 2, to: 5, weight: 0.8, type: "strong" },
    { from: 3, to: 4, weight: 0.6, type: "medium" },
    { from: 3, to: 5, weight: 0.9, type: "strong" },
    { from: 8, to: 10, weight: 0.8, type: "strong" },
    { from: 8, to: 11, weight: 0.7, type: "medium" },
    { from: 9, to: 10, weight: 0.6, type: "medium" },
    { from: 9, to: 11, weight: 0.8, type: "strong" },
    { from: 14, to: 16, weight: 0.7, type: "medium" },
    { from: 14, to: 17, weight: 0.8, type: "strong" },
    { from: 15, to: 16, weight: 0.6, type: "medium" },
    { from: 15, to: 17, weight: 0.9, type: "strong" },
    
    // Output layer connections
    { from: 4, to: 6, weight: 0.9, type: "strong" },
    { from: 5, to: 6, weight: 0.8, type: "strong" },
    { from: 10, to: 12, weight: 0.9, type: "strong" },
    { from: 11, to: 12, weight: 0.8, type: "strong" },
    { from: 16, to: 17, weight: 0.9, type: "strong" },
    
    // Cross connections for complexity
    { from: 2, to: 8, weight: 0.4, type: "weak" },
    { from: 3, to: 9, weight: 0.5, type: "weak" },
    { from: 4, to: 10, weight: 0.3, type: "weak" },
    { from: 5, to: 11, weight: 0.4, type: "weak" },
    { from: 8, to: 14, weight: 0.3, type: "weak" },
    { from: 9, to: 15, weight: 0.4, type: "weak" },
  ], []);

  // Memoized connection style function
  const getConnectionStyle = useCallback((weight: number, type: string) => {
    const opacity = weight * 0.8 + 0.2;
    const width = type === "strong" ? "2px" : type === "medium" ? "1px" : "0.5px";
    return { opacity, width };
  }, []);

  // Optimized animation variants
  const nodeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
  };

  const connectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <div className="relative w-full h-full min-h-[450px] lg:min-h-[550px]">
      {/* Optimized background with CSS gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-500/8 via-sage-400/5 to-transparent rounded-3xl" />
      <div className="absolute inset-0 bg-gradient-to-tl from-forest-600/6 via-transparent to-sage-500/4 rounded-3xl" />
      
      {/* Neural Network Container */}
      <div className="relative w-full h-full">
        {/* Optimized Connection Lines */}
        {connections.map((connection, index) => {
          const fromNode = nodes.find(n => n.id === connection.from);
          const toNode = nodes.find(n => n.id === connection.to);
          
          if (!fromNode || !toNode) return null;

          const connectionStyle = getConnectionStyle(connection.weight, connection.type);

          return (
            <motion.div
              key={`connection-${index}`}
              className="absolute inset-0 pointer-events-none"
              variants={connectionVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: index * 0.03 }}
            >
              {/* Static connection line with weight-based styling */}
              <div
                className="absolute bg-gradient-to-r from-forest-500/30 to-sage-400/30 rounded-full"
                style={{
                  left: fromNode.x,
                  top: fromNode.y,
                  width: `calc(${toNode.x} - ${fromNode.x})`,
                  height: connectionStyle.width,
                  transform: `rotate(${Math.atan2(
                    parseFloat(toNode.y) - parseFloat(fromNode.y),
                    parseFloat(toNode.x) - parseFloat(fromNode.x)
                  ) * 180 / Math.PI}deg)`,
                  transformOrigin: '0 0',
                  opacity: connectionStyle.opacity,
                }}
              />
              
              {/* Optimized data flow animation */}
              <motion.div
                className="absolute bg-gradient-to-r from-forest-400 via-sage-300 to-forest-400 rounded-full"
                style={{
                  left: fromNode.x,
                  top: fromNode.y,
                  width: `calc(${toNode.x} - ${fromNode.x})`,
                  height: connectionStyle.width,
                  transform: `rotate(${Math.atan2(
                    parseFloat(toNode.y) - parseFloat(fromNode.y),
                    parseFloat(toNode.x) - parseFloat(fromNode.x)
                  ) * 180 / Math.PI}deg)`,
                  transformOrigin: '0 0',
                }}
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, connectionStyle.opacity * 1.2, 0],
                }}
                transition={{
                  duration: 2 + connection.weight * 1.5,
                  repeat: Infinity,
                  delay: index * 0.1 + Math.random() * 2,
                  ease: "easeInOut",
                }}
              />

              {/* Optimized data packets - reduced count for performance */}
              {[...Array(2)].map((_, packetIndex) => (
                <motion.div
                  key={`packet-${index}-${packetIndex}`}
                  className="absolute w-1 h-1 bg-sage-200 rounded-full"
                  style={{
                    left: fromNode.x,
                    top: fromNode.y,
                    transform: `rotate(${Math.atan2(
                      parseFloat(toNode.y) - parseFloat(fromNode.y),
                      parseFloat(toNode.x) - parseFloat(fromNode.x)
                    ) * 180 / Math.PI}deg)`,
                    transformOrigin: '0 0',
                  }}
                  animate={{
                    x: [0, `calc(${toNode.x} - ${fromNode.x})`],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2.5 + connection.weight * 1.5,
                    repeat: Infinity,
                    delay: index * 0.2 + packetIndex * 0.3 + Math.random() * 1.5,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          );
        })}

        {/* Optimized Neural Nodes */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute"
            style={{ left: node.x, top: node.y }}
            variants={nodeVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: node.delay, type: "spring", stiffness: 100 }}
          >
            {/* Node Container */}
            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: node.delay,
                ease: "easeInOut",
              }}
            >
              {/* Optimized outer rings - reduced count for performance */}
              {[...Array(2)].map((_, ringIndex) => (
                <motion.div
                  key={`ring-${node.id}-${ringIndex}`}
                  className={`absolute rounded-full border ${
                    ringIndex === 0 ? "border-forest-500/40" : "border-sage-400/30"
                  }`}
                  style={{
                    inset: `-${(ringIndex + 1) * 2}px`,
                  }}
                  animate={{
                    scale: [1, 1.15 + ringIndex * 0.05, 1],
                    opacity: [0.3 - ringIndex * 0.1, 0.1 - ringIndex * 0.05, 0.3 - ringIndex * 0.1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2.5 + ringIndex * 0.3,
                    repeat: Infinity,
                    delay: node.delay + ringIndex * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
              
              {/* Node core with type-based styling */}
              <motion.div
                className={`w-5 h-5 rounded-full shadow-lg ${
                  node.type === "input" ? "bg-gradient-to-br from-emerald-400 to-green-500" :
                  node.type === "output" ? "bg-gradient-to-br from-blue-400 to-indigo-500" :
                  "bg-gradient-to-br from-forest-400 to-sage-300"
                }`}
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    `0 0 12px ${node.type === "input" ? "rgba(16, 185, 129, 0.4)" : 
                    node.type === "output" ? "rgba(59, 130, 246, 0.4)" : 
                    "rgba(35, 83, 71, 0.4)"}`,
                    `0 0 20px ${node.type === "input" ? "rgba(16, 185, 129, 0.6)" : 
                    node.type === "output" ? "rgba(59, 130, 246, 0.6)" : 
                    "rgba(35, 83, 71, 0.6)"}`,
                    `0 0 12px ${node.type === "input" ? "rgba(16, 185, 129, 0.4)" : 
                    node.type === "output" ? "rgba(59, 130, 246, 0.4)" : 
                    "rgba(35, 83, 71, 0.4)"}`,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: node.delay,
                  ease: "easeInOut",
                }}
              />

              {/* Inner core dot */}
              <motion.div
                className="absolute inset-1 bg-white rounded-full opacity-80"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: node.delay + 0.3,
                  ease: "easeInOut",
                }}
              />
              
              {/* Optimized data particles - reduced orbits for performance */}
              {[...Array(2)].map((_, orbitIndex) => (
                <motion.div
                  key={`orbit-${node.id}-${orbitIndex}`}
                  className="absolute inset-0"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 12 + orbitIndex * 3,
                    repeat: Infinity,
                    delay: node.delay + orbitIndex * 0.3,
                    ease: "linear",
                  }}
                >
                  {[...Array(3)].map((_, particleIndex) => (
                    <motion.div
                      key={`particle-${node.id}-${orbitIndex}-${particleIndex}`}
                      className={`absolute w-1 h-1 rounded-full ${
                        orbitIndex === 0 ? "bg-sage-200" : "bg-forest-200"
                      }`}
                      style={{
                        left: "50%",
                        top: "50%",
                        transform: `rotate(${particleIndex * 120}deg) translateY(-${6 + orbitIndex * 2}px)`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: 1.5 + orbitIndex * 0.3,
                        repeat: Infinity,
                        delay: node.delay + orbitIndex * 0.2 + particleIndex * 0.15,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>
              ))}

              {/* Node type indicator */}
              <motion.div
                className={`absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium ${
                  node.type === "input" ? "text-emerald-500" :
                  node.type === "output" ? "text-blue-500" :
                  "text-forest-500"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: node.delay + 0.8 }}
              >
                {node.type.toUpperCase()}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}

        {/* Optimized floating data streams - reduced count */}
        {[...Array(4)].map((_, index) => (
          <motion.div
            key={`stream-${index}`}
            className="absolute w-0.5 h-10 bg-gradient-to-b from-forest-400/70 via-sage-300/90 to-transparent rounded-full"
            style={{
              left: `${20 + index * 15}%`,
              top: `${30 + index * 12}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.8, 0.2],
              scaleY: [0.3, 1.3, 0.3],
            }}
            transition={{
              duration: 4 + index * 0.2,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Optimized data clusters - reduced count */}
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={`cluster-${index}`}
            className="absolute"
            style={{
              left: `${25 + index * 20}%`,
              top: `${40 + index * 15}%`,
            }}
            animate={{
              x: [0, 15, 0],
              y: [0, -10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6 + index * 0.5,
              repeat: Infinity,
              delay: index * 0.6,
              ease: "easeInOut",
            }}
          >
            {[...Array(2)].map((_, dotIndex) => (
              <motion.div
                key={`dot-${index}-${dotIndex}`}
                className="absolute w-1 h-1 bg-sage-300 rounded-full"
                style={{
                  left: `${dotIndex * 3}px`,
                  top: `${dotIndex * 3}px`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.15 + dotIndex * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        ))}

        {/* Optimized ambient glow effects - reduced count */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-forest-500/12 to-sage-400/12 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.5, 0.15],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-sage-400/12 to-forest-500/12 rounded-full blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.4, 0.1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Neural network grid overlay */}
        <div className="absolute inset-0 opacity-3">
          <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(35,83,71,0.2)_1px,transparent_0)] bg-[length:25px_25px]" />
        </div>
      </div>
    </div>
  );
});

NeuralNetworkHero.displayName = 'NeuralNetworkHero';

export default NeuralNetworkHero; 