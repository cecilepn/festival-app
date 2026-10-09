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
└── lib/
    └── supabaseClient.ts      # Initialisation du client Supabase
```

## Configuration

Copiez `.env.example` vers `.env`, puis renseignez les variables Supabase (`VITE_SUPABASE_URL` et `VITE_SUPABASE_PUBLISHABLE_KEY`). Le client Supabase est exporté depuis `src/lib/supabaseClient.ts`.

## Fonctionnalités actuelles

-

## Auteur

[Cécile PHAN NGUYEN](https://github.com/cecilepn) — Développement
