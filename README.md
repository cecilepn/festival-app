# Festival Éclosion

Application web du festival fictif **Éclosion**, réalisée dans le cadre du master 2 Développement à l’ECV. Le projet est construit avec Vue 3 et Vite, et communique avec Supabase pour récupérer des données.

## Technologies

- [Vue 3](https://vuejs.org/) — interface utilisateur
- [Vue Router](https://router.vuejs.org/) — navigation entre les pages
- [Vite](https://vite.dev/) — environnement de développement et build
- [TypeScript](https://www.typescriptlang.org/) — typage du code Vue
- [Supabase](https://supabase.com/) — accès aux données et stockage des images
- [Vitest](https://vitest.dev/) et Vue Test Utils — tests de composants
- [Tailwind CSS](https://tailwindcss.com/) et police locale Quasimoda

## Scripts

| Commande          | Description                                                          |
| ----------------- | -------------------------------------------------------------------- |
| `npm run dev`     | Lance le serveur de développement Vite.                              |
| `npm run build`   | Vérifie les types puis génère la version de production dans `dist/`. |
| `npm run preview` | Prévisualise localement le build de production.                      |
| `npm run types`   | Régénère `src/types/database.ts` à partir du schéma Supabase.        |
| `npm run test`    | Exécute les tests Vitest.                                            |

## Structure du projet

```text
src/
├── App.vue                    # Structure commune (en-tête, page courante, pied de page)
├── main.ts
├── global.css                 # Styles globaux et import de Tailwind
├── assets/
│   ├── fonts/                 # Fichiers de la typographie Quasimoda
│   └── styles/                # Couleurs, tokens, typographie et accessibilité
├── components/
│   ├── Artist/Card.vue        # Carte d’un artiste (nom, description, image)
│   ├── Event/Card.vue         # Carte d’un événement (horaires, lieu, artistes, statut)
│   ├── Layout/                # En-tête et pied de page
│   └── Section/               # Sections de contenu (Hero, Text, TextImage) et Zone, qui les affiche
├── composables/
│   ├── useArtist.ts           # État réactif d’un artiste
│   ├── useArtists.ts          # État réactif de la liste des artistes
│   ├── useEvent.ts            # État réactif d’un événement
│   ├── useEvents.ts           # État réactif de la programmation
│   ├── useSections.ts         # État réactif des sections d’une page
│   └── useVenues.ts           # État réactif de la liste des lieux
├── lib/
│   ├── supabaseClient.ts      # Initialisation du client Supabase typé
│   ├── handlers.ts            # Tous les appels à la base de données
│   ├── eventFormat.ts         # Formatage des dates et libellés des événements
│   └── getImageUrl.ts         # URL publique d’une image du bucket Supabase `images`
├── pages/                     # Une page par route (accueil, programmation, artistes…)
├── router/
│   └── index.ts               # Déclaration des routes
└── types/
    ├── database.ts            # Types générés par Supabase (ne pas modifier à la main)
    └── index.ts               # Alias de types par table (Artist, FestivalEvent, Venue…)
```

Les données suivent toujours le même chemin : un composant appelle un composable, qui appelle un handler, qui interroge Supabase. Les imports utilisent l’alias `@`, qui pointe sur `src/` (par exemple `@/lib/handlers`).

## Configuration

Le projet utilise Node.js 24, version indiquée dans le fichier `.nvmrc`.

Copiez `.env.example` vers `.env`, puis renseignez les variables Supabase (`VITE_SUPABASE_URL` et `VITE_SUPABASE_PUBLISHABLE_KEY`). Le client Supabase est exporté depuis `src/lib/supabaseClient.ts`.

Pour régénérer les types après une modification du schéma, connectez la CLI Supabase et liez le dossier au projet une première fois, puis lancez le script :

```bash
npx supabase login
npx supabase link --project-ref <project-ref>
npm run types
```

## Documentation

Pages de la documentation Supabase utiles au projet.

**Types générés et client typé**

- [Generating TypeScript Types](https://supabase.com/docs/guides/api/rest/generating-types) — commande `supabase gen types` et helpers `Tables<>`
- [TypeScript support (supabase-js)](https://supabase.com/docs/reference/javascript/typescript-support) — utilisation de `createClient<Database>`

**Storage (images)**

- [Storage](https://supabase.com/docs/guides/storage) — vue d’ensemble
- [Buckets – Fundamentals](https://supabase.com/docs/guides/storage/buckets/fundamentals) — buckets publics et privés
- [Serving assets from Storage](https://supabase.com/docs/guides/storage/serving/downloads) — URL publiques et signées

## Fonctionnalités actuelles

- Page d’accueil composée de sections gérées dans Supabase (hero, texte, texte et image), avec un aperçu de la programmation et des artistes.
- Programmation regroupée par jour, avec des filtres par jour et par lieu conservés dans l’URL.
- Page détaillée de chaque événement : type, horaires, lieu, artistes et statut (complet, annulé).
- Liste des artistes et page détaillée de chaque artiste, avec ses événements.
- Images des artistes et des sections stockées dans Supabase Storage.
- En-tête avec la navigation et un lien vers la billetterie externe, pied de page avec l’adresse et les mentions légales.
- Page 404 et états de chargement, d’erreur et de liste vide.
- Pages Infos pratiques, Notre histoire et Mentions légales créées, contenu à venir.

## Auteur

[Cécile PHAN NGUYEN](https://github.com/cecilepn) — Développement
