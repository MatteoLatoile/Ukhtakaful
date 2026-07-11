"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Formation } from "@/lib/formations";
import { IconArrowRight, IconFeather, IconHeart, IconMoon } from "./icons";

const styles: Record<
  Formation["slug"],
  { icon: typeof IconMoon; iconBg: string; iconColor: string; halo: string }
> = {
  "reveils-nocturnes": {
    icon: IconMoon,
    iconBg: "bg-[var(--pink-soft)]",
    iconColor: "text-[var(--pink-dark)]",
    halo: "bg-[var(--pink-soft)]",
  },
  "allaitement-sommeil": {
    icon: IconHeart,
    iconBg: "bg-[var(--mint-soft)]",
    iconColor: "text-[var(--mint-dark)]",
    halo: "bg-[var(--mint-soft)]",
  },
  "sevrage-nocturne": {
    icon: IconFeather,
    iconBg: "bg-[var(--yellow-soft)]",
    iconColor: "text-[#b8912a]",
    halo: "bg-[var(--yellow-soft)]",
  },
};

export default function FormationCard({
  formation,
}: {
  formation: Formation;
}) {
  const style = styles[formation.slug];
  const Icon = style.icon;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--white)] p-7 shadow-[0_16px_45px_rgba(53,43,53,0.07)] transition-shadow hover:shadow-[0_28px_65px_rgba(53,43,53,0.12)]"
    >
      <div
        aria-hidden
        className={`absolute -right-14 -top-14 h-36 w-36 rounded-full opacity-70 blur-2xl transition-transform duration-500 group-hover:scale-125 ${style.halo}`}
      />

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <span
            className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.iconBg} ${style.iconColor}`}
          >
            <Icon className="h-7 w-7" />
          </span>

          <span className="rounded-full bg-[var(--cream)] px-3.5 py-1.5 text-xs font-black text-[var(--muted)]">
            {formation.modules.length} modules
          </span>
        </div>

        <h3 className="font-display mt-6 text-2xl font-bold leading-snug text-[var(--text)]">
          {formation.title}
        </h3>

        <p className="mt-3 flex-1 text-sm font-medium leading-7 text-[var(--muted)]">
          {formation.description}
        </p>

        <div className="mt-7 flex items-center justify-between gap-4 border-t border-dashed border-[var(--border)] pt-5">
          <p className="font-display text-2xl font-bold text-[var(--text)]">
            {formation.price}
          </p>

          <Link
            href={`/formations/${formation.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--text)] py-2.5 pl-5 pr-4 text-sm font-black text-white transition group-hover:bg-[var(--pink-dark)]"
          >
            Découvrir
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
