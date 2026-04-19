import type { Metadata } from "next";
import "./globals.css";
import { client } from "@/sanity/lib/client";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch(
    `*[_type == "siteSettings"][0]{
      "faviconUrl": favicon.asset->url,
      defaultSeo { title, description }
    }`,
    {},
    { next: { revalidate: 60 } }
  );

  const faviconUrl: string | undefined = settings?.faviconUrl;

  return {
    title: settings?.defaultSeo?.title || "NeoFatbury – Best Skin, Hair & Slimming Clinic in Hyderabad",
    description: settings?.defaultSeo?.description || "NeoFatbury is Hyderabad's top clinical destination for US-FDA approved Skin Brightening, Laser Hair Reduction, Hair Transplantation, and CoolSculpting.",
    icons: faviconUrl
      ? {
          icon: faviconUrl,
          shortcut: faviconUrl,
          apple: faviconUrl,
        }
      : {
          // Fall back to the static file already in /app
          icon: "/favicon.ico",
          shortcut: "/favicon.ico",
          apple: "/favicon.png",
        },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
