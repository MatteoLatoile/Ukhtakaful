import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../components/Reveal";
import {
  IconArrowRight,
  IconCheck,
  IconCompass,
  IconCrescent,
  IconHeadphones,
  IconHeart,
  IconLock,
  IconMoon,
  IconSparkle,
} from "../../components/icons";
import { getFormationBySlug } from "@/lib/formations";

const reveilsNocturnesSommaire = [
  {
    number: "00",
    title: "Introduction",
    description:
      "Un temps d’accueil pour déposer la culpabilité, comprendre l’esprit de la préparation et entrer doucement dans le sujet.",
  },
  {
    number: "01",
    title: "Comprendre le sommeil de bébé",
    description:
      "Physiologie du sommeil, cycles courts, micro-réveils, besoin de sécurité, allaitement et observation.",
  },
  {
    number: "02",
    title: "Identifier la bonne piste",
    description:
      "Réveils fréquents, nuits coupées, réveils matinaux, pleurs intenses : apprendre à chercher une piste, pas une faute.",
  },
  {
    number: "03",
    title: "Apaiser les siestes",
    description:
      "Comprendre comment la journée influence la nuit : siestes, temps d’éveil, fatigue saine et journal d’observation.",
  },
  {
    number: "04",
    title: "Installer une routine du soir",
    description:
      "Construire une routine simple, réaliste et rassurante : ralentir, sécuriser puis accompagner vers le sommeil.",
  },
  {
    number: "05",
    title: "Plan sommeil sur 7 jours",
    description:
      "Observer, choisir une priorité, tester un micro-ajustement puis faire le point sans jugement.",
  },
];

const engagements = [
  {
    icon: IconHeart,
    title: "Sans culpabilité",
    text: "On ne cherche pas ce que tu as mal fait. On cherche ce que ton enfant exprime.",
  },
  {
    icon: IconMoon,
    title: "Adapté à ton foyer",
    text: "Le but n’est pas d’appliquer une méthode rigide, mais d’avancer avec ce qui est tenable pour toi.",
  },
  {
    icon: IconCompass,
    title: "Une direction claire",
    text: "Observer, comprendre, choisir une piste puis tester un petit ajustement.",
  },
];

