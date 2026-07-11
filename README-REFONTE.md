# Refonte graphique Ukhtakaful

Refonte visuelle complète du site, **palette de couleurs conservée à l'identique** (crème, rose, menthe, jaune). Aucune dépendance ajoutée : toujours Next.js 16 + Tailwind 4 + motion.

## Comment l'utiliser

1. Copie le contenu de ce dossier dans ton repo (remplace `src/`, `middleware.ts` et les configs).
2. Garde ton dossier `public/` actuel (logo, images des modules, audios) et ton `.env.local` — rien ne change de ce côté.
3. `npm install` puis `npm run dev`.

## Ce qui a changé

**Design system (`globals.css`)**
- Nouvelle typographie : **Fraunces** (titres, serif chaleureux) + **Plus Jakarta Sans** (texte), chargées via `next/font`.
- Classes réutilisables : `.btn` (4 variantes), `.card`, `.card-cream`, `.eyebrow`, `.underline-swash` (soulignement dessiné à la main sous les mots clés).
- Tout est rangé dans `@layer components` pour rester surchargeable par Tailwind.

**Composants**
- `Header` : nav avec état actif, effet au scroll, **menu mobile** (absent avant), CTA.
- `Footer` : 4 colonnes (marque, navigation, formations, contact) avec icônes.
- `Breadcrumb` : version discrète, sans gros encadré.
- `FloatingShapes` : croissant de lune + étoiles scintillantes SVG à la place des carrés flous.
- `FormationCard` : icône dédiée par formation (lune / cœur / plume), badge nombre de modules, prix mis en valeur.
- `icons.tsx` (nouveau) : set d'icônes SVG cohérent qui remplace la plupart des emojis.
- `Reveal.tsx` (nouveau) : apparitions douces au scroll (respecte `prefers-reduced-motion`).
- `AudioCoursePlayer` : même logique (progression localStorage, media session), habillage raffiné.

**Pages**
- Accueil : hero repensé (titre serif + soulignement, points de réassurance), section « Comment ça marche » (nouvelle), approche, CTA nuit étoilée.
- Formations : hero en carte, 3 infos d'accès (mot de passe, espace privé, audios), bloc « tu hésites ? ».
- Détail formation : utilise désormais `audience` et `benefits` des données (« Cette formation est pour toi si… »), sommaire généré pour toutes les formations.
- Accès : formulaire épuré, rappels amâna en citations avec liseré, même fonctionnement (`/api/unlock`).
- Accompagnements : cartes tarifs harmonisées à la palette (les couleurs bleu marine hors palette ont été supprimées), offre « Le plus complet » mise en avant.
- À propos / Contact : mise en page éditoriale, cartes Telegram / Email.
- `not-found.tsx` (nouveau) : page 404 douce.

**Inchangé (fonctionnel)**
`middleware.ts`, `src/lib/auth.ts`, `src/lib/formations.ts`, `src/app/api/*`, contenu des modules audio.
