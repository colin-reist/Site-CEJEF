<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from '@nuxt/ui'

const links = ref<ButtonProps[]>([
  {
    label: 'NOS FORMATIONS',
    to: '/nos-formations',
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
</script>

<template>
  <div>
    <UPageHero class="py-12" orientation="horizontal">
      <div class="w-full max-w-4xl mx-auto text-center px-4">
        <h1 class="leading-tight">
          <span class="hero-line text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 delay-1">
            Bienvenue à la
          </span>

          <span class="hero-line text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 delay-2">
            Division
          </span>

          <span class="hero-line text-4xl sm:text-6xl md:text-7xl font-extrabold delay-3">
            Santé Social Art
          </span>

        </h1>
        <div class="accent-line mx-auto mt-6 w-24 h-1 round delay-4"></div>
        <div>
          <UButton class="hero-line mt-8 mx-2 px-6 py-3 text-lg delay-4" variant="solid" href="/nos-formations" icon="i-lucide-graduation-cap">
            NOS FORMATIONS
          </UButton>
          <UButton class="hero-line mt-8 mx-2 px-6 py-3 text-lg delay-4" variant="subtle" color="neutral" href="/contact" trailingIcon="i-lucide-arrow-right">
            Nous contacter
          </UButton>
        </div>
      </div>

      <!-- image du hero -->
      <img src="~/assets/img/DIVSSA.jpg" alt="Division image"
           class="hidden md:block object-cover rounded-lg shadow-md hero-image delay-3" />
    </UPageHero>
  </div>
</template>

<style scoped>
/* animation: slide up + fade in */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* common hero line style */
.hero-line {
  display: block;
  opacity: 0;
  transform: translateY(18px);
  animation-name: slideUp;
  animation-duration: 560ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* accent bar animation */
.accent-line {
  opacity: 0;
  transform: translateY(6px) scaleX(0.9);
  animation-name: slideUp;
  animation-duration: 520ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* image fade/slide */
.hero-image {
  opacity: 0;
  transform: translateY(12px) scale(0.99);
  animation-name: slideUp;
  animation-duration: 640ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* stagger delays */
.delay-1 { animation-delay: 0.08s; }
.delay-2 { animation-delay: 0.22s; }
.delay-3 { animation-delay: 0.36s; }
.delay-4 { animation-delay: 0.52s; }
</style>
