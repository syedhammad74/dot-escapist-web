import { useRef, useEffect } from "react";

const NeuralNetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId: number;

    const nodes: Array<{
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
    }> = [];

    const createNodes = () => {
      nodes.length = 0;
      const nodeCount = 200; // Set node count between 80 to 150 for balanced visual appearance
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 2, // Fixed radius for a consistent look
          dx: (Math.random() - 0.5) * 0.9, // Subtle movement for a natural effect
          dy: (Math.random() - 0.5) * 0.1,
        });
      }
    };

    const updateNodes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update each node position
      nodes.forEach((node) => {
        node.x += node.dx;
        node.y += node.dy;

        // Bounce off the edges
        if (node.x < 0 || node.x > canvas.width) node.dx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.dy *= -1;

        // Draw nodes
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 3);
        ctx.fillStyle = "rgba(255, 140, 0, 0.9)"; // Consistent orange color
        ctx.fill();
      });

      // Draw connections between nodes
      nodes.forEach((nodeA, i) => {
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            // Moderate connection distance for a balanced network
            const alpha = 1 - distance / 100; // Vary opacity based on distance
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(255, 140, 0, ${alpha * 0.5})`; // Smooth fading effect for connections
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(updateNodes);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createNodes();
      updateNodes();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
};

export default NeuralNetworkBackground;
