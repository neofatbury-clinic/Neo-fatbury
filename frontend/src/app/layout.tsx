import type { Metadata } from "next";
import "./globals.css";
import { client } from "@/sanity/lib/client";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch(
    `*[_type == "siteSettings"][0]{
      "faviconUrl": favicon.asset->url,
      defaultSeo { title, description },
      schema { googleTagManagerId, googleVerification }
    }`,
    {},
    { next: { revalidate: 60 } }
  );

  const faviconUrl: string | undefined = settings?.faviconUrl;

  return {
    title: settings?.defaultSeo?.title || "NeoFatbury – Best Skin, Hair & Slimming Clinic in Hyderabad",
    description: settings?.defaultSeo?.description || "NeoFatbury is Hyderabad's top clinical destination for US-FDA approved Skin Brightening, Laser Hair Reduction, Hair Transplantation, and CoolSculpting.",
    verification: {
      google: settings?.schema?.googleVerification || "",
    },
    icons: faviconUrl
      ? {
          icon: faviconUrl,
          shortcut: faviconUrl,
          apple: faviconUrl,
        }
      : {
          icon: "/icon.png",
          shortcut: "/icon.png",
          apple: "/icon.png",
        },
  };
}

import Script from "next/script";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await client.fetch(`*[_type == "siteSettings"][0]{ 
    "gtmId": schema.googleTagManagerId 
  }`);
  const gtmId = settings?.gtmId || "GTM-P927TMNJ";

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
