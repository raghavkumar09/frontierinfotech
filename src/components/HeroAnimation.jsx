import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse move to update the position
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-screen w-full flex justify-center items-center bg-gray-100">
      <motion.div
        className="absolute w-24 h-24 bg-purple-600 rounded-full shadow-lg"
        style={{
          left: mousePosition.x - 50, // Center the sphere on the cursor
          top: mousePosition.y - 50,
        }}
        animate={{
          rotate: [0, 360], // Rotation animation
        }}
        transition={{
          repeat: Infinity, // Loop the animation
          duration: 3, // Time to complete a full rotation
          ease: "linear", // Smooth animation
        }}
      />
    </div>
  );
}
