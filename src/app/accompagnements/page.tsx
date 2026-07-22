import Link from "next/link";
import Reveal from "../components/Reveal";
import {
  IconArrowRight,
  IconCheck,
  IconCloud,
  IconCompass,
  IconHeart,
  IconLeaf,
  IconMail,
  IconSend,
  IconSparkle,
} from "../components/icons";

export const metadata = {
  title: "Accompagnements — Ukhtakaful",
  description:
    "Des accompagnements privés, doux et personnalisés autour du sommeil des bébés et des jeunes enfants.",
};

const offers = [
  {
    icon: IconCloud,
    title: "Question sommeil",
    price: "49 €",
    description:
      "Pour une question précise autour du sommeil de bébé ou de l’enfant.",
    features: [
      "Une question précise",
      "Une réponse claire et douce",
      "Par message privé",
    ],
    featured: false,
  },
  {
    icon: IconCompass,
    title: "Analyse complète",
    price: "129 €",
    description:
      "Pour faire le point sur les siestes, les réveils, l’endormissement et le rythme.",
    features: [
      "Point complet sur la situation",
      "Siestes, réveils et rythme",
      "Des pistes concrètes et douces",
    ],
    featured: false,
  },
  {
    icon: IconHeart,
    title: "Accompagnement personnalisé",
    price: "329 €",
    description:
      "Pour être accompagnée avec douceur sur plusieurs jours selon la situation.",
    features: [
      "Suivi sur plusieurs jours",
      "Adapté à ta situation",
      "Soutien pas à pas",
    ],
    featured: true,
  },
];

export default function AccompagnementsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 md:py-16">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">
            <IconLeaf className="h-4 w-4" />
            Accompagnements
          </p>

          <h1 className="font-display mt-4 text-balance text-4xl font-bold leading-tight text-[var(--text)] md:text-6xl">
            Un accompagnement{" "}
            <em className="underline-swash not-italic">doux</em> et
            personnalisé
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-8 text-[var(--muted)]">
            En plus des formations, Ukhtakaful propose des accompagnements
            privés pour aider les mamans à comprendre la situation de leur
            bébé et à avancer sans brutalité.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {offers.map((offer, index) => {
          const Icon = offer.icon;

          return (
            <Reveal key={offer.title} delay={index * 0.12}>
              <article
                className={`relative flex h-full flex-col rounded-[2rem] p-8 transition hover:-translate-y-1.5 ${
                  offer.featured
                    ? "bg-[var(--text)] text-white shadow-[0_28px_70px_rgba(53,43,53,0.25)]"
                    : "card hover:shadow-[var(--shadow-lift)]"
                }`}
              >
                {offer.featured && (
                  <span className="absolute -top-3.5 left-8 rounded-full bg-[var(--yellow)] px-4 py-1.5 text-xs font-black text-[var(--text)]">
                    Le plus complet
                  </span>
                )}

                <span
                  className={`flex h-13 w-13 items-center justify-center rounded-2xl ${
                    offer.featured
                      ? "bg-white/10 text-[var(--pink-soft)]"
                      : "bg-[var(--pink-soft)] text-[var(--pink-dark)]"
                  }`}
                >
                  <Icon className="h-6.5 w-6.5" />
                </span>

                <h2 className="font-display mt-6 text-2xl font-bold leading-snug">
                  {offer.title}
                </h2>

                <p
                  className={`mt-3 text-sm font-medium leading-7 ${
                    offer.featured ? "text-white/70" : "text-[var(--muted)]"
                  }`}
                >
                  {offer.description}
                </p>

                <p className="font-display mt-6 text-4xl font-bold">
                  {offer.price}
                </p>

                <ul
                  className={`mt-6 flex-1 space-y-3 border-t border-dashed pt-6 ${
                    offer.featured
                      ? "border-white/20"
                      : "border-[var(--border)]"
                  }`}
                >
                  {offer.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <span
                        className={`flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full ${
                          offer.featured
                            ? "bg-[var(--mint)]/25 text-[var(--mint)]"
                            : "bg-[var(--mint-soft)] text-[var(--mint-dark)]"
                        }`}
                      >
                        <IconCheck className="h-3.5 w-3.5" />
                      </span>

                      <span
                        className={`text-sm font-bold ${
                          offer.featured ? "text-white/85" : "text-[var(--text)]"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`btn mt-8 w-full ${
                    offer.featured ? "btn-pink" : "btn-outline"
                  }`}
                >
                  Me contacter
                </Link>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <div className="card relative mt-14 overflow-hidden p-8 md:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[var(--yellow-soft)] opacity-60 blur-3xl"
          />

          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="eyebrow">
                <IconSparkle className="h-4 w-4" />
                Tu ne sais pas quoi choisir ?
              </p>

              <h2 className="font-display mt-4 text-balance text-2xl font-bold leading-snug text-[var(--text)] md:text-3xl">
                Décris simplement ta situation, on t’oriente
              </h2>

              <p className="mt-4 max-w-2xl font-medium leading-8 text-[var(--muted)]">
                Tu peux envoyer un message en expliquant brièvement l’âge de
                bébé, le problème rencontré et ton objectif. Tu recevras une
                réponse douce pour choisir la formule la plus adaptée.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-[var(--muted)]">
                <span className="flex items-center gap-2">
                  <IconSend className="h-4.5 w-4.5 text-[var(--pink-dark)]" />
                  Telegram : @ukhtakafulpro
                </span>

                <span className="flex items-center gap-2">
                  <IconMail className="h-4.5 w-4.5 text-[var(--pink-dark)]" />
                  ukhtakaful@gmail.com
                </span>
              </div>
            </div>

            <Link href="/contact" className="btn btn-dark shrink-0">
              Me contacter
              <IconArrowRight className="h-4.5 w-4.5" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
