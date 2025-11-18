import type { ContentItem } from '../entities/ContentItem'

export const buildAssetUrl = (assetId: string | undefined, base?: string, fallback?: string) => {
  if (assetId && base) {
    return `${base.replace(/\/$/, '')}/assets/${assetId}`
  }
  return fallback
}

export const mapNewsCard = (item: ContentItem, base?: string, fallback?: string) => ({
  title: item.title,
  description: item.description,
  image: buildAssetUrl(item.image, base, fallback),
  to: `/actualite/${item.id}`
})

export const mapNewsDetail = (item: ContentItem, base?: string, fallback?: string) => ({
  ...item,
  image: buildAssetUrl(item.image, base, fallback)
})
