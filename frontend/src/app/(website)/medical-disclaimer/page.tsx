import { getMedicalDisclaimer } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function MedicalDisclaimer() {
  const content = await getMedicalDisclaimer();

  // Robust professional fallback if Sanity is empty
  const defaultContent = [
    { _type: 'block', children: [{ _type: 'span', text: 'The information provided on the NeoFatbury website, including text, graphics, images, and other materials, is for educational and informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: '1. Not Medical Advice' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: '2. Results May Vary' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'Clinical results vary from person to person. Before and after photos are representations of individual results and do not guarantee similar outcomes for all patients.' }], style: 'normal' }
  ];

  return (
    <div className="section" style={{ padding: '4rem 0', paddingTop: '180px' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Medical Disclaimer</h1>
        <div style={contentStyle}>
          <PortableText value={(content && content.length > 0 && content[0].children[0].text.length > 50) ? content : defaultContent} />
        </div>
        <div style={{ marginTop: '4rem' }}>
          <Link href="/" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

const contentStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  lineHeight: '1.8',
  color: '#2c3e50',
};
