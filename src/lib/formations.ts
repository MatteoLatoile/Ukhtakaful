export type FormationSlug =
  | "reveils-nocturnes"
  | "allaitement-sommeil"
  | "sevrage-nocturne";

export type FormationModule = {
  title: string;
  duration: string;
  content: string;
};

export type Formation = {
  slug: FormationSlug;
  emoji: string;
  title: string;
  shortTitle: string;
  price: string;
  description: string;
  longDescription: string;
  audience: string[];
  benefits: string[];
  modules: FormationModule[];
};

export const formations: Formation[] = [
  {
    slug: "reveils-nocturnes",
    emoji: "🌙",
    title: "Préparation réveils nocturnes de bébé",
    shortTitle: "Réveils nocturnes",
    price: "50 €",
    description:
      "Comprendre les réveils nocturnes de bébé et avancer avec douceur, sans laisser pleurer.",
    longDescription:
      "Une préparation pensée pour les mamans fatiguées qui souhaitent comprendre pourquoi leur bébé se réveille la nuit, repérer les causes possibles et mettre en place des ajustements doux, physiologiques et bienveillants.",
    audience: [
      "Ton bébé se réveille souvent la nuit.",
      "Tu es épuisée et tu ne sais plus quoi ajuster.",
      "Tu veux comprendre sans culpabiliser.",
      "Tu refuses les méthodes brutales ou le laisser-pleurer.",
    ],
    benefits: [
      "Comprendre les réveils nocturnes normaux et ceux à observer.",
      "Repérer les causes fréquentes : faim, inconfort, rythme, séparation, chaleur.",
      "Ajuster les siestes et les fenêtres d’éveil.",
      "Construire un plan doux adapté à ton bébé.",
    ],
    modules: [
      {
        title: "Module 1 — Comprendre les réveils nocturnes",
        duration: "20 min",
        content:
          "Dans ce module, on pose les bases : pourquoi bébé se réveille, ce qui est normal selon son âge, et pourquoi les nuits hachées ne veulent pas forcément dire qu’il y a un problème.",
      },
      {
        title: "Module 2 — Les besoins de bébé la nuit",
        duration: "25 min",
        content:
          "On parle des besoins de proximité, de sécurité, de succion, d’allaitement ou de biberon, et de la manière d’y répondre sans s’épuiser complètement.",
      },
      {
        title: "Module 3 — Les causes fréquentes des réveils",
        duration: "30 min",
        content:
          "On analyse les causes possibles : rythme de journée, siestes, fenêtres d’éveil, poussées dentaires, inconfort, chaleur, séparation, acquisitions motrices.",
      },
      {
        title: "Module 4 — Ajustements doux",
        duration: "25 min",
        content:
          "Tu apprends à faire des petits changements progressifs, sans forcer bébé, sans méthode brutale, et en respectant son rythme.",
      },
      {
        title: "Module 5 — Plan d’action",
        duration: "30 min",
        content:
          "On construit un plan simple : quoi observer, quoi ajuster, dans quel ordre, et comment savoir si une modification aide réellement bébé.",
      },
    ],
  },
  {
    slug: "allaitement-sommeil",
    emoji: "🤱",
    title: "Allaitement pendant le sommeil",
    shortTitle: "Allaitement & sommeil",
    price: "50 €",
    description:
      "Comprendre le lien entre allaitement, tétées nocturnes, endormissement et sommeil de bébé.",
    longDescription:
      "Une formation pour mieux comprendre la place de l’allaitement dans le sommeil de l’enfant, sans culpabiliser la maman et sans chercher à supprimer les tétées trop tôt.",
    audience: [
      "Ton bébé s’endort souvent au sein.",
      "Tu te demandes si les tétées nocturnes sont normales.",
      "Tu veux préserver ton allaitement.",
      "Tu veux améliorer les nuits sans brusquer ton bébé.",
    ],
    benefits: [
      "Comprendre pourquoi bébé tète la nuit.",
      "Différencier besoin nutritif, besoin affectif et habitude.",
      "Préserver la lactation.",
      "Avancer doucement selon l’âge de bébé.",
    ],
    modules: [
      {
        title: "Module 1 — Allaitement et sommeil",
        duration: "20 min",
        content:
          "On explique pourquoi l’allaitement et le sommeil sont liés, et pourquoi le sein est souvent un repère sécurisant pour bébé.",
      },
      {
        title: "Module 2 — Tétées nocturnes",
        duration: "25 min",
        content:
          "On voit quand les tétées nocturnes sont normales, quand elles deviennent difficiles pour la maman, et comment observer la situation.",
      },
      {
        title: "Module 3 — Endormissement au sein",
        duration: "25 min",
        content:
          "On parle de l’endormissement au sein sans jugement : avantages, limites, et pistes douces si la maman souhaite faire évoluer les choses.",
      },
      {
        title: "Module 4 — Préserver la lactation",
        duration: "20 min",
        content:
          "On explique comment éviter de couper trop vite les tétées, surtout si bébé est encore petit ou si l’allaitement est fragile.",
      },
      {
        title: "Module 5 — Avancer progressivement",
        duration: "30 min",
        content:
          "On construit des étapes simples pour accompagner bébé sans brutalité et sans mettre la maman en difficulté.",
      },
    ],
  },
  {
    slug: "sevrage-nocturne",
    emoji: "🕊️",
    title: "Sevrage nocturne en douceur",
    shortTitle: "Sevrage nocturne",
    price: "50 €",
    description:
      "Préparer un sevrage nocturne progressif, respectueux de bébé, de la maman et de l’allaitement.",
    longDescription:
      "Une formation destinée aux mamans qui souhaitent réduire ou arrêter les tétées nocturnes avec douceur, en tenant compte de l’âge de bébé, de son rythme et de ses besoins émotionnels.",
    audience: [
      "Ton bébé a au moins 12 mois.",
      "Tu souhaites réduire les tétées de nuit.",
      "Tu veux éviter les pleurs prolongés.",
      "Tu veux avancer étape par étape.",
    ],
    benefits: [
      "Savoir si le bon moment est arrivé.",
      "Préparer bébé avant de commencer.",
      "Réduire progressivement les tétées.",
      "Garder une approche douce et cohérente.",
    ],
    modules: [
      {
        title: "Module 1 — Est-ce le bon moment ?",
        duration: "20 min",
        content:
          "On voit les signes qui peuvent montrer que bébé est prêt, et les situations où il vaut mieux attendre un peu.",
      },
      {
        title: "Module 2 — Préparer la transition",
        duration: "25 min",
        content:
          "On prépare bébé avec douceur : routine, mots simples, repères, implication du papa si possible.",
      },
      {
        title: "Module 3 — Réduire les tétées",
        duration: "30 min",
        content:
          "On met en place une réduction progressive, sans couper brutalement et sans laisser bébé seul avec ses pleurs.",
      },
      {
        title: "Module 4 — Gérer les réveils",
        duration: "25 min",
        content:
          "On apprend quoi faire pendant les réveils : présence, bercement, câlins, eau si besoin, mots rassurants.",
      },
      {
        title: "Module 5 — Stabiliser les nuits",
        duration: "30 min",
        content:
          "On consolide les progrès et on adapte si bébé traverse une période sensible : dents, maladie, séparation, changement.",
      },
    ],
  },
];

export function getFormationBySlug(slug: string) {
  return formations.find((formation) => formation.slug === slug);
}
