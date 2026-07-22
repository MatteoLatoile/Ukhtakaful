import Image from "next/image";
import Link from "next/link";
import { formations } from "@/lib/formations";
import { IconMail, IconMoon, IconSend } from "./icons";

const navLinks = [
  { href: "/formations", label: "Formations" },
  { href: "/accompagnements", label: "Accompagnements" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-[var(--border)] bg-[var(--cream-2)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[var(--mint-soft)] opacity-60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-[var(--pink-soft)] opacity-50 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.3fr_0.8fr_0.9fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--white)] shadow-sm ring-1 ring-[var(--border)]">
              <Image
                src="/logo.png"
                alt="Logo Ukhtakaful"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
            </span>

            <div>
              <p className="font-display text-2xl font-bold text-[var(--text)]">
                Ukhtakaful
              </p>
              <p className="text-sm font-bold text-[var(--muted)]">
                Mieux comprendre pour mieux dormir.
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-sm text-sm font-medium leading-7 text-[var(--muted)]">
            Formations et accompagnements doux autour du sommeil des bébés et
            des jeunes enfants. Sans méthode brutale, sans laisser pleurer.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.16em] text-[var(--text)]">
            Navigation
          </h3>

          <ul className="mt-5 space-y-3 text-sm font-bold text-[var(--muted)]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition hover:text-[var(--pink-dark)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.16em] text-[var(--text)]">
            Formations
          </h3>

          <ul className="mt-5 space-y-3 text-sm font-bold text-[var(--muted)]">
            {formations.map((formation) => (
              <li key={formation.slug}>
                <Link
                  href={`/formations/${formation.slug}`}
                  className="transition hover:text-[var(--pink-dark)]"
                >
                  {formation.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.16em] text-[var(--text)]">
            Contact
          </h3>

          <ul className="mt-5 space-y-3 text-sm font-bold text-[var(--muted)]">
            <li className="flex items-center gap-2.5">
              <IconSend className="h-4.5 w-4.5 shrink-0 text-[var(--pink-dark)]" />
              <span>Telegram : @ukhtakafulpro</span>
            </li>
            <li className="flex items-center gap-2.5">
              <IconMail className="h-4.5 w-4.5 shrink-0 text-[var(--pink-dark)]" />
              <span>ukhtakaful@gmail.com</span>
            </li>
          </ul>

          <Link
            href="/contact"
            className="btn btn-outline mt-6 px-5! py-2.5! text-xs"
          >
            Écrire un message
          </Link>
        </div>
      </div>

      <div className="relative border-t border-[var(--border)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs font-bold text-[var(--muted)] sm:flex-row">
          <p>© {new Date().getFullYear()} Ukhtakaful. Tous droits réservés.</p>

          <p className="flex items-center gap-1.5">
            <IconMoon className="h-4 w-4 text-[var(--pink-dark)]" />
            Des nuits plus douces, une étape à la fois.
          </p>
        </div>
      </div>
    </footer>
  );
}
