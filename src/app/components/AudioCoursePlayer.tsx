"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

export type AudioLesson = {
  id: string;
  title: string;
  duration: string;
  audioSrc: string;
  description: string;
  beforeText?: {
    eyebrow: string;
    title: string;
    body: string;
  };
};

export type AudioCourseImage = {
  src: string;
  alt: string;
  caption: string;
};

export type AudioCourseModule = {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  summary: string;

  /**
   * Ancien format : une seule image.
   * Conservé pour ne pas perdre les anciennes images.
   */
  image?: AudioCourseImage;

  /**
   * Nouveau format : plusieurs images par module.
   */
  images?: AudioCourseImage[];

  textSections: {
    title: string;
    body: string;
  }[];
  lessons: AudioLesson[];
  keyPoints: string[];
  visualCards: {
    title: string;
    description: string;
    emoji: string;
  }[];
};

type AudioCoursePlayerProps = {
  formationSlug: string;
  formationTitle: string;
  modules: AudioCourseModule[];
};

type StoredProgress = {
  activeIndex: number;
  completed: Record<string, boolean>;
};

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-7 w-7 translate-x-0.5 fill-current"
    >
      <path d="M8 5.6v12.8c0 .8.9 1.3 1.6.9l9.8-6.4c.6-.4.6-1.4 0-1.8L9.6 4.7C8.9 4.3 8 4.8 8 5.6Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-7 w-7 fill-current"
    >
      <path d="M8 5c-.8 0-1.4.6-1.4 1.4v11.2c0 .8.6 1.4 1.4 1.4h1.4c.8 0 1.4-.6 1.4-1.4V6.4c0-.8-.6-1.4-1.4-1.4H8Zm6.6 0c-.8 0-1.4.6-1.4 1.4v11.2c0 .8.6 1.4 1.4 1.4H16c.8 0 1.4-.6 1.4-1.4V6.4c0-.8-.6-1.4-1.4-1.4h-1.4Z" />
    </svg>
  );
}

