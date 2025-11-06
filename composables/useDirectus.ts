import { createDirectus, rest, readItems, readItem } from '@directus/sdk'

export const useDirectus = () => {
  const config = useRuntimeConfig()
  
  const directus = createDirectus(config.public.directusUrl).with(rest())

  return {
    directus,
    readItems,
    readItem
  }
}
