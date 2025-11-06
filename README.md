# Site-CEJEF

Site web des divisions du CEJEF qui repose sur Directus, Vue, Nuxt.js et NuxtUI.

## 🏗️ Stack Technique

- **Nuxt.js 4** - Framework Vue.js pour applications SSR/SSG
- **Vue 3** - Framework JavaScript progressif
- **NuxtUI** - Bibliothèque de composants UI moderne
- **Directus** - CMS Headless pour la gestion de contenu
- **TypeScript** - Typage statique pour JavaScript
- **Tailwind CSS** - Framework CSS utility-first (inclus avec NuxtUI)

## 🚀 Installation

### Prérequis

- Node.js 20.x ou supérieur
- npm ou yarn
- Docker et Docker Compose (optionnel, pour Directus)

### Installation du projet

```bash
# Cloner le repository
git clone https://github.com/colin-reist/Site-CEJEF.git
cd Site-CEJEF

# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env
```

### Configuration

Créer un fichier `.env` à la racine du projet avec les variables suivantes :

```env
DIRECTUS_URL=http://localhost:8055
NUXT_PUBLIC_DIRECTUS_URL=http://localhost:8055
```

## 🐳 Lancer avec Docker

Pour lancer l'application complète avec Directus :

```bash
# Démarrer tous les services
docker-compose up -d

# Voir les logs
docker-compose logs -f

# Arrêter les services
docker-compose down
```

Services disponibles :
- **Application Nuxt** : http://localhost:3000
- **Directus CMS** : http://localhost:8055
  - Email admin : admin@cejef.ch
  - Mot de passe : admin123

## 💻 Développement local

### Démarrer le serveur de développement

```bash
npm run dev
```

L'application sera accessible sur http://localhost:3000

### Build de production

```bash
# Générer l'application pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

### Génération statique

```bash
npm run generate
```

## 📁 Structure du projet

```
Site-CEJEF/
├── app/
│   └── app.vue                 # Composant racine de l'application
├── pages/
│   ├── index.vue              # Page d'accueil
│   ├── contact.vue            # Page de contact
│   └── divisions/
│       ├── index.vue          # Liste des divisions
│       └── [slug].vue         # Page détail d'une division
├── components/                 # Composants Vue réutilisables
├── layouts/
│   └── default.vue            # Layout par défaut avec navigation
├── composables/
│   └── useDirectus.ts         # Composable pour l'API Directus
├── public/                    # Fichiers statiques
├── nuxt.config.ts             # Configuration Nuxt
├── docker-compose.yml         # Configuration Docker Compose
├── Dockerfile                 # Dockerfile pour l'application
└── package.json              # Dépendances npm
```

## 🎨 Fonctionnalités

### Pages implémentées

- **Accueil** (`/`) - Présentation du CEJEF et aperçu des divisions
- **Divisions** (`/divisions`) - Liste complète des divisions
- **Détail Division** (`/divisions/[slug]`) - Informations détaillées sur chaque division
- **Contact** (`/contact`) - Formulaire de contact et coordonnées

### Divisions disponibles

1. **Division Technique** - Métiers techniques et industriels
2. **Division Commerce** - Commerce, vente et gestion
3. **Division Santé-Social** - Santé et travail social
4. **Division Artisanat** - Métiers traditionnels de l'artisanat
5. **Division Nature-Alimentation** - Nature et alimentation
6. **Division Arts-Appliqués** - Métiers artistiques et design

## 🔌 Intégration Directus

Le projet est configuré pour utiliser Directus comme CMS headless. Le composable `useDirectus` permet d'interagir facilement avec l'API Directus :

```typescript
// Exemple d'utilisation
const { directus, readItems } = useDirectus()

const { data: divisions } = await useAsyncData('divisions', async () => {
  return await directus.request(readItems('divisions'))
})
```

### Configuration Directus

Pour connecter Directus, créer les collections suivantes dans l'interface admin :

- **divisions** - Collection pour les divisions du CEJEF
  - `id` (UUID)
  - `name` (String)
  - `slug` (String)
  - `description` (Text)
  - `programs` (Array/JSON)
  - `address` (String)
  - `phone` (String)
  - `email` (String)
  - `hours` (String)

## 🎯 Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Build l'application pour la production
- `npm run generate` - Génère une version statique
- `npm run preview` - Prévisualise le build de production

## 🌐 Déploiement

### Vercel / Netlify

Le projet peut être déployé facilement sur Vercel ou Netlify :

1. Connecter votre repository GitHub
2. Configurer les variables d'environnement
3. Déployer automatiquement à chaque push

### Docker

Pour déployer avec Docker en production :

```bash
docker-compose -f docker-compose.yml up -d
```

## 📝 Licence

Ce projet est développé pour le CEJEF - Centre d'enseignement professionnel.

## 🤝 Contribution

Pour contribuer au projet :

1. Fork le repository
2. Créer une branche pour votre fonctionnalité
3. Commit vos changements
4. Push vers la branche
5. Créer une Pull Request

## 📞 Support

Pour toute question ou assistance :
- Email : info@cejef.ch
- Téléphone : +41 32 123 45 60
