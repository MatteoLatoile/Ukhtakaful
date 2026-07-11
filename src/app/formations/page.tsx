import Link from "next/link";
import FormationCard from "../components/FormationCard";
import Reveal from "../components/Reveal";
import {
  IconHeadphones,
  IconKey,
  IconLock,
  IconSparkle,
} from "../components/icons";
import { formations } from "@/lib/formations";

export const metadata = {
  title: "Formations — Ukhtakaful",
  description:
    "Des formations simples, douces et accessibles autour du sommeil des bébés et des jeunes enfants.",
};

const accessInfos = [
  {
    icon: IconKey,
    title: "Un mot de passe personnel",
    text: "Après ton inscription, tu reçois le mot de passe de ta formation. Il est personnel et ne doit pas être partagé.",
  },
  {
    icon: IconLock,
    title: "Un espace privé",
    text: "Les modules sont protégés : seul ton mot de passe ouvre l'accès au contenu de la formation.",
  },
  {
    icon: IconHeadphones,
    title: "Des audios à ton rythme",
    text: "Tu écoutes quand tu peux, tu reprends où tu t'étais arrêtée. Ta progression reste sauvegardée.",
  },
];

export default function FormationsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 md:py-16">
      <Reveal>
        <div className="card relative overflow-hidden p-8 md:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[var(--pink-soft)] opacity-50 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[var(--mint-soft)] opacity-60 blur-3xl"
          />

          <div className="relative max-w-3xl">
            <p className="eyebrow">
              <IconSparkle className="h-4 w-4" />
              Formations Ukhtakaful
            </p>

            <h1 className="font-display mt-4 text-balance text-4xl font-bold leading-tight text-[var(--text)] md:text-6xl">
              Des formations simples, douces et{" "}
              <em className="underline-swash not-italic">accessibles</em>
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[var(--muted)]">
              Choisis une formation, découvre son programme, puis accède aux
              modules avec le mot de passe reçu après inscription.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {formations.map((formation, index) => (
          <Reveal key={formation.slug} delay={index * 0.12}>
            <FormationCard formation={formation} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {accessInfos.map((info) => {
            const Icon = info.icon;

            return (
              <div key={info.title} className="card-cream p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--white)] text-[var(--pink-dark)] shadow-sm ring-1 ring-[var(--border)]">
                  <Icon className="h-6 w-6" />
                </span>

                <h2 className="mt-5 text-lg font-black text-[var(--text)]">
                  {info.title}
                </h2>

                <p className="mt-3 text-sm font-medium leading-7 text-[var(--muted)]">
                  {info.text}
                </p>
              </div>
            );
          })}
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-16 flex flex-col items-center gap-5 rounded-[2.5rem] border-2 border-dashed border-[var(--border)] bg-[var(--cream-2)]/60 p-9 text-center md:p-12">
          <h2 className="font-display max-w-xl text-balance text-2xl font-bold leading-snug text-[var(--text)] md:text-3xl">
            Tu hésites entre deux formations ?
          </h2>

          <p className="max-w-xl font-medium leading-8 text-[var(--muted)]">
            Explique brièvement l&apos;âge de ton bébé et ce que tu vis la
            nuit : tu recevras une réponse pour t&apos;orienter vers la
            préparation la plus adaptée.
          </p>

          <Link href="/contact" className="btn btn-dark">
            Me faire conseiller
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
