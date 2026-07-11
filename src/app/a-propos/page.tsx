import Link from "next/link";
import Reveal from "../components/Reveal";
import {
  IconArrowRight,
  IconCheck,
  IconHeart,
  IconMoon,
} from "../components/icons";

export const metadata = {
  title: "À propos — Ukhtakaful",
  description:
    "Ukhtakaful, un accompagnement de maman à maman autour du sommeil des bébés et des jeunes enfants.",
};

const principles = [
  "Pas de méthode brutale.",
  "Pas de laisser-pleurer.",
  "Une approche respectueuse du bébé et de la maman.",
  "Des conseils simples, concrets et applicables.",
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-16">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">
            <IconHeart className="h-4 w-4" />À propos
          </p>

          <h1 className="font-display mt-4 text-balance text-4xl font-bold leading-tight text-[var(--text)] md:text-6xl">
            Un accompagnement de{" "}
            <em className="underline-swash not-italic">maman à maman</em>
          </h1>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="card relative mx-auto mt-12 max-w-3xl overflow-hidden p-8 md:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--pink-soft)] opacity-50 blur-3xl"
          />

          <div className="relative space-y-6 text-lg font-medium leading-9 text-[var(--muted)]">
            <p className="font-display text-2xl font-bold leading-snug text-[var(--text)]">
              Ukhtakaful accompagne les mamans autour du sommeil des bébés et
              des jeunes enfants, avec une approche bienveillante, douce et
              physiologique.
            </p>

            <p>
              Ici, le but n’est pas de forcer bébé à dormir, ni de laisser
              pleurer. Le but est d’abord de comprendre : son rythme, ses
              besoins, ses réveils, ses siestes, son environnement et la
              fatigue de la maman.
            </p>

            <p>
              Les formations sont pensées pour être simples, accessibles et
              rassurantes, afin que chaque maman puisse avancer étape par
              étape.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="card-cream mx-auto mt-8 max-w-3xl p-8 md:p-10">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--white)] text-[var(--pink-dark)] shadow-sm ring-1 ring-[var(--border)]">
              <IconMoon className="h-5.5 w-5.5" />
            </span>

            <h2 className="font-display text-2xl font-bold text-[var(--text)]">
              L’approche Ukhtakaful
            </h2>
          </div>

          <ul className="mt-7 grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <li
                key={principle}
                className="flex items-start gap-3 rounded-2xl bg-[var(--white)] p-4 shadow-sm ring-1 ring-[var(--border)]"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--mint-soft)] text-[var(--mint-dark)]">
                  <IconCheck className="h-4 w-4" />
                </span>

                <span className="font-bold leading-6 text-[var(--text)]">
                  {principle}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-5 text-center">
          <p className="max-w-xl font-medium leading-8 text-[var(--muted)]">
            Envie de découvrir les préparations ou simplement de poser une
            question ? Tu es la bienvenue.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/formations" className="btn btn-pink">
              Voir les formations
              <IconArrowRight className="h-4.5 w-4.5" />
            </Link>

            <Link href="/contact" className="btn btn-outline">
              Me contacter
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
