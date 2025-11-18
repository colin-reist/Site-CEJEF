<template>
    <footer
        class="mt-16 border-t-4 border-primary bg-slate-50/90 text-slate-800 backdrop-blur dark:bg-slate-900/60 dark:text-slate-100">
        <div class="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:py-12">
            <div class="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div class="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                        <p
                            class="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
                            Navigation</p>
                        <nav class="flex flex-col gap-2 text-sm text-slate-700 dark:text-slate-200">
                            <NuxtLink to="/" class="inline-flex items-center gap-2 hover:text-primary">Accueil
                            </NuxtLink>
                            <NuxtLink to="/campus" class="inline-flex items-center gap-2 hover:text-primary">Campus
                            </NuxtLink>
                            <NuxtLink to="/actualites" class="inline-flex items-center gap-2 hover:text-primary">
                                Actualités</NuxtLink>
                            <NuxtLink to="/agenda" class="inline-flex items-center gap-2 hover:text-primary">Agenda
                            </NuxtLink>
                            <NuxtLink to="/contact" class="inline-flex items-center gap-2 hover:text-primary">Contact
                            </NuxtLink>
                            <NuxtLink to="/formations" class="inline-flex items-center gap-2 hover:text-primary">Nos
                                formations</NuxtLink>
                        </nav>
                    </div>

                    <div class="space-y-3 text-sm text-slate-700 dark:text-slate-200">
                        <p class="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
                            Contact</p>
                        <p class="flex items-start gap-2">
                            <UIcon name="i-lucide-map-pin" class="mt-0.5 text-primary" aria-hidden="true" />
                            Faubourg des Capucins 2<br>2800 Delémont
                        </p>
                        <p class="flex items-center gap-2">
                            <UIcon name="i-lucide-phone" class="text-primary" aria-hidden="true" />
                            <a href="tel:+41324207910" class="hover:text-primary">+41 (0) 32 420 79 10</a>
                        </p>
                        <p class="flex items-center gap-2">
                            <UIcon name="i-lucide-mail" class="text-primary" aria-hidden="true" />
                            <a href="mailto:secretariat@divssa.ch" class="hover:text-primary">secretariat@divssa.ch</a>
                        </p>
                        <div class="pt-2">
                            <AppSocialLinks />
                        </div>
                    </div>
                </div>
                <div class="flex flex-1 gap-4 md:gap-6 self-center md:items-end">
                    <img src="../assets/img/ISO.webp" alt="Certification ISO 9001"
                        class="h-auto" />
                    <div class="">
                        <img src="../assets/img/CEJEF_JU.png" alt="CEJEF JU" class="h-auto" />
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2 border-t border-slate-200/70 pt-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
                <span>© {{ new Date().getFullYear() }} CEJEF — Tous droits réservés</span>
                <span class="inline-flex items-center gap-2">
                    <UIcon name="i-lucide-shield-check" class="text-primary" aria-hidden="true" />
                    Certifié ISO 9001
                </span>
            </div>
        </div>
    </footer>
</template>
