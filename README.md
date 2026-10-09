# Festival Éclosion

Application web du festival fictif **Éclosion**, réalisée dans le cadre du master 2 Développement à l’ECV. Le projet est construit avec Vue 3 et Vite, et communique avec Supabase pour récupérer des données.

## Technologies

- [Vue 3](https://vuejs.org/) — interface utilisateur
- [Vite](https://vite.dev/) — environnement de développement et build
- [TypeScript](https://www.typescriptlang.org/) — typage du code Vue
- [Supabase](https://supabase.com/) — accès aux données
- [Vitest](https://vitest.dev/) et Vue Test Utils — tests de composants
- CSS natif et police locale Quasimoda

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
├── App.vue                    # Page de la programmation
├── main.ts
├── global.css                 # Styles globaux
├── assets/
│   ├── fonts/                 # Fichiers de la typographie Quasimoda
│   └── styles/                # Reset, typographie, accessibilité et utilitaires CSS
├── components/
│   └── EventCard.vue          # Carte d’un événement (horaires, lieu, artistes, statut)
├── composables/
│   ├── useArtists.ts          # État réactif de la liste des artistes
│   └── useEvents.ts           # État réactif de la programmation
├── lib/
│   ├── supabaseClient.ts      # Initialisation du client Supabase typé
│   └── handlers.ts            # Tous les appels à la base de données
└── types/
    ├── database.ts            # Types générés par Supabase (ne pas modifier à la main)
    └── index.ts               # Alias de types par table (Artist, FestivalEvent, Venue…)
```

Les données suivent toujours le même chemin : un composant appelle un composable, qui appelle un handler, qui interroge Supabase. Les imports utilisent l’alias `@`, qui pointe sur `src/` (par exemple `@/lib/handlers`).

## Configuration

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

- Affichage de la programmation du festival, regroupée par jour.
- Pour chaque événement : horaires, lieu, artistes et statut (complet, annulé).
- États de chargement, d’erreur et de liste vide.

## Auteur

[Cécile PHAN NGUYEN](https://github.com/cecilepn) — Développement
