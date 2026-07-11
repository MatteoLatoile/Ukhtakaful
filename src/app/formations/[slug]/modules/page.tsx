import { notFound } from "next/navigation";
import AudioCoursePlayer, {
  type AudioCourseModule,
} from "../../../components/AudioCoursePlayer";
import { getFormationBySlug } from "@/lib/formations";

const audioPaths = {
  intro: "/audio/reveils-nocturnes/intro.mp3",
  module1: "/audio/reveils-nocturnes/module-1.mp3",
  module1Bis: "/audio/reveils-nocturnes/module-1-bis.mp3",
  module2: "/audio/reveils-nocturnes/module_2.mp3",
  module3: "/audio/reveils-nocturnes/module_3.mp3",
  module4: "/audio/reveils-nocturnes/module_4.mp3",
  module5: "/audio/reveils-nocturnes/module_5.mp3",
};

function createReveilsNocturnesModules(): AudioCourseModule[] {
  return [
    {
      id: "intro",
      title: "Introduction",
      subtitle: "De mon cœur au tien, ukhty",
      duration: "1 audio",
      summary:
        "Cette introduction pose le cadre de la préparation : déposer la fatigue, déculpabiliser la maman, comprendre l’esprit du programme et avancer avec douceur, sans méthode miracle ni pression.",
      textSections: [
        {
          title: "Avant de commencer",
          body:
            "Cette préparation s’ouvre comme un temps de pause. L’objectif n’est pas de promettre des nuits parfaites en quelques jours, ni de faire culpabiliser la maman.\n\nLe but est plutôt de t’aider à comprendre ce qui se passe dans le sommeil de ton enfant, à observer ses besoins, puis à avancer étape par étape selon son âge, son tempérament et votre réalité familiale.",
        },
        {
          title: "L’esprit de la préparation",
          body:
            "Le sommeil de ton enfant n’est pas un examen que tu dois réussir. Des nuits difficiles ne font pas de toi une mauvaise maman.\n\nElles indiquent simplement qu’il y a peut-être un rythme à observer, un langage à décoder, ou quelques ajustements à faire avec douceur.",
        },
        {
          title: "Une limite importante",
          body:
            "Cette préparation ne remplace jamais un avis médical. Si ton enfant semble souffrir, respire mal, ronfle, vomit souvent, ne prend pas bien du poids, ou si ton cœur de maman sent que quelque chose ne va pas, il faut consulter un professionnel de santé.\n\nLa sécurité de ton enfant passe toujours en priorité.",
        },
      ],
      lessons: [
        {
          id: "intro-audio",
          title: "Écouter l’introduction",
          duration: "Introduction",
          audioSrc: audioPaths.intro,
          description:
            "Un audio d’accueil pour comprendre l’approche Ukhtakaful, déposer la culpabilité et entrer doucement dans la préparation.",
        },
      ],
      keyPoints: [
        "Cette préparation n’est pas une méthode miracle.",
        "Des nuits difficiles ne font pas de toi une mauvaise maman.",
        "On avance selon l’âge, le tempérament et la réalité de chaque famille.",
        "La santé et la sécurité de l’enfant passent toujours en priorité.",
      ],
      visualCards: [
        {
          emoji: "🤍",
          title: "Déculpabiliser",
          description:
            "La fatigue peut faire douter, mais elle ne dit rien de ta valeur de maman.",
        },
        {
          emoji: "🧭",
          title: "Observer",
          description:
            "On ne cherche pas une faute, on cherche un fil conducteur.",
        },
        {
          emoji: "🌙",
          title: "Avancer doucement",
          description:
            "Le but est de comprendre avant de vouloir tout modifier.",
        },
      ],
    },
    {
      id: "module-1",
      title: "Comprendre le sommeil de bébé",
      subtitle: "Physiologie, cycles courts et micro-réveils",
      duration: "2 audios",
      summary:
        "Dans ce module, on va comprendre pourquoi bébé se réveille, comment fonctionnent ses cycles de sommeil, pourquoi les micro-réveils sont normaux, et comment observer avant d’intervenir.",
      images: [
        {
          src: "/bebem1.png",
          alt: "Schéma pastel sans visage sur le cycle de sommeil de bébé",
          caption:
            "Schéma récapitulatif : le sommeil de bébé est une succession de cycles courts, avec des phases de transition et des micro-réveils.",
        },
        {
          src: "/module-1-tableau.png",
          alt: "Fiche d’auto-repérage des réveils nocturnes",
          caption:
            "Tableau d’auto-repérage : observer ce qui revient le plus souvent, identifier une piste et choisir un premier ajustement doux.",
        },
      ],
      textSections: [
        {
          title: "Pourquoi commencer par comprendre ?",
          body:
            "Quand un bébé se réveille plusieurs fois par nuit, l’envie première est souvent que cela s’arrête vite. C’est normal : dormir est un besoin humain fondamental.\n\nMais avant de changer les habitudes, il faut comprendre ce que ces réveils peuvent exprimer. Un réveil nocturne ne signifie pas forcément qu’il y a un problème. Il peut être lié à l’âge, à la faim, au besoin de sécurité, aux cycles de sommeil, au rythme de journée, à un inconfort ou simplement au tempérament de l’enfant.",
        },
        {
          title: "Les grandes pistes à observer",
          body:
            "Plusieurs éléments peuvent influencer les nuits : la pression de sommeil, les siestes, l’exposition à la lumière, les tétées nocturnes, le besoin de proximité, la santé globale, les poussées dentaires, le reflux, le système nerveux ou encore les changements récents dans la vie de l’enfant.\n\nOn n’observe pas pour culpabiliser. On observe pour comprendre. C’est cette observation qui permet ensuite de savoir quelle piste ajuster en premier.",
        },
        {
          title: "Une approche douce",
          body:
            "Accompagner le sommeil d’un enfant ne veut pas dire le dresser à dormir. L’objectif est de respecter ses besoins tout en prenant aussi en compte les limites de la maman.\n\nRépondre aux besoins de bébé ne signifie pas s’effacer complètement. On cherche un équilibre : sécurité pour l’enfant, repos et soutien pour la maman.",
        },
      ],
      lessons: [
        {
          id: "module-1-audio",
          title: "Module 1 — Physiologie du sommeil",
          duration: "Partie 1",
          audioSrc: audioPaths.module1,
          description:
            "Dans cette première partie, on parle des réveils nocturnes, de la faim, du besoin de sécurité, du rythme circadien, de la santé et du système nerveux.",
        },
        {
          id: "module-1-bis-audio",
          title: "Module 1 bis — Cycles courts et micro-réveils",
          duration: "Partie 2",
          audioSrc: audioPaths.module1Bis,
          description:
            "Dans cette seconde partie, on comprend les cycles courts, les micro-réveils et la règle des quelques secondes d’observation.",
          beforeText: {
            eyebrow: "Transition",
            title: "Avant d’écouter le Module 1 bis",
            body:
              "Maintenant que tu as vu les grandes causes possibles des réveils nocturnes, on va zoomer sur un point essentiel : les cycles de sommeil.\n\nBeaucoup de mamans pensent que bébé se réveille complètement dès qu’il bouge, râle ou soupire. Pourtant, il est parfois simplement entre deux cycles. Cette distinction change beaucoup de choses, car elle permet d’observer quelques secondes avant d’intervenir, sans jamais tomber dans le laisser-pleurer.",
          },
        },
      ],
      keyPoints: [
        "Un réveil nocturne ne signifie pas forcément qu’il y a un problème.",
        "Le sommeil de bébé est immature, sensible et composé de cycles courts.",
        "Un micro-réveil peut être une simple transition entre deux cycles.",
        "Observer quelques secondes ne veut pas dire laisser pleurer.",
        "On cherche un équilibre entre les besoins de bébé et le repos de la maman.",
      ],
      visualCards: [
        {
          emoji: "🌙",
          title: "Cycles courts",
          description:
            "Le sommeil de bébé n’est pas un grand bloc continu. Il avance par cycles.",
        },
        {
          emoji: "👀",
          title: "Observation",
          description:
            "Noter les réveils aide à sortir du flou créé par la fatigue.",
        },
        {
          emoji: "🤱",
          title: "Sécurité",
          description:
            "La proximité, la voix, le sein ou les bras peuvent être des repères d’apaisement.",
        },
      ],
    },
    {
      id: "module-2",
      title: "Identifier la bonne piste",
      subtitle:
        "Réveils fréquents, nuits coupées, réveils matinaux et pleurs intenses",
      duration: "1 audio",
      summary:
        "Dans ce module, on apprend à ne pas tout mélanger. L’objectif est d’identifier la piste principale derrière les réveils : réveils fréquents, nuits coupées, réveils matinaux ou pleurs intenses.",
      textSections: [
        {
          title: "On cherche une piste, pas une faute",
          body:
            "Quand le manque de sommeil s’installe, tout peut se mélanger dans la tête : les dents, la faim, les siestes, l’allaitement, les bras, la tétine, la routine.\n\nLe risque, c’est de vouloir tout changer d’un coup. Et souvent, cela épuise encore plus. Ici, on va faire l’inverse : ralentir, regarder ce qui se répète, puis choisir une seule porte d’entrée.",
        },
        {
          title: "Les quatre grandes pistes",
          body:
            "La première piste concerne les réveils très fréquents, souvent toutes les 1 à 2 heures. Dans ce cas, on observe les repères d’endormissement : est-ce que bébé recherche exactement les mêmes conditions qu’au coucher pour se rendormir entre deux cycles ?\n\nLa deuxième piste concerne les réveils longs, quand bébé reste éveillé 45 minutes, 1 heure ou 2 heures. Là, on regarde souvent le rythme de journée, les siestes, la pression de sommeil et l’heure du coucher.\n\nLa troisième piste concerne les réveils très matinaux, avant 5h30. On vérifie alors la lumière, l’heure du coucher, la fatigue accumulée, la durée des siestes et le timing de la première sieste.\n\nLa quatrième piste concerne les réveils avec pleurs intenses. On regarde alors la sécurité affective, l’inconfort physique, une douleur possible, une séparation difficile, un changement récent ou une fatigue qui déborde.",
        },
        {
          title: "Choisir une seule porte d’entrée",
          body:
            "Si tu as l’impression que ton bébé coche toutes les cases, rassure-toi, c’est normal. Les causes peuvent s’entremêler quand la fatigue dure.\n\nMais pour avancer, on ne change pas tout. On choisit une seule piste de départ : ce qui revient le plus souvent, ce qui pèse le plus sur ta fatigue, et ce que tu te sens capable d’ajuster sans te mettre une pression immense.",
        },
      ],
      lessons: [
        {
          id: "module-2-audio",
          title: "Module 2 — Chercher une piste, pas une faute",
          duration: "Module 2",
          audioSrc: audioPaths.module2,
          description:
            "Un module pour apprendre à distinguer les différents types de réveils et choisir une piste principale sans culpabiliser.",
        },
      ],
      keyPoints: [
        "On ne cherche pas une faute chez la maman, on cherche une piste de compréhension.",
        "Les réveils fréquents peuvent orienter vers les repères d’endormissement.",
        "Les réveils longs peuvent orienter vers le rythme de journée et la pression de sommeil.",
        "Les réveils très matinaux demandent une observation fine avant de décaler le coucher.",
        "Les pleurs intenses invitent à vérifier les besoins physiques et émotionnels.",
        "On choisit une seule porte d’entrée pour ne pas s’épuiser.",
      ],
      visualCards: [
        {
          emoji: "🧩",
          title: "Réveils fréquents",
          description:
            "Observer les repères dont bébé a besoin pour se rendormir.",
        },
        {
          emoji: "⏳",
          title: "Nuits coupées",
          description:
            "Regarder la pression de sommeil, les siestes et le rythme de journée.",
        },
        {
          emoji: "🌅",
          title: "Réveils matinaux",
          description:
            "Vérifier la lumière, la fatigue accumulée et le timing des siestes.",
        },
      ],
    },
    {
      id: "module-3",
      title: "Apaiser les siestes",
      subtitle: "Rythme, fatigue saine et journal d’observation",
      duration: "1 audio",
      summary:
        "Dans ce module, on comprend comment la journée influence la nuit : siestes, temps d’éveil, fatigue saine, sur-fatigue, stimulation et journal d’observation.",
      images: [
        {
          src: "/module-3-tableau.png",
          alt: "Tableau bébé trop fatigué ou pas assez fatigué",
          caption:
            "Repère visuel : distinguer un bébé trop fatigué d’un bébé qui n’a pas encore assez de pression de sommeil.",
        },
        {
          src: "/module-3-histoire.png",
          alt: "Cas pratique d’un bébé de 6 mois et rythme de journée",
          caption:
            "Cas pratique : comprendre comment le rythme de journée peut influencer la qualité de la nuit.",
        },
        {
          src: "/module-3-observer-siestes.png",
          alt: "Mini-tableau pour observer les siestes",
          caption:
            "Mini-tableau : observer les siestes, comprendre ce qu’elles peuvent indiquer et tester un ajustement doux.",
        },
      ],
      textSections: [
        {
          title: "La nuit commence aussi dans la journée",
          body:
            "On pense souvent que les réveils nocturnes doivent se régler uniquement la nuit. Pourtant, la journée influence directement le coucher et la nuit.\n\nLes siestes, les temps d’éveil, la fatigue accumulée, les stimulations, les moments de calme et les transitions peuvent tous jouer sur le sommeil nocturne.",
        },
        {
          title: "Trop fatigué ou pas assez fatigué ?",
          body:
            "Un bébé trop fatigué peut pleurer fort, lutter au coucher, se réveiller en pleurs après une courte sieste, faire des réveils matinaux ou être très agité au moment de dormir.\n\nÀ l’inverse, un bébé qui n’a pas assez de pression de sommeil peut mettre très longtemps à s’endormir tout en restant calme, jouer dans son lit, gazouiller, ou se réveiller longtemps la nuit en étant plutôt de bonne humeur.\n\nCe n’est donc pas seulement l’heure qui compte. L’humeur de ton enfant est un indice essentiel.",
        },
        {
          title: "Observer sans devenir robot",
          body:
            "Le journal de bord n’est pas là pour contrôler chaque minute. Il est là pour redonner de la clarté.\n\nPendant 3 à 7 jours, tu peux noter l’heure du réveil le matin, les siestes, les temps d’éveil, l’heure du coucher, les réveils nocturnes, l’humeur de bébé et ton propre ressenti. Cela permet de voir ce qui se répète vraiment, au lieu de rester dans le flou créé par la fatigue.",
        },
      ],
      lessons: [
        {
          id: "module-3-audio",
          title: "Module 3 — Siestes, rythme et fatigue saine",
          duration: "Module 3",
          audioSrc: audioPaths.module3,
          description:
            "Un module pour comprendre le lien entre les siestes, les temps d’éveil, la fatigue accumulée et les réveils nocturnes.",
        },
      ],
      keyPoints: [
        "Les nuits ne se construisent pas uniquement la nuit.",
        "La journée influence le coucher et les réveils nocturnes.",
        "Une sieste courte n’est pas forcément un problème si bébé se réveille bien.",
        "L’humeur de bébé aide à comprendre s’il est trop fatigué ou pas assez fatigué.",
        "Un journal de bord de 3 à 7 jours peut aider à sortir du flou.",
        "On ajuste une chose à la fois, sans tout changer d’un coup.",
      ],
      visualCards: [
        {
          emoji: "☀️",
          title: "Journée",
          description:
            "Les siestes et les temps d’éveil préparent souvent la nuit.",
        },
        {
          emoji: "📝",
          title: "Journal",
          description:
            "Noter quelques repères aide à voir ce qui se répète vraiment.",
        },
        {
          emoji: "🌙",
          title: "Rythme",
          description:
            "Un rythme ajusté peut faciliter les siestes, le coucher et la nuit.",
        },
      ],
    },
    {
      id: "module-4",
      title: "Installer une routine du soir",
      subtitle: "Ralentir, sécuriser et accompagner vers le sommeil",
      duration: "1 audio",
      summary:
        "Dans ce module, on construit une routine du soir tenable : ralentir l’environnement, sécuriser l’enfant dans la chambre, puis l’accompagner progressivement vers le sommeil.",
      images: [
        {
          src: "/fiche-pratique.png",
          alt: "Fiche pratique routine du soir en trois temps",
          caption:
            "Fiche pratique : structurer une routine du soir simple en trois temps, réaliste et tenable.",
        },
      ],
      textSections: [
        {
          title: "Une routine n’est pas une mise en scène",
          body:
            "La routine du soir n’a pas besoin d’être parfaite, longue ou esthétique. Elle n’est pas là pour impressionner, mais pour donner un repère clair à l’enfant.\n\nElle dit doucement : la journée ralentit, tu es en sécurité, le sommeil approche.",
        },
        {
          title: "Les trois temps de la routine",
          body:
            "Le premier temps, c’est le ralenti environ 45 minutes avant le coucher : baisser les lumières, éteindre les écrans, éviter les jeux trop physiques, parler plus doucement et réduire les stimulations.\n\nLe deuxième temps, c’est sécuriser dans la chambre : une présence vraie, une voix douce, un câlin, une phrase qui revient chaque soir, un rituel simple et stable.\n\nLe troisième temps, c’est accompagner vers le sommeil au lit : garder les mêmes repères, le même ton, la même pénombre, et faire évoluer progressivement les aides existantes sans brutalité.",
        },
        {
          title: "Une routine tenable",
          body:
            "Une routine qui dure 1h30, qui épuise la maman et agite encore plus l’enfant, peut devenir trop lourde. Une bonne routine n’est pas forcément longue : elle est claire, prévisible et surtout tenable.\n\nTu peux garder seulement quelques repères simples : on tamise, on fait le câlin, on accompagne vers le dodo. Cela peut suffire.",
        },
      ],
      lessons: [
        {
          id: "module-4-audio",
          title: "Module 4 — Routine du soir",
          duration: "Module 4",
          audioSrc: audioPaths.module4,
          description:
            "Un module pour construire une routine du soir simple, réaliste, répétée et rassurante.",
        },
      ],
      keyPoints: [
        "La routine est un repère, pas une performance.",
        "On commence à ralentir l’environnement environ 45 minutes avant le coucher.",
        "La sécurité affective aide l’enfant à lâcher prise.",
        "On ne retire pas brutalement un repère qui sécurise bébé.",
        "Une routine efficace est claire, prévisible et tenable.",
        "On observe la tendance sur plusieurs jours, pas un seul coucher difficile.",
      ],
      visualCards: [
        {
          emoji: "🌙",
          title: "Ralentir",
          description:
            "Baisser la lumière, réduire les écrans et calmer l’environnement.",
        },
        {
          emoji: "🤍",
          title: "Sécuriser",
          description:
            "Une voix douce, une présence vraie et une phrase qui revient.",
        },
        {
          emoji: "🛏️",
          title: "Accompagner",
          description:
            "Transformer les repères doucement, sans brutalité.",
        },
      ],
    },
    {
      id: "module-5",
      title: "Plan sommeil sur 7 jours",
      subtitle: "Observer, choisir une priorité, ajuster puis faire le point",
      duration: "1 audio",
      summary:
        "Dans ce dernier module, on construit un plan d’action réaliste sur 7 jours : observer, choisir une piste, tester un seul ajustement, puis faire le point sans jugement.",
      textSections: [
        {
          title: "La règle d’or : une seule chose à la fois",
          body:
            "Quand une maman est épuisée par des nuits hachées, elle peut avoir envie de tout changer le même soir : les siestes, la routine, les tétées, les bras, le coucher, le lit ou la méthode.\n\nMais tout changer d’un coup risque de perdre tout le monde. Bébé ne sait plus quel repère suivre, et toi tu ne sais plus ce qui a aidé ou aggravé la situation. Ici, on avance autrement : une seule chose à la fois.",
        },
        {
          title: "Jours 1 et 2 : observer sans modifier",
          body:
            "Les deux premiers jours, tu ne changes rien. Tu observes simplement ce qui se passe vraiment : heures de réveil, siestes, durées, temps d’éveil, coucher, réveils nocturnes, humeur de bébé et ton propre ressenti.\n\nL’objectif est de sortir du flou émotionnel créé par la fatigue. On ne note pas ce que l’on craint, ni ce que l’on imagine, mais ce qui se passe réellement.",
        },
        {
          title: "Jour 3 : choisir une priorité",
          body:
            "Le troisième jour, tu choisis une seule porte d’entrée. Pose-toi ces questions : qu’est-ce qui pèse le plus lourd sur ma santé aujourd’hui ? Qu’est-ce qui revient le plus souvent ? Quelle piste semble la plus évidente après mes observations ?\n\nTu ne cherches pas la solution parfaite. Tu choisis simplement par où commencer.",
        },
        {
          title: "Jours 4 et 5 : tester un micro-ajustement",
          body:
            "Les jours 4 et 5, tu introduis un seul petit ajustement. Si la piste est le rythme, tu peux ajuster doucement le coucher, la dernière sieste ou une fenêtre d’éveil. Si la piste est le repère des bras, tu peux réduire progressivement l’intensité du bercement sans l’enlever brutalement.\n\nSi la piste est la routine, tu peux tamiser plus tôt, couper les écrans, réduire les stimulations et garder trois étapes simples. La clé, c’est la répétition, pas la perfection.",
        },
        {
          title: "Jours 6 et 7 : observer puis faire le point",
          body:
            "Le sixième jour, tu observes comment ton enfant intègre la nouveauté : est-ce plus fluide, identique, plus difficile, plus apaisé ? Est-ce que l’ajustement est tenable pour vous deux ?\n\nLe septième jour, tu fais le point sans utiliser les mots réussite ou échec. Demande-toi plutôt : qu’est-ce que j’ai compris ? Qu’est-ce qui semble apaisé ? Qu’est-ce qui est encore trop dur ? Qu’est-ce que je peux garder ? Quelle sera notre prochaine petite étape ?",
        },
        {
          title: "Demander de l’aide n’est pas un échec",
          body:
            "Parfois, malgré l’amour et les essais, la situation reste bloquée. Les causes s’entremêlent, l’épuisement devient trop lourd, et tu ne sais plus si cela vient du rythme, des tétées, des siestes, de l’endormissement, des dents, de la fatigue ou de l’habitude.\n\nDemander un accompagnement personnalisé n’est jamais un échec. Cela signifie simplement que tu as besoin d’être guidée, soutenue et épaulée avec douceur.",
        },
      ],
      lessons: [
        {
          id: "module-5-audio",
          title: "Module 5 — Plan sommeil sur 7 jours",
          duration: "Module 5",
          audioSrc: audioPaths.module5,
          description:
            "Un module final pour construire un plan d’action clair, doux et réaliste, sans tout changer d’un coup.",
        },
      ],
      keyPoints: [
        "On ne change jamais plusieurs choses en même temps.",
        "Les deux premiers jours servent à observer sans modifier.",
        "On choisit une seule priorité pour commencer.",
        "Les ajustements doivent être petits, réalistes et progressifs.",
        "La cohérence ne veut pas dire rigidité.",
        "Le bilan se fait sans jugement, sans parler d’échec.",
        "Un petit pas sincère vaut mieux qu’un grand changement brutal impossible à tenir.",
      ],
      visualCards: [
        {
          emoji: "👀",
          title: "Observer",
          description:
            "Les premiers jours servent à voir ce qui se répète vraiment.",
        },
        {
          emoji: "🎯",
          title: "Choisir",
          description:
            "Une seule porte d’entrée pour ne pas se perdre ni s’épuiser.",
        },
        {
          emoji: "🌱",
          title: "Ajuster",
          description:
            "Un petit changement doux, réaliste et tenable pour vous deux.",
        },
      ],
    },
  ];
}

export default async function ModulesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const formation = getFormationBySlug(slug);

  if (!formation) {
    notFound();
  }

  if (formation.slug !== "reveils-nocturnes") {
    notFound();
  }

  const modules = createReveilsNocturnesModules();

  return (
    <AudioCoursePlayer
      formationSlug={formation.slug}
      formationTitle={formation.title}
      modules={modules}
    />
  );
}
