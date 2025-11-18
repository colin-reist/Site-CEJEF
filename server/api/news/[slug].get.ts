export default defineEventHandler(async (event) => {
  const { slug } = getRouterParams(event)
  const { directusUrl, directusToken } = useRuntimeConfig()

  if (!directusUrl || !directusToken) {
    throw createError({ statusCode: 500, statusMessage: 'Directus env not configured' })
  }

  const res = await $fetch(`${directusUrl}/items/news`, {
    headers: { Authorization: `Bearer ${directusToken}` },
    params: {
      filter: { slug: { _eq: slug } },
      fields: ['title', 'slug', 'description', 'body', 'image', 'published_at']
    }
  })
  if (!res.data?.length) {
    throw createError({ statusCode: 404, statusMessage: 'News not found' })
  }
  return res.data[0]
})
