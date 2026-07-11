"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const labels: Record<string, string> = {
  formations: "Formations",
  accompagnements: "Accompagnements",
  "a-propos": "À propos",
  contact: "Contact",
  acces: "Accès",
  modules: "Modules",

  "reveils-nocturnes": "Réveils nocturnes",
  "allaitement-sommeil": "Allaitement & sommeil",
  "sevrage-nocturne": "Sevrage nocturne",
};

function formatSegment(segment: string) {
  if (labels[segment]) {
    return labels[segment];
  }

  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Breadcrumb() {
  const pathname = usePathname();

  const crumbs = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);

    return segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`;

      return {
        label: formatSegment(segment),
        href,
        isLast: index === segments.length - 1,
      };
    });
  }, [pathname]);

  if (pathname === "/" || crumbs.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Fil d'Ariane" className="mx-auto max-w-7xl px-5 pt-6">
      <ol className="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap text-sm font-bold text-[var(--muted)]">
        <li className="flex items-center gap-1.5">
          <Link
            href="/"
            className="rounded-full px-2 py-1 transition hover:bg-[var(--white)] hover:text-[var(--pink-dark)]"
          >
            Accueil
          </Link>

          <span aria-hidden className="text-[var(--border)]">
            ›
          </span>
        </li>

        {crumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center gap-1.5">
            {crumb.isLast ? (
              <span aria-current="page" className="px-2 py-1 text-[var(--pink-dark)]">
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="rounded-full px-2 py-1 transition hover:bg-[var(--white)] hover:text-[var(--pink-dark)]"
              >
                {crumb.label}
              </Link>
            )}

            {index < crumbs.length - 1 && (
              <span aria-hidden className="text-[var(--border)]">
                ›
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
