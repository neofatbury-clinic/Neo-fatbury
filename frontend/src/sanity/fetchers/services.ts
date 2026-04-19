// src/sanity/fetchers/services.ts
// Fetches all service page data from Sanity CMS with hardcoded fallbacks
import { client, isSanityConfigured } from '@/sanity/client';
import { getServiceBySlug } from '@/sanity/queries';

export async function getServicePageData(slug: string): Promise<Record<string, unknown>> {
  if (!isSanityConfigured) return {};
  try {
    const data = await getServiceBySlug(slug);
    return data ?? {};
  } catch {
    return {};
  }
}
