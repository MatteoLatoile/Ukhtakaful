import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../../components/Reveal";
import {
  IconCheck,
  IconKey,
  IconLock,
  IconShield,
} from "../../../components/icons";
import { getFormationBySlug } from "@/lib/formations";

const amanaCards = [
  {
    title: "Mot de passe personnel",
    text: "Je ne permets pas de partager le mot de passe avec une autre personne, même une sœur, une amie ou un membre de la famille. Chaque accès doit correspondre à un achat personnel.",
  },
  {
    title: "Audios non transférables",
    text: "Je ne permets pas d’envoyer, transférer, publier, enregistrer ou repartager les audios présents dans les modules, que ce soit en privé, dans un groupe ou sur un canal.",
  },
  {
    title: "Fichiers et PDF privés",
    text: "Je ne permets pas d’envoyer les fichiers liés à la formation, les PDF, les supports, les captures ou tout document réservé aux participantes.",
  },
  {
    title: "Textes des modules protégés",
    text: "Je ne permets pas de copier-coller, recopier, publier ou transmettre les textes des modules. Tu peux prendre des notes personnelles pour toi, mais pas diffuser le contenu.",
  },
];

const quotes = [
  {
    source: "Sourate Al-Mâ’idah, verset 1",
    arabic: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ أَوْفُوا۟ بِٱلْعُقُودِ",
    translation:
      "Traduction rapprochée : Ô vous qui avez cru, respectez les contrats.",
  },
  {
    source: "Sourate Al-Isrâ’, verset 34",
    arabic: "وَأَوْفُوا۟ بِٱلْعَهْدِ ۖ إِنَّ ٱلْعَهْدَ كَانَ مَسْـُٔولًۭا",
    translation:
      "Traduction rapprochée : Et respectez l’engagement, car l’engagement fera l’objet d’une question.",
  },
  {
    source: "Hadith rapporté par At-Tirmidhî — jugé hasan sahih",
    arabic:
      "وَالْمُسْلِمُونَ عَلَى شُرُوطِهِمْ إِلَّا شَرْطًا حَرَّمَ حَلَالًا أَوْ أَحَلَّ حَرَامًا",
    translation:
      "Traduction rapprochée : Les musulmans sont tenus par leurs conditions, sauf une condition qui rend illicite ce qui est licite ou qui rend licite ce qui est illicite.",
  },
  {
    source: "Hadith rapporté par Al-Bukhârî",
    arabic:
      "آيَةُ الْمُنَافِقِ ثَلَاثٌ: إِذَا حَدَّثَ كَذَبَ، وَإِذَا وَعَدَ أَخْلَفَ، وَإِذَا اؤْتُمِنَ خَانَ",
    translation:
      "Traduction rapprochée : Le signe de l’hypocrite est de trois : lorsqu’il parle, il ment ; lorsqu’il promet, il manque à sa promesse ; et lorsqu’on lui confie un dépôt, il le trahit.",
  },
];

const quickRules = [
  "Le mot de passe est personnel.",
  "Les audios ne doivent pas être envoyés.",
  "Les PDF, fichiers et supports ne doivent pas être partagés.",
  "Les textes des modules ne doivent pas être copiés ou diffusés.",
  "Les notes personnelles pour ton usage privé sont permises.",
];