export default async function FormationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const formation = getFormationBySlug(slug);

  if (!formation) {
    notFound();
  }

  const isReveilsNocturnes = formation.slug === "reveils-nocturnes";

  const sommaire = isReveilsNocturnes
    ? reveilsNocturnesSommaire
    : formation.modules.map((module, index) => ({
        number: String(index + 1).padStart(2, "0"),
        title: module.title.replace(/^Module \d+ — /, ""),
        description: module.content,
      }));

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 md:py-14">
      {/* ——— En-tête ——— */}
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <Reveal>
          <div className="card relative h-full overflow-hidden p-8 md:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--pink-soft)] opacity-50 blur-3xl"
            />

            <div className="relative">
              <p className="eyebrow">
                <IconHeadphones className="h-4 w-4" />
                Formation audio
              </p>

              <h1 className="font-display mt-5 text-balance text-4xl font-bold leading-tight text-[var(--text)] md:text-5xl">
                {formation.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg font-medium leading-9 text-[var(--muted)]">
                {formation.longDescription}
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                <span className="rounded-full bg-[var(--pink-soft)] px-4 py-2 text-sm font-black text-[var(--pink-dark)]">
                  {formation.price}
                </span>

                <span className="rounded-full bg-[var(--mint-soft)] px-4 py-2 text-sm font-black text-[var(--mint-dark)]">
                  Audio
                </span>

                <span className="rounded-full bg-[var(--yellow-soft)] px-4 py-2 text-sm font-black text-[var(--text)]">
                  {formation.modules.length} modules
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--cream)] px-4 py-2 text-sm font-black text-[var(--muted)]">
                  <IconLock className="h-4 w-4" />
                  Accès personnel
                </span>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/formations/${formation.slug}/acces`}
                  className="btn btn-pink"
                >
                  Accéder à la formation
                  <IconArrowRight className="h-4.5 w-4.5" />
                </Link>

                <Link href="/contact" className="btn btn-outline">
                  Poser une question
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <aside className="card-cream flex h-full flex-col gap-4 p-7 md:p-8">
            <p className="eyebrow">
              <IconSparkle className="h-4 w-4" />
              Cette formation est pour toi si…
            </p>

            <ul className="space-y-3.5">
              {formation.audience.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-[var(--white)] p-4 shadow-sm ring-1 ring-[var(--border)]"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--mint-soft)] text-[var(--mint-dark)]">
                    <IconCheck className="h-4 w-4" />
                  </span>

                  <span className="font-bold leading-6 text-[var(--text)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-auto rounded-2xl bg-[var(--pink-soft)]/50 p-5">
              <p className="text-sm font-black text-[var(--pink-dark)]">
                Ce que tu vas en retirer
              </p>

              <ul className="mt-3 space-y-2 text-sm font-medium leading-6 text-[var(--muted)]">
                {formation.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pink)]" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Reveal>
      </section>

      {/* ——— Sommaire ——— */}
      <Reveal>
        <section className="card mt-10 relative overflow-hidden p-7 md:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[var(--mint-soft)] opacity-50 blur-3xl"
          />

          <div className="relative">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">
                  <IconMoon className="h-4 w-4" />
                  Sommaire
                </p>

                <h2 className="font-display mt-4 text-balance text-3xl font-bold leading-tight text-[var(--text)] md:text-4xl">
                  Le programme de la préparation
                </h2>
              </div>

              <p className="max-w-md font-medium leading-8 text-[var(--muted)]">
                Un chemin progressif pour comprendre, observer puis ajuster une
                seule chose à la fois.
              </p>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-2">
              {sommaire.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-[1.6rem] border border-[var(--border)] bg-[var(--cream-2)] p-6 transition hover:-translate-y-1 hover:bg-[var(--white)] hover:shadow-[var(--shadow-soft)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--pink-soft)] text-base font-bold text-[var(--pink-dark)] transition group-hover:bg-[var(--pink)] group-hover:text-white">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="text-lg font-black leading-snug text-[var(--text)]">
                        {item.title}
                      </h3>

                      <p className="mt-2.5 text-sm font-medium leading-7 text-[var(--muted)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ——— Engagements ——— */}
      <section className="mt-10 grid gap-5 md:grid-cols-3">
        {engagements.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal key={item.title} delay={index * 0.1}>
              <div className="card-cream h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--white)] text-[var(--pink-dark)] shadow-sm ring-1 ring-[var(--border)]">
                  <Icon className="h-6 w-6" />
                </span>

                <h3 className="mt-5 text-lg font-black text-[var(--text)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-medium leading-7 text-[var(--muted)]">
                  {item.text}
                </p>
              </div>
            </Reveal>
          );
        })}
      </section>

      {/* ——— CTA ——— */}
      <Reveal>
        <section className="relative mt-10 overflow-hidden rounded-[2.5rem] bg-[var(--text)] p-8 text-white md:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-8 -top-12 text-[var(--yellow)] opacity-25"
          >
            <IconCrescent className="h-44 w-44 -rotate-12" />
          </div>

          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-[var(--pink-soft)]!">
                Prête à commencer ?
              </p>

              <h2 className="font-display mt-4 text-balance text-3xl font-bold leading-tight md:text-4xl">
                Entre doucement dans la préparation
              </h2>

              <p className="mt-4 font-medium leading-8 text-white/70">
                Tu pourras écouter les audios, avancer module par module et
                reprendre là où tu t’es arrêtée.
              </p>
            </div>

            <Link
              href={`/formations/${formation.slug}/acces`}
              className="btn btn-pink shrink-0"
            >
              Accéder maintenant
              <IconArrowRight className="h-4.5 w-4.5" />
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
