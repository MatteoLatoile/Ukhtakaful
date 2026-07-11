import Link from "next/link";
import Reveal from "../components/Reveal";
import {
  IconArrowRight,
  IconMail,
  IconSend,
  IconSparkle,
} from "../components/icons";

export const metadata = {
  title: "Contact — Ukhtakaful",
  description:
    "Contacter Ukhtakaful pour une question, une inscription à une formation ou un accompagnement personnalisé.",
};

const channels = [
  {
    icon: IconSend,
    title: "Telegram",
    value: "@ukhtakaful",
    text: "Le moyen le plus direct pour poser ta question ou t’inscrire à une formation.",
    accent: "bg-[var(--mint-soft)] text-[var(--mint-dark)]",
  },
  {
    icon: IconMail,
    title: "Email",
    value: "ukhtakaful@gmail.com",
    text: "Pour un message plus détaillé : âge de bébé, situation, objectif.",
    accent: "bg-[var(--pink-soft)] text-[var(--pink-dark)]",
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-14 md:py-16">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">
            <IconSparkle className="h-4 w-4" />
            Contact
          </p>

          <h1 className="font-display mt-4 text-balance text-4xl font-bold leading-tight text-[var(--text)] md:text-6xl">
            Écris-nous, on te répond avec{" "}
            <em className="underline-swash not-italic">douceur</em>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg font-medium leading-8 text-[var(--muted)]">
            Pour une question, une inscription à une formation ou un
            accompagnement personnalisé, tu peux contacter Ukhtakaful
            directement.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {channels.map((channel, index) => {
          const Icon = channel.icon;

          return (
            <Reveal key={channel.title} delay={index * 0.12}>
              <div className="card h-full p-8 transition hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${channel.accent}`}
                >
                  <Icon className="h-7 w-7" />
                </span>

                <h2 className="mt-6 text-sm font-black uppercase tracking-[0.16em] text-[var(--muted)]">
                  {channel.title}
                </h2>

                <p className="font-display mt-2 text-2xl font-bold text-[var(--text)]">
                  {channel.value}
                </p>

                <p className="mt-4 text-sm font-medium leading-7 text-[var(--muted)]">
                  {channel.text}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.15}>
        <div className="card-cream mt-8 p-8 md:p-10">
          <h2 className="font-display text-xl font-bold text-[var(--text)]">
            Pour une réponse plus rapide
          </h2>

          <p className="mt-3 max-w-2xl font-medium leading-8 text-[var(--muted)]">
            Indique en quelques mots l’âge de ton bébé, ce que vous vivez la
            nuit et ce que tu aimerais améliorer. Cela permet de t’orienter
            directement vers la formation ou l’accompagnement le plus adapté.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="font-medium text-[var(--muted)]">
            Tu peux aussi découvrir directement les préparations :
          </p>

          <Link href="/formations" className="btn btn-pink">
            Voir les formations
            <IconArrowRight className="h-4.5 w-4.5" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
