"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import FloatingShapes from "./FloatingShapes";
import {
  IconArrowRight,
  IconCheck,
  IconCrescent,
  IconSparkle,
  IconStarFilled,
} from "./icons";

const EASE = [0.22, 1, 0.36, 1] as const;

const reassurances = ["Sans laisser pleurer", "À ton rythme", "Accès personnel"];

const titleWords = ["Des", "nuits", "plus", "douces", "commencent", "par", "la"];

const leftContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const titleContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const listContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};

const word: Variants = {
  hidden: { y: "115%", opacity: 0, filter: "blur(8px)" },
  show: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE },
  },
};

function MaskWord({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className="inline-block overflow-hidden pb-[0.14em] align-bottom mb-[-0.14em]">
      <motion.span variants={word} className={`inline-block ${className}`}>
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax au scroll
  const shapesY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const rawCardY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const cardY = useSpring(rawCardY, { stiffness: 120, damping: 30, mass: 0.4 });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  // Parallax à la souris (tilt 3D)
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const springCfg = { stiffness: 150, damping: 18, mass: 0.3 };
  const rotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [9, -9]),
    springCfg
  );
  const rotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-13, 13]),
    springCfg
  );
  const badgeX = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [22, -22]),
    springCfg
  );
  const badgeY = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [16, -16]),
    springCfg
  );
  const badgeXInv = useTransform(badgeX, (v) => -v);
  const badgeYInv = useTransform(badgeY, (v) => -v);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  const initial = reduceMotion ? "show" : "hidden";

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <motion.div style={reduceMotion ? undefined : { y: shapesY }}>
        <FloatingShapes />
      </motion.div>

      {/* Aurore lumineuse qui s'ouvre au chargement */}
      {!reduceMotion && (
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: EASE }}
          className="pointer-events-none absolute left-1/2 top-[-10%] -z-[5] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-70 blur-3xl spin-slow"
          style={{
            background:
              "conic-gradient(from 90deg, rgba(255,120,150,0.22), rgba(139,230,200,0.22), rgba(255,215,94,0.22), rgba(255,120,150,0.22))",
          }}
        />
      )}

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-90px)] max-w-7xl items-center gap-14 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ——— Colonne texte ——— */}
        <motion.div
          variants={leftContainer}
          initial={initial}
          animate="show"
          style={reduceMotion ? undefined : { y: textY }}
        >
          <motion.p
            variants={item}
            className="eyebrow rounded-full border border-[var(--border)] bg-[var(--white)]/80 px-4 py-2 shadow-sm backdrop-blur"
          >
            <IconCrescent className="h-3.5 w-3.5" />
            Préparations sommeil pour mamans
          </motion.p>

          <motion.h1
            variants={titleContainer}
            className="font-display mt-8 max-w-2xl text-balance text-5xl font-bold leading-[1.06] text-[var(--text)] md:text-[4.4rem]"
          >
            {titleWords.map((w) => (
              <MaskWord key={w}>{w}&nbsp;</MaskWord>
            ))}
            <span className="inline-block overflow-hidden pb-[0.14em] align-bottom mb-[-0.14em]">
              <motion.em
                variants={word}
                initial={reduceMotion ? undefined : { backgroundSize: "0% 0.3em" }}
                animate={reduceMotion ? undefined : { backgroundSize: "100% 0.3em" }}
                transition={{ delay: 1.15, duration: 0.7, ease: EASE }}
                className="underline-swash not-italic inline-block"
              >
                compréhension.
              </motion.em>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg font-medium leading-8 text-[var(--muted)]"
          >
            Ukhtakaful propose des formations simples, rassurantes et
            bienveillantes pour comprendre le sommeil de bébé, ses réveils, ses
            besoins et avancer sans méthode brutale.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/formations" className="btn btn-pink group">
              Voir les formations
              <IconArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link href="/accompagnements" className="btn btn-outline">
              Être accompagnée
            </Link>
          </motion.div>

          <motion.ul
            variants={listContainer}
            className="mt-10 flex flex-wrap gap-x-7 gap-y-3"
          >
            {reassurances.map((label) => (
              <motion.li
                key={label}
                variants={item}
                className="flex items-center gap-2 text-sm font-bold text-[var(--muted)]"
              >
                <span className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-[var(--mint-soft)] text-[var(--mint-dark)]">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                {label}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* ——— Colonne visuelle ——— */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 44 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
          style={reduceMotion ? undefined : { y: cardY }}
          className="relative mx-auto w-full max-w-md"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
        >
          <div
            aria-hidden
            className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-[var(--yellow)] opacity-60 blur-2xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-[var(--mint)] opacity-40 blur-2xl"
          />

          <motion.div
            initial={
              reduceMotion ? undefined : { scale: 0.9, filter: "blur(12px)", rotate: 4 }
            }
            animate={
              reduceMotion ? undefined : { scale: 1, filter: "blur(0px)", rotate: 1.5 }
            }
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
            style={
              reduceMotion
                ? undefined
                : {
                    rotateX,
                    rotateY,
                    transformPerspective: 1000,
                    transformStyle: "preserve-3d",
                  }
            }
            className="pastel-shadow relative overflow-hidden rounded-[2.8rem] border border-white/80 bg-[var(--white)]/85 p-7 backdrop-blur"
          >
            {/* Reflet qui balaie la carte au chargement */}
            {!reduceMotion && (
              <motion.div
                aria-hidden
                initial={{ x: "-130%" }}
                animate={{ x: "160%" }}
                transition={{ delay: 1.1, duration: 1.1, ease: EASE }}
                className="pointer-events-none absolute inset-y-0 z-20 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/55 to-transparent"
              />
            )}

            <div className="rounded-[2rem] bg-gradient-to-b from-[var(--cream-2)] to-[var(--pink-soft)]/40 p-6">
              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/logo.png"
                  alt="Logo Ukhtakaful"
                  width={340}
                  height={340}
                  className="mx-auto h-auto w-4/5 object-contain drop-shadow-[0_16px_30px_rgba(53,43,53,0.12)]"
                  priority
                />
              </motion.div>
            </div>

            <div className="mt-5 rounded-[1.8rem] bg-[var(--white)] p-6 shadow-sm ring-1 ring-[var(--border)]">
              <p className="eyebrow">Mieux comprendre pour mieux dormir</p>

              <p className="font-display mt-3 text-2xl font-bold leading-snug text-[var(--text)]">
                Des modules doux, clairs et rassurants.
              </p>

              <p className="mt-3 text-sm font-medium leading-7 text-[var(--muted)]">
                Réveils nocturnes, allaitement, rythme, siestes, besoins de
                proximité et ajustements progressifs.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? undefined : { scale: 0, rotate: -40 }}
            animate={reduceMotion ? undefined : { scale: 1, rotate: 0 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 220, damping: 12 }}
            style={reduceMotion ? undefined : { x: badgeX, y: badgeY }}
            className="absolute -right-6 top-10"
          >
            <span className="float-soft flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--yellow)] text-[var(--text)] shadow-lg">
              <IconStarFilled className="h-7 w-7" />
            </span>
          </motion.div>

          <motion.div
            initial={reduceMotion ? undefined : { scale: 0, rotate: 40 }}
            animate={reduceMotion ? undefined : { scale: 1, rotate: 0 }}
            transition={{ delay: 1.05, type: "spring", stiffness: 220, damping: 12 }}
            style={reduceMotion ? undefined : { x: badgeXInv, y: badgeYInv }}
            className="absolute -left-7 bottom-24"
          >
            <span
              className="float-soft flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--mint)] text-[var(--text)] shadow-lg"
              style={{ animationDelay: "1.4s" }}
            >
              <IconSparkle className="h-7 w-7" />
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Indice de scroll */}
      {!reduceMotion && (
        <motion.div
          aria-hidden
          style={{ opacity: cueOpacity }}
          className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-11 w-7 items-start justify-center rounded-full border-2 border-[var(--border)] bg-[var(--white)]/70 p-1.5 backdrop-blur"
          >
            <span className="h-2 w-1.5 rounded-full bg-[var(--pink)]" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
