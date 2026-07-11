"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/formations", label: "Formations" },
  { href: "/accompagnements", label: "Accompagnements" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)]/80 bg-[var(--cream)]/90 shadow-[0_10px_30px_rgba(53,43,53,0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--white)] shadow-sm ring-1 ring-[var(--border)] transition group-hover:-rotate-6">
            <Image
              src="/logo.png"
              alt="Logo Ukhtakaful"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />
          </span>

          <span className="leading-tight">
            <span className="font-display block text-xl font-bold tracking-tight text-[var(--text)]">
              Ukhtakaful
            </span>
            <span className="block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
              Sommeil bébé & enfant
            </span>
          </span>
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--white)]/80 p-1.5 text-sm font-bold text-[var(--muted)] shadow-sm backdrop-blur lg:flex"
        >
          {links.map((link) => {
            const active = isActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 transition ${
                  active
                    ? "bg-[var(--pink-soft)] text-[var(--pink-dark)]"
                    : "hover:bg-[var(--cream-2)] hover:text-[var(--text)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/formations"
            className="btn btn-pink hidden px-6! py-3! text-sm sm:inline-flex"
          >
            Voir les formations
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--white)] text-[var(--text)] shadow-sm transition hover:bg-[var(--cream-2)] lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="h-6 w-6"
              aria-hidden
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h10" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--cream)]/98 px-5 pb-8 pt-4 backdrop-blur-xl lg:hidden">
          <nav aria-label="Navigation mobile" className="flex flex-col gap-2">
            {links.map((link) => {
              const active = isActive(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-2xl px-5 py-4 text-lg font-bold transition ${
                    active
                      ? "bg-[var(--pink-soft)] text-[var(--pink-dark)]"
                      : "bg-[var(--white)] text-[var(--text)] hover:bg-[var(--cream-2)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link href="/formations" className="btn btn-pink mt-5 w-full">
            Voir les formations
          </Link>
        </div>
      )}
    </header>
  );
}
