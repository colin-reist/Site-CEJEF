<script setup lang="ts">
import { computed } from 'vue'
import { useNewsList } from '../../composables/useNews'
import { mapNewsCard } from '../../domain/mappers/newsMapper'
import newsImage1 from '~/assets/img/Actualites_image_2.webp'
import newsImage2 from '~/assets/img/Actualites_image_3.webp'

const runtimeConfig = useRuntimeConfig()
const directusAssetBase = runtimeConfig.public.directus?.url

const { data: newsData, pending: newsPending, error: newsError } = await useNewsList()

const newsItems = computed(() => {
  const items = newsData.value ?? []
  if (!items.length) {
    return []
  }
  return items.map((item: any) => mapNewsCard(item as any, directusAssetBase, newsImage1))
})
</script>

<template>
  <div>
    <h1 class="text-5xl text-center mb-5">Actualites</h1>
    <USeparator color="primary" size="lg" class="w-100 m-auto" />
    <section class="my-16 px-4">
      <div class="mx-auto max-w-4xl space-y-3 text-center text-sm text-slate-500">
        <p v-if="newsPending" class="mx-auto rounded-full bg-slate-100 px-4 py-2 text-slate-600">
          Chargement des actualites...
        </p>
        <p v-if="newsError" class="mx-auto rounded-full bg-amber-100 px-4 py-2 text-amber-800">
          Affichage d une selection par defaut : la connexion au CMS est temporairement indisponible.
        </p>
      </div>
      <div class="mx-auto mt-8 grid max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-3">
        <AppNewsCard v-for="item in newsItems" :key="item.to" v-bind="item" />
      </div>
    </section>
  </div>
</template>
