<template>
  <div>
    <UCard class="mb-8">
      <template #header>
        <h1 class="text-4xl font-bold">
          Nos Divisions
        </h1>
      </template>
      <p class="text-xl text-gray-700 dark:text-gray-300">
        Découvrez toutes les divisions du CEJEF et leurs spécificités
      </p>
    </UCard>

    <div class="space-y-6">
      <UCard
        v-for="division in divisions"
        :key="division.id"
        class="hover:shadow-lg transition"
      >
        <div class="flex justify-between items-start">
          <div class="flex-1">
            <h2 class="text-2xl font-semibold mb-2">{{ division.name }}</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ division.description }}
            </p>
            <div class="flex gap-2">
              <UBadge v-for="program in division.programs" :key="program" color="primary" variant="soft">
                {{ program }}
              </UBadge>
            </div>
          </div>
          <UButton
            icon="i-heroicons-arrow-right"
            trailing
            color="primary"
            @click="navigateTo(`/divisions/${division.slug}`)"
          >
            Détails
          </UButton>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
// Sample data - in production this would come from Directus
const divisions = ref([
  {
    id: 1,
    name: 'Division Technique',
    slug: 'technique',
    description: 'Formation dans les métiers techniques et industriels avec des infrastructures de pointe',
    programs: ['Électronique', 'Mécanique', 'Informatique']
  },
  {
    id: 2,
    name: 'Division Commerce',
    slug: 'commerce',
    description: 'Formation complète dans les métiers du commerce, de la vente et de la gestion',
    programs: ['Commerce de détail', 'Marketing', 'Gestion']
  },
  {
    id: 3,
    name: 'Division Santé-Social',
    slug: 'sante-social',
    description: 'Formation aux métiers de la santé et du travail social',
    programs: ['Soins infirmiers', 'Assistance socio-éducative', 'Aide-soignant']
  },
  {
    id: 4,
    name: 'Division Artisanat',
    slug: 'artisanat',
    description: 'Formation dans les métiers traditionnels de l\'artisanat',
    programs: ['Menuiserie', 'Maçonnerie', 'Peinture']
  },
  {
    id: 5,
    name: 'Division Nature-Alimentation',
    slug: 'nature-alimentation',
    description: 'Formation dans les métiers liés à la nature et à l\'alimentation',
    programs: ['Horticulture', 'Boulangerie', 'Pâtisserie']
  },
  {
    id: 6,
    name: 'Division Arts-Appliqués',
    slug: 'arts-appliques',
    description: 'Formation dans les métiers artistiques et du design',
    programs: ['Design graphique', 'Arts visuels', 'Multimédia']
  }
])
</script>
