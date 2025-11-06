<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <UContainer>
      <header class="py-8">
        <nav class="flex items-center justify-between">
          <NuxtLink to="/" class="text-2xl font-bold text-primary">
            CEJEF
          </NuxtLink>
          <div class="flex gap-6">
            <NuxtLink to="/" class="hover:text-primary transition">
              Accueil
            </NuxtLink>
            <NuxtLink to="/divisions" class="hover:text-primary transition">
              Divisions
            </NuxtLink>
            <NuxtLink to="/contact" class="hover:text-primary transition">
              Contact
            </NuxtLink>
          </div>
        </nav>
      </header>

      <main class="py-8">
        <slot />
      </main>

      <footer class="py-8 mt-16 border-t border-gray-200 dark:border-gray-800">
        <div class="text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {{ new Date().getFullYear() }} CEJEF - Centre d'enseignement professionnel</p>
          <p class="mt-2 text-sm">Toutes les divisions sous un même toit</p>
        </div>
      </footer>
    </UContainer>
  </div>
</template>
