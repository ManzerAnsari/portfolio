import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 700,
    damping: 18,
    mass: 0.4,
  });

  const springY = useSpring(mouseY, {
    stiffness: 700,
    damping: 18,
    mass: 0.4,
  });

  const ringX = useSpring(mouseX, {
    stiffness: 300,
    damping: 14,
    mass: 0.6,
  });

  const ringY = useSpring(mouseY, {
    stiffness: 300,
    damping: 14,
    mass: 0.6,
  });

  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handlePointer = (e) => {
      const target = e.target;
      setIsPointer(
        target.closest("a, button, [data-cursor='pointer']")
      );
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handlePointer);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handlePointer);
    };
  }, []);

  return (
    <>
      {/* Core dot */}
      <motion.div
        className="fixed w-3 h-3 bg-accent-cyan rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed w-10 h-10 border-2 border-accent-purple rounded-full pointer-events-none z-50"
        animate={{ scale: isPointer ? 1.6 : 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 12,
        }}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

export default Cursor;