<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
	title: string
	description: string
	date: Date | string
	image: string
	location?: string
	timeRange?: string
	tags?: string[]
	to?: string
	ctaLabel?: string
}>(), {
	to: '#',
	ctaLabel: 'Voir les details'
})

const eventDate = computed(() => {
	if (props.date instanceof Date) {
		return props.date
	}

	const parsedDate = new Date(props.date)

	return Number.isNaN(parsedDate.getTime()) ? new Date() : parsedDate
})

const formattedDay = computed(() =>
	eventDate.value.toLocaleDateString('fr-FR', { day: '2-digit' })
)

const formattedMonth = computed(() =>
	eventDate.value.toLocaleDateString('fr-FR', { month: 'short' }).replace('.', '')
)

const formattedWeekday = computed(() =>
	eventDate.value.toLocaleDateString('fr-FR', { weekday: 'long' })
)
</script>

<template>
	<article class="flex h-full flex-col overflow-hidden rounded-[32px] border-4 border-primary bg-white shadow-sm transition duration-200 hover:-translate-y-1">
		<div class="relative">
			<img :src="props.image" :alt="props.title" class="h-52 w-full object-cover" loading="lazy" />
			<div class="absolute left-6 top-6 rounded-2xl bg-white/95 px-4 py-3 text-center shadow">
				<p class="text-3xl font-bold leading-none text-primary">
					{{ formattedDay }}
				</p>
				<p class="uppercase text-xs font-semibold tracking-[0.2em] text-slate-600">
					{{ formattedMonth }}
				</p>
			</div>
		</div>
		<div class="flex flex-1 flex-col px-6 py-8">
			<p class="text-sm font-semibold uppercase text-slate-500">
				{{ formattedWeekday }}
			</p>
			<h3 class="mb-3 text-2xl font-bold text-slate-900">
				{{ props.title }}
			</h3>
			<p class="flex-1 text-base leading-relaxed text-slate-600">
				{{ props.description }}
			</p>
			<div v-if="props.location || props.timeRange" class="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
				<span v-if="props.location" class="rounded-full bg-slate-100 px-3 py-1 uppercase tracking-wide text-slate-700">
					Lieu : {{ props.location }}
				</span>
				<span v-if="props.timeRange" class="rounded-full bg-slate-100 px-3 py-1 uppercase tracking-wide text-slate-700">
					Horaire : {{ props.timeRange }}
				</span>
			</div>
			<div v-if="props.tags?.length" class="mt-4 flex flex-wrap gap-2">
				<span v-for="tag in props.tags" :key="tag" class="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
					{{ tag }}
				</span>
			</div>
			<NuxtLink :to="props.to" class="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-2 font-semibold uppercase tracking-wide text-slate-900 shadow-sm hover:brightness-110">
				{{ props.ctaLabel }}
			</NuxtLink>
		</div>
	</article>
</template>
