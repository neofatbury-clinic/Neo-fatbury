// src/components/WhatsAppWidget.tsx
// Server-side wrapper fetches the number; client component renders the button.
import { client } from '@/sanity/lib/client';
import WhatsAppButton from './WhatsAppButton';

export default async function WhatsAppWidget() {
  const data = await client.fetch(
    `*[_type == "siteSettings"][0]{ "whatsapp": contact.whatsapp }`,
    {},
    { next: { revalidate: 60 } }
  );
  const phoneNumber = data?.whatsapp || '919700641000';

  return <WhatsAppButton phoneNumber={phoneNumber} />;
}
