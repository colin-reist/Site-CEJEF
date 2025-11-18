# CEJEF — Site Division Santé Social Arts

Site Nuxt 4 statique utilisant Nuxt UI et Directus pour le contenu.

## Aperçu rapide
- **Framework** : Nuxt 4 (SSR/SSG) + Vue 3 + TypeScript.
- **UI** : Nuxt UI (`@nuxt/ui`), icônes Lucide via `@nuxt/icon`.
- **CMS** : Directus (URL publique via `NUXT_PUBLIC_DIRECTUS_URL`).
- **Build** : génération statique (`nuxt generate`) + preset Nitro `static`.

## Prérequis
- Node.js 20+ (recommandé) et npm (inclus).
- Accès à une instance Directus (local ou distante).

## Installation
```bash
# 1) Installer les dépendances
npm install

# 2) Préparer Nuxt (postinstall peut déjà le faire)
npm run postinstall
```

## Configuration des variables d’environnement
Créez un fichier `.env` à la racine et renseignez au minimum :
```bash
# URL publique de l’API Directus
NUXT_PUBLIC_DIRECTUS_URL=http://localhost:8055

# Token Directus (si nécessaire pour les requêtes serveur)
DIRECTUS_TOKEN=your-admin-or-static-token
```

`nuxt.config.ts` lit `DIRECTUS_TOKEN` côté serveur et `NUXT_PUBLIC_DIRECTUS_URL` côté client/public.

## Scripts npm
- `npm run dev` — démarre le serveur de dev (hot reload).
- `npm run build` — build de production.
- `npm run generate` — génère le site statique (dossier `.output/public`).
- `npm run preview` — prévisualise le build.
- `npm run postinstall` — exécute `nuxt prepare` (génération types/runtime).

## Démarrer en local
```bash
npm install
npm run dev
# puis ouvrir http://localhost:3000
```

## Build production (statique)
```bash
npm run generate
# sortie statique : .output/public
```
Pour un déploiement Node (SSR), utilisez `npm run build` puis `npm run preview` ou servez le dossier `.output`.

## Structure utile
- `app/pages/` — pages Nuxt.
- `app/components/` — composants partagés (navbar, footer, cartes, liens sociaux…).
- `app/assets/` — styles globaux (`assets/css/main.css`) et images.
- `plugins/directus.js` — client Directus.
- `nuxt.config.ts` — configuration Nuxt, modules, runtimeConfig, Nitro preset static.

## Notes design / thème
- Couleur primaire configurée dans `assets/css/main.css` via `--ui-primary` (Nuxt UI).
- Mode sombre pris en charge par Nuxt UI ; ajouter des classes `dark:` si nécessaire sur les sections spécifiques.

## Dépannage rapide
- **Types manquants après install** : exécuter `npm run postinstall`.
- **Env manquantes** : vérifier `.env` et redémarrer `npm run dev`.
- **Directus inaccessible** : tester l’URL `NUXT_PUBLIC_DIRECTUS_URL` dans le navigateur/curl.
