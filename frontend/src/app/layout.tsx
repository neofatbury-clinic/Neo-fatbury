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
    "gtmId": schema.googleTagManagerId,
    typography
  }`);
  
  const gtmId = settings?.gtmId || "GTM-P927TMNJ";
  const { headingFont = 'Montserrat', bodyFont = 'Poppins', primary = '#00acb1', accent = '#e8a317', background = '#ffffff', surface = '#f0f8f8', text = '#1a2b3c' } = settings?.typography || {};

  // Build Google Fonts URL dynamically
  const fontFamilies = Array.from(new Set([headingFont, bodyFont])).map(f => `${f.replace(/ /g, '+')}:wght@300;400;500;600;700;800`).join('&family=');
  const googleFontsUrl = `https://fonts.googleapis.com/css2?family=${fontFamilies}&display=swap`;

  return (
    <html lang="en">
      <head>
        {/* Dynamic Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={googleFontsUrl} rel="stylesheet" />

        {/* Dynamic CSS Variables */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --font-heading: '${headingFont}', sans-serif;
            --font-body: '${bodyFont}', sans-serif;
            --color-primary: ${primary};
            --color-cta: ${accent};
            --color-bg: ${background};
            --color-surface: ${surface};
            --color-text: ${text};
          }
          body {
            font-family: var(--font-body);
          }
          h1, h2, h3, h4, h5, h6, .section-title {
            font-family: var(--font-heading);
          }
        `}} />

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <noscript>
          <iframe 
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
