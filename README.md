# Angie Atelier

Site vitrine pour un designer d'intérieur construit avec Next.js, React, Tailwind CSS et TypeScript.

## Stack

| Technologie | Version |
| --- | --- |
| Next.js | 16.2.5 |
| React | 19.2.4 |
| React DOM | 19.2.4 |
| Tailwind CSS | ^4 |
| @tailwindcss/postcss | ^4 |
| TypeScript | ^5 |
| ESLint | ^9 |
| eslint-config-next | 16.2.5 |
| @types/node | ^20 |
| @types/react | ^19 |
| @types/react-dom | ^19 |
| pnpm | 10.33.4 |

## Architecture

- `/` redirige vers `/accueil`.
- Les 5 pages vitrines sont `/accueil`, `/services`, `/projets`, `/about`, `/contact`.
- Le layout global et la navigation partagée vivent dans `app/layout.tsx` et `app/components/site-shell.tsx`.
- Les contenus réutilisables sont centralisés dans `app/lib/site-data.ts`.
- Le formulaire de contact utilise un composant client minimal avec ouverture de messagerie.

## Palette

Les couleurs globales sont définies dans `app/globals.css`.

| Rôle | Hex / valeur |
| --- | --- |
| Background | `#f6f0e7` |
| Foreground | `#1b1510` |
| Surface | `#fffaf4` |
| Surface strong | `#f0e6d9` |
| Muted | `#6f655b` |
| Border | `rgba(27, 21, 16, 0.12)` |
| Accent | `#9a734d` |
| Accent strong | `#6f4d31` |

## Typographies

- Titre: `Cormorant Garamond`
- Texte courant: `Manrope`

## Scripts

- `pnpm dev` lance le serveur de développement.
- `pnpm lint` vérifie la qualité du code.
- `pnpm build` génère la version de production.
- `pnpm start` lance l'application compilée.

## Choix de conception

- Structure simple et réutilisable pour rester scalable.
- Contenu centralisé pour éviter les doublons.
- Métadonnées SEO présentes sur chaque page.
- Layout léger, statique et performant par défaut.
