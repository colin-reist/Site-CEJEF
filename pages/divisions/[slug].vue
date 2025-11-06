<template>
  <div>
    <UButton
      icon="i-heroicons-arrow-left"
      variant="ghost"
      class="mb-6"
      @click="navigateTo('/divisions')"
    >
      Retour aux divisions
    </UButton>

    <UCard class="mb-8">
      <template #header>
        <h1 class="text-4xl font-bold">{{ division.name }}</h1>
      </template>
      <div class="space-y-6">
        <div>
          <h2 class="text-2xl font-semibold mb-3">Description</h2>
          <p class="text-gray-700 dark:text-gray-300 text-lg">
            {{ division.description }}
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-3">Programmes de formation</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UCard v-for="program in division.programs" :key="program">
              <div class="flex items-center gap-3">
                <UIcon name="i-heroicons-academic-cap" class="text-primary text-2xl" />
                <span class="font-medium">{{ program }}</span>
              </div>
            </UCard>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-3">Informations pratiques</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-map-pin" class="text-primary text-xl mt-1" />
              <div>
                <p class="font-semibold">Adresse</p>
                <p class="text-gray-600 dark:text-gray-400">{{ division.address }}</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-phone" class="text-primary text-xl mt-1" />
              <div>
                <p class="font-semibold">Téléphone</p>
                <p class="text-gray-600 dark:text-gray-400">{{ division.phone }}</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-envelope" class="text-primary text-xl mt-1" />
              <div>
                <p class="font-semibold">Email</p>
                <p class="text-gray-600 dark:text-gray-400">{{ division.email }}</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-clock" class="text-primary text-xl mt-1" />
              <div>
                <p class="font-semibold">Horaires</p>
                <p class="text-gray-600 dark:text-gray-400">{{ division.hours }}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-3">Contact</h2>
          <UButton
            icon="i-heroicons-envelope"
            color="primary"
            size="lg"
            @click="navigateTo('/contact')"
          >
            Nous contacter
          </UButton>
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug

// Sample data - in production this would come from Directus
const divisionsData: any = {
  'technique': {
    name: 'Division Technique',
    slug: 'technique',
    description: 'La Division Technique du CEJEF offre une formation complète dans les métiers techniques et industriels. Nos infrastructures modernes et nos équipements de pointe permettent aux étudiants d\'acquérir les compétences nécessaires pour réussir dans le monde professionnel.',
    programs: ['Électronique', 'Mécanique', 'Automatisation', 'Informatique industrielle', 'Maintenance'],
    address: 'Rue de la Technique 12, 2800 Delémont',
    phone: '+41 32 123 45 67',
    email: 'technique@cejef.ch',
    hours: 'Lundi - Vendredi: 08:00 - 17:00'
  },
  'commerce': {
    name: 'Division Commerce',
    slug: 'commerce',
    description: 'La Division Commerce forme les professionnels de demain dans les domaines du commerce, de la vente et de la gestion. Notre approche pratique et nos partenariats avec le monde économique garantissent une formation adaptée aux réalités du marché.',
    programs: ['Commerce de détail', 'Marketing et communication', 'Gestion d\'entreprise', 'E-commerce', 'Comptabilité'],
    address: 'Rue du Commerce 8, 2800 Delémont',
    phone: '+41 32 123 45 68',
    email: 'commerce@cejef.ch',
    hours: 'Lundi - Vendredi: 08:00 - 17:00'
  },
  'sante-social': {
    name: 'Division Santé-Social',
    slug: 'sante-social',
    description: 'La Division Santé-Social prépare les futurs professionnels de la santé et du travail social. Avec des formateurs expérimentés et des stages pratiques, nous formons des professionnels compétents et engagés.',
    programs: ['Soins infirmiers', 'Assistance socio-éducative', 'Aide-soignant', 'Accompagnement social', 'Éducation de l\'enfance'],
    address: 'Rue de la Santé 15, 2800 Delémont',
    phone: '+41 32 123 45 69',
    email: 'sante-social@cejef.ch',
    hours: 'Lundi - Vendredi: 08:00 - 17:00'
  },
  'artisanat': {
    name: 'Division Artisanat',
    slug: 'artisanat',
    description: 'La Division Artisanat perpétue les métiers traditionnels tout en intégrant les techniques modernes. Nos ateliers équipés permettent aux apprentis de développer leur savoir-faire dans un environnement professionnel.',
    programs: ['Menuiserie', 'Ébénisterie', 'Maçonnerie', 'Peinture en bâtiment', 'Carrelage'],
    address: 'Rue de l\'Artisanat 20, 2800 Delémont',
    phone: '+41 32 123 45 70',
    email: 'artisanat@cejef.ch',
    hours: 'Lundi - Vendredi: 07:00 - 16:00'
  },
  'nature-alimentation': {
    name: 'Division Nature-Alimentation',
    slug: 'nature-alimentation',
    description: 'La Division Nature-Alimentation forme aux métiers de la nature et de l\'alimentation. Du jardin à l\'assiette, nos programmes couvrent l\'ensemble de la chaîne alimentaire avec un accent sur la durabilité et la qualité.',
    programs: ['Horticulture', 'Paysagisme', 'Boulangerie-pâtisserie', 'Cuisine', 'Production alimentaire'],
    address: 'Rue de la Nature 25, 2800 Delémont',
    phone: '+41 32 123 45 71',
    email: 'nature-alimentation@cejef.ch',
    hours: 'Lundi - Vendredi: 06:00 - 16:00'
  },
  'arts-appliques': {
    name: 'Division Arts-Appliqués',
    slug: 'arts-appliques',
    description: 'La Division Arts-Appliqués développe la créativité et les compétences techniques dans les métiers artistiques et du design. Nos studios et équipements numériques offrent un environnement propice à l\'expression artistique.',
    programs: ['Design graphique', 'Arts visuels', 'Photographie', 'Multimédia', 'Design d\'intérieur'],
    address: 'Rue des Arts 30, 2800 Delémont',
    phone: '+41 32 123 45 72',
    email: 'arts-appliques@cejef.ch',
    hours: 'Lundi - Vendredi: 08:00 - 18:00'
  }
}

const division = ref(divisionsData[slug as string] || {
  name: 'Division non trouvée',
  slug: '',
  description: 'Cette division n\'existe pas.',
  programs: [],
  address: '',
  phone: '',
  email: '',
  hours: ''
})

// Example for future Directus integration:
// const { directus, readItem } = useDirectus()
// const { data: division } = await useAsyncData(`division-${slug}`, async () => {
//   return await directus.request(
//     readItem('divisions', slug as string, {
//       fields: ['*']
//     })
//   )
// })
</script>
