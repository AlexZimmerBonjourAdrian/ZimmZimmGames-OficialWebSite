import { MetadataRoute } from 'next'
import { getExistingRoutes } from '../routes'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zimmzimmgames.com'

  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1
    }
  ]

  const routeEntries: MetadataRoute.Sitemap = getExistingRoutes()
    .map(r => ({
      url: `${baseUrl}${r.path}`,
      lastModified: now,
      changeFrequency: r.path === '/wata' ? 'weekly' : 'monthly',
      priority: r.path === '/' ? 1 : r.path.startsWith('/wata') ? 0.9 : 0.7
    }))

  // Deduplicate root which is already in staticEntries
  const deduped = routeEntries.filter(e => e.url !== baseUrl)

  return [...staticEntries, ...deduped]
}