function formatTime(value: number) {
  if (!Number.isFinite(value)) return "0:00";

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function AudioPlayer({
  lesson,
  formationTitle,
}: {
  lesson: AudioLesson;
  formationTitle: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    function handleLoadedMetadata() {
      setDuration(audio?.duration || 0);
    }

    function handleTimeUpdate() {
      setCurrentTime(audio?.currentTime || 0);
    }

    function handleEnded() {
      setIsPlaying(false);
    }

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
  }, [volume]);

  function setupMediaSession() {
    if (!("mediaSession" in navigator)) return;

    navigator.mediaSession.metadata = new MediaMetadata({
      title: lesson.title,
      artist: "Ukhtakaful",
      album: formationTitle,
      artwork: [
        {
          src: "/logo.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    });

    navigator.mediaSession.setActionHandler("play", () => {
      audioRef.current?.play();
      setIsPlaying(true);
    });

    navigator.mediaSession.setActionHandler("pause", () => {
      audioRef.current?.pause();
      setIsPlaying(false);
    });

    navigator.mediaSession.setActionHandler("seekbackward", () => {
      if (!audioRef.current) return;

      audioRef.current.currentTime = Math.max(
        audioRef.current.currentTime - 10,
        0
      );
    });

    navigator.mediaSession.setActionHandler("seekforward", () => {
      if (!audioRef.current) return;

      audioRef.current.currentTime = Math.min(
        audioRef.current.currentTime + 10,
        audioRef.current.duration || 0
      );
    });
  }

  async function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;

    const allAudios = document.querySelectorAll("audio");

    allAudios.forEach((item) => {
      if (item !== audio) {
        item.pause();
      }
    });

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    setupMediaSession();

    await audio.play();
    setIsPlaying(true);
  }

  function handleSeek(value: string) {
    const audio = audioRef.current;
    if (!audio) return;

    const nextTime = Number(value);
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  }

  function skip(seconds: number) {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = Math.min(
      Math.max(audio.currentTime + seconds, 0),
      duration || 0
    );
  }

  return (
    <div className="overflow-hidden rounded-[1.8rem] border border-[var(--border)] bg-[var(--cream-2)] shadow-sm">
      <audio ref={audioRef} src={lesson.audioSrc} preload="metadata" />

      <div className="flex flex-col gap-5 p-6 md:flex-row md:items-center">
        <button
          type="button"
          onClick={togglePlay}
          className="flex h-16 w-16 shrink-0 appearance-none items-center justify-center rounded-full border-0 bg-[var(--pink)] p-0 text-white shadow-[var(--shadow-pink)] outline-none transition hover:scale-105 hover:bg-[var(--pink-dark)] focus-visible:ring-4 focus-visible:ring-[var(--pink-soft)] active:scale-95"
          aria-label={isPlaying ? "Mettre en pause" : "Lire l'audio"}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--pink-dark)]">
            {lesson.duration}
          </p>

          <h3 className="font-display mt-1.5 text-xl font-bold leading-snug text-[var(--text)]">
            {lesson.title}
          </h3>

          <p className="mt-2 text-sm font-medium leading-6 text-[var(--muted)]">
            {lesson.description}
          </p>

          <div className="mt-4">
            <input
              type="range"
              min={0}
              max={duration || 0}
              value={currentTime}
              onChange={(event) => handleSeek(event.target.value)}
              className="h-2 w-full cursor-pointer accent-[var(--pink)]"
              aria-label="Position de lecture"
            />

            <div className="mt-1.5 flex items-center justify-between text-xs font-black text-[var(--muted)]">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => skip(-10)}
              className="rounded-full bg-[var(--white)] px-4 py-2 text-xs font-black text-[var(--text)] shadow-sm ring-1 ring-[var(--border)] transition hover:bg-[var(--mint-soft)]"
            >
              −10 s
            </button>

            <button
              type="button"
              onClick={() => skip(10)}
              className="rounded-full bg-[var(--white)] px-4 py-2 text-xs font-black text-[var(--text)] shadow-sm ring-1 ring-[var(--border)] transition hover:bg-[var(--mint-soft)]"
            >
              +10 s
            </button>

            <div className="ml-auto flex items-center gap-2">
              <span className="text-xs font-black text-[var(--muted)]">
                Volume
              </span>

              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={volume}
                onChange={(event) => setVolume(Number(event.target.value))}
                className="w-24 accent-[var(--mint-dark)]"
                aria-label="Volume"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-1.5 bg-[var(--white)]">
        <div
          className="h-full bg-[var(--mint-dark)] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default function AudioCoursePlayer({
  formationSlug,
  formationTitle,
  modules,
}: AudioCoursePlayerProps) {
  const storageKey = `ukhtakaful_audio_progress_${formationSlug}`;

  const [activeIndex, setActiveIndex] = useState(0);
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [hasLoadedStorage, setHasLoadedStorage] = useState(false);

  const activeModule = modules[activeIndex];

  const completedCount = useMemo(() => {
    return modules.filter((module) => completed[module.id]).length;
  }, [completed, modules]);

  const progress = Math.round((completedCount / modules.length) * 100);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);

      if (saved) {
        const parsed = JSON.parse(saved) as StoredProgress;

        setCompleted(parsed.completed || {});

        if (
          typeof parsed.activeIndex === "number" &&
          parsed.activeIndex >= 0 &&
          parsed.activeIndex < modules.length
        ) {
          setActiveIndex(parsed.activeIndex);
        }
      }
    } catch {
      localStorage.removeItem(storageKey);
    } finally {
      setHasLoadedStorage(true);
    }
  }, [modules.length, storageKey]);

  useEffect(() => {
    if (!hasLoadedStorage) return;

    const value: StoredProgress = {
      activeIndex,
      completed,
    };

    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [activeIndex, completed, hasLoadedStorage, storageKey]);

  function goToModule(index: number) {
    setActiveIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function validateCurrentModule() {
    setCompleted((current) => ({
      ...current,
      [activeModule.id]: true,
    }));
  }

  function handleNext() {
    validateCurrentModule();

    if (activeIndex < modules.length - 1) {
      setActiveIndex((current) => current + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handlePrevious() {
    if (activeIndex > 0) {
      setActiveIndex((current) => current - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function resetProgress() {
    setActiveIndex(0);
    setCompleted({});
    localStorage.removeItem(storageKey);
  }

  if (!activeModule) return null;

  const firstLesson = activeModule.lessons[0];
  const remainingLessons = activeModule.lessons.slice(1);

  const moduleImages = [
    ...(activeModule.image ? [activeModule.image] : []),
    ...(activeModule.images || []),
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 md:py-14">
      {/* ——— En-tête & progression ——— */}
      <div className="card relative mb-8 overflow-hidden p-6 md:p-8">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--mint-soft)] opacity-60 blur-3xl"
        />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Formation audio</p>

            <h1 className="font-display mt-3 text-balance text-3xl font-bold leading-tight text-[var(--text)] md:text-4xl">
              {formationTitle}
            </h1>

            <p className="mt-3 max-w-2xl font-medium leading-8 text-[var(--muted)]">
              Écoute les audios à ton rythme. Ta progression reste sauvegardée
              sur ce navigateur.
            </p>
          </div>

          <div className="rounded-[1.6rem] bg-[var(--cream-2)] p-5 ring-1 ring-[var(--border)] md:min-w-[260px]">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-black text-[var(--text)]">
                Progression
              </p>

              <p className="font-display text-lg font-bold text-[var(--pink-dark)]">
                {progress}%
              </p>
            </div>

            <div className="mt-3 h-3 overflow-hidden rounded-full bg-[var(--white)]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[var(--mint)] to-[var(--mint-dark)] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-3 text-xs font-bold text-[var(--muted)]">
              {completedCount} / {modules.length} modules terminés
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* ——— Module actif ——— */}
        <motion.article
          key={activeModule.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="card p-6 md:p-9"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="eyebrow">Module {activeIndex + 1}</p>

              <h2 className="font-display mt-3 text-balance text-3xl font-bold leading-tight text-[var(--text)] md:text-4xl">
                {activeModule.title}
              </h2>

              <p className="mt-3 text-lg font-bold text-[var(--muted)]">
                {activeModule.subtitle}
              </p>
            </div>

            <span className="w-fit shrink-0 rounded-full bg-[var(--yellow-soft)] px-4 py-2 text-sm font-black text-[var(--text)]">
              {activeModule.duration}
            </span>
          </div>

          <p className="mt-7 text-lg font-medium leading-9 text-[var(--muted)]">
            {activeModule.summary}
          </p>

          {firstLesson && (
            <div className="mt-8">
              <AudioPlayer
                lesson={firstLesson}
                formationTitle={formationTitle}
              />
            </div>
          )}

          <div className="mt-8 space-y-5">
            {activeModule.textSections.map((section) => (
              <div
                key={section.title}
                className="rounded-[1.8rem] bg-[var(--cream-2)] p-6 ring-1 ring-[var(--border)]"
              >
                <h3 className="font-display text-xl font-bold text-[var(--text)]">
                  {section.title}
                </h3>

                <p className="mt-3 whitespace-pre-line font-medium leading-8 text-[var(--muted)]">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {moduleImages.length > 0 && (
            <div className="mt-8 space-y-6">
              {moduleImages.map((image, index) => (
                <figure
                  key={`${image.src}-${index}`}
                  className="overflow-hidden rounded-[1.8rem] border border-[var(--border)] bg-[var(--cream-2)] p-3 shadow-sm"
                >
                  <div className="overflow-hidden rounded-[1.4rem] bg-[var(--white)]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1600}
                      height={1000}
                      className="h-auto w-full object-contain"
                      priority={activeModule.id === "module-1" && index === 0}
                    />
                  </div>

                  <figcaption className="px-3 pb-2 pt-4 text-center text-sm font-bold leading-6 text-[var(--muted)]">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          {remainingLessons.length > 0 && (
            <div className="mt-8 space-y-7">
              {remainingLessons.map((lesson) => (
                <div key={lesson.id}>
                  {lesson.beforeText && (
                    <div className="mb-6 rounded-[1.8rem] border border-[var(--border)] bg-[var(--mint-soft)] p-6">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--mint-dark)]">
                        {lesson.beforeText.eyebrow}
                      </p>

                      <h3 className="font-display mt-2 text-2xl font-bold text-[var(--text)]">
                        {lesson.beforeText.title}
                      </h3>

                      <p className="mt-3 whitespace-pre-line font-medium leading-8 text-[var(--muted)]">
                        {lesson.beforeText.body}
                      </p>
                    </div>
                  )}

                  <AudioPlayer
                    lesson={lesson}
                    formationTitle={formationTitle}
                  />
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {activeModule.visualCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[1.8rem] border border-[var(--border)] bg-[var(--cream-2)] p-5"
              >
                <p aria-hidden className="text-3xl">
                  {card.emoji}
                </p>

                <h3 className="mt-4 text-lg font-black text-[var(--text)]">
                  {card.title}
                </h3>

                <p className="mt-2 text-sm font-medium leading-7 text-[var(--muted)]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.8rem] bg-[var(--pink-soft)]/55 p-6">
            <p className="font-display text-xl font-bold text-[var(--text)]">
              Points importants à retenir
            </p>

            <ul className="mt-4 space-y-3">
              {activeModule.keyPoints.map((point) => (
                <li key={point} className="flex gap-3 text-[var(--muted)]">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--mint-dark)] text-sm font-black text-white">
                    ✓
                  </span>

                  <span className="font-medium leading-7">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={activeIndex === 0}
              className="btn btn-outline disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
            >
              ← Précédent
            </button>

            <button type="button" onClick={handleNext} className="btn btn-pink">
              {activeIndex === modules.length - 1
                ? "Terminer le module ✓"
                : "Suivant →"}
            </button>
          </div>
        </motion.article>

        {/* ——— Sommaire ——— */}
        <aside className="card h-fit p-5 lg:sticky lg:top-28">
          <div className="rounded-[1.6rem] bg-[var(--cream-2)] p-5 ring-1 ring-[var(--border)]">
            <p className="eyebrow">Modules</p>

            <h2 className="font-display mt-2 text-2xl font-bold text-[var(--text)]">
              Sommaire
            </h2>

            <p className="mt-2 text-sm font-bold leading-6 text-[var(--muted)]">
              Tu peux revenir sur chaque module quand tu veux.
            </p>
          </div>

          <div className="mt-5 space-y-2.5">
            {modules.map((module, index) => {
              const isActive = index === activeIndex;
              const isCompleted = completed[module.id];

              return (
                <button
                  key={module.id}
                  type="button"
                  onClick={() => goToModule(index)}
                  aria-current={isActive ? "step" : undefined}
                  className={`w-full rounded-[1.3rem] border p-4 text-left transition ${
                    isActive
                      ? "border-[var(--pink)] bg-[var(--pink-soft)]/50"
                      : "border-[var(--border)] bg-[var(--white)] hover:bg-[var(--cream-2)]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-black transition ${
                        isCompleted
                          ? "bg-[var(--mint-dark)] text-white"
                          : isActive
                            ? "bg-[var(--pink)] text-white"
                            : "bg-[var(--cream)] text-[var(--muted)]"
                      }`}
                    >
                      {isCompleted ? "✓" : index + 1}
                    </span>

                    <span className="min-w-0">
                      <span className="block font-black leading-6 text-[var(--text)]">
                        {module.title}
                      </span>

                      <span className="mt-1 block text-xs font-bold text-[var(--muted)]">
                        {module.duration}
                      </span>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-5 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={resetProgress}
              className="btn btn-outline py-3! text-sm text-[var(--muted)]!"
            >
              Réinitialiser la progression
            </button>

            <Link href="/contact" className="btn btn-dark py-3! text-sm">
              Besoin d’aide ?
            </Link>

            <form action="/api/logout" method="post">
              <button type="submit" className="btn btn-mint w-full py-3! text-sm">
                Quitter l’espace
              </button>
            </form>
          </div>
        </aside>
      </div>
    </section>
  );
}
