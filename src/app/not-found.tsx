import Link from "next/link";
import { IconArrowRight, IconCrescent } from "./components/icons";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-5 py-24 text-center md:py-32">
      <span className="float-soft text-[var(--yellow)]">
        <IconCrescent className="h-20 w-20 -rotate-12 drop-shadow-[0_10px_25px_rgba(255,215,94,0.45)]" />
      </span>

      <p className="eyebrow mt-8">Erreur 404</p>

      <h1 className="font-display mt-4 text-balance text-4xl font-bold leading-tight text-[var(--text)] md:text-5xl">
        Cette page s&apos;est endormie…
      </h1>

      <p className="mt-5 max-w-md text-lg font-medium leading-8 text-[var(--muted)]">
        La page que tu cherches n&apos;existe pas ou a été déplacée. Retourne
        doucement à l&apos;accueil.
      </p>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-pink">
          Retour à l&apos;accueil
          <IconArrowRight className="h-4.5 w-4.5" />
        </Link>

        <Link href="/formations" className="btn btn-outline">
          Voir les formations
        </Link>
      </div>
    </section>
  );
}
