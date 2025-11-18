<script setup>
const links = [
  { label: 'Facebook', href: 'https://www.facebook.com/divssa/', icon: 'i-lucide-facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/divssa_ecg_ems2/', icon: 'i-lucide-instagram' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/cejef/', icon: 'i-lucide-linkedin' },
  { label: 'Twitter', href: 'https://twitter.com/cejef_officiel', icon: 'i-lucide-twitter' }
]
</script>

<template>
  <div class="flex gap-3 text-2xl text-slate-900 dark:text-slate-100">
    <a
      v-for="link in links"
      :key="link.href"
      :href="link.href"
      class="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-300/80 bg-white text-slate-800 outline-none transition duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary-50 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:bg-slate-900/60 dark:border-slate-600 dark:text-slate-100 dark:hover:border-primary dark:hover:bg-primary-900/30 dark:hover:text-primary"
      target="_blank"
      rel="noopener"
      :aria-label="link.label"
    >
      <UIcon :name="link.icon" aria-hidden="true" class="transition duration-200 group-hover:scale-110" />
      <span class="sr-only">{{ link.label }}</span>
    </a>
  </div>
</template>
