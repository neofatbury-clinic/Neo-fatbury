// src/components/WhatsAppWidget.tsx
// Server-side wrapper fetches the number; client component renders the button.
import { client } from '@/sanity/lib/client';
import WhatsAppButton from './WhatsAppButton';

export default async function WhatsAppWidget() {
  const data = await client.fetch(
    `*[_type == "siteSettings"][0]{ "whatsapp": contact.whatsapp }`,
    {},
    { next: { revalidate: 0 } }
  );
  
  let phoneNumber = data?.whatsapp || '917729955577';
  // If it's a 10-digit number, prepend 91 (India)
  if (phoneNumber.length === 10 && /^\d+$/.test(phoneNumber)) {
    phoneNumber = `91${phoneNumber}`;
  }

  return <WhatsAppButton phoneNumber={phoneNumber} />;
}
