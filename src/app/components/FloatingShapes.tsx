"use client";

import { motion, useReducedMotion } from "motion/react";
import { IconCrescent, IconStarFilled } from "./icons";

export default function FloatingShapes() {
  const reduceMotion = useReducedMotion();

  const stars = [
    { className: "left-[7%] top-[16%] h-6 w-6 text-[var(--yellow)]", delay: 0 },
    { className: "right-[10%] top-[14%] h-8 w-8 text-[var(--pink)]", delay: 0.6 },
    { className: "left-[15%] bottom-[18%] h-5 w-5 text-[var(--mint-dark)]", delay: 1.2 },
    { className: "right-[22%] bottom-[12%] h-7 w-7 text-[var(--yellow)]", delay: 1.8 },
    { className: "left-[45%] top-[8%] h-4 w-4 text-[var(--pink)]", delay: 2.4 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Halos pastel */}
      <motion.div
        className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-[var(--pink-soft)] opacity-45 blur-3xl"
        animate={reduceMotion ? {} : { scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-[var(--mint-soft)] opacity-55 blur-3xl"
        animate={reduceMotion ? {} : { scale: [1, 1.12, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[var(--yellow-soft)] opacity-45 blur-3xl"
        animate={reduceMotion ? {} : { scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Croissant de lune */}
      <motion.div
        className="absolute right-[8%] top-[42%] hidden text-[var(--yellow)] opacity-70 md:block"
        animate={reduceMotion ? {} : { y: [0, -14, 0], rotate: [-8, 2, -8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <IconCrescent className="h-14 w-14 drop-shadow-[0_6px_16px_rgba(255,215,94,0.5)]" />
      </motion.div>

      {/* Étoiles scintillantes */}
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className={`absolute ${star.className}`}
          animate={
            reduceMotion
              ? {}
              : { opacity: [0.3, 0.9, 0.3], scale: [0.9, 1.1, 0.9] }
          }
          transition={{
            duration: 4.5 + index * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        >
          <IconStarFilled className="h-full w-full" />
        </motion.div>
      ))}
    </div>
  );
}
