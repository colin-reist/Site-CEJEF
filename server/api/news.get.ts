export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const directusUrl = config.public.directus?.url || process.env.NUXT_PUBLIC_DIRECTUS_URL
  const directusToken = config.directus?.token || process.env.DIRECTUS_TOKEN

  if (import.meta.dev) {
    console.info(
      '[news.get] directusUrl:',
      directusUrl,
      '| token length:',
      directusToken ? String(directusToken).length : 'missing'
    )
  }

  if (!directusUrl || !directusToken) {
    console.warn('[news.get] Missing Directus env variables, returning empty list')
    return []
  }


  const data = await $fetch(`${directusUrl}/items/news`, {
    headers: { Authorization: `Bearer ${directusToken}` }
  })
  console.log('Fetched news data:', data)
  return data.data
})
