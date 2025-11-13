<script setup lang="ts">
const props = withDefaults(defineProps<{
	title: string
	description: string
	image: string
	to?: string
	ctaLabel?: string
}>(), {
	to: '#',
	ctaLabel: 'Lire la suite'
})
</script>

<template>
	<article class="flex h-full flex-col overflow-hidden rounded-[32px] border-4 border-primary bg-white text-center shadow-sm transition duration-200 hover:-translate-y-1">
		<img :src="props.image" :alt="props.title" class="h-52 w-full object-cover" loading="lazy" />
		<div class="flex flex-1 flex-col px-6 py-8">
			<h3 class="mb-4 text-2xl font-bold text-slate-900">
				{{ props.title }}
			</h3>
			<p class="flex-1 text-base text-slate-600 leading-relaxed">
				{{ props.description }}
			</p>
			<NuxtLink :to="props.to" class="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-2 font-semibold text-slate-900 shadow-sm hover:brightness-110">
				{{ props.ctaLabel }}
			</NuxtLink>
		</div>
	</article>
</template>
