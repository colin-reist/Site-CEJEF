export default defineEventHandler(async (event) => {
  // get the id param from the route (file is [id].get.ts)
  const { id } = getRouterParams(event) // or: const id = event.context.params?.id

  const config = useRuntimeConfig()
  const directusUrl = config.public.directus?.url || process.env.NUXT_PUBLIC_DIRECTUS_URL
  const directusToken = config.directus?.token || process.env.DIRECTUS_TOKEN

  if (!directusUrl || !directusToken) {
    throw createError({ statusCode: 500, statusMessage: 'Directus env not configured' })
  }

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Missing id parameter' })
  }

  const res = await $fetch(`${directusUrl}/items/news/${id}`, {
    headers: { Authorization: `Bearer ${directusToken}` }
  })

  // Directus returns a single object in data for item-by-id requests, so adjust check
  const item = res?.data ?? res
  if (!item) {
    throw createError({ statusCode: 404, statusMessage: 'News not found' })
  }

  return item
})
