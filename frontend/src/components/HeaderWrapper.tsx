// src/components/HeaderWrapper.tsx (Server Component)
import { client } from '@/sanity/lib/client';
import Header from './Header';

export default async function HeaderWrapper() {
  const query = `*[_type == "siteSettings"][0] {
    branches,
    "logo": logo.asset->url
  }`;
  const settings = await client.fetch(query);
  
  return <Header settings={settings} />;
}
