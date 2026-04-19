import type { Metadata } from "next";
import Header from "@/components/HeaderWrapper";
import Footer from "@/components/FooterWrapper";
import WhatsAppWidget from "@/components/WhatsAppWidget";

import { client } from "@/sanity/lib/client";

export async function generateMetadata() {
  const query = `*[_type == "siteSettings"][0] {
    defaultSeo {
      title,
      description
    }
  }`;
  const settings = await client.fetch(query);
  const seo = settings?.defaultSeo;

  return {
    title: seo?.title || "Best Skin, Hair & Slimming Clinic in Hyderabad | NeoFatbury",
    description: seo?.description || "NeoFatbury is Hyderabad's top clinical destination for US-FDA approved Skin Brightening, Laser Hair Reduction, Hair Transplantation, and CoolSculpting.",
  };
}

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', paddingTop: 'var(--header-height)' }}>
        {children}
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
