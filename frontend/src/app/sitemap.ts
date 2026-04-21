import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://neofatbury.co.in'

  // Fetch all services/treatments
  const services = await client.fetch(`*[_type == "service"]{ "slug": slug.current, "category": category->slug.current }`)
  
  // Static routes
  const staticRoutes = [
    '',
    '/about-us',
    '/contact-us',
    '/results',
    '/our-doctors',
    '/skin',
    '/hair',
    '/slimming',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic treatment routes
  const treatmentRoutes = services
    .filter((s: any) => s.slug && s.category)
    .map((s: any) => ({
      url: `${baseUrl}/${s.category}/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  return [...staticRoutes, ...treatmentRoutes]
}
