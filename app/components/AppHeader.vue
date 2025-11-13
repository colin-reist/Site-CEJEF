<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Accueil',
    to: '/',
    active: route.path.startsWith('/')
  },
  {
    label: 'Campus',
    to: '/campus',
    active: route.path.startsWith('/campus')
  },
  {
    label: 'Acutalités',
    to: '/actualites',
  },
  {
    label: 'Agenda',
    to: '/agenda',
  },
  {
    label: 'Contact',
    to: '/contact',
  }
])
</script>

<template>
  <UHeader title="" class="p-10 px-4 sm:px-6 lg:px-8 ml-5">
      <template #left>
        <Logo class="h-11"/>
      </template>
      <UNavigationMenu :items="items" class=""/>
      <template #right>
        <UButton variant="solid" size="md" class="ml-4 p-2.5" href="/nos-formations" target="_blank">NOS FORMATIONS</UButton>
        <UColorModeButton/>
      </template>
  </UHeader>
</template>