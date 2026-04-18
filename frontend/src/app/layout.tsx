import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata: Metadata = {
  title: "Best Skin, Hair & Slimming Clinic in Hyderabad | NeoFatbury",
  description: "NeoFatbury is Hyderabad's top clinical destination for US-FDA approved Skin Brightening, Laser Hair Reduction, Hair Transplantation, and CoolSculpting. Located in Kukatpally & Himayatnagar. Book your free clinical analysis today.",
  keywords: "Skin Clinic Hyderabad, Hair Clinic Hyderabad, Best Dermatologist Kukatpally, Slimming Clinic Himayatnagar, Laser Hair Reduction Hyderabad, CoolSculpting Hyderabad Price",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ minHeight: '80vh', paddingTop: 'var(--header-height)' }}>
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
