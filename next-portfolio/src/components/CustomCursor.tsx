"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", mouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", mouseOver);
    };
  }, []);

  // Generate an array for the trailing elements
  const trailCount = 5;
  const trailDots = Array.from({ length: trailCount });

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] mix-blend-difference bg-white"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
          opacity: mousePosition.x === 0 && mousePosition.y === 0 ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {/* Trailing Dots */}
      {trailDots.map((_, index) => {
        // Progressively decrease size and opacity
        const size = Math.max(4, 16 - index * 3);
        const offset = size / 2;
        const opacity = isHovering ? 0 : Math.max(0.1, 0.6 - index * 0.1);
        
        return (
          <motion.div
            key={index}
            className="hidden md:block fixed top-0 left-0 rounded-full pointer-events-none z-[90] mix-blend-difference bg-white/80"
            style={{
              width: size,
              height: size,
            }}
            animate={{
              x: mousePosition.x - offset,
              y: mousePosition.y - offset,
              opacity: mousePosition.x === 0 && mousePosition.y === 0 ? 0 : opacity,
            }}
            transition={{
              type: "spring",
              // Decrease stiffness and increase damping for the "trailing" lag effect
              stiffness: 400 - index * 50,
              damping: 30 + index * 5,
              mass: 0.5 + index * 0.1,
            }}
          />
        );
      })}
    </>
  );
}
