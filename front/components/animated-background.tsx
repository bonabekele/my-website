"use client";

import { useThemeStore } from "@/lib/store";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const colors = [
  "hsl(330, 70%, 50%)",
  "hsl(280, 70%, 50%)",
  "hsl(230, 70%, 50%)",
  "hsl(180, 70%, 50%)",
  "hsl(130, 70%, 50%)",
];

export function AnimatedBackground() {
  const controls = useAnimation();
  const setPrimaryColor = useThemeStore((state) => state.setPrimaryColor);

  useEffect(() => {
    let colorIndex = 0;

    const interval = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
      const color = colors[colorIndex];

      controls.start({
        backgroundColor: color,
        transition: { duration: 2, ease: "easeInOut" },
      });

      setPrimaryColor(color);
    }, 60000);

    return () => clearInterval(interval);
  }, [controls, setPrimaryColor]);

  return (
    <motion.div
      className="fixed inset-0 -z-10 opacity-10"
      animate={controls}
      initial={{ backgroundColor: colors[0] }}
    />
  );
}
