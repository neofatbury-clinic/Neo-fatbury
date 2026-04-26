// src/components/FooterWrapper.tsx (Server Component)
import { client } from '@/sanity/lib/client';
import Footer from './Footer';

export default async function FooterWrapper() {
  const query = `*[_type == "siteSettings"][0] {
    "logo": logo.asset->url,
    clinicLocations,
    footerMenu,
    footerServices,
    footerDisclaimer,
    footerCopyright,
    contact {
      phone,
      email,
      whatsapp
    },
    socialMedia {
      instagram,
      facebook,
      youtube
    }
  }`;
  const settings = await client.fetch(query, {}, { next: { revalidate: 0 } });
  
  return <Footer settings={settings} />;
}
