"use client";

import { Card, CardProps } from "@/components/ui/card";
import { motion } from "framer-motion";

interface AnimatedCardProps extends CardProps {
  children?: React.ReactNode; // Ensure children is part of the props
  delay?: number;
}

export function AnimatedCard({
  children,
  delay = 0,
  ...props
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card {...props}>{children}</Card>
    </motion.div>
  );
}
