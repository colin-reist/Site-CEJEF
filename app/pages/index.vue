<script setup lang="ts">
import { ref, watch } from 'vue'
import type { ButtonProps } from '@nuxt/ui'
import heroImage from '~/assets/img/DIVSSA.jpg'
import agendaImage1 from '~/assets/img/Accueil_Agenda_image_1.webp'
import agendaImage2 from '~/assets/img/Accueil_Agenda_image_2.webp'
import agendaImage3 from '~/assets/img/Accueil_Agenda_image_3.webp'
import newsImage1 from '~/assets/img/Actualites_image_2.webp'
import newsImage2 from '~/assets/img/Actualites_image_3.webp'

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

const agendaItems = [
	{
		title: 'Portes ouvertes filiere sante',
		description: 'Rencontrez les formateurs, visitez les ateliers pratiques et posez toutes vos questions sur les admissions.',
		image: agendaImage1,
		date: new Date('2024-06-15T09:00:00'),
		location: 'Campus Delemont',
		timeRange: '09h00 - 12h30',
		tags: ['Decouverte', 'Orientation'],
		to: '/agenda/portes-ouvertes-sante'
	},
	{
		title: 'Atelier metiers du social',
		description: 'Immersion dune demi-journee pour explorer les metiers du social avec des professionnels du terrain.',
		image: agendaImage2,
		date: new Date('2024-06-20T13:30:00'),
		location: 'Pole Social Porrentruy',
		timeRange: '13h30 - 17h00',
		tags: ['Atelier', 'Rencontre'],
		to: '/agenda/atelier-metiers-social'
	},
	{
		title: 'Conference Art et soin',
		description: 'Regards croises entre artistes et soignants sur lapport des pratiques artistiques dans les institutions.',
		image: agendaImage3,
		date: new Date('2024-07-02T18:00:00'),
		location: 'Auditorium Charles-Naine',
		timeRange: '18h00 - 20h00',
		tags: ['Conference', 'Innovation'],
		to: '/agenda/conference-art-et-soin'
	}
]

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

const contactDetails = {
	title: 'Division Sante-social-arts',
	address: 'Faubourg des Capucins 2, 2800 Delemont',
	phoneLabel: '+41 (0) 32 420 79 10',
	phoneHref: 'tel:+41324207910',
	emailLabel: 'secretariat@divssa.ch',
	emailHref: 'mailto:secretariat@divssa.ch'
}

const socialLinks = [
	{ label: 'Facebook', icon: 'i-lucide-facebook', href: 'https://facebook.com' },
	{ label: 'X', icon: 'i-lucide-twitter', href: 'https://x.com' },
	{ label: 'Instagram', icon: 'i-lucide-instagram', href: 'https://instagram.com' },
	{ label: 'LinkedIn', icon: 'i-lucide-linkedin', href: 'https://linkedin.com' }
]

const formTopics = [
	'Information generale',
	'Orientation et admissions',
	'Relations entreprises',
	'Vie de campus'
]

const formState = ref({
	fullname: '',
	email: '',
	topic: '',
	message: '',
	phone: ''
})

const wantsCallback = ref(false)
const errors = ref<Record<string, string>>({})

const formStatus = ref<'idle' | 'submitting' | 'success'>('idle')

const resetForm = () => {
	formState.value = {
		fullname: '',
		email: '',
		topic: '',
		message: '',
		phone: ''
	}
	wantsCallback.value = false
	errors.value = {}
}

const validateForm = () => {
	const nextErrors: Record<string, string> = {}

	if (!formState.value.fullname.trim()) {
		nextErrors.fullname = 'Merci d indiquer votre nom complet.'
	}

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	if (!emailPattern.test(formState.value.email)) {
		nextErrors.email = 'Adresse email invalide.'
	}

	if (!formState.value.topic) {
		nextErrors.topic = 'Choisissez un sujet.'
	}

	if (formState.value.message.trim().length < 10) {
		nextErrors.message = 'Le message doit contenir au moins 10 caracteres.'
	}

	if (wantsCallback.value && formState.value.phone.trim().length < 6) {
		nextErrors.phone = 'Indiquez un numero valide pour etre rappelle.'
	}

	errors.value = nextErrors

	return Object.keys(nextErrors).length === 0
}

watch(wantsCallback, (value) => {
	if (!value) {
		formState.value.phone = ''
		delete errors.value.phone
	}
})

const handleSubmit = () => {
	if (!validateForm()) {
		return
	}

	formStatus.value = 'submitting'

	setTimeout(() => {
		formStatus.value = 'success'
		resetForm()

		setTimeout(() => {
			formStatus.value = 'idle'
		}, 4000)
	}, 900)
}
</script>

