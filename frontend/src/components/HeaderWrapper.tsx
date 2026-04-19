// src/components/HeaderWrapper.tsx (Server Component)
import { client } from '@/sanity/lib/client';
import Header from './Header';

export default async function HeaderWrapper() {
  const query = `*[_type == "siteSettings"][0] {
    clinicName,
    tagline,
    "logo": logo.asset->url,
    headerAnnouncementText,
    headerMenu[] {
      label,
      url,
      dropdownItems[] {
        label,
        url
      }
    },
    contact {
      phone,
      whatsapp,
      email
    }
  }`;
  const settings = await client.fetch(query, {}, { next: { revalidate: 60 } });
  
  return <Header settings={settings} />;
}
