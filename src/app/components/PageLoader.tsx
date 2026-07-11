import { IconCrescent, IconStarFilled } from "./icons";

export default function PageLoader({
  label = "Chargement en cours…",
}: {
  label?: string;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[60vh] flex-col items-center justify-center px-5 py-24 text-center"
    >
      <div className="relative h-24 w-24">
        {/* Croissant de lune qui flotte */}
        <span className="float-soft absolute inset-0 flex items-center justify-center text-[var(--yellow)]">
          <IconCrescent className="h-16 w-16 -rotate-12 drop-shadow-[0_10px_25px_rgba(255,215,94,0.45)]" />
        </span>

        {/* Étoiles qui scintillent en décalé */}
        <span className="twinkle absolute -right-2 top-0 text-[var(--pink)]">
          <IconStarFilled className="h-5 w-5" />
        </span>

        <span
          className="twinkle absolute -left-3 top-8 text-[var(--mint-dark)]"
          style={{ animationDelay: "1.2s" }}
        >
          <IconStarFilled className="h-4 w-4" />
        </span>

        <span
          className="twinkle absolute -bottom-1 right-2 text-[var(--yellow)]"
          style={{ animationDelay: "2.4s" }}
        >
          <IconStarFilled className="h-3.5 w-3.5" />
        </span>
      </div>

      <p className="mt-8 font-display text-xl font-bold text-[var(--text)]">
        {label}
      </p>

      <span className="mt-3 flex items-center gap-1.5" aria-hidden>
        <span className="twinkle h-2 w-2 rounded-full bg-[var(--pink)]" />
        <span
          className="twinkle h-2 w-2 rounded-full bg-[var(--mint-dark)]"
          style={{ animationDelay: "0.5s" }}
        />
        <span
          className="twinkle h-2 w-2 rounded-full bg-[var(--yellow)]"
          style={{ animationDelay: "1s" }}
        />
      </span>
    </div>
  );
}
