import { createDirectus, rest, readItem, readItems } from '@directus/sdk'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.directus?.url || 'http://localhost:8055'

  console.log('[Directus plugin] baseUrl =', baseUrl)

  const directus = createDirectus(baseUrl).with(rest())

  nuxtApp.provide('directus', directus)
  nuxtApp.provide('readItem', readItem)
  nuxtApp.provide('readItems', readItems)
})