<template>
	<div>
		<UPageHero
			description="Le futur de la santé jurassienne"
			class="pt-px"
			orientation="horizontal"
			:links="links"
		>
			<template #title>
				<div class="leading-tight">
					<span class="block">Bienvenue à la division</span>
					<span class="block whitespace-nowrap text-primary">Santé Social Art</span>
				</div>
			</template>
			<img :src="heroImage" alt="Division image"
				class="hidden md:block object-cover rounded-lg shadow-md size-hero slideUp" />
		</UPageHero>

		<section class="my-16 flex-column flex-column gap-16 px-4 md:flex-column bg-primary-50 py-8 dark:bg-transparent">
			<h1 class="pb-5 text-5xl text-center mb-5">Agenda</h1>
			<div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-3">
				<AppAgendaCard
					v-for="item in agendaItems"
					:key="item.title"
					v-bind="item"
				/>
			</div>
		</section>

		<section class="my-16 px-4">
			<h1 class="pb-5 text-5xl text-center mb-5">Actualites</h1>
			<div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-3">
				<AppNewsCard
					v-for="item in actualites"
					:key="item.title"
					v-bind="item"
				/>
			</div>
		</section>

		<section class="my-16 px-4 bg-primary-50 dark:bg-transparent py-8 mb-0">
			<h1 class="pb-5 text-5xl text-center mb-5">Nous contacter</h1>
			<div class="mx-auto max-w-6xl rounded-4xl border-4 border-primary bg-white px-8 py-12 shadow-sm">
				<div class="grid gap-10 lg:grid-cols-2">
					<form class="space-y-5" @submit.prevent="handleSubmit" novalidate>
						<div>
							<label class="block">
								<span class="text-sm font-semibold text-slate-700">Nom et prenom *</span>
								<input
									v-model="formState.fullname"
									type="text"
									class="mt-2 w-full rounded-full border border-slate-200 px-5 py-3 text-slate-900 focus:border-primary focus:outline-none"
									placeholder="Votre nom complet"
									:aria-invalid="Boolean(errors.fullname)"
								/>
							</label>
							<p v-if="errors.fullname" class="mt-1 text-sm text-red-600">
								{{ errors.fullname }}
							</p>
						</div>
						<div>
							<label class="block">
								<span class="text-sm font-semibold text-slate-700">Adresse email *</span>
								<input
									v-model="formState.email"
									type="email"
									class="mt-2 w-full rounded-full border border-slate-200 px-5 py-3 text-slate-900 focus:border-primary focus:outline-none"
									placeholder="example@mail.com"
									:aria-invalid="Boolean(errors.email)"
								/>
							</label>
							<p v-if="errors.email" class="mt-1 text-sm text-red-600">
								{{ errors.email }}
							</p>
						</div>
						<div>
							<label class="block">
								<span class="text-sm font-semibold text-slate-700">Sujet *</span>
								<select
									v-model="formState.topic"
									class="mt-2 w-full rounded-full border border-slate-200 px-5 py-3 text-slate-900 focus:border-primary focus:outline-none"
									:aria-invalid="Boolean(errors.topic)"
								>
									<option disabled value="">Selectionner un sujet</option>
									<option v-for="topic in formTopics" :key="topic" :value="topic">
										{{ topic }}
									</option>
								</select>
							</label>
							<p v-if="errors.topic" class="mt-1 text-sm text-red-600">
								{{ errors.topic }}
							</p>
						</div>
						<div>
							<label class="flex items-center gap-2 text-sm font-semibold text-slate-700">
								<input type="checkbox" v-model="wantsCallback" class="rounded border-slate-300 text-primary focus:ring-primary" />
								Je souhaite etre rappelle
							</label>
							<div v-if="wantsCallback" class="mt-3">
								<input
									v-model="formState.phone"
									type="tel"
									class="w-full rounded-full border border-slate-200 px-5 py-3 text-slate-900 focus:border-primary focus:outline-none"
									placeholder="+41 00 000 00 00"
									:aria-invalid="Boolean(errors.phone)"
								/>
								<p v-if="errors.phone" class="mt-1 text-sm text-red-600">
									{{ errors.phone }}
								</p>
							</div>
						</div>
						<div>
							<label class="block">
								<span class="text-sm font-semibold text-slate-700">Message *</span>
								<textarea
									v-model="formState.message"
									rows="6"
									class="mt-2 w-full rounded-[32px] border border-slate-200 px-5 py-3 text-slate-900 focus:border-primary focus:outline-none"
									placeholder="Entrez votre message"
									:aria-invalid="Boolean(errors.message)"
								/>
							</label>
							<p v-if="errors.message" class="mt-1 text-sm text-red-600">
								{{ errors.message }}
							</p>
						</div>
						<button
							type="submit"
							class="w-full rounded-full bg-primary px-6 py-3 font-semibold text-slate-900 shadow-sm transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
							:disabled="formStatus === 'submitting'"
						>
							{{ formStatus === 'submitting' ? 'Envoi...' : 'Envoyer le message' }}
						</button>
						<p v-if="formStatus === 'success'" class="text-sm font-semibold text-green-600">
							Merci ! Nous avons bien recu votre message.
						</p>
					</form>
					<div class="rounded-[28px] bg-slate-50 px-8 py-10 lg:bg-transparent lg:px-0 lg:py-0">
						<h4 class="text-3xl font-bold text-primary">{{ contactDetails.title }}</h4>
						<ul class="mt-6 space-y-4 text-slate-700">
							<li class="flex items-start gap-3">
								<UIcon name="i-lucide-map-pin" class="mt-0.5 text-primary" aria-hidden="true" />
								<span>{{ contactDetails.address }}</span>
							</li>
							<li class="flex items-center gap-3">
								<UIcon name="i-lucide-phone" class="mt-0.5 text-primary" aria-hidden="true" />
								<a :href="contactDetails.phoneHref" class="font-semibold text-slate-900 hover:text-primary">
									{{ contactDetails.phoneLabel }}
								</a>
							</li>
							<li class="flex items-center gap-3">
								<UIcon name="i-lucide-mail" class="mt-0.5 text-primary" aria-hidden="true" />
								<a :href="contactDetails.emailHref" class="font-semibold text-slate-900 hover:text-primary">
									{{ contactDetails.emailLabel }}
								</a>
							</li>
						</ul>
						<AppSocialLinks class="mt-8" />
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
