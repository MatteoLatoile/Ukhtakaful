import Link from "next/link";
import Hero from "./components/Hero";
import ScrollProgress from "./components/ScrollProgress";
import FormationCard from "./components/FormationCard";
import Reveal from "./components/Reveal";
import {
  IconArrowRight,
  IconCompass,
  IconCrescent,
  IconHeadphones,
  IconHeart,
  IconKey,
  IconLeaf,
  IconMoon,
  IconPuzzle,
  IconSparkle,
  IconStarFilled,
} from "./components/icons";
import { formations } from "@/lib/formations";

const steps = [
  {
    icon: IconCompass,
    title: "Choisis ta formation",
    text: "Réveils nocturnes, allaitement & sommeil ou sevrage nocturne : chaque préparation répond à une situation précise.",
  },
  {
    icon: IconKey,
    title: "Reçois ton mot de passe",
    text: "Après ton inscription, tu reçois un mot de passe personnel qui ouvre l'accès aux modules de ta formation.",
  },
  {
    icon: IconHeadphones,
    title: "Écoute les modules",
    text: "Des audios à écouter quand tu peux, avec des fiches et des repères visuels. Ta progression est sauvegardée.",
  },
];

const values = [
  {
    icon: IconPuzzle,
    accent: "bg-[var(--pink-soft)] text-[var(--pink-dark)]",
    title: "Simple",
    text: "Des modules structurés, faciles à suivre et pensés pour les mamans fatiguées.",
  },
  {
    icon: IconMoon,
    accent: "bg-[var(--mint-soft)] text-[var(--mint-dark)]",
    title: "Doux",
    text: "Une approche respectueuse du rythme de bébé, sans laisser pleurer.",
  },
  {
    icon: IconHeart,
    accent: "bg-[var(--yellow-soft)] text-[#b8912a]",
    title: "Rassurant",
    text: "On observe, on comprend, puis on ajuste progressivement.",
  },
];

export default function HomePage() {
  return (
    <>
      <ScrollProgress />

      {/* ——— Hero animé ——— */}
      <Hero />

      {/* ——— Formations ——— */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">
                <IconSparkle className="h-4 w-4" />
                Formations Ukhtakaful
              </p>

              <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-tight text-[var(--text)] md:text-5xl">
                Des préparations accessibles directement sur le site
              </h2>
            </div>

            <p className="max-w-sm text-base font-medium leading-8 text-[var(--muted)]">
              Chaque formation contient plusieurs modules. Après inscription,
              la sœur reçoit le mot de passe pour accéder au contenu.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {formations.map((formation, index) => (
            <Reveal key={formation.slug} delay={index * 0.14} variant="scale">
              <FormationCard formation={formation} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ——— Comment ça marche ——— */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 py-12">
        <Reveal variant="blur">
          <div className="card relative overflow-hidden p-8 md:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--mint-soft)] opacity-60 blur-3xl"
            />

            <div className="relative">
              <div className="max-w-2xl">
                <p className="eyebrow">
                  <IconLeaf className="h-4 w-4" />
                  Comment ça marche
                </p>

                <h2 className="font-display mt-4 text-balance text-3xl font-bold leading-tight text-[var(--text)] md:text-4xl">
                  Trois étapes, aucune pression
                </h2>
              </div>

              <div className="mt-10 grid gap-8 md:grid-cols-3">
                {steps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <Reveal key={step.title} delay={index * 0.14} variant="up">
                      <div className="relative">
                        <div className="flex items-center gap-4">
                          <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[var(--pink-soft)] text-[var(--pink-dark)]">
                            <Icon className="h-6.5 w-6.5" />
                          </span>

                          <span className="font-display text-4xl font-bold text-[var(--cream-3)]">
                            0{index + 1}
                          </span>
                        </div>

                        <h3 className="mt-5 text-xl font-black text-[var(--text)]">
                          {step.title}
                        </h3>

                        <p className="mt-3 text-sm font-medium leading-7 text-[var(--muted)]">
                          {step.text}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ——— L'approche ——— */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">
              <IconHeart className="h-4 w-4" />
              L&apos;approche Ukhtakaful
            </p>

            <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-tight text-[var(--text)] md:text-5xl">
              Comprendre d&apos;abord, ajuster ensuite
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <Reveal key={value.title} delay={index * 0.14} variant="scale">
                <div className="card h-full p-8 text-center transition hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                  <span
                    className={`mx-auto flex h-16 w-16 items-center justify-center rounded-3xl ${value.accent}`}
                  >
                    <Icon className="h-8 w-8" />
                  </span>

                  <h3 className="font-display mt-6 text-2xl font-bold text-[var(--text)]">
                    {value.title}
                  </h3>

                  <p className="mt-3 font-medium leading-8 text-[var(--muted)]">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ——— CTA finale ——— */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-8">
        <Reveal variant="blur">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--text)] p-9 text-white md:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-14 text-[var(--yellow)] opacity-25"
            >
              <IconCrescent className="h-52 w-52 -rotate-12 spin-slow" />
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute bottom-8 left-1/2 text-[var(--pink-soft)] opacity-30 twinkle"
            >
              <IconStarFilled className="h-10 w-10" />
            </div>

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <p className="eyebrow text-[var(--pink-soft)]!">
                  Prête à mieux dormir ?
                </p>

                <h2 className="font-display mt-4 text-balance text-3xl font-bold leading-tight md:text-5xl">
                  Choisis la préparation qui ressemble à tes nuits
                </h2>

                <p className="mt-5 font-medium leading-8 text-white/70">
                  Trois formations douces, un mot de passe personnel, des
                  modules à écouter à ton rythme.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
                <Link href="/formations" className="btn btn-pink group">
                  Voir les formations
                  <IconArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="btn border-white/25 bg-white/10 text-white hover:bg-white/20"
                >
                  Poser une question
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
