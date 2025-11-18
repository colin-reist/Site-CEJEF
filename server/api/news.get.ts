export default defineEventHandler(async () => {
  const { directusUrl, directusToken } = useRuntimeConfig()

  if (!directusUrl || !directusToken) {
    console.warn('[news.get] Missing Directus env variables, returning empty list')
    return []
  }

  const data = await $fetch(`${directusUrl}/items/news`, {
    headers: { Authorization: `Bearer ${directusToken}` },
    params: {
      filter: { status: { _eq: 'published' } },
      fields: ['title', 'slug', 'description', 'image', 'published_at'],
      sort: '-published_at'
    }
  })

  return data.data
})
