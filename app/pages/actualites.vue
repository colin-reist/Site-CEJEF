<script setup lang="ts">
import newsImage1 from '~/assets/img/Actualites_image_2.webp'
import newsImage2 from '~/assets/img/Actualites_image_3.webp'
const actualites = [
	{
		title: 'Developpement du nouveau site CEJEF',
		description: 'Le CNS construit une plateforme unique pour suivre toute lactualite CEJEF.',
		image: newsImage1,
		to: '/actualites/developpement-nouveau-site-cejef'
	},
	{
		title: 'Partenariats avec les institutions locales',
		description: 'Nouveaux accords pour faciliter les stages et projets dans le Jura.',
		image: newsImage2,
		to: '/actualites/partenariats-institutions'
	},
	{
		title: 'Vie de campus',
		description: 'Temps forts sportifs et culturels pour les etudiants tout au long de lannee.',
		image: newsImage1,
		to: '/actualites/vie-de-campus'
	}
]
</script>

<template>
    <h1 class="text-5xl text-center mb-5">Actualites</h1>
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
</template>