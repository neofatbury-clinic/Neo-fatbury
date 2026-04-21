import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const settings = await client.fetch(`*[_type == "siteSettings"][0]{ robotsConfig }`)
  const canIndex = settings?.robotsConfig?.allowIndexing !== false
  
  return {
    rules: {
      userAgent: '*',
      allow: canIndex ? '/' : undefined,
      disallow: canIndex ? ['/studio', '/api'] : '/',
    },
    sitemap: 'https://neofatbury.co.in/sitemap.xml',
  }
}
