<template>
  <div>
    <UCard class="mb-8">
      <template #header>
        <h1 class="text-4xl font-bold">
          Bienvenue au CEJEF
        </h1>
      </template>
      <p class="text-xl text-gray-700 dark:text-gray-300">
        Centre d'enseignement professionnel - Découvrez nos différentes divisions
      </p>
    </UCard>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <UCard
        v-for="division in divisions"
        :key="division.id"
        class="hover:shadow-lg transition cursor-pointer"
        @click="navigateTo(`/divisions/${division.slug}`)"
      >
        <template #header>
          <h2 class="text-xl font-semibold">{{ division.name }}</h2>
        </template>
        <p class="text-gray-600 dark:text-gray-400">
          {{ division.description }}
        </p>
        <template #footer>
          <UButton
            icon="i-heroicons-arrow-right"
            trailing
            color="primary"
            variant="ghost"
            @click="navigateTo(`/divisions/${division.slug}`)"
          >
            En savoir plus
          </UButton>
        </template>
      </UCard>
    </div>

    <UCard class="mt-12">
      <template #header>
        <h2 class="text-2xl font-bold">À propos du CEJEF</h2>
      </template>
      <div class="prose dark:prose-invert max-w-none">
        <p>
          Le CEJEF (Centre d'enseignement professionnel) regroupe plusieurs divisions
          spécialisées dans différents domaines professionnels. Notre mission est de
          fournir une formation de qualité adaptée aux besoins du marché du travail.
        </p>
        <p>
          Chaque division offre des programmes spécifiques et dispose d'infrastructures
          modernes pour garantir une expérience d'apprentissage optimale.
        </p>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
// Sample data - in production this would come from Directus
const divisions = ref([
  {
    id: 1,
    name: 'Division Technique',
    slug: 'technique',
    description: 'Formation dans les métiers techniques et industriels'
  },
  {
    id: 2,
    name: 'Division Commerce',
    slug: 'commerce',
    description: 'Formation dans les métiers du commerce et de la vente'
  },
  {
    id: 3,
    name: 'Division Santé-Social',
    slug: 'sante-social',
    description: 'Formation dans les métiers de la santé et du social'
  },
  {
    id: 4,
    name: 'Division Artisanat',
    slug: 'artisanat',
    description: 'Formation dans les métiers de l\'artisanat'
  },
  {
    id: 5,
    name: 'Division Nature-Alimentation',
    slug: 'nature-alimentation',
    description: 'Formation dans les métiers de la nature et de l\'alimentation'
  },
  {
    id: 6,
    name: 'Division Arts-Appliqués',
    slug: 'arts-appliques',
    description: 'Formation dans les métiers artistiques et créatifs'
  }
])

// Fetch divisions from Directus (example for future implementation)
// const { directus, readItems } = useDirectus()
// const { data: divisions } = await useAsyncData('divisions', async () => {
//   return await directus.request(readItems('divisions'))
// })
</script>
