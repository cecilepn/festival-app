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
└── lib/supabaseClient.js      # Initialisation du client Supabase
```

## Fonctionnalités actuelles

-

## Auteur

[Cécile PHAN NGUYEN](https://github.com/cecilepn) — Développement
