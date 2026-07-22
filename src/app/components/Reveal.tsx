"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealVariant = "up" | "scale" | "left" | "right" | "blur";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
};

const EASE = [0.22, 1, 0.36, 1] as const;

const hiddenByVariant: Record<RevealVariant, Record<string, number | string>> = {
  up: { opacity: 0, y: 34, filter: "blur(10px)" },
  scale: { opacity: 0, y: 20, scale: 0.94, filter: "blur(10px)" },
  left: { opacity: 0, x: -40, filter: "blur(10px)" },
  right: { opacity: 0, x: 40, filter: "blur(10px)" },
  blur: { opacity: 0, filter: "blur(16px)", scale: 1.02 },
};

export default function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: hiddenByVariant[variant],
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, delay, ease: EASE },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-90px" }}
    >
      {children}
    </motion.div>
  );
}