export default async function FormationAccessPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ error?: string }>;
}) {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const formation = getFormationBySlug(slug);

  if (!formation) {
    notFound();
  }

  const hasError = resolvedSearchParams?.error === "1";

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 md:py-14">
      <section className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        {/* ——— Colonne formulaire ——— */}
        <div className="space-y-6 lg:sticky lg:top-28">
          <Reveal>
            <section className="card relative overflow-hidden p-7 md:p-9">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--pink-soft)] opacity-60 blur-3xl"
              />

              <div className="relative">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--pink-soft)] text-[var(--pink-dark)]">
                  <IconLock className="h-7 w-7" />
                </span>

                <p className="eyebrow mt-6">Accès privé</p>

                <h1 className="font-display mt-3 text-balance text-3xl font-bold leading-tight text-[var(--text)] md:text-4xl">
                  Entre ton mot de passe
                </h1>

                <p className="mt-4 font-medium leading-8 text-[var(--muted)]">
                  Cet espace est réservé aux personnes qui ont acheté la
                  formation. L’accès est personnel et ne doit pas être partagé.
                </p>

                <div className="mt-6 rounded-2xl bg-[var(--cream-2)] p-5 ring-1 ring-[var(--border)]">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--pink-dark)]">
                    Formation
                  </p>

                  <p className="font-display mt-2 text-xl font-bold leading-snug text-[var(--text)]">
                    {formation.title}
                  </p>
                </div>

                <form
                  action="/api/unlock"
                  method="post"
                  className="mt-6 space-y-4"
                >
                  <input type="hidden" name="slug" value={formation.slug} />

                  <div>
                    <label
                      htmlFor="password"
                      className="text-sm font-black text-[var(--text)]"
                    >
                      Mot de passe
                    </label>

                    <div className="mt-2.5 flex items-center gap-3 rounded-2xl border-2 border-[var(--border)] bg-[var(--white)] px-4 py-1.5 transition focus-within:border-[var(--pink)] focus-within:shadow-[0_0_0_4px_var(--pink-soft)]">
                      <IconKey className="h-5 w-5 shrink-0 text-[var(--pink-dark)]" />

                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        placeholder="Écris le mot de passe ici"
                        className="min-h-12 w-full bg-transparent text-base font-bold text-[var(--text)] outline-none placeholder:font-medium placeholder:text-[var(--muted)]/60"
                      />
                    </div>

                    {hasError && (
                      <p
                        role="alert"
                        className="mt-3 rounded-2xl bg-[var(--pink-soft)] px-4 py-3 text-sm font-bold leading-6 text-[var(--pink-dark)]"
                      >
                        Le mot de passe est incorrect. Vérifie bien les
                        majuscules, les minuscules et les espaces.
                      </p>
                    )}
                  </div>

                  <label className="flex cursor-pointer gap-3 rounded-2xl border-2 border-[var(--border)] bg-[var(--cream-2)] p-4 transition hover:border-[var(--pink-soft)]">
                    <input
                      type="checkbox"
                      required
                      name="acceptedRules"
                      className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--pink)]"
                    />

                    <span className="text-sm font-medium leading-6 text-[var(--muted)]">
                      Je reconnais que cet accès est personnel et je m’engage à
                      ne pas partager le mot de passe, les audios, les
                      fichiers, les PDF, les captures ou les textes des
                      modules.
                    </span>
                  </label>

                  <button type="submit" className="btn btn-pink w-full">
                    Accéder aux modules
                  </button>
                </form>

                <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                  <Link
                    href={`/formations/${formation.slug}`}
                    className="btn btn-outline flex-1 px-4! py-3! text-sm"
                  >
                    Voir la présentation
                  </Link>

                  <Link
                    href="/contact"
                    className="btn btn-dark flex-1 px-4! py-3! text-sm"
                  >
                    Besoin d’aide ?
                  </Link>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section className="card-cream p-6">
              <p className="eyebrow">
                <IconShield className="h-4 w-4" />
                Résumé rapide
              </p>

              <ul className="mt-4 space-y-3">
                {quickRules.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--mint-soft)] text-[var(--mint-dark)]">
                      <IconCheck className="h-4 w-4" />
                    </span>

                    <span className="text-sm font-bold leading-6 text-[var(--muted)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>

        {/* ——— Colonne conditions ——— */}
        <div className="space-y-6">
          <Reveal delay={0.05}>
            <section className="card p-7 md:p-9">
              <p className="eyebrow">Conditions d’accès</p>

              <h2 className="font-display mt-4 text-balance text-3xl font-bold leading-tight text-[var(--text)] md:text-4xl">
                Merci de respecter cette amâna
              </h2>

              <p className="mt-5 text-lg font-medium leading-9 text-[var(--muted)]">
                Cette formation a été préparée avec du temps, des recherches,
                de l’expérience, de la réflexion et l’envie sincère d’aider les
                mamans avec douceur. En accédant aux modules, tu acceptes que
                le contenu reste strictement réservé à ton usage personnel.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {amanaCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-[1.6rem] bg-[var(--cream-2)] p-5 ring-1 ring-[var(--border)]"
                  >
                    <h3 className="text-base font-black text-[var(--text)]">
                      {card.title}
                    </h3>

                    <p className="mt-2.5 text-sm font-medium leading-7 text-[var(--muted)]">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section className="card-cream p-7 md:p-9">
              <p className="eyebrow">Rappel religieux</p>

              <h2 className="font-display mt-4 text-balance text-2xl font-bold leading-snug text-[var(--text)] md:text-3xl">
                Honorer les conditions fait partie du sérieux du musulman
              </h2>

              <p className="mt-4 font-medium leading-8 text-[var(--muted)]">
                Ce rappel n’est pas là pour soupçonner une sœur ou durcir les
                cœurs. Il est là pour rappeler avec douceur que l’accès à une
                formation privée est une responsabilité, une condition acceptée
                et une amâna.
              </p>

              <div className="mt-7 space-y-4">
                {quotes.map((quote) => (
                  <figure
                    key={quote.source}
                    className="rounded-[1.6rem] border-l-4 border-[var(--pink)] bg-[var(--white)] p-6 shadow-sm"
                  >
                    <figcaption className="text-xs font-black uppercase tracking-[0.14em] text-[var(--pink-dark)]">
                      {quote.source}
                    </figcaption>

                    <blockquote>
                      <p
                        dir="rtl"
                        lang="ar"
                        className="mt-4 text-right text-xl font-bold leading-10 text-[var(--text)]"
                      >
                        {quote.arabic}
                      </p>

                      <p className="mt-4 text-sm font-medium italic leading-7 text-[var(--muted)]">
                        {quote.translation}
                      </p>
                    </blockquote>
                  </figure>
                ))}
              </div>

              <div className="mt-7 rounded-[1.6rem] bg-[var(--pink-soft)]/60 p-6">
                <p className="font-black text-[var(--text)]">En résumé</p>

                <p className="mt-3 font-medium leading-8 text-[var(--muted)]">
                  Le mot de passe, les audios, les fichiers, les PDF, les
                  captures et les textes ne sont pas à partager. Ce contenu est
                  une amâna entre toi et Ukhtakaful. Qu’Allah mette de la
                  baraka dans ce que tu apprends et qu’Il nous aide toutes à
                  respecter nos engagements.
                </p>
              </div>
            </section>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
