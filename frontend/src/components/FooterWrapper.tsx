// src/components/FooterWrapper.tsx (Server Component)
import { client } from '@/sanity/lib/client';
import Footer from './Footer';

export default async function FooterWrapper() {
  const query = `*[_type == "siteSettings"][0] {
    branches,
    "logo": logo.asset->url
  }`;
  const settings = await client.fetch(query);
  
  return <Footer settings={settings} />;
}
