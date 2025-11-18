<script setup lang="ts">
import { computed } from 'vue'
import { useNewsItem } from '../../../composables/useNews'
import { mapNewsDetail } from '../../../domain/mappers/newsMapper'
import fallbackImage from '~/assets/img/Actualites_image_2.webp'

const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const directusAssetBase = runtimeConfig.public.directus?.url

const { data, pending, error } = await useNewsItem(route.params.id as string)

const mapped = computed(() => (data.value ? mapNewsDetail(data.value as any, directusAssetBase, fallbackImage) : null))

const coverImage = computed(() => mapped.value?.image || fallbackImage)

useHead(() => ({
	title: mapped.value?.title ? `${mapped.value.title} | Actualites` : 'Actualite'
}))
</script>

<template>
	<section class="px-4 py-12">
		<div class="mx-auto max-w-4xl">
			<div v-if="pending" class="rounded-3xl bg-slate-50 px-6 py-10 text-center text-slate-600">
				Chargement de l actualite...
			</div>
			<div v-else-if="error" class="rounded-3xl bg-amber-50 px-6 py-10 text-center text-amber-800">
				Cette actualite n est pas disponible ou a ete retiree.
			</div>
			<article v-else>
				<img :src="coverImage" :alt="mapped?.title" class="mb-8 w-full rounded-[32px] object-cover shadow" />
				<h1 class="mt-2 text-4xl font-bold text-slate-900">
					{{ mapped?.title }}
				</h1>
				<p class="mt-4 text-lg text-slate-600">
					{{ mapped?.description }}
				</p>
				<div class="prose prose-slate mt-8 max-w-none" v-html="mapped?.body ?? ''" />
				<NuxtLink to="/actualites" class="mt-12 inline-flex items-center text-primary hover:underline">
					<span class="i-lucide-arrow-left mr-2 h-4 w-4"></span>
					Retour aux actualites
				</NuxtLink>
			</article>
		</div>
	</section>
</template>
