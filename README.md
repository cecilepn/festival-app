# Festival Éclosion

Application web du festival fictif **Éclosion**, réalisée dans le cadre du master 2 Développement à l’ECV. Le projet est construit avec Vue 3 et Vite, et communique avec Supabase et Prismic pour récupérer des données.

## Technologies

- [Vue 3](https://vuejs.org/) — interface utilisateur
- [Vite](https://vite.dev/) — environnement de développement et build
- [TypeScript](https://www.typescriptlang.org/) — typage du code Vue
- [Supabase](https://supabase.com/) — accès aux données
- [Vitest](https://vitest.dev/) et Vue Test Utils — tests de composants
- [Prismic](https://prismic.io/docs) - accès aux contenus dynamiques
- CSS natif et police locale Quasimoda

## Scripts

| Commande          | Description                                                          |
| ----------------- | -------------------------------------------------------------------- |
| `npm run dev`     | Lance le serveur de développement Vite.                              |
| `npm run build`   | Vérifie les types puis génère la version de production dans `dist/`. |
| `npm run preview` | Prévisualise localement le build de production.                      |
| `npm run test`    | Exécute les tests Vitest.                                            |

## Structure du projet

```text
src/
├── App.vue
├── main.ts
├── global.css                 # Styles globaux
├── assets/
│   ├── fonts/                 # Fichiers de la typographie Quasimoda
│   └── styles/                # Reset, typographie, accessibilité et utilitaires CSS
├── components/                # Composants
└── lib/
    ├── prismicClient.ts       # Initialisation du client Prismic
    └── supabaseClient.ts      # Initialisation du client Supabase
```

## Configuration

Copiez `.env.example` vers `.env`, puis renseignez les variables Supabase et le nom du dépôt Prismic (`VITE_PRISMIC_REPOSITORY_NAME`). Le nom du dépôt correspond à son identifiant dans l’URL Prismic. Le client Prismic est exporté depuis `src/lib/prismicClient.ts` et peut être utilisé dans les composants pour interroger les documents.

## Navigation et pages Prismic

La navigation utilise Vue Router (`src/router/index.ts`). Les vues sont dans `src/views/` et le composant racine affiche la vue courante avec `<RouterView />`. Pour relier des pages Prismic aux URL, ajoutez une route dynamique correspondant au type de document choisi (par exemple `/pages/:uid`) et chargez le document par UID.

Les zones de slices se rendent avec `<SliceZone>` de `@prismicio/vue`. Créez un composant Vue par slice dans `src/slices/` puis associez les noms machine des slices aux composants dans `defineSliceZoneComponents`. Les champs simples du document peuvent être rendus séparément avec `<PrismicRichText>` et `<PrismicImage>`. Les noms de types, UID et slices doivent correspondre aux modèles définis dans Prismic.

## Fonctionnalités actuelles

-

## Auteur

[Cécile PHAN NGUYEN](https://github.com/cecilepn) — Développement
