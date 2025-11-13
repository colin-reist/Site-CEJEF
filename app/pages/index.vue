<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from '@nuxt/ui'

const links = ref<ButtonProps[]>([
	{
		label: 'NOS FORMATIONS',
		to: '/formations',
		icon: 'i-lucide-graduation-cap'
	},
	{
		label: 'Nous contacter',
		to: '/contact',
		color: 'neutral',
		variant: 'subtle',
		trailingIcon: 'i-lucide-arrow-right'
	}
])

const actualites = [
	{
		title: 'Développement d’un nouveau site CEJEF',
		description: 'Le CNS développe actuellement un site pour tout le CEJEF !',
		image: '../assets/img/Actualites_image_2.webp',
		to: '/actualites/developpement-nouveau-site-cejef'
	},
	{
		title: 'Actualité 3',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.',
		image: '../assets/img/Actualites_image_3.webp',
		to: '/actualites/actualite-3'
	},
	{
		title: 'Actualité 2',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra nulla ut metus.',
		image: '../assets/img/Actualites_image_2.webp',
		to: '/actualites/actualite-2'
	}
]
</script>

<template>
	<div>
		<UPageHero title="Bienvenu à la division Santé Social Art" description="Le futur de la santé jurassienne" class="pt-px" orientation="horizontal"
			:links="links">
			<img src="../assets/img/DIVSSA.jpg" alt="Division image"
				class="hidden md:block object-cover rounded-lg shadow-md size-hero slideUp" />
		</UPageHero>

		<h1 class="text-5xl text-center mb-5">Agenda</h1>
		<USeparator color="primary" size="lg" class="w-100 m-auto" />
		<section class="my-16 flex flex-col gap-16 px-4 md:flex-row">
			<div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-3">
				<AppAgendaCard
					v-for="item in actualites"
					:key="item.title"
					v-bind="item"
				/>
			</div>
		</section>

		<h1 class="text-5xl text-center mb-5">Actualités</h1>
		<USeparator color="primary" size="lg" class="w-100 m-auto" />
		<section class="my-16 px-4">
			<div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-3">
				<AppNewsCard
					v-for="item in actualites"
					:key="item.title"
					v-bind="item"
				/>
			</div>
		</section>

		<h1 class="text-5xl text-center mb-5">Nous contacter</h1>
		<USeparator color="primary" size="lg" class="w-100 m-auto" />
	</div>
</template>
